export type TSchemaItem = {
  name: string;
  defindex: number;
  image_url: string;
  image_url_large: string;
  craft_material_type: string;
  item_slot: string;
  capabilities: {
    paintable: boolean;
    nameable: boolean;
    can_gift_wrap: boolean;
    can_craft_mark: boolean;
    can_be_restored: boolean;
    strange_parts: boolean;
    can_card_upgrade: boolean;
    can_strangify: boolean;
    can_killstreakify: boolean;
    can_consume: boolean;
  };
  used_by_classes: string[];
};
