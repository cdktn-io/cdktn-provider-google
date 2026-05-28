/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/discovery_engine_data_store
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataGoogleDiscoveryEngineDataStoreConfig extends cdktn.TerraformMetaArguments {
  /**
  * The unique id of the data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/discovery_engine_data_store#data_store_id DataGoogleDiscoveryEngineDataStore#data_store_id}
  */
  readonly dataStoreId?: string;
  /**
  * The display name of the data store. This field must be a UTF-8 encoded
  * string with a length limit of 128 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/discovery_engine_data_store#display_name DataGoogleDiscoveryEngineDataStore#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/discovery_engine_data_store#id DataGoogleDiscoveryEngineDataStore#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The geographic location where the data store should reside. The value can
  * only be one of "global", "us" and "eu".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/discovery_engine_data_store#location DataGoogleDiscoveryEngineDataStore#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/discovery_engine_data_store#project DataGoogleDiscoveryEngineDataStore#project}
  */
  readonly project?: string;
}
export interface DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfig {
}

export function dataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigToTerraform(struct?: DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigToHclTerraform(struct?: DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disable_automatic_refresh - computed: true, optional: false, required: false
  public get disableAutomaticRefresh() {
    return this.getBooleanAttribute('disable_automatic_refresh');
  }

  // disable_initial_index - computed: true, optional: false, required: false
  public get disableInitialIndex() {
    return this.getBooleanAttribute('disable_initial_index');
  }
}

export class DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference {
    return new DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig {
}

export function dataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigToTerraform(struct?: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigToHclTerraform(struct?: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // chunk_size - computed: true, optional: false, required: false
  public get chunkSize() {
    return this.getNumberAttribute('chunk_size');
  }

  // include_ancestor_headings - computed: true, optional: false, required: false
  public get includeAncestorHeadings() {
    return this.getBooleanAttribute('include_ancestor_headings');
  }
}

export class DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference {
    return new DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig {
}

export function dataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigToTerraform(struct?: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigToHclTerraform(struct?: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // layout_based_chunking_config - computed: true, optional: false, required: false
  private _layoutBasedChunkingConfig = new DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigList(this, "layout_based_chunking_config", false);
  public get layoutBasedChunkingConfig() {
    return this._layoutBasedChunkingConfig;
  }
}

export class DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference {
    return new DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig {
}

export function dataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigToTerraform(struct?: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigToHclTerraform(struct?: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference {
    return new DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig {
}

export function dataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigToTerraform(struct?: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigToHclTerraform(struct?: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_image_annotation - computed: true, optional: false, required: false
  public get enableImageAnnotation() {
    return this.getBooleanAttribute('enable_image_annotation');
  }

  // enable_table_annotation - computed: true, optional: false, required: false
  public get enableTableAnnotation() {
    return this.getBooleanAttribute('enable_table_annotation');
  }

  // exclude_html_classes - computed: true, optional: false, required: false
  public get excludeHtmlClasses() {
    return this.getListAttribute('exclude_html_classes');
  }

  // exclude_html_elements - computed: true, optional: false, required: false
  public get excludeHtmlElements() {
    return this.getListAttribute('exclude_html_elements');
  }

  // exclude_html_ids - computed: true, optional: false, required: false
  public get excludeHtmlIds() {
    return this.getListAttribute('exclude_html_ids');
  }

  // structured_content_types - computed: true, optional: false, required: false
  public get structuredContentTypes() {
    return this.getListAttribute('structured_content_types');
  }
}

export class DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference {
    return new DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig {
}

export function dataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigToTerraform(struct?: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigToHclTerraform(struct?: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // use_native_text - computed: true, optional: false, required: false
  public get useNativeText() {
    return this.getBooleanAttribute('use_native_text');
  }
}

export class DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference {
    return new DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig {
}

export function dataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigToTerraform(struct?: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigToHclTerraform(struct?: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // digital_parsing_config - computed: true, optional: false, required: false
  private _digitalParsingConfig = new DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigList(this, "digital_parsing_config", false);
  public get digitalParsingConfig() {
    return this._digitalParsingConfig;
  }

  // layout_parsing_config - computed: true, optional: false, required: false
  private _layoutParsingConfig = new DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigList(this, "layout_parsing_config", false);
  public get layoutParsingConfig() {
    return this._layoutParsingConfig;
  }

  // ocr_parsing_config - computed: true, optional: false, required: false
  private _ocrParsingConfig = new DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigList(this, "ocr_parsing_config", false);
  public get ocrParsingConfig() {
    return this._ocrParsingConfig;
  }
}

export class DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference {
    return new DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig {
}

export function dataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigToTerraform(struct?: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigToHclTerraform(struct?: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference {
    return new DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig {
}

export function dataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigToTerraform(struct?: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigToHclTerraform(struct?: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_image_annotation - computed: true, optional: false, required: false
  public get enableImageAnnotation() {
    return this.getBooleanAttribute('enable_image_annotation');
  }

  // enable_table_annotation - computed: true, optional: false, required: false
  public get enableTableAnnotation() {
    return this.getBooleanAttribute('enable_table_annotation');
  }

  // exclude_html_classes - computed: true, optional: false, required: false
  public get excludeHtmlClasses() {
    return this.getListAttribute('exclude_html_classes');
  }

  // exclude_html_elements - computed: true, optional: false, required: false
  public get excludeHtmlElements() {
    return this.getListAttribute('exclude_html_elements');
  }

  // exclude_html_ids - computed: true, optional: false, required: false
  public get excludeHtmlIds() {
    return this.getListAttribute('exclude_html_ids');
  }

  // structured_content_types - computed: true, optional: false, required: false
  public get structuredContentTypes() {
    return this.getListAttribute('structured_content_types');
  }
}

export class DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference {
    return new DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig {
}

export function dataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigToTerraform(struct?: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigToHclTerraform(struct?: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // use_native_text - computed: true, optional: false, required: false
  public get useNativeText() {
    return this.getBooleanAttribute('use_native_text');
  }
}

export class DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference {
    return new DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides {
}

export function dataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesToTerraform(struct?: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesToHclTerraform(struct?: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // digital_parsing_config - computed: true, optional: false, required: false
  private _digitalParsingConfig = new DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigList(this, "digital_parsing_config", false);
  public get digitalParsingConfig() {
    return this._digitalParsingConfig;
  }

  // file_type - computed: true, optional: false, required: false
  public get fileType() {
    return this.getStringAttribute('file_type');
  }

  // layout_parsing_config - computed: true, optional: false, required: false
  private _layoutParsingConfig = new DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigList(this, "layout_parsing_config", false);
  public get layoutParsingConfig() {
    return this._layoutParsingConfig;
  }

  // ocr_parsing_config - computed: true, optional: false, required: false
  private _ocrParsingConfig = new DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigList(this, "ocr_parsing_config", false);
  public get ocrParsingConfig() {
    return this._ocrParsingConfig;
  }
}

export class DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference {
    return new DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfig {
}

export function dataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigToTerraform(struct?: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigToHclTerraform(struct?: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // chunking_config - computed: true, optional: false, required: false
  private _chunkingConfig = new DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigList(this, "chunking_config", false);
  public get chunkingConfig() {
    return this._chunkingConfig;
  }

  // default_parsing_config - computed: true, optional: false, required: false
  private _defaultParsingConfig = new DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigList(this, "default_parsing_config", false);
  public get defaultParsingConfig() {
    return this._defaultParsingConfig;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parsing_config_overrides - computed: true, optional: false, required: false
  private _parsingConfigOverrides = new DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList(this, "parsing_config_overrides", true);
  public get parsingConfigOverrides() {
    return this._parsingConfigOverrides;
  }
}

export class DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference {
    return new DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/discovery_engine_data_store google_discovery_engine_data_store}
*/
export class DataGoogleDiscoveryEngineDataStore extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_discovery_engine_data_store";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataGoogleDiscoveryEngineDataStore resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleDiscoveryEngineDataStore to import
  * @param importFromId The id of the existing DataGoogleDiscoveryEngineDataStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/discovery_engine_data_store#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleDiscoveryEngineDataStore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_discovery_engine_data_store", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/discovery_engine_data_store google_discovery_engine_data_store} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleDiscoveryEngineDataStoreConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGoogleDiscoveryEngineDataStoreConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_discovery_engine_data_store',
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
    this._dataStoreId = config.dataStoreId;
    this._displayName = config.displayName;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advanced_site_search_config - computed: true, optional: false, required: false
  private _advancedSiteSearchConfig = new DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigList(this, "advanced_site_search_config", false);
  public get advancedSiteSearchConfig() {
    return this._advancedSiteSearchConfig;
  }

  // content_config - computed: true, optional: false, required: false
  public get contentConfig() {
    return this.getStringAttribute('content_config');
  }

  // create_advanced_site_search - computed: true, optional: false, required: false
  public get createAdvancedSiteSearch() {
    return this.getBooleanAttribute('create_advanced_site_search');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // data_store_id - computed: false, optional: true, required: false
  private _dataStoreId?: string; 
  public get dataStoreId() {
    return this.getStringAttribute('data_store_id');
  }
  public set dataStoreId(value: string) {
    this._dataStoreId = value;
  }
  public resetDataStoreId() {
    this._dataStoreId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreIdInput() {
    return this._dataStoreId;
  }

  // default_schema_id - computed: true, optional: false, required: false
  public get defaultSchemaId() {
    return this.getStringAttribute('default_schema_id');
  }

  // deletion_policy - computed: true, optional: false, required: false
  public get deletionPolicy() {
    return this.getStringAttribute('deletion_policy');
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // document_processing_config - computed: true, optional: false, required: false
  private _documentProcessingConfig = new DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigList(this, "document_processing_config", false);
  public get documentProcessingConfig() {
    return this._documentProcessingConfig;
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

  // industry_vertical - computed: true, optional: false, required: false
  public get industryVertical() {
    return this.getStringAttribute('industry_vertical');
  }

  // kms_key_name - computed: true, optional: false, required: false
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project - computed: false, optional: true, required: false
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

  // skip_default_schema_creation - computed: true, optional: false, required: false
  public get skipDefaultSchemaCreation() {
    return this.getBooleanAttribute('skip_default_schema_creation');
  }

  // solution_types - computed: true, optional: false, required: false
  public get solutionTypes() {
    return this.getListAttribute('solution_types');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_store_id: cdktn.stringToTerraform(this._dataStoreId),
      display_name: cdktn.stringToTerraform(this._displayName),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_store_id: {
        value: cdktn.stringToHclTerraform(this._dataStoreId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
