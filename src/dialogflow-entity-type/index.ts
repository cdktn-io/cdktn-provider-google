/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dialogflow_entity_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DialogflowEntityTypeConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dialogflow_entity_type#deletion_policy DialogflowEntityType#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * The name of this entity type to be displayed on the console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dialogflow_entity_type#display_name DialogflowEntityType#display_name}
  */
  readonly displayName: string;
  /**
  * Enables fuzzy entity extraction during classification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dialogflow_entity_type#enable_fuzzy_extraction DialogflowEntityType#enable_fuzzy_extraction}
  */
  readonly enableFuzzyExtraction?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dialogflow_entity_type#id DialogflowEntityType#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Indicates the kind of entity type.
  * * KIND_MAP: Map entity types allow mapping of a group of synonyms to a reference value.
  * * KIND_LIST: List entity types contain a set of entries that do not map to reference values. However, list entity
  * types can contain references to other entity types (with or without aliases).
  * * KIND_REGEXP: Regexp entity types allow to specify regular expressions in entries values. Possible values: ["KIND_MAP", "KIND_LIST", "KIND_REGEXP"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dialogflow_entity_type#kind DialogflowEntityType#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dialogflow_entity_type#project DialogflowEntityType#project}
  */
  readonly project?: string;
  /**
  * entities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dialogflow_entity_type#entities DialogflowEntityType#entities}
  */
  readonly entities?: DialogflowEntityTypeEntities[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dialogflow_entity_type#timeouts DialogflowEntityType#timeouts}
  */
  readonly timeouts?: DialogflowEntityTypeTimeouts;
}
export interface DialogflowEntityTypeEntities {
  /**
  * A collection of value synonyms. For example, if the entity type is vegetable, and value is scallions, a synonym
  * could be green onions.
  * For KIND_LIST entity types:
  * * This collection must contain exactly one synonym equal to value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dialogflow_entity_type#synonyms DialogflowEntityType#synonyms}
  */
  readonly synonyms: string[];
  /**
  * The primary value associated with this entity entry. For example, if the entity type is vegetable, the value
  * could be scallions.
  * For KIND_MAP entity types:
  * * A reference value to be used in place of synonyms.
  * For KIND_LIST entity types:
  * * A string that can contain references to other entity types (with or without aliases).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dialogflow_entity_type#value DialogflowEntityType#value}
  */
  readonly value: string;
}

export function dialogflowEntityTypeEntitiesToTerraform(struct?: DialogflowEntityTypeEntities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    synonyms: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.synonyms),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function dialogflowEntityTypeEntitiesToHclTerraform(struct?: DialogflowEntityTypeEntities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    synonyms: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.synonyms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowEntityTypeEntitiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DialogflowEntityTypeEntities | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._synonyms !== undefined) {
      hasAnyValues = true;
      internalValueResult.synonyms = this._synonyms;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowEntityTypeEntities | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._synonyms = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._synonyms = value.synonyms;
      this._value = value.value;
    }
  }

  // synonyms - computed: false, optional: false, required: true
  private _synonyms?: string[]; 
  public get synonyms() {
    return this.getListAttribute('synonyms');
  }
  public set synonyms(value: string[]) {
    this._synonyms = value;
  }
  // Temporarily expose input value. Use with caution.
  public get synonymsInput() {
    return this._synonyms;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DialogflowEntityTypeEntitiesList extends cdktn.ComplexList {
  public internalValue? : DialogflowEntityTypeEntities[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DialogflowEntityTypeEntitiesOutputReference {
    return new DialogflowEntityTypeEntitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowEntityTypeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dialogflow_entity_type#create DialogflowEntityType#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dialogflow_entity_type#delete DialogflowEntityType#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dialogflow_entity_type#update DialogflowEntityType#update}
  */
  readonly update?: string;
}

export function dialogflowEntityTypeTimeoutsToTerraform(struct?: DialogflowEntityTypeTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function dialogflowEntityTypeTimeoutsToHclTerraform(struct?: DialogflowEntityTypeTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktn.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktn.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktn.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowEntityTypeTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DialogflowEntityTypeTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowEntityTypeTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dialogflow_entity_type google_dialogflow_entity_type}
*/
export class DialogflowEntityType extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dialogflow_entity_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DialogflowEntityType resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DialogflowEntityType to import
  * @param importFromId The id of the existing DialogflowEntityType that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dialogflow_entity_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DialogflowEntityType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_dialogflow_entity_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dialogflow_entity_type google_dialogflow_entity_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DialogflowEntityTypeConfig
  */
  public constructor(scope: Construct, id: string, config: DialogflowEntityTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dialogflow_entity_type',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.34.0',
        providerVersionConstraint: '~> 7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deletionPolicy = config.deletionPolicy;
    this._displayName = config.displayName;
    this._enableFuzzyExtraction = config.enableFuzzyExtraction;
    this._id = config.id;
    this._kind = config.kind;
    this._project = config.project;
    this._entities.internalValue = config.entities;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deletion_policy - computed: true, optional: true, required: false
  private _deletionPolicy?: string; 
  public get deletionPolicy() {
    return this.getStringAttribute('deletion_policy');
  }
  public set deletionPolicy(value: string) {
    this._deletionPolicy = value;
  }
  public resetDeletionPolicy() {
    this._deletionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionPolicyInput() {
    return this._deletionPolicy;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // enable_fuzzy_extraction - computed: false, optional: true, required: false
  private _enableFuzzyExtraction?: boolean | cdktn.IResolvable; 
  public get enableFuzzyExtraction() {
    return this.getBooleanAttribute('enable_fuzzy_extraction');
  }
  public set enableFuzzyExtraction(value: boolean | cdktn.IResolvable) {
    this._enableFuzzyExtraction = value;
  }
  public resetEnableFuzzyExtraction() {
    this._enableFuzzyExtraction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFuzzyExtractionInput() {
    return this._enableFuzzyExtraction;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // entities - computed: false, optional: true, required: false
  private _entities = new DialogflowEntityTypeEntitiesList(this, "entities", false);
  public get entities() {
    return this._entities;
  }
  public putEntities(value: DialogflowEntityTypeEntities[] | cdktn.IResolvable) {
    this._entities.internalValue = value;
  }
  public resetEntities() {
    this._entities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitiesInput() {
    return this._entities.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DialogflowEntityTypeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DialogflowEntityTypeTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      display_name: cdktn.stringToTerraform(this._displayName),
      enable_fuzzy_extraction: cdktn.booleanToTerraform(this._enableFuzzyExtraction),
      id: cdktn.stringToTerraform(this._id),
      kind: cdktn.stringToTerraform(this._kind),
      project: cdktn.stringToTerraform(this._project),
      entities: cdktn.listMapper(dialogflowEntityTypeEntitiesToTerraform, true)(this._entities.internalValue),
      timeouts: dialogflowEntityTypeTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deletion_policy: {
        value: cdktn.stringToHclTerraform(this._deletionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_fuzzy_extraction: {
        value: cdktn.booleanToHclTerraform(this._enableFuzzyExtraction),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kind: {
        value: cdktn.stringToHclTerraform(this._kind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entities: {
        value: cdktn.listMapperHcl(dialogflowEntityTypeEntitiesToHclTerraform, true)(this._entities.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowEntityTypeEntitiesList",
      },
      timeouts: {
        value: dialogflowEntityTypeTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DialogflowEntityTypeTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
