/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_entry_link
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataplexEntryLinkConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_entry_link#deletion_policy DataplexEntryLink#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * The id of the entry group this entry link is in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_entry_link#entry_group_id DataplexEntryLink#entry_group_id}
  */
  readonly entryGroupId: string;
  /**
  * The id of the entry link to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_entry_link#entry_link_id DataplexEntryLink#entry_link_id}
  */
  readonly entryLinkId: string;
  /**
  * Relative resource name of the Entry Link Type used to create this Entry Link. For example:
  * projects/dataplex-types/locations/global/entryLinkTypes/definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_entry_link#entry_link_type DataplexEntryLink#entry_link_type}
  */
  readonly entryLinkType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_entry_link#id DataplexEntryLink#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location for the entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_entry_link#location DataplexEntryLink#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_entry_link#project DataplexEntryLink#project}
  */
  readonly project?: string;
  /**
  * aspects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_entry_link#aspects DataplexEntryLink#aspects}
  */
  readonly aspects?: DataplexEntryLinkAspects[] | cdktn.IResolvable;
  /**
  * entry_references block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_entry_link#entry_references DataplexEntryLink#entry_references}
  */
  readonly entryReferences: DataplexEntryLinkEntryReferences[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_entry_link#timeouts DataplexEntryLink#timeouts}
  */
  readonly timeouts?: DataplexEntryLinkTimeouts;
}
export interface DataplexEntryLinkAspectsAspect {
  /**
  * The content of the aspect in JSON form, according to its aspect type schema. The maximum size of the field is 120KB (encoded as UTF-8).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_entry_link#data DataplexEntryLink#data}
  */
  readonly data: string;
}

export function dataplexEntryLinkAspectsAspectToTerraform(struct?: DataplexEntryLinkAspectsAspectOutputReference | DataplexEntryLinkAspectsAspect): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data: cdktn.stringToTerraform(struct!.data),
  }
}


export function dataplexEntryLinkAspectsAspectToHclTerraform(struct?: DataplexEntryLinkAspectsAspectOutputReference | DataplexEntryLinkAspectsAspect): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data: {
      value: cdktn.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataplexEntryLinkAspectsAspectOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataplexEntryLinkAspectsAspect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexEntryLinkAspectsAspect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._data = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._data = value.data;
    }
  }

  // aspect_type - computed: true, optional: false, required: false
  public get aspectType() {
    return this.getStringAttribute('aspect_type');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // data - computed: false, optional: false, required: true
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}
export interface DataplexEntryLinkAspects {
  /**
  * The map keys of the Aspects which the service should modify.
  * It should be the aspect type reference in the format '{project_number}.{location_id}.{aspect_type_id}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_entry_link#aspect_key DataplexEntryLink#aspect_key}
  */
  readonly aspectKey: string;
  /**
  * aspect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_entry_link#aspect DataplexEntryLink#aspect}
  */
  readonly aspect: DataplexEntryLinkAspectsAspect;
}

export function dataplexEntryLinkAspectsToTerraform(struct?: DataplexEntryLinkAspects | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aspect_key: cdktn.stringToTerraform(struct!.aspectKey),
    aspect: dataplexEntryLinkAspectsAspectToTerraform(struct!.aspect),
  }
}


export function dataplexEntryLinkAspectsToHclTerraform(struct?: DataplexEntryLinkAspects | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aspect_key: {
      value: cdktn.stringToHclTerraform(struct!.aspectKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aspect: {
      value: dataplexEntryLinkAspectsAspectToHclTerraform(struct!.aspect),
      isBlock: true,
      type: "list",
      storageClassType: "DataplexEntryLinkAspectsAspectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataplexEntryLinkAspectsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataplexEntryLinkAspects | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aspectKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.aspectKey = this._aspectKey;
    }
    if (this._aspect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aspect = this._aspect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexEntryLinkAspects | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aspectKey = undefined;
      this._aspect.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aspectKey = value.aspectKey;
      this._aspect.internalValue = value.aspect;
    }
  }

  // aspect_key - computed: false, optional: false, required: true
  private _aspectKey?: string; 
  public get aspectKey() {
    return this.getStringAttribute('aspect_key');
  }
  public set aspectKey(value: string) {
    this._aspectKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aspectKeyInput() {
    return this._aspectKey;
  }

  // aspect - computed: false, optional: false, required: true
  private _aspect = new DataplexEntryLinkAspectsAspectOutputReference(this, "aspect");
  public get aspect() {
    return this._aspect;
  }
  public putAspect(value: DataplexEntryLinkAspectsAspect) {
    this._aspect.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aspectInput() {
    return this._aspect.internalValue;
  }
}

export class DataplexEntryLinkAspectsList extends cdktn.ComplexList {
  public internalValue? : DataplexEntryLinkAspects[] | cdktn.IResolvable

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
  public get(index: number): DataplexEntryLinkAspectsOutputReference {
    return new DataplexEntryLinkAspectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataplexEntryLinkEntryReferences {
  /**
  * The relative resource name of the referenced Entry, of the form:
  * projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}/entries/{entry_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_entry_link#name DataplexEntryLink#name}
  */
  readonly name: string;
  /**
  * The path in the Entry that is referenced in the Entry Link.
  * Empty path denotes that the Entry itself is referenced in the Entry Link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_entry_link#path DataplexEntryLink#path}
  */
  readonly path?: string;
  /**
  * The reference type of the Entry. Possible values: ["SOURCE", "TARGET"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_entry_link#type DataplexEntryLink#type}
  */
  readonly type?: string;
}

export function dataplexEntryLinkEntryReferencesToTerraform(struct?: DataplexEntryLinkEntryReferences | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    path: cdktn.stringToTerraform(struct!.path),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function dataplexEntryLinkEntryReferencesToHclTerraform(struct?: DataplexEntryLinkEntryReferences | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataplexEntryLinkEntryReferencesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataplexEntryLinkEntryReferences | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataplexEntryLinkEntryReferences | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._path = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._path = value.path;
      this._type = value.type;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataplexEntryLinkEntryReferencesList extends cdktn.ComplexList {
  public internalValue? : DataplexEntryLinkEntryReferences[] | cdktn.IResolvable

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
  public get(index: number): DataplexEntryLinkEntryReferencesOutputReference {
    return new DataplexEntryLinkEntryReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataplexEntryLinkTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_entry_link#create DataplexEntryLink#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_entry_link#delete DataplexEntryLink#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_entry_link#update DataplexEntryLink#update}
  */
  readonly update?: string;
}

export function dataplexEntryLinkTimeoutsToTerraform(struct?: DataplexEntryLinkTimeouts | cdktn.IResolvable): any {
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


export function dataplexEntryLinkTimeoutsToHclTerraform(struct?: DataplexEntryLinkTimeouts | cdktn.IResolvable): any {
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

export class DataplexEntryLinkTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataplexEntryLinkTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataplexEntryLinkTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_entry_link google_dataplex_entry_link}
*/
export class DataplexEntryLink extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dataplex_entry_link";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataplexEntryLink resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataplexEntryLink to import
  * @param importFromId The id of the existing DataplexEntryLink that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_entry_link#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataplexEntryLink to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_dataplex_entry_link", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dataplex_entry_link google_dataplex_entry_link} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataplexEntryLinkConfig
  */
  public constructor(scope: Construct, id: string, config: DataplexEntryLinkConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dataplex_entry_link',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.41.0',
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
    this._entryGroupId = config.entryGroupId;
    this._entryLinkId = config.entryLinkId;
    this._entryLinkType = config.entryLinkType;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._aspects.internalValue = config.aspects;
    this._entryReferences.internalValue = config.entryReferences;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

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

  // entry_group_id - computed: false, optional: false, required: true
  private _entryGroupId?: string; 
  public get entryGroupId() {
    return this.getStringAttribute('entry_group_id');
  }
  public set entryGroupId(value: string) {
    this._entryGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entryGroupIdInput() {
    return this._entryGroupId;
  }

  // entry_link_id - computed: false, optional: false, required: true
  private _entryLinkId?: string; 
  public get entryLinkId() {
    return this.getStringAttribute('entry_link_id');
  }
  public set entryLinkId(value: string) {
    this._entryLinkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entryLinkIdInput() {
    return this._entryLinkId;
  }

  // entry_link_type - computed: false, optional: false, required: true
  private _entryLinkType?: string; 
  public get entryLinkType() {
    return this.getStringAttribute('entry_link_type');
  }
  public set entryLinkType(value: string) {
    this._entryLinkType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entryLinkTypeInput() {
    return this._entryLinkType;
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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // aspects - computed: false, optional: true, required: false
  private _aspects = new DataplexEntryLinkAspectsList(this, "aspects", false);
  public get aspects() {
    return this._aspects;
  }
  public putAspects(value: DataplexEntryLinkAspects[] | cdktn.IResolvable) {
    this._aspects.internalValue = value;
  }
  public resetAspects() {
    this._aspects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aspectsInput() {
    return this._aspects.internalValue;
  }

  // entry_references - computed: false, optional: false, required: true
  private _entryReferences = new DataplexEntryLinkEntryReferencesList(this, "entry_references", false);
  public get entryReferences() {
    return this._entryReferences;
  }
  public putEntryReferences(value: DataplexEntryLinkEntryReferences[] | cdktn.IResolvable) {
    this._entryReferences.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entryReferencesInput() {
    return this._entryReferences.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataplexEntryLinkTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataplexEntryLinkTimeouts) {
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
      entry_group_id: cdktn.stringToTerraform(this._entryGroupId),
      entry_link_id: cdktn.stringToTerraform(this._entryLinkId),
      entry_link_type: cdktn.stringToTerraform(this._entryLinkType),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      aspects: cdktn.listMapper(dataplexEntryLinkAspectsToTerraform, true)(this._aspects.internalValue),
      entry_references: cdktn.listMapper(dataplexEntryLinkEntryReferencesToTerraform, true)(this._entryReferences.internalValue),
      timeouts: dataplexEntryLinkTimeoutsToTerraform(this._timeouts.internalValue),
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
      entry_group_id: {
        value: cdktn.stringToHclTerraform(this._entryGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entry_link_id: {
        value: cdktn.stringToHclTerraform(this._entryLinkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entry_link_type: {
        value: cdktn.stringToHclTerraform(this._entryLinkType),
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
      aspects: {
        value: cdktn.listMapperHcl(dataplexEntryLinkAspectsToHclTerraform, true)(this._aspects.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataplexEntryLinkAspectsList",
      },
      entry_references: {
        value: cdktn.listMapperHcl(dataplexEntryLinkEntryReferencesToHclTerraform, true)(this._entryReferences.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataplexEntryLinkEntryReferencesList",
      },
      timeouts: {
        value: dataplexEntryLinkTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataplexEntryLinkTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
