import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import { Link } from "wouter";

const BackButton = () => {
  return (
    <div className="container mx-auto px-4 py-4">
      <Link to="/">
        <Button 
          variant="outline" 
          className="flex items-center gap-2 hover:bg-primary/10 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default BackButton;