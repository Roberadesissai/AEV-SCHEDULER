import React from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

import dynamicIconImports from 'lucide-react/dynamicIconImports';

interface IconProps {
    name: keyof typeof dynamicIconImports;
    size?: number;
    color?: string;
}

const Icon = ({ name, size = 24, color = 'currentColor' }: IconProps) => {
    const LucideIcon = dynamic(dynamicIconImports[name]);
    return <LucideIcon size={size} color={color} />;
};

const Calendar: React.FC = () => {
    return (
        <div className="calendar-container">
            <div className="calendar-header">
                <Button variant="ghost">
                    <Icon name="chevron-left" />
                </Button>
                <h2>July 2024</h2>
                <Button variant="ghost">
                    <Icon name="chevron-right" />
                </Button>
            </div>
            <div className="calendar-grid">
                {/* Render days and events */}
                <Card>
                    <div className="day">1</div>
                    <div className="event">Holiday</div>
                </Card>
                {/* Repeat for other days */}
            </div>
        </div>
    );
};

export default Calendar;