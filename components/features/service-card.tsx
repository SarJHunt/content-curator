import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

export default function ServiceCard({ icon, title, description, gradient }: ServiceCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden border border-border/50 h-full">
      <CardHeader className="pb-2">
        <div
          className={`rounded-lg p-3 mb-3 bg-gradient-to-r ${gradient} w-fit transition-transform duration-300 group-hover:scale-110`}
        >
          <div className="text-primary">{icon}</div>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}