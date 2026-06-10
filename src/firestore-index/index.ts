/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firestore_index
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface FirestoreIndexConfig extends cdktn.TerraformMetaArguments {
  /**
  * The API scope at which a query is run. Default value: "ANY_API" Possible values: ["ANY_API", "DATASTORE_MODE_API", "MONGODB_COMPATIBLE_API"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firestore_index#api_scope FirestoreIndex#api_scope}
  */
  readonly apiScope?: string;
  /**
  * The collection being indexed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firestore_index#collection FirestoreIndex#collection}
  */
  readonly collection: string;
  /**
  * The Firestore database id. Defaults to '"(default)"'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firestore_index#database FirestoreIndex#database}
  */
  readonly database?: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firestore_index#deletion_policy FirestoreIndex#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * The density configuration for this index. Possible values: ["SPARSE_ALL", "SPARSE_ANY", "DENSE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firestore_index#density FirestoreIndex#density}
  */
  readonly density?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firestore_index#id FirestoreIndex#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Optional. Whether the index is multikey. By default, the index is not multikey. For non-multikey indexes, none of the paths in the index definition reach or traverse an array, except via an explicit array index. For multikey indexes, at most one of the paths in the index definition reach or traverse an array, except via an explicit array index. Violations will result in errors. Note this field only applies to indexes with MONGODB_COMPATIBLE_API ApiScope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firestore_index#multikey FirestoreIndex#multikey}
  */
  readonly multikey?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firestore_index#project FirestoreIndex#project}
  */
  readonly project?: string;
  /**
  * The scope at which a query is run. Default value: "COLLECTION" Possible values: ["COLLECTION", "COLLECTION_GROUP", "COLLECTION_RECURSIVE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firestore_index#query_scope FirestoreIndex#query_scope}
  */
  readonly queryScope?: string;
  /**
  * Whether to skip waiting for the index to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firestore_index#skip_wait FirestoreIndex#skip_wait}
  */
  readonly skipWait?: boolean | cdktn.IResolvable;
  /**
  * Whether it is an unique index. Unique index ensures all values for the indexed field(s) are unique across documents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firestore_index#unique FirestoreIndex#unique}
  */
  readonly unique?: boolean | cdktn.IResolvable;
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firestore_index#fields FirestoreIndex#fields}
  */
  readonly fields: FirestoreIndexFields[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firestore_index#timeouts FirestoreIndex#timeouts}
  */
  readonly timeouts?: FirestoreIndexTimeouts;
}
export interface FirestoreIndexFieldsSearchConfigGeoSpec {
  /**
  * If true, disables GeoJSON indexing for the field. By default, GeoJSON points are indexed.
  * Firestore GeoPoints are indexed regardless of the value of this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firestore_index#geo_json_indexing_disabled FirestoreIndex#geo_json_indexing_disabled}
  */
  readonly geoJsonIndexingDisabled: boolean | cdktn.IResolvable;
}

export function firestoreIndexFieldsSearchConfigGeoSpecToTerraform(struct?: FirestoreIndexFieldsSearchConfigGeoSpecOutputReference | FirestoreIndexFieldsSearchConfigGeoSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    geo_json_indexing_disabled: cdktn.booleanToTerraform(struct!.geoJsonIndexingDisabled),
  }
}


export function firestoreIndexFieldsSearchConfigGeoSpecToHclTerraform(struct?: FirestoreIndexFieldsSearchConfigGeoSpecOutputReference | FirestoreIndexFieldsSearchConfigGeoSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    geo_json_indexing_disabled: {
      value: cdktn.booleanToHclTerraform(struct!.geoJsonIndexingDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirestoreIndexFieldsSearchConfigGeoSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirestoreIndexFieldsSearchConfigGeoSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._geoJsonIndexingDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoJsonIndexingDisabled = this._geoJsonIndexingDisabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirestoreIndexFieldsSearchConfigGeoSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._geoJsonIndexingDisabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._geoJsonIndexingDisabled = value.geoJsonIndexingDisabled;
    }
  }

  // geo_json_indexing_disabled - computed: false, optional: false, required: true
  private _geoJsonIndexingDisabled?: boolean | cdktn.IResolvable; 
  public get geoJsonIndexingDisabled() {
    return this.getBooleanAttribute('geo_json_indexing_disabled');
  }
  public set geoJsonIndexingDisabled(value: boolean | cdktn.IResolvable) {
    this._geoJsonIndexingDisabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get geoJsonIndexingDisabledInput() {
    return this._geoJsonIndexingDisabled;
  }
}
export interface FirestoreIndexFieldsSearchConfigTextSpecIndexSpecs {
  /**
  * Ways to index the text field value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firestore_index#index_type FirestoreIndex#index_type}
  */
  readonly indexType?: string;
  /**
  * How to match the text field value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firestore_index#match_type FirestoreIndex#match_type}
  */
  readonly matchType?: string;
}

export function firestoreIndexFieldsSearchConfigTextSpecIndexSpecsToTerraform(struct?: FirestoreIndexFieldsSearchConfigTextSpecIndexSpecs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    index_type: cdktn.stringToTerraform(struct!.indexType),
    match_type: cdktn.stringToTerraform(struct!.matchType),
  }
}


export function firestoreIndexFieldsSearchConfigTextSpecIndexSpecsToHclTerraform(struct?: FirestoreIndexFieldsSearchConfigTextSpecIndexSpecs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    index_type: {
      value: cdktn.stringToHclTerraform(struct!.indexType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_type: {
      value: cdktn.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FirestoreIndexFieldsSearchConfigTextSpecIndexSpecs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._indexType !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexType = this._indexType;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirestoreIndexFieldsSearchConfigTextSpecIndexSpecs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._indexType = undefined;
      this._matchType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._indexType = value.indexType;
      this._matchType = value.matchType;
    }
  }

  // index_type - computed: false, optional: true, required: false
  private _indexType?: string; 
  public get indexType() {
    return this.getStringAttribute('index_type');
  }
  public set indexType(value: string) {
    this._indexType = value;
  }
  public resetIndexType() {
    this._indexType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexTypeInput() {
    return this._indexType;
  }

  // match_type - computed: false, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }
}

export class FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList extends cdktn.ComplexList {
  public internalValue? : FirestoreIndexFieldsSearchConfigTextSpecIndexSpecs[] | cdktn.IResolvable

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
  public get(index: number): FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference {
    return new FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirestoreIndexFieldsSearchConfigTextSpec {
  /**
  * index_specs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firestore_index#index_specs FirestoreIndex#index_specs}
  */
  readonly indexSpecs: FirestoreIndexFieldsSearchConfigTextSpecIndexSpecs[] | cdktn.IResolvable;
}

export function firestoreIndexFieldsSearchConfigTextSpecToTerraform(struct?: FirestoreIndexFieldsSearchConfigTextSpecOutputReference | FirestoreIndexFieldsSearchConfigTextSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    index_specs: cdktn.listMapper(firestoreIndexFieldsSearchConfigTextSpecIndexSpecsToTerraform, true)(struct!.indexSpecs),
  }
}


export function firestoreIndexFieldsSearchConfigTextSpecToHclTerraform(struct?: FirestoreIndexFieldsSearchConfigTextSpecOutputReference | FirestoreIndexFieldsSearchConfigTextSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    index_specs: {
      value: cdktn.listMapperHcl(firestoreIndexFieldsSearchConfigTextSpecIndexSpecsToHclTerraform, true)(struct!.indexSpecs),
      isBlock: true,
      type: "list",
      storageClassType: "FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirestoreIndexFieldsSearchConfigTextSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirestoreIndexFieldsSearchConfigTextSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._indexSpecs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexSpecs = this._indexSpecs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirestoreIndexFieldsSearchConfigTextSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._indexSpecs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._indexSpecs.internalValue = value.indexSpecs;
    }
  }

  // index_specs - computed: false, optional: false, required: true
  private _indexSpecs = new FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList(this, "index_specs", false);
  public get indexSpecs() {
    return this._indexSpecs;
  }
  public putIndexSpecs(value: FirestoreIndexFieldsSearchConfigTextSpecIndexSpecs[] | cdktn.IResolvable) {
    this._indexSpecs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexSpecsInput() {
    return this._indexSpecs.internalValue;
  }
}
export interface FirestoreIndexFieldsSearchConfig {
  /**
  * geo_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firestore_index#geo_spec FirestoreIndex#geo_spec}
  */
  readonly geoSpec?: FirestoreIndexFieldsSearchConfigGeoSpec;
  /**
  * text_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firestore_index#text_spec FirestoreIndex#text_spec}
  */
  readonly textSpec?: FirestoreIndexFieldsSearchConfigTextSpec;
}

export function firestoreIndexFieldsSearchConfigToTerraform(struct?: FirestoreIndexFieldsSearchConfigOutputReference | FirestoreIndexFieldsSearchConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    geo_spec: firestoreIndexFieldsSearchConfigGeoSpecToTerraform(struct!.geoSpec),
    text_spec: firestoreIndexFieldsSearchConfigTextSpecToTerraform(struct!.textSpec),
  }
}


export function firestoreIndexFieldsSearchConfigToHclTerraform(struct?: FirestoreIndexFieldsSearchConfigOutputReference | FirestoreIndexFieldsSearchConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    geo_spec: {
      value: firestoreIndexFieldsSearchConfigGeoSpecToHclTerraform(struct!.geoSpec),
      isBlock: true,
      type: "list",
      storageClassType: "FirestoreIndexFieldsSearchConfigGeoSpecList",
    },
    text_spec: {
      value: firestoreIndexFieldsSearchConfigTextSpecToHclTerraform(struct!.textSpec),
      isBlock: true,
      type: "list",
      storageClassType: "FirestoreIndexFieldsSearchConfigTextSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirestoreIndexFieldsSearchConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirestoreIndexFieldsSearchConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._geoSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoSpec = this._geoSpec?.internalValue;
    }
    if (this._textSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.textSpec = this._textSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirestoreIndexFieldsSearchConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._geoSpec.internalValue = undefined;
      this._textSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._geoSpec.internalValue = value.geoSpec;
      this._textSpec.internalValue = value.textSpec;
    }
  }

  // geo_spec - computed: false, optional: true, required: false
  private _geoSpec = new FirestoreIndexFieldsSearchConfigGeoSpecOutputReference(this, "geo_spec");
  public get geoSpec() {
    return this._geoSpec;
  }
  public putGeoSpec(value: FirestoreIndexFieldsSearchConfigGeoSpec) {
    this._geoSpec.internalValue = value;
  }
  public resetGeoSpec() {
    this._geoSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoSpecInput() {
    return this._geoSpec.internalValue;
  }

  // text_spec - computed: false, optional: true, required: false
  private _textSpec = new FirestoreIndexFieldsSearchConfigTextSpecOutputReference(this, "text_spec");
  public get textSpec() {
    return this._textSpec;
  }
  public putTextSpec(value: FirestoreIndexFieldsSearchConfigTextSpec) {
    this._textSpec.internalValue = value;
  }
  public resetTextSpec() {
    this._textSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textSpecInput() {
    return this._textSpec.internalValue;
  }
}
export interface FirestoreIndexFieldsVectorConfigFlat {
}

export function firestoreIndexFieldsVectorConfigFlatToTerraform(struct?: FirestoreIndexFieldsVectorConfigFlatOutputReference | FirestoreIndexFieldsVectorConfigFlat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function firestoreIndexFieldsVectorConfigFlatToHclTerraform(struct?: FirestoreIndexFieldsVectorConfigFlatOutputReference | FirestoreIndexFieldsVectorConfigFlat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class FirestoreIndexFieldsVectorConfigFlatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirestoreIndexFieldsVectorConfigFlat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirestoreIndexFieldsVectorConfigFlat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface FirestoreIndexFieldsVectorConfig {
  /**
  * The resulting index will only include vectors of this dimension, and can be used for vector search
  * with the same dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firestore_index#dimension FirestoreIndex#dimension}
  */
  readonly dimension?: number;
  /**
  * flat block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firestore_index#flat FirestoreIndex#flat}
  */
  readonly flat?: FirestoreIndexFieldsVectorConfigFlat;
}

export function firestoreIndexFieldsVectorConfigToTerraform(struct?: FirestoreIndexFieldsVectorConfigOutputReference | FirestoreIndexFieldsVectorConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimension: cdktn.numberToTerraform(struct!.dimension),
    flat: firestoreIndexFieldsVectorConfigFlatToTerraform(struct!.flat),
  }
}


export function firestoreIndexFieldsVectorConfigToHclTerraform(struct?: FirestoreIndexFieldsVectorConfigOutputReference | FirestoreIndexFieldsVectorConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimension: {
      value: cdktn.numberToHclTerraform(struct!.dimension),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    flat: {
      value: firestoreIndexFieldsVectorConfigFlatToHclTerraform(struct!.flat),
      isBlock: true,
      type: "list",
      storageClassType: "FirestoreIndexFieldsVectorConfigFlatList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirestoreIndexFieldsVectorConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirestoreIndexFieldsVectorConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension;
    }
    if (this._flat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flat = this._flat?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirestoreIndexFieldsVectorConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dimension = undefined;
      this._flat.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dimension = value.dimension;
      this._flat.internalValue = value.flat;
    }
  }

  // dimension - computed: false, optional: true, required: false
  private _dimension?: number; 
  public get dimension() {
    return this.getNumberAttribute('dimension');
  }
  public set dimension(value: number) {
    this._dimension = value;
  }
  public resetDimension() {
    this._dimension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension;
  }

  // flat - computed: false, optional: true, required: false
  private _flat = new FirestoreIndexFieldsVectorConfigFlatOutputReference(this, "flat");
  public get flat() {
    return this._flat;
  }
  public putFlat(value: FirestoreIndexFieldsVectorConfigFlat) {
    this._flat.internalValue = value;
  }
  public resetFlat() {
    this._flat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flatInput() {
    return this._flat.internalValue;
  }
}
export interface FirestoreIndexFields {
  /**
  * Indicates that this field supports operations on arrayValues. Only one of 'order', 'arrayConfig', 'searchConfig' and
  * 'vectorConfig' can be specified. Possible values: ["CONTAINS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firestore_index#array_config FirestoreIndex#array_config}
  */
  readonly arrayConfig?: string;
  /**
  * Name of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firestore_index#field_path FirestoreIndex#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Indicates that this field supports ordering by the specified order or comparing using =, <, <=, >, >=.
  * Only one of 'order', 'arrayConfig', 'searchConfig' and 'vectorConfig' can be specified. Possible values: ["ASCENDING", "DESCENDING"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firestore_index#order FirestoreIndex#order}
  */
  readonly order?: string;
  /**
  * search_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firestore_index#search_config FirestoreIndex#search_config}
  */
  readonly searchConfig?: FirestoreIndexFieldsSearchConfig;
  /**
  * vector_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firestore_index#vector_config FirestoreIndex#vector_config}
  */
  readonly vectorConfig?: FirestoreIndexFieldsVectorConfig;
}

export function firestoreIndexFieldsToTerraform(struct?: FirestoreIndexFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    array_config: cdktn.stringToTerraform(struct!.arrayConfig),
    field_path: cdktn.stringToTerraform(struct!.fieldPath),
    order: cdktn.stringToTerraform(struct!.order),
    search_config: firestoreIndexFieldsSearchConfigToTerraform(struct!.searchConfig),
    vector_config: firestoreIndexFieldsVectorConfigToTerraform(struct!.vectorConfig),
  }
}


export function firestoreIndexFieldsToHclTerraform(struct?: FirestoreIndexFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    array_config: {
      value: cdktn.stringToHclTerraform(struct!.arrayConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_path: {
      value: cdktn.stringToHclTerraform(struct!.fieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktn.stringToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_config: {
      value: firestoreIndexFieldsSearchConfigToHclTerraform(struct!.searchConfig),
      isBlock: true,
      type: "list",
      storageClassType: "FirestoreIndexFieldsSearchConfigList",
    },
    vector_config: {
      value: firestoreIndexFieldsVectorConfigToHclTerraform(struct!.vectorConfig),
      isBlock: true,
      type: "list",
      storageClassType: "FirestoreIndexFieldsVectorConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirestoreIndexFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FirestoreIndexFields | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arrayConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.arrayConfig = this._arrayConfig;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._searchConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchConfig = this._searchConfig?.internalValue;
    }
    if (this._vectorConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vectorConfig = this._vectorConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirestoreIndexFields | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arrayConfig = undefined;
      this._fieldPath = undefined;
      this._order = undefined;
      this._searchConfig.internalValue = undefined;
      this._vectorConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arrayConfig = value.arrayConfig;
      this._fieldPath = value.fieldPath;
      this._order = value.order;
      this._searchConfig.internalValue = value.searchConfig;
      this._vectorConfig.internalValue = value.vectorConfig;
    }
  }

  // array_config - computed: false, optional: true, required: false
  private _arrayConfig?: string; 
  public get arrayConfig() {
    return this.getStringAttribute('array_config');
  }
  public set arrayConfig(value: string) {
    this._arrayConfig = value;
  }
  public resetArrayConfig() {
    this._arrayConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayConfigInput() {
    return this._arrayConfig;
  }

  // field_path - computed: false, optional: true, required: false
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  public resetFieldPath() {
    this._fieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }

  // order - computed: false, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // search_config - computed: false, optional: true, required: false
  private _searchConfig = new FirestoreIndexFieldsSearchConfigOutputReference(this, "search_config");
  public get searchConfig() {
    return this._searchConfig;
  }
  public putSearchConfig(value: FirestoreIndexFieldsSearchConfig) {
    this._searchConfig.internalValue = value;
  }
  public resetSearchConfig() {
    this._searchConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchConfigInput() {
    return this._searchConfig.internalValue;
  }

  // vector_config - computed: false, optional: true, required: false
  private _vectorConfig = new FirestoreIndexFieldsVectorConfigOutputReference(this, "vector_config");
  public get vectorConfig() {
    return this._vectorConfig;
  }
  public putVectorConfig(value: FirestoreIndexFieldsVectorConfig) {
    this._vectorConfig.internalValue = value;
  }
  public resetVectorConfig() {
    this._vectorConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorConfigInput() {
    return this._vectorConfig.internalValue;
  }
}

export class FirestoreIndexFieldsList extends cdktn.ComplexList {
  public internalValue? : FirestoreIndexFields[] | cdktn.IResolvable

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
  public get(index: number): FirestoreIndexFieldsOutputReference {
    return new FirestoreIndexFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirestoreIndexTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firestore_index#create FirestoreIndex#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firestore_index#delete FirestoreIndex#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firestore_index#update FirestoreIndex#update}
  */
  readonly update?: string;
}

export function firestoreIndexTimeoutsToTerraform(struct?: FirestoreIndexTimeouts | cdktn.IResolvable): any {
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


export function firestoreIndexTimeoutsToHclTerraform(struct?: FirestoreIndexTimeouts | cdktn.IResolvable): any {
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

export class FirestoreIndexTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirestoreIndexTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: FirestoreIndexTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firestore_index google_firestore_index}
*/
export class FirestoreIndex extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_firestore_index";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a FirestoreIndex resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirestoreIndex to import
  * @param importFromId The id of the existing FirestoreIndex that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firestore_index#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirestoreIndex to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_firestore_index", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/firestore_index google_firestore_index} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirestoreIndexConfig
  */
  public constructor(scope: Construct, id: string, config: FirestoreIndexConfig) {
    super(scope, id, {
      terraformResourceType: 'google_firestore_index',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.36.0',
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
    this._apiScope = config.apiScope;
    this._collection = config.collection;
    this._database = config.database;
    this._deletionPolicy = config.deletionPolicy;
    this._density = config.density;
    this._id = config.id;
    this._multikey = config.multikey;
    this._project = config.project;
    this._queryScope = config.queryScope;
    this._skipWait = config.skipWait;
    this._unique = config.unique;
    this._fields.internalValue = config.fields;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_scope - computed: false, optional: true, required: false
  private _apiScope?: string; 
  public get apiScope() {
    return this.getStringAttribute('api_scope');
  }
  public set apiScope(value: string) {
    this._apiScope = value;
  }
  public resetApiScope() {
    this._apiScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiScopeInput() {
    return this._apiScope;
  }

  // collection - computed: false, optional: false, required: true
  private _collection?: string; 
  public get collection() {
    return this.getStringAttribute('collection');
  }
  public set collection(value: string) {
    this._collection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionInput() {
    return this._collection;
  }

  // database - computed: false, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
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

  // density - computed: true, optional: true, required: false
  private _density?: string; 
  public get density() {
    return this.getStringAttribute('density');
  }
  public set density(value: string) {
    this._density = value;
  }
  public resetDensity() {
    this._density = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get densityInput() {
    return this._density;
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

  // multikey - computed: false, optional: true, required: false
  private _multikey?: boolean | cdktn.IResolvable; 
  public get multikey() {
    return this.getBooleanAttribute('multikey');
  }
  public set multikey(value: boolean | cdktn.IResolvable) {
    this._multikey = value;
  }
  public resetMultikey() {
    this._multikey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multikeyInput() {
    return this._multikey;
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

  // query_scope - computed: false, optional: true, required: false
  private _queryScope?: string; 
  public get queryScope() {
    return this.getStringAttribute('query_scope');
  }
  public set queryScope(value: string) {
    this._queryScope = value;
  }
  public resetQueryScope() {
    this._queryScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryScopeInput() {
    return this._queryScope;
  }

  // skip_wait - computed: false, optional: true, required: false
  private _skipWait?: boolean | cdktn.IResolvable; 
  public get skipWait() {
    return this.getBooleanAttribute('skip_wait');
  }
  public set skipWait(value: boolean | cdktn.IResolvable) {
    this._skipWait = value;
  }
  public resetSkipWait() {
    this._skipWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipWaitInput() {
    return this._skipWait;
  }

  // unique - computed: true, optional: true, required: false
  private _unique?: boolean | cdktn.IResolvable; 
  public get unique() {
    return this.getBooleanAttribute('unique');
  }
  public set unique(value: boolean | cdktn.IResolvable) {
    this._unique = value;
  }
  public resetUnique() {
    this._unique = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueInput() {
    return this._unique;
  }

  // fields - computed: false, optional: false, required: true
  private _fields = new FirestoreIndexFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: FirestoreIndexFields[] | cdktn.IResolvable) {
    this._fields.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FirestoreIndexTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FirestoreIndexTimeouts) {
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
      api_scope: cdktn.stringToTerraform(this._apiScope),
      collection: cdktn.stringToTerraform(this._collection),
      database: cdktn.stringToTerraform(this._database),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      density: cdktn.stringToTerraform(this._density),
      id: cdktn.stringToTerraform(this._id),
      multikey: cdktn.booleanToTerraform(this._multikey),
      project: cdktn.stringToTerraform(this._project),
      query_scope: cdktn.stringToTerraform(this._queryScope),
      skip_wait: cdktn.booleanToTerraform(this._skipWait),
      unique: cdktn.booleanToTerraform(this._unique),
      fields: cdktn.listMapper(firestoreIndexFieldsToTerraform, true)(this._fields.internalValue),
      timeouts: firestoreIndexTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_scope: {
        value: cdktn.stringToHclTerraform(this._apiScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      collection: {
        value: cdktn.stringToHclTerraform(this._collection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database: {
        value: cdktn.stringToHclTerraform(this._database),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_policy: {
        value: cdktn.stringToHclTerraform(this._deletionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      density: {
        value: cdktn.stringToHclTerraform(this._density),
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
      multikey: {
        value: cdktn.booleanToHclTerraform(this._multikey),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_scope: {
        value: cdktn.stringToHclTerraform(this._queryScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_wait: {
        value: cdktn.booleanToHclTerraform(this._skipWait),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      unique: {
        value: cdktn.booleanToHclTerraform(this._unique),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fields: {
        value: cdktn.listMapperHcl(firestoreIndexFieldsToHclTerraform, true)(this._fields.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirestoreIndexFieldsList",
      },
      timeouts: {
        value: firestoreIndexTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FirestoreIndexTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
