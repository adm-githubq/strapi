import type { Schema, Attribute } from '@strapi/strapi';

export interface PageComponentsBulletPoint extends Schema.Component {
  collectionName: 'components_page_components_bullet_points';
  info: {
    displayName: 'BulletPoint';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    content: Attribute.String;
  };
}

export interface PageComponentsExpandable extends Schema.Component {
  collectionName: 'components_page_components_expandables';
  info: {
    displayName: 'Expandable';
    icon: 'arrowDown';
    description: '';
  };
  attributes: {
    ExpandableTitle: Attribute.String;
    ExpandableContent: Attribute.Text;
  };
}

export interface PageComponentsResourcesIcons extends Schema.Component {
  collectionName: 'components_page_components_resources_icons';
  info: {
    displayName: 'ToolsIcons';
    icon: 'handHeart';
    description: '';
  };
  attributes: {
    Icon: Attribute.Media;
    IconName: Attribute.String;
  };
}

export interface PageComponentsTestimony extends Schema.Component {
  collectionName: 'components_page_components_testimonies';
  info: {
    displayName: 'Testimonial';
    icon: 'quote';
    description: '';
  };
  attributes: {
    TestimonialName: Attribute.String;
    TestimonialLocation: Attribute.String;
    TestimonialContents: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface PageComponentsTileWithBubbledWords extends Schema.Component {
  collectionName: 'components_page_components_tile_with_bubbled_words';
  info: {
    displayName: 'BubbledWords';
    icon: 'discuss';
    description: '';
  };
  attributes: {
    BubbleContent: Attribute.String;
  };
}

export interface PageComponentsTileWithIcon extends Schema.Component {
  collectionName: 'components_page_components_tile_with_icons';
  info: {
    displayName: 'TileWithIcon';
    icon: 'apps';
    description: '';
  };
  attributes: {
    TileDescription: Attribute.String;
    TileImage: Attribute.Media;
    ServiceAddress: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'page-components.bullet-point': PageComponentsBulletPoint;
      'page-components.expandable': PageComponentsExpandable;
      'page-components.resources-icons': PageComponentsResourcesIcons;
      'page-components.testimony': PageComponentsTestimony;
      'page-components.tile-with-bubbled-words': PageComponentsTileWithBubbledWords;
      'page-components.tile-with-icon': PageComponentsTileWithIcon;
    }
  }
}
