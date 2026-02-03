import { NextResponse } from 'next/server';
import Airtable from 'airtable';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, contact, service, message } = body;

        // Basic validation
        if (!name || !contact || !service || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const apiKey = process.env.AIRTABLE_API_KEY;
        const baseId = process.env.AIRTABLE_BASE_ID;
        const tableName = process.env.AIRTABLE_TABLE_NAME || 'Enquiries';

        if (!apiKey || !baseId) {
            console.error('Airtable credentials missing');
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            );
        }

        const base = new Airtable({ apiKey }).base(baseId);

        await base(tableName).create([
            {
                fields: {
                    Name: name,
                    Contact: contact,
                    Service: service,
                    Message: message,
                    Status: 'New', // Optional: Default status if your table has this field
                    Date: new Date().toISOString()
                }
            }
        ], { typecast: true });

        return NextResponse.json(
            { message: 'Enquiry submitted successfully' },
            { status: 200 }
        );
    } catch (error: any) {
        console.error('ALL AIRTABLE ERROR DETAILS:', error);
        console.error('Error message:', error.message);
        console.error('Error status:', error.statusCode);
        return NextResponse.json(
            { error: 'Failed to submit enquiry' },
            { status: 500 }
        );
    }
}
