import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Props {
  title: string;
  context: string;
}

export function SelectList({ title, context }: Props) {
  return (
    <Accordion className="flex flex-row" type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>{title}</AccordionTrigger>
        <AccordionContent>{context}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
