import { fetchAssignmentsForRaidTemplate } from '@/lib/actions';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // defaults to auto
export async function GET(request: Request, { params: { id } }: { params: { id: string[]; }; }) {
    try {
        const raid_template_id = id[0];
        const assignments = await fetchAssignmentsForRaidTemplate(raid_template_id);
        return NextResponse.json(assignments);
    } catch (error) {
        return NextResponse.json('Not Found', { status: 404 });
    }
}