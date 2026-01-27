// app/api/connection/google-docs/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Composio } from '@composio/core';
import { VercelProvider } from "@composio/vercel";

const composio = new Composio({
    apiKey: process.env.COMPOSIO_API_KEY,
    provider: new VercelProvider(),
});

export async function POST(req: NextRequest) {
    try {
        const { action, platform, connectionId, user_id } = await req.json();
        
        // Always use provided user_id or generate one
        const userId = user_id || Math.floor(1000000000 + Math.random() * 9000000000).toString();

        console.log('Connection request:', { action, platform, connectionId, userId });
        
        if (action === 'initiate') {
            try {
                const connectionRequest = await composio.connectedAccounts.initiate(
                    userId,
                    'ac_a8hO-XC_nUXV'
                );

                console.log(
                    `🔗 Please visit the following URL to authorize the user: ${connectionRequest.redirectUrl}`
                );

                return NextResponse.json({
                    success: true,
                    message: "Connection initiated successfully",
                    redirectUrl: connectionRequest.redirectUrl,
                    connectionId: connectionRequest.id,
                    data: {
                        action,
                        platform,
                        status: "initiated"
                    },
                    userId,
                });
            } catch (error: any) {
                if (error.code === 'TS-SDK::MULTIPLE_CONNECTED_ACCOUNTS') {
                    return NextResponse.json({
                        success: true,
                        alreadyConnected: true,
                        message: "User already has connected accounts."
                    });
                }
                throw error;
            }
        }

        if (action === 'check_status') {
            if (!connectionId) {
                return NextResponse.json(
                    { 
                        success: false,
                        error: 'Connection ID is required for status check'
                    },
                    { status: 400 }
                );
            }

            try {
                const connection = await composio.connectedAccounts.get(connectionId);
                
                return NextResponse.json({
                    success: true,
                    status: connection.status,
                    isActive: connection.status === 'ACTIVE',
                    connection: connection
                });
            } catch (error) {
                console.error('Failed to get connection status:', error);
                return NextResponse.json({
                    success: false,
                    error: 'Failed to get connection status',
                    details: error instanceof Error ? error.message : 'Unknown error'
                });
            }
        }

        return NextResponse.json(
            { 
                success: false,
                error: 'Invalid action. Use "initiate" or "check_status"'
            },
            { status: 400 }
        );

    } catch (error) {
        console.error('Connection error:', error);
        return NextResponse.json(
            { 
                success: false,
                error: 'Failed to process connection request',
                details: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        );
    }
}

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const connectionId = searchParams.get('connectionId');

    if (connectionId) {
        try {
            const connection = await composio.connectedAccounts.get(connectionId);
            
            return NextResponse.json({
                success: true,
                status: connection.status,
                isActive: connection.status === 'ACTIVE',
                connection: connection
            });
        } catch (error) {
            console.error('Failed to get connection status:', error);
            return NextResponse.json({
                success: false,
                error: 'Failed to get connection status',
                details: error instanceof Error ? error.message : 'Unknown error'
            });
        }
    }

    const code = searchParams.get('code');
    const state = searchParams.get('state');

    console.log('OAuth callback:', { code: !!code, state });

    if (code && state) {
        return NextResponse.redirect(new URL('/?auth=success', req.url));
    }

    return NextResponse.json({
        success: true,
        message: "OAuth callback received",
        data: {
            code: !!code,
            state,
            status: code ? "success" : "pending"
        }
    });
}
