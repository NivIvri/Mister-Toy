import React from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
export function AccordionFAQs() {
    return (
        <Accordion allowZeroExpanded>
            <h1 style={{ textAlign: 'center' }}>FAQs</h1>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        I have a question about an order that I placed.   </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        All products referenced on our site are sold by macys.com. Please reference Macy’s help section for more information about your order.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        How can I be notified when the store comes to my city?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Sign-up for our newsletter for the latest store and product news. Follow Toys"R"Us® on Facebook, Instagram, and Twitter for updates and announcements on when we will be launching in a city near you.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        When are Babies store opening?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        The new stores do not feature baby products. Plans to bring back Babies the United States are underway, and Tru Kids will provide additional detail as it becomes available.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    );
}

