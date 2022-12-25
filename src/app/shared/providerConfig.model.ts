import { Collaborator } from "./collaborator.model";
import { LayoutConfig } from "./layoutConfig.model";

export  class ProviderConfig{
name: string | undefined;
description: string | undefined;
logoSmall: string | undefined;
logoLarge: string | undefined;
layoutWiseConfig: LayoutConfig = new LayoutConfig();
collaborator: Collaborator  = new Collaborator()


}


   
