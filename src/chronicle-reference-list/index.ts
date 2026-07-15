/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_reference_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ChronicleReferenceListConfig extends cdktn.TerraformMetaArguments {
  /**
  * Required. A user-provided description of the reference list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_reference_list#description ChronicleReferenceList#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_reference_list#id ChronicleReferenceList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The unique identifier for the Chronicle instance, which is the same as the customer ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_reference_list#instance ChronicleReferenceList#instance}
  */
  readonly instance: string;
  /**
  * The location of the resource. This is the geographical region where the Chronicle instance resides, such as "us" or "europe-west2".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_reference_list#location ChronicleReferenceList#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_reference_list#project ChronicleReferenceList#project}
  */
  readonly project?: string;
  /**
  * Required. The ID to use for the reference list. This is also the display name for
  * the reference list. It must satisfy the following requirements:
  * - Starts with letter.
  * - Contains only letters, numbers and underscore.
  * - Has length < 256.
  * - Must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_reference_list#reference_list_id ChronicleReferenceList#reference_list_id}
  */
  readonly referenceListId: string;
  /**
  * Possible values:
  * REFERENCE_LIST_SYNTAX_TYPE_PLAIN_TEXT_STRING
  * REFERENCE_LIST_SYNTAX_TYPE_REGEX
  * REFERENCE_LIST_SYNTAX_TYPE_CIDR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_reference_list#syntax_type ChronicleReferenceList#syntax_type}
  */
  readonly syntaxType: string;
  /**
  * entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_reference_list#entries ChronicleReferenceList#entries}
  */
  readonly entries: ChronicleReferenceListEntries[] | cdktn.IResolvable;
  /**
  * scope_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_reference_list#scope_info ChronicleReferenceList#scope_info}
  */
  readonly scopeInfo?: ChronicleReferenceListScopeInfo;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_reference_list#timeouts ChronicleReferenceList#timeouts}
  */
  readonly timeouts?: ChronicleReferenceListTimeouts;
}
export interface ChronicleReferenceListEntries {
  /**
  * Required. The value of the entry. Maximum length is 512 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_reference_list#value ChronicleReferenceList#value}
  */
  readonly value: string;
}

export function chronicleReferenceListEntriesToTerraform(struct?: ChronicleReferenceListEntries | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function chronicleReferenceListEntriesToHclTerraform(struct?: ChronicleReferenceListEntries | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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

export class ChronicleReferenceListEntriesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ChronicleReferenceListEntries | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleReferenceListEntries | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
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

export class ChronicleReferenceListEntriesList extends cdktn.ComplexList {
  public internalValue? : ChronicleReferenceListEntries[] | cdktn.IResolvable

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
  public get(index: number): ChronicleReferenceListEntriesOutputReference {
    return new ChronicleReferenceListEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChronicleReferenceListScopeInfoReferenceListScope {
  /**
  * Optional. The list of scope names of the reference list. The scope names should be
  * full resource names and should be of the format:
  * "projects/{project}/locations/{location}/instances/{instance}/dataAccessScopes/{scope_name}".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_reference_list#scope_names ChronicleReferenceList#scope_names}
  */
  readonly scopeNames?: string[];
}

export function chronicleReferenceListScopeInfoReferenceListScopeToTerraform(struct?: ChronicleReferenceListScopeInfoReferenceListScopeOutputReference | ChronicleReferenceListScopeInfoReferenceListScope): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    scope_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopeNames),
  }
}


export function chronicleReferenceListScopeInfoReferenceListScopeToHclTerraform(struct?: ChronicleReferenceListScopeInfoReferenceListScopeOutputReference | ChronicleReferenceListScopeInfoReferenceListScope): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    scope_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.scopeNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleReferenceListScopeInfoReferenceListScopeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleReferenceListScopeInfoReferenceListScope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scopeNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeNames = this._scopeNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleReferenceListScopeInfoReferenceListScope | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scopeNames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scopeNames = value.scopeNames;
    }
  }

  // scope_names - computed: false, optional: true, required: false
  private _scopeNames?: string[]; 
  public get scopeNames() {
    return this.getListAttribute('scope_names');
  }
  public set scopeNames(value: string[]) {
    this._scopeNames = value;
  }
  public resetScopeNames() {
    this._scopeNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeNamesInput() {
    return this._scopeNames;
  }
}
export interface ChronicleReferenceListScopeInfo {
  /**
  * reference_list_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_reference_list#reference_list_scope ChronicleReferenceList#reference_list_scope}
  */
  readonly referenceListScope?: ChronicleReferenceListScopeInfoReferenceListScope;
}

export function chronicleReferenceListScopeInfoToTerraform(struct?: ChronicleReferenceListScopeInfoOutputReference | ChronicleReferenceListScopeInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    reference_list_scope: chronicleReferenceListScopeInfoReferenceListScopeToTerraform(struct!.referenceListScope),
  }
}


export function chronicleReferenceListScopeInfoToHclTerraform(struct?: ChronicleReferenceListScopeInfoOutputReference | ChronicleReferenceListScopeInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    reference_list_scope: {
      value: chronicleReferenceListScopeInfoReferenceListScopeToHclTerraform(struct!.referenceListScope),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleReferenceListScopeInfoReferenceListScopeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleReferenceListScopeInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleReferenceListScopeInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._referenceListScope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.referenceListScope = this._referenceListScope?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleReferenceListScopeInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._referenceListScope.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._referenceListScope.internalValue = value.referenceListScope;
    }
  }

  // reference_list_scope - computed: false, optional: true, required: false
  private _referenceListScope = new ChronicleReferenceListScopeInfoReferenceListScopeOutputReference(this, "reference_list_scope");
  public get referenceListScope() {
    return this._referenceListScope;
  }
  public putReferenceListScope(value: ChronicleReferenceListScopeInfoReferenceListScope) {
    this._referenceListScope.internalValue = value;
  }
  public resetReferenceListScope() {
    this._referenceListScope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceListScopeInput() {
    return this._referenceListScope.internalValue;
  }
}
export interface ChronicleReferenceListTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_reference_list#create ChronicleReferenceList#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_reference_list#delete ChronicleReferenceList#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_reference_list#update ChronicleReferenceList#update}
  */
  readonly update?: string;
}

export function chronicleReferenceListTimeoutsToTerraform(struct?: ChronicleReferenceListTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function chronicleReferenceListTimeoutsToHclTerraform(struct?: ChronicleReferenceListTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ChronicleReferenceListTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ChronicleReferenceListTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ChronicleReferenceListTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_reference_list google_chronicle_reference_list}
*/
export class ChronicleReferenceList extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_chronicle_reference_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ChronicleReferenceList resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ChronicleReferenceList to import
  * @param importFromId The id of the existing ChronicleReferenceList that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_reference_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ChronicleReferenceList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_chronicle_reference_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_reference_list google_chronicle_reference_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChronicleReferenceListConfig
  */
  public constructor(scope: Construct, id: string, config: ChronicleReferenceListConfig) {
    super(scope, id, {
      terraformResourceType: 'google_chronicle_reference_list',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.40.0',
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
    this._description = config.description;
    this._id = config.id;
    this._instance = config.instance;
    this._location = config.location;
    this._project = config.project;
    this._referenceListId = config.referenceListId;
    this._syntaxType = config.syntaxType;
    this._entries.internalValue = config.entries;
    this._scopeInfo.internalValue = config.scopeInfo;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
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

  // instance - computed: false, optional: false, required: true
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // reference_list_id - computed: false, optional: false, required: true
  private _referenceListId?: string; 
  public get referenceListId() {
    return this.getStringAttribute('reference_list_id');
  }
  public set referenceListId(value: string) {
    this._referenceListId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceListIdInput() {
    return this._referenceListId;
  }

  // revision_create_time - computed: true, optional: false, required: false
  public get revisionCreateTime() {
    return this.getStringAttribute('revision_create_time');
  }

  // rule_associations_count - computed: true, optional: false, required: false
  public get ruleAssociationsCount() {
    return this.getNumberAttribute('rule_associations_count');
  }

  // rules - computed: true, optional: false, required: false
  public get rules() {
    return this.getListAttribute('rules');
  }

  // syntax_type - computed: false, optional: false, required: true
  private _syntaxType?: string; 
  public get syntaxType() {
    return this.getStringAttribute('syntax_type');
  }
  public set syntaxType(value: string) {
    this._syntaxType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get syntaxTypeInput() {
    return this._syntaxType;
  }

  // entries - computed: false, optional: false, required: true
  private _entries = new ChronicleReferenceListEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
  public putEntries(value: ChronicleReferenceListEntries[] | cdktn.IResolvable) {
    this._entries.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries.internalValue;
  }

  // scope_info - computed: false, optional: true, required: false
  private _scopeInfo = new ChronicleReferenceListScopeInfoOutputReference(this, "scope_info");
  public get scopeInfo() {
    return this._scopeInfo;
  }
  public putScopeInfo(value: ChronicleReferenceListScopeInfo) {
    this._scopeInfo.internalValue = value;
  }
  public resetScopeInfo() {
    this._scopeInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInfoInput() {
    return this._scopeInfo.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ChronicleReferenceListTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ChronicleReferenceListTimeouts) {
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
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      instance: cdktn.stringToTerraform(this._instance),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      reference_list_id: cdktn.stringToTerraform(this._referenceListId),
      syntax_type: cdktn.stringToTerraform(this._syntaxType),
      entries: cdktn.listMapper(chronicleReferenceListEntriesToTerraform, true)(this._entries.internalValue),
      scope_info: chronicleReferenceListScopeInfoToTerraform(this._scopeInfo.internalValue),
      timeouts: chronicleReferenceListTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance: {
        value: cdktn.stringToHclTerraform(this._instance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktn.stringToHclTerraform(this._location),
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
      reference_list_id: {
        value: cdktn.stringToHclTerraform(this._referenceListId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      syntax_type: {
        value: cdktn.stringToHclTerraform(this._syntaxType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entries: {
        value: cdktn.listMapperHcl(chronicleReferenceListEntriesToHclTerraform, true)(this._entries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ChronicleReferenceListEntriesList",
      },
      scope_info: {
        value: chronicleReferenceListScopeInfoToHclTerraform(this._scopeInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ChronicleReferenceListScopeInfoList",
      },
      timeouts: {
        value: chronicleReferenceListTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ChronicleReferenceListTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
