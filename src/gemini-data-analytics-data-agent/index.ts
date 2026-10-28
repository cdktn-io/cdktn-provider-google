/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GeminiDataAnalyticsDataAgentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Required. The ID to use for the DataAgent, which becomes the final component
  * of the resource name. The ID must start with a lowercase letter and may
  * contain lowercase letters, digits, underscores, and hyphens, up to 63
  * characters in total.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#data_agent_id GeminiDataAnalyticsDataAgent#data_agent_id}
  */
  readonly dataAgentId: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#deletion_policy GeminiDataAnalyticsDataAgent#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Optional. Description of the agent. Must be between 1 and 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#description GeminiDataAnalyticsDataAgent#description}
  */
  readonly description?: string;
  /**
  * Optional. User friendly display name. Must be between 1 and 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#display_name GeminiDataAnalyticsDataAgent#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#id GeminiDataAnalyticsDataAgent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Optional. Customer managed encryption key (CMEK) to use for encrypting the
  * DataAgent resources. Cloud KMS CryptoKeys must reside in the same location
  * as the DataAgent. The expected format is
  * projects/* /locations/* /keyRings/* /cryptoKeys/*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#kms_key GeminiDataAnalyticsDataAgent#kms_key}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly kmsKey?: string;
  /**
  * Optional. Labels to help users filter related agents.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#labels GeminiDataAnalyticsDataAgent#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location of the DataAgent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#location GeminiDataAnalyticsDataAgent#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#project GeminiDataAnalyticsDataAgent#project}
  */
  readonly project?: string;
  /**
  * data_analytics_agent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#data_analytics_agent GeminiDataAnalyticsDataAgent#data_analytics_agent}
  */
  readonly dataAnalyticsAgent?: GeminiDataAnalyticsDataAgentDataAnalyticsAgent;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#timeouts GeminiDataAnalyticsDataAgent#timeouts}
  */
  readonly timeouts?: GeminiDataAnalyticsDataAgentTimeouts;
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferences {
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferences): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferences): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dataset_id - computed: true, optional: false, required: false
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // table_id - computed: true, optional: false, required: false
  public get tableId() {
    return this.getStringAttribute('table_id');
  }
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList extends cdktn.ComplexList {

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
  public get(index: number): GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference {
    return new GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBq {
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBq): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBq): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBq | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBq | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // table_references - computed: true, optional: false, required: false
  private _tableReferences = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList(this, "table_references", false);
  public get tableReferences() {
    return this._tableReferences;
  }
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList extends cdktn.ComplexList {

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
  public get(index: number): GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference {
    return new GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferences {
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferences): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferences): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bq - computed: true, optional: false, required: false
  private _bq = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList(this, "bq", false);
  public get bq() {
    return this._bq;
  }
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList extends cdktn.ComplexList {

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
  public get(index: number): GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference {
    return new GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContext {
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContext): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContext): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // datasource_references - computed: true, optional: false, required: false
  private _datasourceReferences = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList(this, "datasource_references", false);
  public get datasourceReferences() {
    return this._datasourceReferences;
  }

  // system_instruction - computed: true, optional: false, required: false
  public get systemInstruction() {
    return this.getStringAttribute('system_instruction');
  }
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList extends cdktn.ComplexList {

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
  public get(index: number): GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference {
    return new GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqPropertyGraphReferences {
  /**
  * Required. The dataset that the property graph belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#dataset_id GeminiDataAnalyticsDataAgent#dataset_id}
  */
  readonly datasetId: string;
  /**
  * Required. The project that the property graph belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#project_id GeminiDataAnalyticsDataAgent#project_id}
  */
  readonly projectId: string;
  /**
  * Required. The property graph ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#property_graph_id GeminiDataAnalyticsDataAgent#property_graph_id}
  */
  readonly propertyGraphId: string;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqPropertyGraphReferencesToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqPropertyGraphReferences | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dataset_id: cdktn.stringToTerraform(struct!.datasetId),
    project_id: cdktn.stringToTerraform(struct!.projectId),
    property_graph_id: cdktn.stringToTerraform(struct!.propertyGraphId),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqPropertyGraphReferencesToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqPropertyGraphReferences | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dataset_id: {
      value: cdktn.stringToHclTerraform(struct!.datasetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktn.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_graph_id: {
      value: cdktn.stringToHclTerraform(struct!.propertyGraphId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqPropertyGraphReferencesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqPropertyGraphReferences | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._propertyGraphId !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyGraphId = this._propertyGraphId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqPropertyGraphReferences | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasetId = undefined;
      this._projectId = undefined;
      this._propertyGraphId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasetId = value.datasetId;
      this._projectId = value.projectId;
      this._propertyGraphId = value.propertyGraphId;
    }
  }

  // dataset_id - computed: false, optional: false, required: true
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // property_graph_id - computed: false, optional: false, required: true
  private _propertyGraphId?: string; 
  public get propertyGraphId() {
    return this.getStringAttribute('property_graph_id');
  }
  public set propertyGraphId(value: string) {
    this._propertyGraphId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyGraphIdInput() {
    return this._propertyGraphId;
  }
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqPropertyGraphReferencesList extends cdktn.ComplexList {
  public internalValue? : GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqPropertyGraphReferences[] | cdktn.IResolvable

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
  public get(index: number): GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqPropertyGraphReferencesOutputReference {
    return new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqPropertyGraphReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFields {
  /**
  * Optional. Field category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#category GeminiDataAnalyticsDataAgent#category}
  */
  readonly category?: string;
  /**
  * Optional. A brief description of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#description GeminiDataAnalyticsDataAgent#description}
  */
  readonly description?: string;
  /**
  * Optional. The mode of the field (e.g., NULLABLE, REPEATED).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#mode GeminiDataAnalyticsDataAgent#mode}
  */
  readonly mode?: string;
  /**
  * Optional. The name of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#name GeminiDataAnalyticsDataAgent#name}
  */
  readonly name?: string;
  /**
  * Optional. Recursive property for nested schema structures, encoded as a JSON string representing a list of Field objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#subfields GeminiDataAnalyticsDataAgent#subfields}
  */
  readonly subfields?: string;
  /**
  * Optional. A list of alternative names or synonyms that can be used to refer to this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#synonyms GeminiDataAnalyticsDataAgent#synonyms}
  */
  readonly synonyms?: string[];
  /**
  * Optional. A list of tags or keywords associated with the field, used for categorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#tags GeminiDataAnalyticsDataAgent#tags}
  */
  readonly tags?: string[];
  /**
  * Optional. The type of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#type GeminiDataAnalyticsDataAgent#type}
  */
  readonly type?: string;
  /**
  * Optional. Value format of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#value_format GeminiDataAnalyticsDataAgent#value_format}
  */
  readonly valueFormat?: string;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFieldsToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    category: cdktn.stringToTerraform(struct!.category),
    description: cdktn.stringToTerraform(struct!.description),
    mode: cdktn.stringToTerraform(struct!.mode),
    name: cdktn.stringToTerraform(struct!.name),
    subfields: cdktn.stringToTerraform(struct!.subfields),
    synonyms: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.synonyms),
    tags: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.tags),
    type: cdktn.stringToTerraform(struct!.type),
    value_format: cdktn.stringToTerraform(struct!.valueFormat),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFieldsToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    category: {
      value: cdktn.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subfields: {
      value: cdktn.stringToHclTerraform(struct!.subfields),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    synonyms: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.synonyms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_format: {
      value: cdktn.stringToHclTerraform(struct!.valueFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFields | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._subfields !== undefined) {
      hasAnyValues = true;
      internalValueResult.subfields = this._subfields;
    }
    if (this._synonyms !== undefined) {
      hasAnyValues = true;
      internalValueResult.synonyms = this._synonyms;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._valueFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFormat = this._valueFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFields | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._description = undefined;
      this._mode = undefined;
      this._name = undefined;
      this._subfields = undefined;
      this._synonyms = undefined;
      this._tags = undefined;
      this._type = undefined;
      this._valueFormat = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._description = value.description;
      this._mode = value.mode;
      this._name = value.name;
      this._subfields = value.subfields;
      this._synonyms = value.synonyms;
      this._tags = value.tags;
      this._type = value.type;
      this._valueFormat = value.valueFormat;
    }
  }

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // subfields - computed: false, optional: true, required: false
  private _subfields?: string; 
  public get subfields() {
    return this.getStringAttribute('subfields');
  }
  public set subfields(value: string) {
    this._subfields = value;
  }
  public resetSubfields() {
    this._subfields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subfieldsInput() {
    return this._subfields;
  }

  // synonyms - computed: false, optional: true, required: false
  private _synonyms?: string[]; 
  public get synonyms() {
    return this.getListAttribute('synonyms');
  }
  public set synonyms(value: string[]) {
    this._synonyms = value;
  }
  public resetSynonyms() {
    this._synonyms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synonymsInput() {
    return this._synonyms;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
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

  // value_format - computed: false, optional: true, required: false
  private _valueFormat?: string; 
  public get valueFormat() {
    return this.getStringAttribute('value_format');
  }
  public set valueFormat(value: string) {
    this._valueFormat = value;
  }
  public resetValueFormat() {
    this._valueFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFormatInput() {
    return this._valueFormat;
  }
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFieldsList extends cdktn.ComplexList {
  public internalValue? : GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFields[] | cdktn.IResolvable

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
  public get(index: number): GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFieldsOutputReference {
    return new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFilters {
  /**
  * Optional. The field to filter on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#field GeminiDataAnalyticsDataAgent#field}
  */
  readonly field?: string;
  /**
  * Optional. The type of filter present on a datasource, such as ALWAYS_FILTER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#type GeminiDataAnalyticsDataAgent#type}
  */
  readonly type?: string;
  /**
  * Optional. The default value used for this filter if the filter is not overridden in a query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#value GeminiDataAnalyticsDataAgent#value}
  */
  readonly value?: string;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFiltersToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field: cdktn.stringToTerraform(struct!.field),
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFiltersToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field: {
      value: cdktn.stringToHclTerraform(struct!.field),
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

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFiltersList extends cdktn.ComplexList {
  public internalValue? : GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFilters[] | cdktn.IResolvable

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
  public get(index: number): GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFiltersOutputReference {
    return new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchema {
  /**
  * Optional. A textual description of the table's content and purpose.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#description GeminiDataAnalyticsDataAgent#description}
  */
  readonly description?: string;
  /**
  * Optional. Table display name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#display_name GeminiDataAnalyticsDataAgent#display_name}
  */
  readonly displayName?: string;
  /**
  * Optional. A list of alternative names or synonyms that can be used to refer to the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#synonyms GeminiDataAnalyticsDataAgent#synonyms}
  */
  readonly synonyms?: string[];
  /**
  * Optional. A list of tags or keywords associated with the table, used for categorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#tags GeminiDataAnalyticsDataAgent#tags}
  */
  readonly tags?: string[];
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#fields GeminiDataAnalyticsDataAgent#fields}
  */
  readonly fields?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFields[] | cdktn.IResolvable;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#filters GeminiDataAnalyticsDataAgent#filters}
  */
  readonly filters?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFilters[] | cdktn.IResolvable;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    display_name: cdktn.stringToTerraform(struct!.displayName),
    synonyms: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.synonyms),
    tags: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.tags),
    fields: cdktn.listMapper(geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFieldsToTerraform, true)(struct!.fields),
    filters: cdktn.listMapper(geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFiltersToTerraform, true)(struct!.filters),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    synonyms: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.synonyms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    fields: {
      value: cdktn.listMapperHcl(geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFieldsToHclTerraform, true)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFieldsList",
    },
    filters: {
      value: cdktn.listMapperHcl(geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFiltersToHclTerraform, true)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._synonyms !== undefined) {
      hasAnyValues = true;
      internalValueResult.synonyms = this._synonyms;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._displayName = undefined;
      this._synonyms = undefined;
      this._tags = undefined;
      this._fields.internalValue = undefined;
      this._filters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._displayName = value.displayName;
      this._synonyms = value.synonyms;
      this._tags = value.tags;
      this._fields.internalValue = value.fields;
      this._filters.internalValue = value.filters;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // synonyms - computed: false, optional: true, required: false
  private _synonyms?: string[]; 
  public get synonyms() {
    return this.getListAttribute('synonyms');
  }
  public set synonyms(value: string[]) {
    this._synonyms = value;
  }
  public resetSynonyms() {
    this._synonyms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synonymsInput() {
    return this._synonyms;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFields[] | cdktn.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaFilters[] | cdktn.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences {
  /**
  * Required. The dataset that the table belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#dataset_id GeminiDataAnalyticsDataAgent#dataset_id}
  */
  readonly datasetId: string;
  /**
  * Required. The project that the table belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#project_id GeminiDataAnalyticsDataAgent#project_id}
  */
  readonly projectId: string;
  /**
  * Required. The table ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#table_id GeminiDataAnalyticsDataAgent#table_id}
  */
  readonly tableId: string;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#schema GeminiDataAnalyticsDataAgent#schema}
  */
  readonly schema?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchema;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dataset_id: cdktn.stringToTerraform(struct!.datasetId),
    project_id: cdktn.stringToTerraform(struct!.projectId),
    table_id: cdktn.stringToTerraform(struct!.tableId),
    schema: geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaToTerraform(struct!.schema),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dataset_id: {
      value: cdktn.stringToHclTerraform(struct!.datasetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktn.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_id: {
      value: cdktn.stringToHclTerraform(struct!.tableId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema: {
      value: geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._tableId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableId = this._tableId;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasetId = undefined;
      this._projectId = undefined;
      this._tableId = undefined;
      this._schema.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasetId = value.datasetId;
      this._projectId = value.projectId;
      this._tableId = value.tableId;
      this._schema.internalValue = value.schema;
    }
  }

  // dataset_id - computed: false, optional: false, required: true
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // table_id - computed: false, optional: false, required: true
  private _tableId?: string; 
  public get tableId() {
    return this.getStringAttribute('table_id');
  }
  public set tableId(value: string) {
    this._tableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableIdInput() {
    return this._tableId;
  }

  // schema - computed: false, optional: true, required: false
  private _schema = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesSchema) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList extends cdktn.ComplexList {
  public internalValue? : GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences[] | cdktn.IResolvable

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
  public get(index: number): GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference {
    return new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq {
  /**
  * property_graph_references block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#property_graph_references GeminiDataAnalyticsDataAgent#property_graph_references}
  */
  readonly propertyGraphReferences?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqPropertyGraphReferences[] | cdktn.IResolvable;
  /**
  * table_references block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#table_references GeminiDataAnalyticsDataAgent#table_references}
  */
  readonly tableReferences?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences[] | cdktn.IResolvable;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    property_graph_references: cdktn.listMapper(geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqPropertyGraphReferencesToTerraform, true)(struct!.propertyGraphReferences),
    table_references: cdktn.listMapper(geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesToTerraform, true)(struct!.tableReferences),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    property_graph_references: {
      value: cdktn.listMapperHcl(geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqPropertyGraphReferencesToHclTerraform, true)(struct!.propertyGraphReferences),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqPropertyGraphReferencesList",
    },
    table_references: {
      value: cdktn.listMapperHcl(geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesToHclTerraform, true)(struct!.tableReferences),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._propertyGraphReferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyGraphReferences = this._propertyGraphReferences?.internalValue;
    }
    if (this._tableReferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableReferences = this._tableReferences?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._propertyGraphReferences.internalValue = undefined;
      this._tableReferences.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._propertyGraphReferences.internalValue = value.propertyGraphReferences;
      this._tableReferences.internalValue = value.tableReferences;
    }
  }

  // property_graph_references - computed: false, optional: true, required: false
  private _propertyGraphReferences = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqPropertyGraphReferencesList(this, "property_graph_references", false);
  public get propertyGraphReferences() {
    return this._propertyGraphReferences;
  }
  public putPropertyGraphReferences(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqPropertyGraphReferences[] | cdktn.IResolvable) {
    this._propertyGraphReferences.internalValue = value;
  }
  public resetPropertyGraphReferences() {
    this._propertyGraphReferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyGraphReferencesInput() {
    return this._propertyGraphReferences.internalValue;
  }

  // table_references - computed: false, optional: true, required: false
  private _tableReferences = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList(this, "table_references", false);
  public get tableReferences() {
    return this._tableReferences;
  }
  public putTableReferences(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences[] | cdktn.IResolvable) {
    this._tableReferences.internalValue = value;
  }
  public resetTableReferences() {
    this._tableReferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableReferencesInput() {
    return this._tableReferences.internalValue;
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfo {
  /**
  * Optional. The Looker instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#looker_instance_id GeminiDataAnalyticsDataAgent#looker_instance_id}
  */
  readonly lookerInstanceId?: string;
  /**
  * Optional. The service directory name of the Looker instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#service_directory_name GeminiDataAnalyticsDataAgent#service_directory_name}
  */
  readonly serviceDirectoryName?: string;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfoToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfoOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    looker_instance_id: cdktn.stringToTerraform(struct!.lookerInstanceId),
    service_directory_name: cdktn.stringToTerraform(struct!.serviceDirectoryName),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfoToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfoOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    looker_instance_id: {
      value: cdktn.stringToHclTerraform(struct!.lookerInstanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_directory_name: {
      value: cdktn.stringToHclTerraform(struct!.serviceDirectoryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lookerInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookerInstanceId = this._lookerInstanceId;
    }
    if (this._serviceDirectoryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDirectoryName = this._serviceDirectoryName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lookerInstanceId = undefined;
      this._serviceDirectoryName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lookerInstanceId = value.lookerInstanceId;
      this._serviceDirectoryName = value.serviceDirectoryName;
    }
  }

  // looker_instance_id - computed: false, optional: true, required: false
  private _lookerInstanceId?: string; 
  public get lookerInstanceId() {
    return this.getStringAttribute('looker_instance_id');
  }
  public set lookerInstanceId(value: string) {
    this._lookerInstanceId = value;
  }
  public resetLookerInstanceId() {
    this._lookerInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookerInstanceIdInput() {
    return this._lookerInstanceId;
  }

  // service_directory_name - computed: false, optional: true, required: false
  private _serviceDirectoryName?: string; 
  public get serviceDirectoryName() {
    return this.getStringAttribute('service_directory_name');
  }
  public set serviceDirectoryName(value: string) {
    this._serviceDirectoryName = value;
  }
  public resetServiceDirectoryName() {
    this._serviceDirectoryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDirectoryNameInput() {
    return this._serviceDirectoryName;
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFields {
  /**
  * Optional. Field category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#category GeminiDataAnalyticsDataAgent#category}
  */
  readonly category?: string;
  /**
  * Optional. A brief description of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#description GeminiDataAnalyticsDataAgent#description}
  */
  readonly description?: string;
  /**
  * Optional. The mode of the field (e.g., NULLABLE, REPEATED).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#mode GeminiDataAnalyticsDataAgent#mode}
  */
  readonly mode?: string;
  /**
  * Optional. The name of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#name GeminiDataAnalyticsDataAgent#name}
  */
  readonly name?: string;
  /**
  * Optional. Recursive property for nested schema structures, encoded as a JSON string representing a list of Field objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#subfields GeminiDataAnalyticsDataAgent#subfields}
  */
  readonly subfields?: string;
  /**
  * Optional. A list of alternative names or synonyms that can be used to refer to this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#synonyms GeminiDataAnalyticsDataAgent#synonyms}
  */
  readonly synonyms?: string[];
  /**
  * Optional. A list of tags or keywords associated with the field, used for categorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#tags GeminiDataAnalyticsDataAgent#tags}
  */
  readonly tags?: string[];
  /**
  * Optional. The type of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#type GeminiDataAnalyticsDataAgent#type}
  */
  readonly type?: string;
  /**
  * Optional. Value format of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#value_format GeminiDataAnalyticsDataAgent#value_format}
  */
  readonly valueFormat?: string;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFieldsToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    category: cdktn.stringToTerraform(struct!.category),
    description: cdktn.stringToTerraform(struct!.description),
    mode: cdktn.stringToTerraform(struct!.mode),
    name: cdktn.stringToTerraform(struct!.name),
    subfields: cdktn.stringToTerraform(struct!.subfields),
    synonyms: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.synonyms),
    tags: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.tags),
    type: cdktn.stringToTerraform(struct!.type),
    value_format: cdktn.stringToTerraform(struct!.valueFormat),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFieldsToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    category: {
      value: cdktn.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subfields: {
      value: cdktn.stringToHclTerraform(struct!.subfields),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    synonyms: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.synonyms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_format: {
      value: cdktn.stringToHclTerraform(struct!.valueFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFields | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._subfields !== undefined) {
      hasAnyValues = true;
      internalValueResult.subfields = this._subfields;
    }
    if (this._synonyms !== undefined) {
      hasAnyValues = true;
      internalValueResult.synonyms = this._synonyms;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._valueFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFormat = this._valueFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFields | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._description = undefined;
      this._mode = undefined;
      this._name = undefined;
      this._subfields = undefined;
      this._synonyms = undefined;
      this._tags = undefined;
      this._type = undefined;
      this._valueFormat = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._description = value.description;
      this._mode = value.mode;
      this._name = value.name;
      this._subfields = value.subfields;
      this._synonyms = value.synonyms;
      this._tags = value.tags;
      this._type = value.type;
      this._valueFormat = value.valueFormat;
    }
  }

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // subfields - computed: false, optional: true, required: false
  private _subfields?: string; 
  public get subfields() {
    return this.getStringAttribute('subfields');
  }
  public set subfields(value: string) {
    this._subfields = value;
  }
  public resetSubfields() {
    this._subfields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subfieldsInput() {
    return this._subfields;
  }

  // synonyms - computed: false, optional: true, required: false
  private _synonyms?: string[]; 
  public get synonyms() {
    return this.getListAttribute('synonyms');
  }
  public set synonyms(value: string[]) {
    this._synonyms = value;
  }
  public resetSynonyms() {
    this._synonyms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synonymsInput() {
    return this._synonyms;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
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

  // value_format - computed: false, optional: true, required: false
  private _valueFormat?: string; 
  public get valueFormat() {
    return this.getStringAttribute('value_format');
  }
  public set valueFormat(value: string) {
    this._valueFormat = value;
  }
  public resetValueFormat() {
    this._valueFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFormatInput() {
    return this._valueFormat;
  }
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFieldsList extends cdktn.ComplexList {
  public internalValue? : GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFields[] | cdktn.IResolvable

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
  public get(index: number): GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFieldsOutputReference {
    return new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFilters {
  /**
  * Optional. The field to filter on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#field GeminiDataAnalyticsDataAgent#field}
  */
  readonly field?: string;
  /**
  * Optional. The type of filter present on a datasource, such as ALWAYS_FILTER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#type GeminiDataAnalyticsDataAgent#type}
  */
  readonly type?: string;
  /**
  * Optional. The default value used for this filter if the filter is not overridden in a query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#value GeminiDataAnalyticsDataAgent#value}
  */
  readonly value?: string;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFiltersToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field: cdktn.stringToTerraform(struct!.field),
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFiltersToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field: {
      value: cdktn.stringToHclTerraform(struct!.field),
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

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFiltersList extends cdktn.ComplexList {
  public internalValue? : GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFilters[] | cdktn.IResolvable

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
  public get(index: number): GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFiltersOutputReference {
    return new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchema {
  /**
  * Optional. A textual description of the explore's content and purpose.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#description GeminiDataAnalyticsDataAgent#description}
  */
  readonly description?: string;
  /**
  * Optional. Explore display name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#display_name GeminiDataAnalyticsDataAgent#display_name}
  */
  readonly displayName?: string;
  /**
  * Optional. A list of alternative names or synonyms that can be used to refer to the explore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#synonyms GeminiDataAnalyticsDataAgent#synonyms}
  */
  readonly synonyms?: string[];
  /**
  * Optional. A list of tags or keywords associated with the explore, used for categorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#tags GeminiDataAnalyticsDataAgent#tags}
  */
  readonly tags?: string[];
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#fields GeminiDataAnalyticsDataAgent#fields}
  */
  readonly fields?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFields[] | cdktn.IResolvable;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#filters GeminiDataAnalyticsDataAgent#filters}
  */
  readonly filters?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFilters[] | cdktn.IResolvable;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    display_name: cdktn.stringToTerraform(struct!.displayName),
    synonyms: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.synonyms),
    tags: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.tags),
    fields: cdktn.listMapper(geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFieldsToTerraform, true)(struct!.fields),
    filters: cdktn.listMapper(geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFiltersToTerraform, true)(struct!.filters),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    synonyms: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.synonyms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    fields: {
      value: cdktn.listMapperHcl(geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFieldsToHclTerraform, true)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFieldsList",
    },
    filters: {
      value: cdktn.listMapperHcl(geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFiltersToHclTerraform, true)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._synonyms !== undefined) {
      hasAnyValues = true;
      internalValueResult.synonyms = this._synonyms;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._displayName = undefined;
      this._synonyms = undefined;
      this._tags = undefined;
      this._fields.internalValue = undefined;
      this._filters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._displayName = value.displayName;
      this._synonyms = value.synonyms;
      this._tags = value.tags;
      this._fields.internalValue = value.fields;
      this._filters.internalValue = value.filters;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // synonyms - computed: false, optional: true, required: false
  private _synonyms?: string[]; 
  public get synonyms() {
    return this.getListAttribute('synonyms');
  }
  public set synonyms(value: string[]) {
    this._synonyms = value;
  }
  public resetSynonyms() {
    this._synonyms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synonymsInput() {
    return this._synonyms;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFields[] | cdktn.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaFilters[] | cdktn.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferences {
  /**
  * Required. Name of the LookML Explore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#explore GeminiDataAnalyticsDataAgent#explore}
  */
  readonly explore: string;
  /**
  * Optional. The base URL of the Looker instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#looker_instance_uri GeminiDataAnalyticsDataAgent#looker_instance_uri}
  */
  readonly lookerInstanceUri?: string;
  /**
  * Required. Name of the LookML model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#lookml_model GeminiDataAnalyticsDataAgent#lookml_model}
  */
  readonly lookmlModel: string;
  /**
  * private_looker_instance_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#private_looker_instance_info GeminiDataAnalyticsDataAgent#private_looker_instance_info}
  */
  readonly privateLookerInstanceInfo?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfo;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#schema GeminiDataAnalyticsDataAgent#schema}
  */
  readonly schema?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchema;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferences | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    explore: cdktn.stringToTerraform(struct!.explore),
    looker_instance_uri: cdktn.stringToTerraform(struct!.lookerInstanceUri),
    lookml_model: cdktn.stringToTerraform(struct!.lookmlModel),
    private_looker_instance_info: geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfoToTerraform(struct!.privateLookerInstanceInfo),
    schema: geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaToTerraform(struct!.schema),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferences | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    explore: {
      value: cdktn.stringToHclTerraform(struct!.explore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    looker_instance_uri: {
      value: cdktn.stringToHclTerraform(struct!.lookerInstanceUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lookml_model: {
      value: cdktn.stringToHclTerraform(struct!.lookmlModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_looker_instance_info: {
      value: geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfoToHclTerraform(struct!.privateLookerInstanceInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfoList",
    },
    schema: {
      value: geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferences | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._explore !== undefined) {
      hasAnyValues = true;
      internalValueResult.explore = this._explore;
    }
    if (this._lookerInstanceUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookerInstanceUri = this._lookerInstanceUri;
    }
    if (this._lookmlModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookmlModel = this._lookmlModel;
    }
    if (this._privateLookerInstanceInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateLookerInstanceInfo = this._privateLookerInstanceInfo?.internalValue;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferences | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._explore = undefined;
      this._lookerInstanceUri = undefined;
      this._lookmlModel = undefined;
      this._privateLookerInstanceInfo.internalValue = undefined;
      this._schema.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._explore = value.explore;
      this._lookerInstanceUri = value.lookerInstanceUri;
      this._lookmlModel = value.lookmlModel;
      this._privateLookerInstanceInfo.internalValue = value.privateLookerInstanceInfo;
      this._schema.internalValue = value.schema;
    }
  }

  // explore - computed: false, optional: false, required: true
  private _explore?: string; 
  public get explore() {
    return this.getStringAttribute('explore');
  }
  public set explore(value: string) {
    this._explore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exploreInput() {
    return this._explore;
  }

  // looker_instance_uri - computed: false, optional: true, required: false
  private _lookerInstanceUri?: string; 
  public get lookerInstanceUri() {
    return this.getStringAttribute('looker_instance_uri');
  }
  public set lookerInstanceUri(value: string) {
    this._lookerInstanceUri = value;
  }
  public resetLookerInstanceUri() {
    this._lookerInstanceUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookerInstanceUriInput() {
    return this._lookerInstanceUri;
  }

  // lookml_model - computed: false, optional: false, required: true
  private _lookmlModel?: string; 
  public get lookmlModel() {
    return this.getStringAttribute('lookml_model');
  }
  public set lookmlModel(value: string) {
    this._lookmlModel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lookmlModelInput() {
    return this._lookmlModel;
  }

  // private_looker_instance_info - computed: false, optional: true, required: false
  private _privateLookerInstanceInfo = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfoOutputReference(this, "private_looker_instance_info");
  public get privateLookerInstanceInfo() {
    return this._privateLookerInstanceInfo;
  }
  public putPrivateLookerInstanceInfo(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfo) {
    this._privateLookerInstanceInfo.internalValue = value;
  }
  public resetPrivateLookerInstanceInfo() {
    this._privateLookerInstanceInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLookerInstanceInfoInput() {
    return this._privateLookerInstanceInfo.internalValue;
  }

  // schema - computed: false, optional: true, required: false
  private _schema = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesSchema) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesList extends cdktn.ComplexList {
  public internalValue? : GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferences[] | cdktn.IResolvable

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
  public get(index: number): GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesOutputReference {
    return new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLooker {
  /**
  * explore_references block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#explore_references GeminiDataAnalyticsDataAgent#explore_references}
  */
  readonly exploreReferences: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferences[] | cdktn.IResolvable;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLooker): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    explore_references: cdktn.listMapper(geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesToTerraform, true)(struct!.exploreReferences),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLooker): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    explore_references: {
      value: cdktn.listMapperHcl(geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesToHclTerraform, true)(struct!.exploreReferences),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLooker | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exploreReferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exploreReferences = this._exploreReferences?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLooker | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exploreReferences.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exploreReferences.internalValue = value.exploreReferences;
    }
  }

  // explore_references - computed: false, optional: false, required: true
  private _exploreReferences = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferencesList(this, "explore_references", false);
  public get exploreReferences() {
    return this._exploreReferences;
  }
  public putExploreReferences(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerExploreReferences[] | cdktn.IResolvable) {
    this._exploreReferences.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exploreReferencesInput() {
    return this._exploreReferences.internalValue;
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudioStudioReferences {
  /**
  * Required. The ID of the datasource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#datasource_id GeminiDataAnalyticsDataAgent#datasource_id}
  */
  readonly datasourceId: string;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudioStudioReferencesToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudioStudioReferences | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    datasource_id: cdktn.stringToTerraform(struct!.datasourceId),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudioStudioReferencesToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudioStudioReferences | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    datasource_id: {
      value: cdktn.stringToHclTerraform(struct!.datasourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudioStudioReferencesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudioStudioReferences | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasourceId = this._datasourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudioStudioReferences | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasourceId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasourceId = value.datasourceId;
    }
  }

  // datasource_id - computed: false, optional: false, required: true
  private _datasourceId?: string; 
  public get datasourceId() {
    return this.getStringAttribute('datasource_id');
  }
  public set datasourceId(value: string) {
    this._datasourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceIdInput() {
    return this._datasourceId;
  }
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudioStudioReferencesList extends cdktn.ComplexList {
  public internalValue? : GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudioStudioReferences[] | cdktn.IResolvable

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
  public get(index: number): GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudioStudioReferencesOutputReference {
    return new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudioStudioReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudio {
  /**
  * studio_references block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#studio_references GeminiDataAnalyticsDataAgent#studio_references}
  */
  readonly studioReferences?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudioStudioReferences[] | cdktn.IResolvable;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudioToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudioOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudio): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    studio_references: cdktn.listMapper(geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudioStudioReferencesToTerraform, true)(struct!.studioReferences),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudioToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudioOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudio): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    studio_references: {
      value: cdktn.listMapperHcl(geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudioStudioReferencesToHclTerraform, true)(struct!.studioReferences),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudioStudioReferencesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudioOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudio | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._studioReferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.studioReferences = this._studioReferences?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudio | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._studioReferences.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._studioReferences.internalValue = value.studioReferences;
    }
  }

  // studio_references - computed: false, optional: true, required: false
  private _studioReferences = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudioStudioReferencesList(this, "studio_references", false);
  public get studioReferences() {
    return this._studioReferences;
  }
  public putStudioReferences(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudioStudioReferences[] | cdktn.IResolvable) {
    this._studioReferences.internalValue = value;
  }
  public resetStudioReferences() {
    this._studioReferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get studioReferencesInput() {
    return this._studioReferences.internalValue;
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences {
  /**
  * bq block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#bq GeminiDataAnalyticsDataAgent#bq}
  */
  readonly bq?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq;
  /**
  * looker block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#looker GeminiDataAnalyticsDataAgent#looker}
  */
  readonly looker?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLooker;
  /**
  * studio block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#studio GeminiDataAnalyticsDataAgent#studio}
  */
  readonly studio?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudio;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bq: geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqToTerraform(struct!.bq),
    looker: geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerToTerraform(struct!.looker),
    studio: geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudioToTerraform(struct!.studio),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bq: {
      value: geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqToHclTerraform(struct!.bq),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqList",
    },
    looker: {
      value: geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerToHclTerraform(struct!.looker),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerList",
    },
    studio: {
      value: geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudioToHclTerraform(struct!.studio),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudioList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bq?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bq = this._bq?.internalValue;
    }
    if (this._looker?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.looker = this._looker?.internalValue;
    }
    if (this._studio?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.studio = this._studio?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bq.internalValue = undefined;
      this._looker.internalValue = undefined;
      this._studio.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bq.internalValue = value.bq;
      this._looker.internalValue = value.looker;
      this._studio.internalValue = value.studio;
    }
  }

  // bq - computed: false, optional: true, required: false
  private _bq = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference(this, "bq");
  public get bq() {
    return this._bq;
  }
  public putBq(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq) {
    this._bq.internalValue = value;
  }
  public resetBq() {
    this._bq.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bqInput() {
    return this._bq.internalValue;
  }

  // looker - computed: false, optional: true, required: false
  private _looker = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLookerOutputReference(this, "looker");
  public get looker() {
    return this._looker;
  }
  public putLooker(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesLooker) {
    this._looker.internalValue = value;
  }
  public resetLooker() {
    this._looker.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookerInput() {
    return this._looker.internalValue;
  }

  // studio - computed: false, optional: true, required: false
  private _studio = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudioOutputReference(this, "studio");
  public get studio() {
    return this._studio;
  }
  public putStudio(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesStudio) {
    this._studio.internalValue = value;
  }
  public resetStudio() {
    this._studio.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get studioInput() {
    return this._studio.internalValue;
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesParameters {
  /**
  * Required. The data type of the parameter, e.g. "STRING", "INT64", "DATE".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#data_type GeminiDataAnalyticsDataAgent#data_type}
  */
  readonly dataType: string;
  /**
  * Optional. The description of the parameter that can be used by the LLM to extract the parameter value from the user question.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#description GeminiDataAnalyticsDataAgent#description}
  */
  readonly description?: string;
  /**
  * Required. The name of the parameter reference in the SQL query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#name GeminiDataAnalyticsDataAgent#name}
  */
  readonly name: string;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesParametersToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_type: cdktn.stringToTerraform(struct!.dataType),
    description: cdktn.stringToTerraform(struct!.description),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesParametersToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_type: {
      value: cdktn.stringToHclTerraform(struct!.dataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataType = undefined;
      this._description = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataType = value.dataType;
      this._description = value.description;
      this._name = value.name;
    }
  }

  // data_type - computed: false, optional: false, required: true
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesParametersList extends cdktn.ComplexList {
  public internalValue? : GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesParameters[] | cdktn.IResolvable

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
  public get(index: number): GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesParametersOutputReference {
    return new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries {
  /**
  * Optional. A natural language question that a user might ask.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#natural_language_question GeminiDataAnalyticsDataAgent#natural_language_question}
  */
  readonly naturalLanguageQuestion?: string;
  /**
  * Optional. The SQL query that should be generated to answer
  * the natural language question.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#sql_query GeminiDataAnalyticsDataAgent#sql_query}
  */
  readonly sqlQuery?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#parameters GeminiDataAnalyticsDataAgent#parameters}
  */
  readonly parameters?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesParameters[] | cdktn.IResolvable;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    natural_language_question: cdktn.stringToTerraform(struct!.naturalLanguageQuestion),
    sql_query: cdktn.stringToTerraform(struct!.sqlQuery),
    parameters: cdktn.listMapper(geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesParametersToTerraform, true)(struct!.parameters),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    natural_language_question: {
      value: cdktn.stringToHclTerraform(struct!.naturalLanguageQuestion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sql_query: {
      value: cdktn.stringToHclTerraform(struct!.sqlQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktn.listMapperHcl(geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesParametersToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._naturalLanguageQuestion !== undefined) {
      hasAnyValues = true;
      internalValueResult.naturalLanguageQuestion = this._naturalLanguageQuestion;
    }
    if (this._sqlQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlQuery = this._sqlQuery;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._naturalLanguageQuestion = undefined;
      this._sqlQuery = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._naturalLanguageQuestion = value.naturalLanguageQuestion;
      this._sqlQuery = value.sqlQuery;
      this._parameters.internalValue = value.parameters;
    }
  }

  // natural_language_question - computed: false, optional: true, required: false
  private _naturalLanguageQuestion?: string; 
  public get naturalLanguageQuestion() {
    return this.getStringAttribute('natural_language_question');
  }
  public set naturalLanguageQuestion(value: string) {
    this._naturalLanguageQuestion = value;
  }
  public resetNaturalLanguageQuestion() {
    this._naturalLanguageQuestion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get naturalLanguageQuestionInput() {
    return this._naturalLanguageQuestion;
  }

  // sql_query - computed: false, optional: true, required: false
  private _sqlQuery?: string; 
  public get sqlQuery() {
    return this.getStringAttribute('sql_query');
  }
  public set sqlQuery(value: string) {
    this._sqlQuery = value;
  }
  public resetSqlQuery() {
    this._sqlQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlQueryInput() {
    return this._sqlQuery;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesParameters[] | cdktn.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList extends cdktn.ComplexList {
  public internalValue? : GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries[] | cdktn.IResolvable

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
  public get(index: number): GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference {
    return new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms {
  /**
  * Required. The description or meaning of the term.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#description GeminiDataAnalyticsDataAgent#description}
  */
  readonly description: string;
  /**
  * Required. User friendly display name of the glossary term.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#display_name GeminiDataAnalyticsDataAgent#display_name}
  */
  readonly displayName: string;
  /**
  * Optional. A list of general purpose labels associated with this term.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#labels GeminiDataAnalyticsDataAgent#labels}
  */
  readonly labels?: string[];
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    display_name: cdktn.stringToTerraform(struct!.displayName),
    labels: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.labels),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.labels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._displayName = undefined;
      this._labels = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._displayName = value.displayName;
      this._labels = value.labels;
    }
  }

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

  // labels - computed: false, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return this.getListAttribute('labels');
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList extends cdktn.ComplexList {
  public internalValue? : GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms[] | cdktn.IResolvable

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
  public get(index: number): GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference {
    return new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQueryFilters {
  /**
  * Required. The field to filter on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#field GeminiDataAnalyticsDataAgent#field}
  */
  readonly field: string;
  /**
  * Optional. The value for the field to filter on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#value GeminiDataAnalyticsDataAgent#value}
  */
  readonly value?: string;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQueryFiltersToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQueryFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field: cdktn.stringToTerraform(struct!.field),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQueryFiltersToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQueryFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field: {
      value: cdktn.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQueryFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQueryFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQueryFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._value = value.value;
    }
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQueryFiltersList extends cdktn.ComplexList {
  public internalValue? : GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQueryFilters[] | cdktn.IResolvable

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
  public get(index: number): GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQueryFiltersOutputReference {
    return new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQueryFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQuery {
  /**
  * Optional. The short alphanumeric identifier for the query, used for share links and Explore URLs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#client_id GeminiDataAnalyticsDataAgent#client_id}
  */
  readonly clientId?: string;
  /**
  * Required. The LookML explore used to generate the query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#explore GeminiDataAnalyticsDataAgent#explore}
  */
  readonly explore: string;
  /**
  * Optional. The fields to retrieve from the explore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#fields GeminiDataAnalyticsDataAgent#fields}
  */
  readonly fields?: string[];
  /**
  * Optional. Limit in the query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#limit GeminiDataAnalyticsDataAgent#limit}
  */
  readonly limit?: string;
  /**
  * Required. The LookML model used to generate the query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#model GeminiDataAnalyticsDataAgent#model}
  */
  readonly model: string;
  /**
  * Optional. The primary identifier for the query resource in Looker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#query_id GeminiDataAnalyticsDataAgent#query_id}
  */
  readonly queryId?: string;
  /**
  * Optional. The sorts to apply to the explore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#sorts GeminiDataAnalyticsDataAgent#sorts}
  */
  readonly sorts?: string[];
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#filters GeminiDataAnalyticsDataAgent#filters}
  */
  readonly filters?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQueryFilters[] | cdktn.IResolvable;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQueryToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQueryOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    explore: cdktn.stringToTerraform(struct!.explore),
    fields: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.fields),
    limit: cdktn.stringToTerraform(struct!.limit),
    model: cdktn.stringToTerraform(struct!.model),
    query_id: cdktn.stringToTerraform(struct!.queryId),
    sorts: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sorts),
    filters: cdktn.listMapper(geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQueryFiltersToTerraform, true)(struct!.filters),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQueryToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQueryOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    explore: {
      value: cdktn.stringToHclTerraform(struct!.explore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fields: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.fields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    limit: {
      value: cdktn.stringToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model: {
      value: cdktn.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_id: {
      value: cdktn.stringToHclTerraform(struct!.queryId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sorts: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sorts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    filters: {
      value: cdktn.listMapperHcl(geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQueryFiltersToHclTerraform, true)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQueryFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._explore !== undefined) {
      hasAnyValues = true;
      internalValueResult.explore = this._explore;
    }
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._queryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryId = this._queryId;
    }
    if (this._sorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.sorts = this._sorts;
    }
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._explore = undefined;
      this._fields = undefined;
      this._limit = undefined;
      this._model = undefined;
      this._queryId = undefined;
      this._sorts = undefined;
      this._filters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._explore = value.explore;
      this._fields = value.fields;
      this._limit = value.limit;
      this._model = value.model;
      this._queryId = value.queryId;
      this._sorts = value.sorts;
      this._filters.internalValue = value.filters;
    }
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // explore - computed: false, optional: false, required: true
  private _explore?: string; 
  public get explore() {
    return this.getStringAttribute('explore');
  }
  public set explore(value: string) {
    this._explore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exploreInput() {
    return this._explore;
  }

  // fields - computed: false, optional: true, required: false
  private _fields?: string[]; 
  public get fields() {
    return this.getListAttribute('fields');
  }
  public set fields(value: string[]) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: string; 
  public get limit() {
    return this.getStringAttribute('limit');
  }
  public set limit(value: string) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // model - computed: false, optional: false, required: true
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // query_id - computed: false, optional: true, required: false
  private _queryId?: string; 
  public get queryId() {
    return this.getStringAttribute('query_id');
  }
  public set queryId(value: string) {
    this._queryId = value;
  }
  public resetQueryId() {
    this._queryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryIdInput() {
    return this._queryId;
  }

  // sorts - computed: false, optional: true, required: false
  private _sorts?: string[]; 
  public get sorts() {
    return this.getListAttribute('sorts');
  }
  public set sorts(value: string[]) {
    this._sorts = value;
  }
  public resetSorts() {
    this._sorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortsInput() {
    return this._sorts;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQueryFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQueryFilters[] | cdktn.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueries {
  /**
  * Optional. Natural language questions that a user might ask.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#natural_language_questions GeminiDataAnalyticsDataAgent#natural_language_questions}
  */
  readonly naturalLanguageQuestions?: string[];
  /**
  * looker_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#looker_query GeminiDataAnalyticsDataAgent#looker_query}
  */
  readonly lookerQuery?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQuery;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueries | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    natural_language_questions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.naturalLanguageQuestions),
    looker_query: geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQueryToTerraform(struct!.lookerQuery),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueries | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    natural_language_questions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.naturalLanguageQuestions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    looker_query: {
      value: geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQueryToHclTerraform(struct!.lookerQuery),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueries | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._naturalLanguageQuestions !== undefined) {
      hasAnyValues = true;
      internalValueResult.naturalLanguageQuestions = this._naturalLanguageQuestions;
    }
    if (this._lookerQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookerQuery = this._lookerQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueries | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._naturalLanguageQuestions = undefined;
      this._lookerQuery.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._naturalLanguageQuestions = value.naturalLanguageQuestions;
      this._lookerQuery.internalValue = value.lookerQuery;
    }
  }

  // natural_language_questions - computed: false, optional: true, required: false
  private _naturalLanguageQuestions?: string[]; 
  public get naturalLanguageQuestions() {
    return this.getListAttribute('natural_language_questions');
  }
  public set naturalLanguageQuestions(value: string[]) {
    this._naturalLanguageQuestions = value;
  }
  public resetNaturalLanguageQuestions() {
    this._naturalLanguageQuestions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get naturalLanguageQuestionsInput() {
    return this._naturalLanguageQuestions;
  }

  // looker_query - computed: false, optional: true, required: false
  private _lookerQuery = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQueryOutputReference(this, "looker_query");
  public get lookerQuery() {
    return this._lookerQuery;
  }
  public putLookerQuery(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesLookerQuery) {
    this._lookerQuery.internalValue = value;
  }
  public resetLookerQuery() {
    this._lookerQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookerQueryInput() {
    return this._lookerQuery.internalValue;
  }
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesList extends cdktn.ComplexList {
  public internalValue? : GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueries[] | cdktn.IResolvable

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
  public get(index: number): GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesOutputReference {
    return new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython {
  /**
  * Optional. Whether to enable Python analysis. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#enabled GeminiDataAnalyticsDataAgent#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis {
  /**
  * python block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#python GeminiDataAnalyticsDataAgent#python}
  */
  readonly python?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    python: geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonToTerraform(struct!.python),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    python: {
      value: geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonToHclTerraform(struct!.python),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._python?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.python = this._python?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._python.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._python.internalValue = value.python;
    }
  }

  // python - computed: false, optional: true, required: false
  private _python = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference(this, "python");
  public get python() {
    return this._python;
  }
  public putPython(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython) {
    this._python.internalValue = value;
  }
  public resetPython() {
    this._python.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonInput() {
    return this._python.internalValue;
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource {
  /**
  * Optional. Limits the bytes billed for each BigQuery query job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#big_query_max_billed_bytes GeminiDataAnalyticsDataAgent#big_query_max_billed_bytes}
  */
  readonly bigQueryMaxBilledBytes?: number;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    big_query_max_billed_bytes: cdktn.numberToTerraform(struct!.bigQueryMaxBilledBytes),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    big_query_max_billed_bytes: {
      value: cdktn.numberToHclTerraform(struct!.bigQueryMaxBilledBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bigQueryMaxBilledBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigQueryMaxBilledBytes = this._bigQueryMaxBilledBytes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bigQueryMaxBilledBytes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bigQueryMaxBilledBytes = value.bigQueryMaxBilledBytes;
    }
  }

  // big_query_max_billed_bytes - computed: false, optional: true, required: false
  private _bigQueryMaxBilledBytes?: number; 
  public get bigQueryMaxBilledBytes() {
    return this.getNumberAttribute('big_query_max_billed_bytes');
  }
  public set bigQueryMaxBilledBytes(value: number) {
    this._bigQueryMaxBilledBytes = value;
  }
  public resetBigQueryMaxBilledBytes() {
    this._bigQueryMaxBilledBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigQueryMaxBilledBytesInput() {
    return this._bigQueryMaxBilledBytes;
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions {
  /**
  * Optional. The model to use for the agent loop.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#model GeminiDataAnalyticsDataAgent#model}
  */
  readonly model?: string;
  /**
  * analysis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#analysis GeminiDataAnalyticsDataAgent#analysis}
  */
  readonly analysis?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis;
  /**
  * datasource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#datasource GeminiDataAnalyticsDataAgent#datasource}
  */
  readonly datasource?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    model: cdktn.stringToTerraform(struct!.model),
    analysis: geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisToTerraform(struct!.analysis),
    datasource: geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceToTerraform(struct!.datasource),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    model: {
      value: cdktn.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    analysis: {
      value: geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisToHclTerraform(struct!.analysis),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisList",
    },
    datasource: {
      value: geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceToHclTerraform(struct!.datasource),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._analysis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.analysis = this._analysis?.internalValue;
    }
    if (this._datasource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._model = undefined;
      this._analysis.internalValue = undefined;
      this._datasource.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._model = value.model;
      this._analysis.internalValue = value.analysis;
      this._datasource.internalValue = value.datasource;
    }
  }

  // model - computed: true, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // analysis - computed: false, optional: true, required: false
  private _analysis = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference(this, "analysis");
  public get analysis() {
    return this._analysis;
  }
  public putAnalysis(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis) {
    this._analysis.internalValue = value;
  }
  public resetAnalysis() {
    this._analysis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisInput() {
    return this._analysis.internalValue;
  }

  // datasource - computed: false, optional: true, required: false
  private _datasource = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference(this, "datasource");
  public get datasource() {
    return this._datasource;
  }
  public putDatasource(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource) {
    this._datasource.internalValue = value;
  }
  public resetDatasource() {
    this._datasource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource.internalValue;
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths {
  /**
  * Required. The ordered list of paths within the table schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#paths GeminiDataAnalyticsDataAgent#paths}
  */
  readonly paths: string[];
  /**
  * Required. The service-qualified full resource name of the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#table_fqn GeminiDataAnalyticsDataAgent#table_fqn}
  */
  readonly tableFqn: string;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    paths: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.paths),
    table_fqn: cdktn.stringToTerraform(struct!.tableFqn),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    paths: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.paths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    table_fqn: {
      value: cdktn.stringToHclTerraform(struct!.tableFqn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._paths !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths;
    }
    if (this._tableFqn !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableFqn = this._tableFqn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._paths = undefined;
      this._tableFqn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._paths = value.paths;
      this._tableFqn = value.tableFqn;
    }
  }

  // paths - computed: false, optional: false, required: true
  private _paths?: string[]; 
  public get paths() {
    return this.getListAttribute('paths');
  }
  public set paths(value: string[]) {
    this._paths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths;
  }

  // table_fqn - computed: false, optional: false, required: true
  private _tableFqn?: string; 
  public get tableFqn() {
    return this.getStringAttribute('table_fqn');
  }
  public set tableFqn(value: string) {
    this._tableFqn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableFqnInput() {
    return this._tableFqn;
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths {
  /**
  * Required. The ordered list of paths within the table schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#paths GeminiDataAnalyticsDataAgent#paths}
  */
  readonly paths: string[];
  /**
  * Required. The service-qualified full resource name of the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#table_fqn GeminiDataAnalyticsDataAgent#table_fqn}
  */
  readonly tableFqn: string;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    paths: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.paths),
    table_fqn: cdktn.stringToTerraform(struct!.tableFqn),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    paths: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.paths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    table_fqn: {
      value: cdktn.stringToHclTerraform(struct!.tableFqn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._paths !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths;
    }
    if (this._tableFqn !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableFqn = this._tableFqn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._paths = undefined;
      this._tableFqn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._paths = value.paths;
      this._tableFqn = value.tableFqn;
    }
  }

  // paths - computed: false, optional: false, required: true
  private _paths?: string[]; 
  public get paths() {
    return this.getListAttribute('paths');
  }
  public set paths(value: string[]) {
    this._paths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths;
  }

  // table_fqn - computed: false, optional: false, required: true
  private _tableFqn?: string; 
  public get tableFqn() {
    return this.getStringAttribute('table_fqn');
  }
  public set tableFqn(value: string) {
    this._tableFqn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableFqnInput() {
    return this._tableFqn;
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships {
  /**
  * Optional. A confidence score for the suggested relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#confidence_score GeminiDataAnalyticsDataAgent#confidence_score}
  */
  readonly confidenceScore?: number;
  /**
  * Optional. Sources which generated the schema relation edge.
  * Possible values: BIGQUERY_JOB_HISTORY, LLM_SUGGESTED, BIGQUERY_TABLE_CONSTRAINTS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#sources GeminiDataAnalyticsDataAgent#sources}
  */
  readonly sources?: string[];
  /**
  * left_schema_paths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#left_schema_paths GeminiDataAnalyticsDataAgent#left_schema_paths}
  */
  readonly leftSchemaPaths: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths;
  /**
  * right_schema_paths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#right_schema_paths GeminiDataAnalyticsDataAgent#right_schema_paths}
  */
  readonly rightSchemaPaths: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    confidence_score: cdktn.numberToTerraform(struct!.confidenceScore),
    sources: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sources),
    left_schema_paths: geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsToTerraform(struct!.leftSchemaPaths),
    right_schema_paths: geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsToTerraform(struct!.rightSchemaPaths),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    confidence_score: {
      value: cdktn.numberToHclTerraform(struct!.confidenceScore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sources: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    left_schema_paths: {
      value: geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsToHclTerraform(struct!.leftSchemaPaths),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsList",
    },
    right_schema_paths: {
      value: geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsToHclTerraform(struct!.rightSchemaPaths),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confidenceScore !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidenceScore = this._confidenceScore;
    }
    if (this._sources !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources;
    }
    if (this._leftSchemaPaths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.leftSchemaPaths = this._leftSchemaPaths?.internalValue;
    }
    if (this._rightSchemaPaths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rightSchemaPaths = this._rightSchemaPaths?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._confidenceScore = undefined;
      this._sources = undefined;
      this._leftSchemaPaths.internalValue = undefined;
      this._rightSchemaPaths.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._confidenceScore = value.confidenceScore;
      this._sources = value.sources;
      this._leftSchemaPaths.internalValue = value.leftSchemaPaths;
      this._rightSchemaPaths.internalValue = value.rightSchemaPaths;
    }
  }

  // confidence_score - computed: false, optional: true, required: false
  private _confidenceScore?: number; 
  public get confidenceScore() {
    return this.getNumberAttribute('confidence_score');
  }
  public set confidenceScore(value: number) {
    this._confidenceScore = value;
  }
  public resetConfidenceScore() {
    this._confidenceScore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidenceScoreInput() {
    return this._confidenceScore;
  }

  // sources - computed: false, optional: true, required: false
  private _sources?: string[]; 
  public get sources() {
    return this.getListAttribute('sources');
  }
  public set sources(value: string[]) {
    this._sources = value;
  }
  public resetSources() {
    this._sources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources;
  }

  // left_schema_paths - computed: false, optional: false, required: true
  private _leftSchemaPaths = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference(this, "left_schema_paths");
  public get leftSchemaPaths() {
    return this._leftSchemaPaths;
  }
  public putLeftSchemaPaths(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths) {
    this._leftSchemaPaths.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get leftSchemaPathsInput() {
    return this._leftSchemaPaths.internalValue;
  }

  // right_schema_paths - computed: false, optional: false, required: true
  private _rightSchemaPaths = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference(this, "right_schema_paths");
  public get rightSchemaPaths() {
    return this._rightSchemaPaths;
  }
  public putRightSchemaPaths(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths) {
    this._rightSchemaPaths.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rightSchemaPathsInput() {
    return this._rightSchemaPaths.internalValue;
  }
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList extends cdktn.ComplexList {
  public internalValue? : GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships[] | cdktn.IResolvable

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
  public get(index: number): GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference {
    return new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutinesRoutineReference {
  /**
  * Optional. The dataset ID of the routine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#dataset_id GeminiDataAnalyticsDataAgent#dataset_id}
  */
  readonly datasetId?: string;
  /**
  * Optional. The project ID of the routine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#project_id GeminiDataAnalyticsDataAgent#project_id}
  */
  readonly projectId?: string;
  /**
  * Optional. The routine ID of the routine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#routine_id GeminiDataAnalyticsDataAgent#routine_id}
  */
  readonly routineId?: string;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutinesRoutineReferenceToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutinesRoutineReferenceOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutinesRoutineReference): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dataset_id: cdktn.stringToTerraform(struct!.datasetId),
    project_id: cdktn.stringToTerraform(struct!.projectId),
    routine_id: cdktn.stringToTerraform(struct!.routineId),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutinesRoutineReferenceToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutinesRoutineReferenceOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutinesRoutineReference): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dataset_id: {
      value: cdktn.stringToHclTerraform(struct!.datasetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktn.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routine_id: {
      value: cdktn.stringToHclTerraform(struct!.routineId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutinesRoutineReferenceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutinesRoutineReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._routineId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routineId = this._routineId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutinesRoutineReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetId = undefined;
      this._projectId = undefined;
      this._routineId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetId = value.datasetId;
      this._projectId = value.projectId;
      this._routineId = value.routineId;
    }
  }

  // dataset_id - computed: false, optional: true, required: false
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  public resetDatasetId() {
    this._datasetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // routine_id - computed: false, optional: true, required: false
  private _routineId?: string; 
  public get routineId() {
    return this.getStringAttribute('routine_id');
  }
  public set routineId(value: string) {
    this._routineId = value;
  }
  public resetRoutineId() {
    this._routineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routineIdInput() {
    return this._routineId;
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutines {
  /**
  * Optional. User override or addition to description, to tell the agent when to use the UDF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#description GeminiDataAnalyticsDataAgent#description}
  */
  readonly description?: string;
  /**
  * routine_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#routine_reference GeminiDataAnalyticsDataAgent#routine_reference}
  */
  readonly routineReference?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutinesRoutineReference;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutinesToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutines | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    routine_reference: geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutinesRoutineReferenceToTerraform(struct!.routineReference),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutinesToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutines | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routine_reference: {
      value: geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutinesRoutineReferenceToHclTerraform(struct!.routineReference),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutinesRoutineReferenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutinesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutines | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._routineReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routineReference = this._routineReference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutines | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._routineReference.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._routineReference.internalValue = value.routineReference;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // routine_reference - computed: false, optional: true, required: false
  private _routineReference = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutinesRoutineReferenceOutputReference(this, "routine_reference");
  public get routineReference() {
    return this._routineReference;
  }
  public putRoutineReference(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutinesRoutineReference) {
    this._routineReference.internalValue = value;
  }
  public resetRoutineReference() {
    this._routineReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routineReferenceInput() {
    return this._routineReference.internalValue;
  }
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutinesList extends cdktn.ComplexList {
  public internalValue? : GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutines[] | cdktn.IResolvable

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
  public get(index: number): GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutinesOutputReference {
    return new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutinesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctions {
  /**
  * bq_routines block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#bq_routines GeminiDataAnalyticsDataAgent#bq_routines}
  */
  readonly bqRoutines?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutines[] | cdktn.IResolvable;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bq_routines: cdktn.listMapper(geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutinesToTerraform, true)(struct!.bqRoutines),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bq_routines: {
      value: cdktn.listMapperHcl(geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutinesToHclTerraform, true)(struct!.bqRoutines),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutinesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bqRoutines?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bqRoutines = this._bqRoutines?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bqRoutines.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bqRoutines.internalValue = value.bqRoutines;
    }
  }

  // bq_routines - computed: false, optional: true, required: false
  private _bqRoutines = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutinesList(this, "bq_routines", false);
  public get bqRoutines() {
    return this._bqRoutines;
  }
  public putBqRoutines(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsBqRoutines[] | cdktn.IResolvable) {
    this._bqRoutines.internalValue = value;
  }
  public resetBqRoutines() {
    this._bqRoutines.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bqRoutinesInput() {
    return this._bqRoutines.internalValue;
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext {
  /**
  * Optional. The basic entry point for data owners creating domain
  * knowledge for the agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#system_instruction GeminiDataAnalyticsDataAgent#system_instruction}
  */
  readonly systemInstruction?: string;
  /**
  * datasource_references block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#datasource_references GeminiDataAnalyticsDataAgent#datasource_references}
  */
  readonly datasourceReferences: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences;
  /**
  * example_queries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#example_queries GeminiDataAnalyticsDataAgent#example_queries}
  */
  readonly exampleQueries?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries[] | cdktn.IResolvable;
  /**
  * glossary_terms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#glossary_terms GeminiDataAnalyticsDataAgent#glossary_terms}
  */
  readonly glossaryTerms?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms[] | cdktn.IResolvable;
  /**
  * looker_golden_queries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#looker_golden_queries GeminiDataAnalyticsDataAgent#looker_golden_queries}
  */
  readonly lookerGoldenQueries?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueries[] | cdktn.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#options GeminiDataAnalyticsDataAgent#options}
  */
  readonly options?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions;
  /**
  * schema_relationships block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#schema_relationships GeminiDataAnalyticsDataAgent#schema_relationships}
  */
  readonly schemaRelationships?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships[] | cdktn.IResolvable;
  /**
  * user_functions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#user_functions GeminiDataAnalyticsDataAgent#user_functions}
  */
  readonly userFunctions?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctions;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    system_instruction: cdktn.stringToTerraform(struct!.systemInstruction),
    datasource_references: geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesToTerraform(struct!.datasourceReferences),
    example_queries: cdktn.listMapper(geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesToTerraform, true)(struct!.exampleQueries),
    glossary_terms: cdktn.listMapper(geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsToTerraform, true)(struct!.glossaryTerms),
    looker_golden_queries: cdktn.listMapper(geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesToTerraform, true)(struct!.lookerGoldenQueries),
    options: geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsToTerraform(struct!.options),
    schema_relationships: cdktn.listMapper(geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsToTerraform, true)(struct!.schemaRelationships),
    user_functions: geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsToTerraform(struct!.userFunctions),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    system_instruction: {
      value: cdktn.stringToHclTerraform(struct!.systemInstruction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datasource_references: {
      value: geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesToHclTerraform(struct!.datasourceReferences),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesList",
    },
    example_queries: {
      value: cdktn.listMapperHcl(geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesToHclTerraform, true)(struct!.exampleQueries),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList",
    },
    glossary_terms: {
      value: cdktn.listMapperHcl(geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsToHclTerraform, true)(struct!.glossaryTerms),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList",
    },
    looker_golden_queries: {
      value: cdktn.listMapperHcl(geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesToHclTerraform, true)(struct!.lookerGoldenQueries),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesList",
    },
    options: {
      value: geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsList",
    },
    schema_relationships: {
      value: cdktn.listMapperHcl(geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsToHclTerraform, true)(struct!.schemaRelationships),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList",
    },
    user_functions: {
      value: geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsToHclTerraform(struct!.userFunctions),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._systemInstruction !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemInstruction = this._systemInstruction;
    }
    if (this._datasourceReferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasourceReferences = this._datasourceReferences?.internalValue;
    }
    if (this._exampleQueries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exampleQueries = this._exampleQueries?.internalValue;
    }
    if (this._glossaryTerms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.glossaryTerms = this._glossaryTerms?.internalValue;
    }
    if (this._lookerGoldenQueries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookerGoldenQueries = this._lookerGoldenQueries?.internalValue;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._schemaRelationships?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaRelationships = this._schemaRelationships?.internalValue;
    }
    if (this._userFunctions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userFunctions = this._userFunctions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._systemInstruction = undefined;
      this._datasourceReferences.internalValue = undefined;
      this._exampleQueries.internalValue = undefined;
      this._glossaryTerms.internalValue = undefined;
      this._lookerGoldenQueries.internalValue = undefined;
      this._options.internalValue = undefined;
      this._schemaRelationships.internalValue = undefined;
      this._userFunctions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._systemInstruction = value.systemInstruction;
      this._datasourceReferences.internalValue = value.datasourceReferences;
      this._exampleQueries.internalValue = value.exampleQueries;
      this._glossaryTerms.internalValue = value.glossaryTerms;
      this._lookerGoldenQueries.internalValue = value.lookerGoldenQueries;
      this._options.internalValue = value.options;
      this._schemaRelationships.internalValue = value.schemaRelationships;
      this._userFunctions.internalValue = value.userFunctions;
    }
  }

  // system_instruction - computed: false, optional: true, required: false
  private _systemInstruction?: string; 
  public get systemInstruction() {
    return this.getStringAttribute('system_instruction');
  }
  public set systemInstruction(value: string) {
    this._systemInstruction = value;
  }
  public resetSystemInstruction() {
    this._systemInstruction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemInstructionInput() {
    return this._systemInstruction;
  }

  // datasource_references - computed: false, optional: false, required: true
  private _datasourceReferences = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference(this, "datasource_references");
  public get datasourceReferences() {
    return this._datasourceReferences;
  }
  public putDatasourceReferences(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences) {
    this._datasourceReferences.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceReferencesInput() {
    return this._datasourceReferences.internalValue;
  }

  // example_queries - computed: false, optional: true, required: false
  private _exampleQueries = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList(this, "example_queries", false);
  public get exampleQueries() {
    return this._exampleQueries;
  }
  public putExampleQueries(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries[] | cdktn.IResolvable) {
    this._exampleQueries.internalValue = value;
  }
  public resetExampleQueries() {
    this._exampleQueries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exampleQueriesInput() {
    return this._exampleQueries.internalValue;
  }

  // glossary_terms - computed: false, optional: true, required: false
  private _glossaryTerms = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList(this, "glossary_terms", false);
  public get glossaryTerms() {
    return this._glossaryTerms;
  }
  public putGlossaryTerms(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms[] | cdktn.IResolvable) {
    this._glossaryTerms.internalValue = value;
  }
  public resetGlossaryTerms() {
    this._glossaryTerms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glossaryTermsInput() {
    return this._glossaryTerms.internalValue;
  }

  // looker_golden_queries - computed: false, optional: true, required: false
  private _lookerGoldenQueries = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueriesList(this, "looker_golden_queries", false);
  public get lookerGoldenQueries() {
    return this._lookerGoldenQueries;
  }
  public putLookerGoldenQueries(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextLookerGoldenQueries[] | cdktn.IResolvable) {
    this._lookerGoldenQueries.internalValue = value;
  }
  public resetLookerGoldenQueries() {
    this._lookerGoldenQueries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookerGoldenQueriesInput() {
    return this._lookerGoldenQueries.internalValue;
  }

  // options - computed: false, optional: true, required: false
  private _options = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // schema_relationships - computed: false, optional: true, required: false
  private _schemaRelationships = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList(this, "schema_relationships", false);
  public get schemaRelationships() {
    return this._schemaRelationships;
  }
  public putSchemaRelationships(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships[] | cdktn.IResolvable) {
    this._schemaRelationships.internalValue = value;
  }
  public resetSchemaRelationships() {
    this._schemaRelationships.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRelationshipsInput() {
    return this._schemaRelationships.internalValue;
  }

  // user_functions - computed: false, optional: true, required: false
  private _userFunctions = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctionsOutputReference(this, "user_functions");
  public get userFunctions() {
    return this._userFunctions;
  }
  public putUserFunctions(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextUserFunctions) {
    this._userFunctions.internalValue = value;
  }
  public resetUserFunctions() {
    this._userFunctions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userFunctionsInput() {
    return this._userFunctions.internalValue;
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqPropertyGraphReferences {
  /**
  * Required. The dataset that the property graph belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#dataset_id GeminiDataAnalyticsDataAgent#dataset_id}
  */
  readonly datasetId: string;
  /**
  * Required. The project that the property graph belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#project_id GeminiDataAnalyticsDataAgent#project_id}
  */
  readonly projectId: string;
  /**
  * Required. The property graph ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#property_graph_id GeminiDataAnalyticsDataAgent#property_graph_id}
  */
  readonly propertyGraphId: string;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqPropertyGraphReferencesToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqPropertyGraphReferences | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dataset_id: cdktn.stringToTerraform(struct!.datasetId),
    project_id: cdktn.stringToTerraform(struct!.projectId),
    property_graph_id: cdktn.stringToTerraform(struct!.propertyGraphId),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqPropertyGraphReferencesToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqPropertyGraphReferences | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dataset_id: {
      value: cdktn.stringToHclTerraform(struct!.datasetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktn.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_graph_id: {
      value: cdktn.stringToHclTerraform(struct!.propertyGraphId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqPropertyGraphReferencesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqPropertyGraphReferences | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._propertyGraphId !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyGraphId = this._propertyGraphId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqPropertyGraphReferences | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasetId = undefined;
      this._projectId = undefined;
      this._propertyGraphId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasetId = value.datasetId;
      this._projectId = value.projectId;
      this._propertyGraphId = value.propertyGraphId;
    }
  }

  // dataset_id - computed: false, optional: false, required: true
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // property_graph_id - computed: false, optional: false, required: true
  private _propertyGraphId?: string; 
  public get propertyGraphId() {
    return this.getStringAttribute('property_graph_id');
  }
  public set propertyGraphId(value: string) {
    this._propertyGraphId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyGraphIdInput() {
    return this._propertyGraphId;
  }
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqPropertyGraphReferencesList extends cdktn.ComplexList {
  public internalValue? : GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqPropertyGraphReferences[] | cdktn.IResolvable

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
  public get(index: number): GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqPropertyGraphReferencesOutputReference {
    return new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqPropertyGraphReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFields {
  /**
  * Optional. Field category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#category GeminiDataAnalyticsDataAgent#category}
  */
  readonly category?: string;
  /**
  * Optional. A brief description of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#description GeminiDataAnalyticsDataAgent#description}
  */
  readonly description?: string;
  /**
  * Optional. The mode of the field (e.g., NULLABLE, REPEATED).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#mode GeminiDataAnalyticsDataAgent#mode}
  */
  readonly mode?: string;
  /**
  * Optional. The name of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#name GeminiDataAnalyticsDataAgent#name}
  */
  readonly name?: string;
  /**
  * Optional. Recursive property for nested schema structures, encoded as a JSON string representing a list of Field objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#subfields GeminiDataAnalyticsDataAgent#subfields}
  */
  readonly subfields?: string;
  /**
  * Optional. A list of alternative names or synonyms that can be used to refer to this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#synonyms GeminiDataAnalyticsDataAgent#synonyms}
  */
  readonly synonyms?: string[];
  /**
  * Optional. A list of tags or keywords associated with the field, used for categorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#tags GeminiDataAnalyticsDataAgent#tags}
  */
  readonly tags?: string[];
  /**
  * Optional. The type of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#type GeminiDataAnalyticsDataAgent#type}
  */
  readonly type?: string;
  /**
  * Optional. Value format of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#value_format GeminiDataAnalyticsDataAgent#value_format}
  */
  readonly valueFormat?: string;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFieldsToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    category: cdktn.stringToTerraform(struct!.category),
    description: cdktn.stringToTerraform(struct!.description),
    mode: cdktn.stringToTerraform(struct!.mode),
    name: cdktn.stringToTerraform(struct!.name),
    subfields: cdktn.stringToTerraform(struct!.subfields),
    synonyms: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.synonyms),
    tags: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.tags),
    type: cdktn.stringToTerraform(struct!.type),
    value_format: cdktn.stringToTerraform(struct!.valueFormat),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFieldsToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    category: {
      value: cdktn.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subfields: {
      value: cdktn.stringToHclTerraform(struct!.subfields),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    synonyms: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.synonyms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_format: {
      value: cdktn.stringToHclTerraform(struct!.valueFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFields | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._subfields !== undefined) {
      hasAnyValues = true;
      internalValueResult.subfields = this._subfields;
    }
    if (this._synonyms !== undefined) {
      hasAnyValues = true;
      internalValueResult.synonyms = this._synonyms;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._valueFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFormat = this._valueFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFields | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._description = undefined;
      this._mode = undefined;
      this._name = undefined;
      this._subfields = undefined;
      this._synonyms = undefined;
      this._tags = undefined;
      this._type = undefined;
      this._valueFormat = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._description = value.description;
      this._mode = value.mode;
      this._name = value.name;
      this._subfields = value.subfields;
      this._synonyms = value.synonyms;
      this._tags = value.tags;
      this._type = value.type;
      this._valueFormat = value.valueFormat;
    }
  }

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // subfields - computed: false, optional: true, required: false
  private _subfields?: string; 
  public get subfields() {
    return this.getStringAttribute('subfields');
  }
  public set subfields(value: string) {
    this._subfields = value;
  }
  public resetSubfields() {
    this._subfields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subfieldsInput() {
    return this._subfields;
  }

  // synonyms - computed: false, optional: true, required: false
  private _synonyms?: string[]; 
  public get synonyms() {
    return this.getListAttribute('synonyms');
  }
  public set synonyms(value: string[]) {
    this._synonyms = value;
  }
  public resetSynonyms() {
    this._synonyms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synonymsInput() {
    return this._synonyms;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
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

  // value_format - computed: false, optional: true, required: false
  private _valueFormat?: string; 
  public get valueFormat() {
    return this.getStringAttribute('value_format');
  }
  public set valueFormat(value: string) {
    this._valueFormat = value;
  }
  public resetValueFormat() {
    this._valueFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFormatInput() {
    return this._valueFormat;
  }
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFieldsList extends cdktn.ComplexList {
  public internalValue? : GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFields[] | cdktn.IResolvable

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
  public get(index: number): GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFieldsOutputReference {
    return new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFilters {
  /**
  * Optional. The field to filter on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#field GeminiDataAnalyticsDataAgent#field}
  */
  readonly field?: string;
  /**
  * Optional. The type of filter present on a datasource, such as ALWAYS_FILTER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#type GeminiDataAnalyticsDataAgent#type}
  */
  readonly type?: string;
  /**
  * Optional. The default value used for this filter if the filter is not overridden in a query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#value GeminiDataAnalyticsDataAgent#value}
  */
  readonly value?: string;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFiltersToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field: cdktn.stringToTerraform(struct!.field),
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFiltersToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field: {
      value: cdktn.stringToHclTerraform(struct!.field),
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

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFiltersList extends cdktn.ComplexList {
  public internalValue? : GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFilters[] | cdktn.IResolvable

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
  public get(index: number): GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFiltersOutputReference {
    return new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchema {
  /**
  * Optional. A textual description of the table's content and purpose.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#description GeminiDataAnalyticsDataAgent#description}
  */
  readonly description?: string;
  /**
  * Optional. Table display name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#display_name GeminiDataAnalyticsDataAgent#display_name}
  */
  readonly displayName?: string;
  /**
  * Optional. A list of alternative names or synonyms that can be used to refer to the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#synonyms GeminiDataAnalyticsDataAgent#synonyms}
  */
  readonly synonyms?: string[];
  /**
  * Optional. A list of tags or keywords associated with the table, used for categorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#tags GeminiDataAnalyticsDataAgent#tags}
  */
  readonly tags?: string[];
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#fields GeminiDataAnalyticsDataAgent#fields}
  */
  readonly fields?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFields[] | cdktn.IResolvable;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#filters GeminiDataAnalyticsDataAgent#filters}
  */
  readonly filters?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFilters[] | cdktn.IResolvable;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    display_name: cdktn.stringToTerraform(struct!.displayName),
    synonyms: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.synonyms),
    tags: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.tags),
    fields: cdktn.listMapper(geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFieldsToTerraform, true)(struct!.fields),
    filters: cdktn.listMapper(geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFiltersToTerraform, true)(struct!.filters),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    synonyms: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.synonyms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    fields: {
      value: cdktn.listMapperHcl(geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFieldsToHclTerraform, true)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFieldsList",
    },
    filters: {
      value: cdktn.listMapperHcl(geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFiltersToHclTerraform, true)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._synonyms !== undefined) {
      hasAnyValues = true;
      internalValueResult.synonyms = this._synonyms;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._displayName = undefined;
      this._synonyms = undefined;
      this._tags = undefined;
      this._fields.internalValue = undefined;
      this._filters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._displayName = value.displayName;
      this._synonyms = value.synonyms;
      this._tags = value.tags;
      this._fields.internalValue = value.fields;
      this._filters.internalValue = value.filters;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // synonyms - computed: false, optional: true, required: false
  private _synonyms?: string[]; 
  public get synonyms() {
    return this.getListAttribute('synonyms');
  }
  public set synonyms(value: string[]) {
    this._synonyms = value;
  }
  public resetSynonyms() {
    this._synonyms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synonymsInput() {
    return this._synonyms;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFields[] | cdktn.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaFilters[] | cdktn.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences {
  /**
  * Required. The dataset that the table belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#dataset_id GeminiDataAnalyticsDataAgent#dataset_id}
  */
  readonly datasetId: string;
  /**
  * Required. The project that the table belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#project_id GeminiDataAnalyticsDataAgent#project_id}
  */
  readonly projectId: string;
  /**
  * Required. The table ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#table_id GeminiDataAnalyticsDataAgent#table_id}
  */
  readonly tableId: string;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#schema GeminiDataAnalyticsDataAgent#schema}
  */
  readonly schema?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchema;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dataset_id: cdktn.stringToTerraform(struct!.datasetId),
    project_id: cdktn.stringToTerraform(struct!.projectId),
    table_id: cdktn.stringToTerraform(struct!.tableId),
    schema: geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaToTerraform(struct!.schema),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dataset_id: {
      value: cdktn.stringToHclTerraform(struct!.datasetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktn.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_id: {
      value: cdktn.stringToHclTerraform(struct!.tableId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema: {
      value: geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._tableId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableId = this._tableId;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasetId = undefined;
      this._projectId = undefined;
      this._tableId = undefined;
      this._schema.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasetId = value.datasetId;
      this._projectId = value.projectId;
      this._tableId = value.tableId;
      this._schema.internalValue = value.schema;
    }
  }

  // dataset_id - computed: false, optional: false, required: true
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // table_id - computed: false, optional: false, required: true
  private _tableId?: string; 
  public get tableId() {
    return this.getStringAttribute('table_id');
  }
  public set tableId(value: string) {
    this._tableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableIdInput() {
    return this._tableId;
  }

  // schema - computed: false, optional: true, required: false
  private _schema = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesSchema) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList extends cdktn.ComplexList {
  public internalValue? : GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences[] | cdktn.IResolvable

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
  public get(index: number): GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference {
    return new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq {
  /**
  * property_graph_references block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#property_graph_references GeminiDataAnalyticsDataAgent#property_graph_references}
  */
  readonly propertyGraphReferences?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqPropertyGraphReferences[] | cdktn.IResolvable;
  /**
  * table_references block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#table_references GeminiDataAnalyticsDataAgent#table_references}
  */
  readonly tableReferences?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences[] | cdktn.IResolvable;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    property_graph_references: cdktn.listMapper(geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqPropertyGraphReferencesToTerraform, true)(struct!.propertyGraphReferences),
    table_references: cdktn.listMapper(geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesToTerraform, true)(struct!.tableReferences),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    property_graph_references: {
      value: cdktn.listMapperHcl(geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqPropertyGraphReferencesToHclTerraform, true)(struct!.propertyGraphReferences),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqPropertyGraphReferencesList",
    },
    table_references: {
      value: cdktn.listMapperHcl(geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesToHclTerraform, true)(struct!.tableReferences),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._propertyGraphReferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyGraphReferences = this._propertyGraphReferences?.internalValue;
    }
    if (this._tableReferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableReferences = this._tableReferences?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._propertyGraphReferences.internalValue = undefined;
      this._tableReferences.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._propertyGraphReferences.internalValue = value.propertyGraphReferences;
      this._tableReferences.internalValue = value.tableReferences;
    }
  }

  // property_graph_references - computed: false, optional: true, required: false
  private _propertyGraphReferences = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqPropertyGraphReferencesList(this, "property_graph_references", false);
  public get propertyGraphReferences() {
    return this._propertyGraphReferences;
  }
  public putPropertyGraphReferences(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqPropertyGraphReferences[] | cdktn.IResolvable) {
    this._propertyGraphReferences.internalValue = value;
  }
  public resetPropertyGraphReferences() {
    this._propertyGraphReferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyGraphReferencesInput() {
    return this._propertyGraphReferences.internalValue;
  }

  // table_references - computed: false, optional: true, required: false
  private _tableReferences = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList(this, "table_references", false);
  public get tableReferences() {
    return this._tableReferences;
  }
  public putTableReferences(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences[] | cdktn.IResolvable) {
    this._tableReferences.internalValue = value;
  }
  public resetTableReferences() {
    this._tableReferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableReferencesInput() {
    return this._tableReferences.internalValue;
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfo {
  /**
  * Optional. The Looker instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#looker_instance_id GeminiDataAnalyticsDataAgent#looker_instance_id}
  */
  readonly lookerInstanceId?: string;
  /**
  * Optional. The service directory name of the Looker instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#service_directory_name GeminiDataAnalyticsDataAgent#service_directory_name}
  */
  readonly serviceDirectoryName?: string;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfoToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfoOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    looker_instance_id: cdktn.stringToTerraform(struct!.lookerInstanceId),
    service_directory_name: cdktn.stringToTerraform(struct!.serviceDirectoryName),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfoToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfoOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    looker_instance_id: {
      value: cdktn.stringToHclTerraform(struct!.lookerInstanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_directory_name: {
      value: cdktn.stringToHclTerraform(struct!.serviceDirectoryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lookerInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookerInstanceId = this._lookerInstanceId;
    }
    if (this._serviceDirectoryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDirectoryName = this._serviceDirectoryName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lookerInstanceId = undefined;
      this._serviceDirectoryName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lookerInstanceId = value.lookerInstanceId;
      this._serviceDirectoryName = value.serviceDirectoryName;
    }
  }

  // looker_instance_id - computed: false, optional: true, required: false
  private _lookerInstanceId?: string; 
  public get lookerInstanceId() {
    return this.getStringAttribute('looker_instance_id');
  }
  public set lookerInstanceId(value: string) {
    this._lookerInstanceId = value;
  }
  public resetLookerInstanceId() {
    this._lookerInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookerInstanceIdInput() {
    return this._lookerInstanceId;
  }

  // service_directory_name - computed: false, optional: true, required: false
  private _serviceDirectoryName?: string; 
  public get serviceDirectoryName() {
    return this.getStringAttribute('service_directory_name');
  }
  public set serviceDirectoryName(value: string) {
    this._serviceDirectoryName = value;
  }
  public resetServiceDirectoryName() {
    this._serviceDirectoryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDirectoryNameInput() {
    return this._serviceDirectoryName;
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFields {
  /**
  * Optional. Field category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#category GeminiDataAnalyticsDataAgent#category}
  */
  readonly category?: string;
  /**
  * Optional. A brief description of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#description GeminiDataAnalyticsDataAgent#description}
  */
  readonly description?: string;
  /**
  * Optional. The mode of the field (e.g., NULLABLE, REPEATED).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#mode GeminiDataAnalyticsDataAgent#mode}
  */
  readonly mode?: string;
  /**
  * Optional. The name of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#name GeminiDataAnalyticsDataAgent#name}
  */
  readonly name?: string;
  /**
  * Optional. Recursive property for nested schema structures, encoded as a JSON string representing a list of Field objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#subfields GeminiDataAnalyticsDataAgent#subfields}
  */
  readonly subfields?: string;
  /**
  * Optional. A list of alternative names or synonyms that can be used to refer to this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#synonyms GeminiDataAnalyticsDataAgent#synonyms}
  */
  readonly synonyms?: string[];
  /**
  * Optional. A list of tags or keywords associated with the field, used for categorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#tags GeminiDataAnalyticsDataAgent#tags}
  */
  readonly tags?: string[];
  /**
  * Optional. The type of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#type GeminiDataAnalyticsDataAgent#type}
  */
  readonly type?: string;
  /**
  * Optional. Value format of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#value_format GeminiDataAnalyticsDataAgent#value_format}
  */
  readonly valueFormat?: string;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFieldsToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    category: cdktn.stringToTerraform(struct!.category),
    description: cdktn.stringToTerraform(struct!.description),
    mode: cdktn.stringToTerraform(struct!.mode),
    name: cdktn.stringToTerraform(struct!.name),
    subfields: cdktn.stringToTerraform(struct!.subfields),
    synonyms: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.synonyms),
    tags: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.tags),
    type: cdktn.stringToTerraform(struct!.type),
    value_format: cdktn.stringToTerraform(struct!.valueFormat),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFieldsToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    category: {
      value: cdktn.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subfields: {
      value: cdktn.stringToHclTerraform(struct!.subfields),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    synonyms: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.synonyms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_format: {
      value: cdktn.stringToHclTerraform(struct!.valueFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFields | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._subfields !== undefined) {
      hasAnyValues = true;
      internalValueResult.subfields = this._subfields;
    }
    if (this._synonyms !== undefined) {
      hasAnyValues = true;
      internalValueResult.synonyms = this._synonyms;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._valueFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFormat = this._valueFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFields | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._description = undefined;
      this._mode = undefined;
      this._name = undefined;
      this._subfields = undefined;
      this._synonyms = undefined;
      this._tags = undefined;
      this._type = undefined;
      this._valueFormat = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._description = value.description;
      this._mode = value.mode;
      this._name = value.name;
      this._subfields = value.subfields;
      this._synonyms = value.synonyms;
      this._tags = value.tags;
      this._type = value.type;
      this._valueFormat = value.valueFormat;
    }
  }

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // subfields - computed: false, optional: true, required: false
  private _subfields?: string; 
  public get subfields() {
    return this.getStringAttribute('subfields');
  }
  public set subfields(value: string) {
    this._subfields = value;
  }
  public resetSubfields() {
    this._subfields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subfieldsInput() {
    return this._subfields;
  }

  // synonyms - computed: false, optional: true, required: false
  private _synonyms?: string[]; 
  public get synonyms() {
    return this.getListAttribute('synonyms');
  }
  public set synonyms(value: string[]) {
    this._synonyms = value;
  }
  public resetSynonyms() {
    this._synonyms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synonymsInput() {
    return this._synonyms;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
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

  // value_format - computed: false, optional: true, required: false
  private _valueFormat?: string; 
  public get valueFormat() {
    return this.getStringAttribute('value_format');
  }
  public set valueFormat(value: string) {
    this._valueFormat = value;
  }
  public resetValueFormat() {
    this._valueFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFormatInput() {
    return this._valueFormat;
  }
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFieldsList extends cdktn.ComplexList {
  public internalValue? : GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFields[] | cdktn.IResolvable

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
  public get(index: number): GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFieldsOutputReference {
    return new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFilters {
  /**
  * Optional. The field to filter on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#field GeminiDataAnalyticsDataAgent#field}
  */
  readonly field?: string;
  /**
  * Optional. The type of filter present on a datasource, such as ALWAYS_FILTER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#type GeminiDataAnalyticsDataAgent#type}
  */
  readonly type?: string;
  /**
  * Optional. The default value used for this filter if the filter is not overridden in a query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#value GeminiDataAnalyticsDataAgent#value}
  */
  readonly value?: string;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFiltersToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field: cdktn.stringToTerraform(struct!.field),
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFiltersToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field: {
      value: cdktn.stringToHclTerraform(struct!.field),
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

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFiltersList extends cdktn.ComplexList {
  public internalValue? : GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFilters[] | cdktn.IResolvable

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
  public get(index: number): GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFiltersOutputReference {
    return new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchema {
  /**
  * Optional. A textual description of the explore's content and purpose.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#description GeminiDataAnalyticsDataAgent#description}
  */
  readonly description?: string;
  /**
  * Optional. Explore display name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#display_name GeminiDataAnalyticsDataAgent#display_name}
  */
  readonly displayName?: string;
  /**
  * Optional. A list of alternative names or synonyms that can be used to refer to the explore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#synonyms GeminiDataAnalyticsDataAgent#synonyms}
  */
  readonly synonyms?: string[];
  /**
  * Optional. A list of tags or keywords associated with the explore, used for categorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#tags GeminiDataAnalyticsDataAgent#tags}
  */
  readonly tags?: string[];
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#fields GeminiDataAnalyticsDataAgent#fields}
  */
  readonly fields?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFields[] | cdktn.IResolvable;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#filters GeminiDataAnalyticsDataAgent#filters}
  */
  readonly filters?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFilters[] | cdktn.IResolvable;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    display_name: cdktn.stringToTerraform(struct!.displayName),
    synonyms: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.synonyms),
    tags: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.tags),
    fields: cdktn.listMapper(geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFieldsToTerraform, true)(struct!.fields),
    filters: cdktn.listMapper(geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFiltersToTerraform, true)(struct!.filters),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    synonyms: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.synonyms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    fields: {
      value: cdktn.listMapperHcl(geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFieldsToHclTerraform, true)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFieldsList",
    },
    filters: {
      value: cdktn.listMapperHcl(geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFiltersToHclTerraform, true)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._synonyms !== undefined) {
      hasAnyValues = true;
      internalValueResult.synonyms = this._synonyms;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._displayName = undefined;
      this._synonyms = undefined;
      this._tags = undefined;
      this._fields.internalValue = undefined;
      this._filters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._displayName = value.displayName;
      this._synonyms = value.synonyms;
      this._tags = value.tags;
      this._fields.internalValue = value.fields;
      this._filters.internalValue = value.filters;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // synonyms - computed: false, optional: true, required: false
  private _synonyms?: string[]; 
  public get synonyms() {
    return this.getListAttribute('synonyms');
  }
  public set synonyms(value: string[]) {
    this._synonyms = value;
  }
  public resetSynonyms() {
    this._synonyms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synonymsInput() {
    return this._synonyms;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFields[] | cdktn.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaFilters[] | cdktn.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferences {
  /**
  * Required. Name of the LookML Explore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#explore GeminiDataAnalyticsDataAgent#explore}
  */
  readonly explore: string;
  /**
  * Optional. The base URL of the Looker instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#looker_instance_uri GeminiDataAnalyticsDataAgent#looker_instance_uri}
  */
  readonly lookerInstanceUri?: string;
  /**
  * Required. Name of the LookML model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#lookml_model GeminiDataAnalyticsDataAgent#lookml_model}
  */
  readonly lookmlModel: string;
  /**
  * private_looker_instance_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#private_looker_instance_info GeminiDataAnalyticsDataAgent#private_looker_instance_info}
  */
  readonly privateLookerInstanceInfo?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfo;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#schema GeminiDataAnalyticsDataAgent#schema}
  */
  readonly schema?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchema;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferences | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    explore: cdktn.stringToTerraform(struct!.explore),
    looker_instance_uri: cdktn.stringToTerraform(struct!.lookerInstanceUri),
    lookml_model: cdktn.stringToTerraform(struct!.lookmlModel),
    private_looker_instance_info: geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfoToTerraform(struct!.privateLookerInstanceInfo),
    schema: geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaToTerraform(struct!.schema),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferences | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    explore: {
      value: cdktn.stringToHclTerraform(struct!.explore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    looker_instance_uri: {
      value: cdktn.stringToHclTerraform(struct!.lookerInstanceUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lookml_model: {
      value: cdktn.stringToHclTerraform(struct!.lookmlModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_looker_instance_info: {
      value: geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfoToHclTerraform(struct!.privateLookerInstanceInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfoList",
    },
    schema: {
      value: geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferences | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._explore !== undefined) {
      hasAnyValues = true;
      internalValueResult.explore = this._explore;
    }
    if (this._lookerInstanceUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookerInstanceUri = this._lookerInstanceUri;
    }
    if (this._lookmlModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookmlModel = this._lookmlModel;
    }
    if (this._privateLookerInstanceInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateLookerInstanceInfo = this._privateLookerInstanceInfo?.internalValue;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferences | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._explore = undefined;
      this._lookerInstanceUri = undefined;
      this._lookmlModel = undefined;
      this._privateLookerInstanceInfo.internalValue = undefined;
      this._schema.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._explore = value.explore;
      this._lookerInstanceUri = value.lookerInstanceUri;
      this._lookmlModel = value.lookmlModel;
      this._privateLookerInstanceInfo.internalValue = value.privateLookerInstanceInfo;
      this._schema.internalValue = value.schema;
    }
  }

  // explore - computed: false, optional: false, required: true
  private _explore?: string; 
  public get explore() {
    return this.getStringAttribute('explore');
  }
  public set explore(value: string) {
    this._explore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exploreInput() {
    return this._explore;
  }

  // looker_instance_uri - computed: false, optional: true, required: false
  private _lookerInstanceUri?: string; 
  public get lookerInstanceUri() {
    return this.getStringAttribute('looker_instance_uri');
  }
  public set lookerInstanceUri(value: string) {
    this._lookerInstanceUri = value;
  }
  public resetLookerInstanceUri() {
    this._lookerInstanceUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookerInstanceUriInput() {
    return this._lookerInstanceUri;
  }

  // lookml_model - computed: false, optional: false, required: true
  private _lookmlModel?: string; 
  public get lookmlModel() {
    return this.getStringAttribute('lookml_model');
  }
  public set lookmlModel(value: string) {
    this._lookmlModel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lookmlModelInput() {
    return this._lookmlModel;
  }

  // private_looker_instance_info - computed: false, optional: true, required: false
  private _privateLookerInstanceInfo = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfoOutputReference(this, "private_looker_instance_info");
  public get privateLookerInstanceInfo() {
    return this._privateLookerInstanceInfo;
  }
  public putPrivateLookerInstanceInfo(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesPrivateLookerInstanceInfo) {
    this._privateLookerInstanceInfo.internalValue = value;
  }
  public resetPrivateLookerInstanceInfo() {
    this._privateLookerInstanceInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLookerInstanceInfoInput() {
    return this._privateLookerInstanceInfo.internalValue;
  }

  // schema - computed: false, optional: true, required: false
  private _schema = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesSchema) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesList extends cdktn.ComplexList {
  public internalValue? : GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferences[] | cdktn.IResolvable

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
  public get(index: number): GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesOutputReference {
    return new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLooker {
  /**
  * explore_references block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#explore_references GeminiDataAnalyticsDataAgent#explore_references}
  */
  readonly exploreReferences: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferences[] | cdktn.IResolvable;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLooker): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    explore_references: cdktn.listMapper(geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesToTerraform, true)(struct!.exploreReferences),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLooker): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    explore_references: {
      value: cdktn.listMapperHcl(geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesToHclTerraform, true)(struct!.exploreReferences),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLooker | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exploreReferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exploreReferences = this._exploreReferences?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLooker | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exploreReferences.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exploreReferences.internalValue = value.exploreReferences;
    }
  }

  // explore_references - computed: false, optional: false, required: true
  private _exploreReferences = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferencesList(this, "explore_references", false);
  public get exploreReferences() {
    return this._exploreReferences;
  }
  public putExploreReferences(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerExploreReferences[] | cdktn.IResolvable) {
    this._exploreReferences.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exploreReferencesInput() {
    return this._exploreReferences.internalValue;
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudioStudioReferences {
  /**
  * Required. The ID of the datasource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#datasource_id GeminiDataAnalyticsDataAgent#datasource_id}
  */
  readonly datasourceId: string;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudioStudioReferencesToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudioStudioReferences | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    datasource_id: cdktn.stringToTerraform(struct!.datasourceId),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudioStudioReferencesToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudioStudioReferences | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    datasource_id: {
      value: cdktn.stringToHclTerraform(struct!.datasourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudioStudioReferencesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudioStudioReferences | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasourceId = this._datasourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudioStudioReferences | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasourceId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasourceId = value.datasourceId;
    }
  }

  // datasource_id - computed: false, optional: false, required: true
  private _datasourceId?: string; 
  public get datasourceId() {
    return this.getStringAttribute('datasource_id');
  }
  public set datasourceId(value: string) {
    this._datasourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceIdInput() {
    return this._datasourceId;
  }
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudioStudioReferencesList extends cdktn.ComplexList {
  public internalValue? : GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudioStudioReferences[] | cdktn.IResolvable

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
  public get(index: number): GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudioStudioReferencesOutputReference {
    return new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudioStudioReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudio {
  /**
  * studio_references block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#studio_references GeminiDataAnalyticsDataAgent#studio_references}
  */
  readonly studioReferences?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudioStudioReferences[] | cdktn.IResolvable;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudioToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudioOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudio): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    studio_references: cdktn.listMapper(geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudioStudioReferencesToTerraform, true)(struct!.studioReferences),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudioToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudioOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudio): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    studio_references: {
      value: cdktn.listMapperHcl(geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudioStudioReferencesToHclTerraform, true)(struct!.studioReferences),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudioStudioReferencesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudioOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudio | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._studioReferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.studioReferences = this._studioReferences?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudio | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._studioReferences.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._studioReferences.internalValue = value.studioReferences;
    }
  }

  // studio_references - computed: false, optional: true, required: false
  private _studioReferences = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudioStudioReferencesList(this, "studio_references", false);
  public get studioReferences() {
    return this._studioReferences;
  }
  public putStudioReferences(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudioStudioReferences[] | cdktn.IResolvable) {
    this._studioReferences.internalValue = value;
  }
  public resetStudioReferences() {
    this._studioReferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get studioReferencesInput() {
    return this._studioReferences.internalValue;
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences {
  /**
  * bq block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#bq GeminiDataAnalyticsDataAgent#bq}
  */
  readonly bq?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq;
  /**
  * looker block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#looker GeminiDataAnalyticsDataAgent#looker}
  */
  readonly looker?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLooker;
  /**
  * studio block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#studio GeminiDataAnalyticsDataAgent#studio}
  */
  readonly studio?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudio;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bq: geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqToTerraform(struct!.bq),
    looker: geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerToTerraform(struct!.looker),
    studio: geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudioToTerraform(struct!.studio),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bq: {
      value: geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqToHclTerraform(struct!.bq),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqList",
    },
    looker: {
      value: geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerToHclTerraform(struct!.looker),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerList",
    },
    studio: {
      value: geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudioToHclTerraform(struct!.studio),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudioList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bq?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bq = this._bq?.internalValue;
    }
    if (this._looker?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.looker = this._looker?.internalValue;
    }
    if (this._studio?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.studio = this._studio?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bq.internalValue = undefined;
      this._looker.internalValue = undefined;
      this._studio.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bq.internalValue = value.bq;
      this._looker.internalValue = value.looker;
      this._studio.internalValue = value.studio;
    }
  }

  // bq - computed: false, optional: true, required: false
  private _bq = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference(this, "bq");
  public get bq() {
    return this._bq;
  }
  public putBq(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq) {
    this._bq.internalValue = value;
  }
  public resetBq() {
    this._bq.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bqInput() {
    return this._bq.internalValue;
  }

  // looker - computed: false, optional: true, required: false
  private _looker = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLookerOutputReference(this, "looker");
  public get looker() {
    return this._looker;
  }
  public putLooker(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesLooker) {
    this._looker.internalValue = value;
  }
  public resetLooker() {
    this._looker.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookerInput() {
    return this._looker.internalValue;
  }

  // studio - computed: false, optional: true, required: false
  private _studio = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudioOutputReference(this, "studio");
  public get studio() {
    return this._studio;
  }
  public putStudio(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesStudio) {
    this._studio.internalValue = value;
  }
  public resetStudio() {
    this._studio.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get studioInput() {
    return this._studio.internalValue;
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesParameters {
  /**
  * Required. The data type of the parameter, e.g. "STRING", "INT64", "DATE".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#data_type GeminiDataAnalyticsDataAgent#data_type}
  */
  readonly dataType: string;
  /**
  * Optional. The description of the parameter that can be used by the LLM to extract the parameter value from the user question.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#description GeminiDataAnalyticsDataAgent#description}
  */
  readonly description?: string;
  /**
  * Required. The name of the parameter reference in the SQL query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#name GeminiDataAnalyticsDataAgent#name}
  */
  readonly name: string;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesParametersToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_type: cdktn.stringToTerraform(struct!.dataType),
    description: cdktn.stringToTerraform(struct!.description),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesParametersToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_type: {
      value: cdktn.stringToHclTerraform(struct!.dataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataType = undefined;
      this._description = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataType = value.dataType;
      this._description = value.description;
      this._name = value.name;
    }
  }

  // data_type - computed: false, optional: false, required: true
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesParametersList extends cdktn.ComplexList {
  public internalValue? : GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesParameters[] | cdktn.IResolvable

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
  public get(index: number): GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesParametersOutputReference {
    return new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries {
  /**
  * Optional. A natural language question that a user might ask.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#natural_language_question GeminiDataAnalyticsDataAgent#natural_language_question}
  */
  readonly naturalLanguageQuestion?: string;
  /**
  * Optional. The SQL query that should be generated to answer
  * the natural language question.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#sql_query GeminiDataAnalyticsDataAgent#sql_query}
  */
  readonly sqlQuery?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#parameters GeminiDataAnalyticsDataAgent#parameters}
  */
  readonly parameters?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesParameters[] | cdktn.IResolvable;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    natural_language_question: cdktn.stringToTerraform(struct!.naturalLanguageQuestion),
    sql_query: cdktn.stringToTerraform(struct!.sqlQuery),
    parameters: cdktn.listMapper(geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesParametersToTerraform, true)(struct!.parameters),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    natural_language_question: {
      value: cdktn.stringToHclTerraform(struct!.naturalLanguageQuestion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sql_query: {
      value: cdktn.stringToHclTerraform(struct!.sqlQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktn.listMapperHcl(geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesParametersToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._naturalLanguageQuestion !== undefined) {
      hasAnyValues = true;
      internalValueResult.naturalLanguageQuestion = this._naturalLanguageQuestion;
    }
    if (this._sqlQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlQuery = this._sqlQuery;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._naturalLanguageQuestion = undefined;
      this._sqlQuery = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._naturalLanguageQuestion = value.naturalLanguageQuestion;
      this._sqlQuery = value.sqlQuery;
      this._parameters.internalValue = value.parameters;
    }
  }

  // natural_language_question - computed: false, optional: true, required: false
  private _naturalLanguageQuestion?: string; 
  public get naturalLanguageQuestion() {
    return this.getStringAttribute('natural_language_question');
  }
  public set naturalLanguageQuestion(value: string) {
    this._naturalLanguageQuestion = value;
  }
  public resetNaturalLanguageQuestion() {
    this._naturalLanguageQuestion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get naturalLanguageQuestionInput() {
    return this._naturalLanguageQuestion;
  }

  // sql_query - computed: false, optional: true, required: false
  private _sqlQuery?: string; 
  public get sqlQuery() {
    return this.getStringAttribute('sql_query');
  }
  public set sqlQuery(value: string) {
    this._sqlQuery = value;
  }
  public resetSqlQuery() {
    this._sqlQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlQueryInput() {
    return this._sqlQuery;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesParameters[] | cdktn.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList extends cdktn.ComplexList {
  public internalValue? : GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries[] | cdktn.IResolvable

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
  public get(index: number): GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference {
    return new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms {
  /**
  * Required. The description or meaning of the term.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#description GeminiDataAnalyticsDataAgent#description}
  */
  readonly description: string;
  /**
  * Required. User friendly display name of the glossary term.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#display_name GeminiDataAnalyticsDataAgent#display_name}
  */
  readonly displayName: string;
  /**
  * Optional. A list of general purpose labels associated with this term.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#labels GeminiDataAnalyticsDataAgent#labels}
  */
  readonly labels?: string[];
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    display_name: cdktn.stringToTerraform(struct!.displayName),
    labels: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.labels),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.labels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._displayName = undefined;
      this._labels = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._displayName = value.displayName;
      this._labels = value.labels;
    }
  }

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

  // labels - computed: false, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return this.getListAttribute('labels');
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList extends cdktn.ComplexList {
  public internalValue? : GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms[] | cdktn.IResolvable

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
  public get(index: number): GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference {
    return new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQueryFilters {
  /**
  * Required. The field to filter on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#field GeminiDataAnalyticsDataAgent#field}
  */
  readonly field: string;
  /**
  * Optional. The value for the field to filter on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#value GeminiDataAnalyticsDataAgent#value}
  */
  readonly value?: string;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQueryFiltersToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQueryFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field: cdktn.stringToTerraform(struct!.field),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQueryFiltersToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQueryFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field: {
      value: cdktn.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQueryFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQueryFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQueryFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._value = value.value;
    }
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQueryFiltersList extends cdktn.ComplexList {
  public internalValue? : GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQueryFilters[] | cdktn.IResolvable

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
  public get(index: number): GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQueryFiltersOutputReference {
    return new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQueryFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQuery {
  /**
  * Optional. The short alphanumeric identifier for the query, used for share links and Explore URLs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#client_id GeminiDataAnalyticsDataAgent#client_id}
  */
  readonly clientId?: string;
  /**
  * Required. The LookML explore used to generate the query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#explore GeminiDataAnalyticsDataAgent#explore}
  */
  readonly explore: string;
  /**
  * Optional. The fields to retrieve from the explore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#fields GeminiDataAnalyticsDataAgent#fields}
  */
  readonly fields?: string[];
  /**
  * Optional. Limit in the query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#limit GeminiDataAnalyticsDataAgent#limit}
  */
  readonly limit?: string;
  /**
  * Required. The LookML model used to generate the query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#model GeminiDataAnalyticsDataAgent#model}
  */
  readonly model: string;
  /**
  * Optional. The primary identifier for the query resource in Looker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#query_id GeminiDataAnalyticsDataAgent#query_id}
  */
  readonly queryId?: string;
  /**
  * Optional. The sorts to apply to the explore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#sorts GeminiDataAnalyticsDataAgent#sorts}
  */
  readonly sorts?: string[];
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#filters GeminiDataAnalyticsDataAgent#filters}
  */
  readonly filters?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQueryFilters[] | cdktn.IResolvable;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQueryToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQueryOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    explore: cdktn.stringToTerraform(struct!.explore),
    fields: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.fields),
    limit: cdktn.stringToTerraform(struct!.limit),
    model: cdktn.stringToTerraform(struct!.model),
    query_id: cdktn.stringToTerraform(struct!.queryId),
    sorts: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sorts),
    filters: cdktn.listMapper(geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQueryFiltersToTerraform, true)(struct!.filters),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQueryToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQueryOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    explore: {
      value: cdktn.stringToHclTerraform(struct!.explore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fields: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.fields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    limit: {
      value: cdktn.stringToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model: {
      value: cdktn.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_id: {
      value: cdktn.stringToHclTerraform(struct!.queryId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sorts: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sorts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    filters: {
      value: cdktn.listMapperHcl(geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQueryFiltersToHclTerraform, true)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQueryFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._explore !== undefined) {
      hasAnyValues = true;
      internalValueResult.explore = this._explore;
    }
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._queryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryId = this._queryId;
    }
    if (this._sorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.sorts = this._sorts;
    }
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._explore = undefined;
      this._fields = undefined;
      this._limit = undefined;
      this._model = undefined;
      this._queryId = undefined;
      this._sorts = undefined;
      this._filters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._explore = value.explore;
      this._fields = value.fields;
      this._limit = value.limit;
      this._model = value.model;
      this._queryId = value.queryId;
      this._sorts = value.sorts;
      this._filters.internalValue = value.filters;
    }
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // explore - computed: false, optional: false, required: true
  private _explore?: string; 
  public get explore() {
    return this.getStringAttribute('explore');
  }
  public set explore(value: string) {
    this._explore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exploreInput() {
    return this._explore;
  }

  // fields - computed: false, optional: true, required: false
  private _fields?: string[]; 
  public get fields() {
    return this.getListAttribute('fields');
  }
  public set fields(value: string[]) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: string; 
  public get limit() {
    return this.getStringAttribute('limit');
  }
  public set limit(value: string) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // model - computed: false, optional: false, required: true
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // query_id - computed: false, optional: true, required: false
  private _queryId?: string; 
  public get queryId() {
    return this.getStringAttribute('query_id');
  }
  public set queryId(value: string) {
    this._queryId = value;
  }
  public resetQueryId() {
    this._queryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryIdInput() {
    return this._queryId;
  }

  // sorts - computed: false, optional: true, required: false
  private _sorts?: string[]; 
  public get sorts() {
    return this.getListAttribute('sorts');
  }
  public set sorts(value: string[]) {
    this._sorts = value;
  }
  public resetSorts() {
    this._sorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortsInput() {
    return this._sorts;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQueryFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQueryFilters[] | cdktn.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueries {
  /**
  * Optional. Natural language questions that a user might ask.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#natural_language_questions GeminiDataAnalyticsDataAgent#natural_language_questions}
  */
  readonly naturalLanguageQuestions?: string[];
  /**
  * looker_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#looker_query GeminiDataAnalyticsDataAgent#looker_query}
  */
  readonly lookerQuery?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQuery;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueries | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    natural_language_questions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.naturalLanguageQuestions),
    looker_query: geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQueryToTerraform(struct!.lookerQuery),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueries | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    natural_language_questions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.naturalLanguageQuestions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    looker_query: {
      value: geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQueryToHclTerraform(struct!.lookerQuery),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueries | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._naturalLanguageQuestions !== undefined) {
      hasAnyValues = true;
      internalValueResult.naturalLanguageQuestions = this._naturalLanguageQuestions;
    }
    if (this._lookerQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookerQuery = this._lookerQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueries | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._naturalLanguageQuestions = undefined;
      this._lookerQuery.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._naturalLanguageQuestions = value.naturalLanguageQuestions;
      this._lookerQuery.internalValue = value.lookerQuery;
    }
  }

  // natural_language_questions - computed: false, optional: true, required: false
  private _naturalLanguageQuestions?: string[]; 
  public get naturalLanguageQuestions() {
    return this.getListAttribute('natural_language_questions');
  }
  public set naturalLanguageQuestions(value: string[]) {
    this._naturalLanguageQuestions = value;
  }
  public resetNaturalLanguageQuestions() {
    this._naturalLanguageQuestions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get naturalLanguageQuestionsInput() {
    return this._naturalLanguageQuestions;
  }

  // looker_query - computed: false, optional: true, required: false
  private _lookerQuery = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQueryOutputReference(this, "looker_query");
  public get lookerQuery() {
    return this._lookerQuery;
  }
  public putLookerQuery(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesLookerQuery) {
    this._lookerQuery.internalValue = value;
  }
  public resetLookerQuery() {
    this._lookerQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookerQueryInput() {
    return this._lookerQuery.internalValue;
  }
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesList extends cdktn.ComplexList {
  public internalValue? : GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueries[] | cdktn.IResolvable

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
  public get(index: number): GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesOutputReference {
    return new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython {
  /**
  * Optional. Whether to enable Python analysis. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#enabled GeminiDataAnalyticsDataAgent#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis {
  /**
  * python block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#python GeminiDataAnalyticsDataAgent#python}
  */
  readonly python?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    python: geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonToTerraform(struct!.python),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    python: {
      value: geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonToHclTerraform(struct!.python),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._python?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.python = this._python?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._python.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._python.internalValue = value.python;
    }
  }

  // python - computed: false, optional: true, required: false
  private _python = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference(this, "python");
  public get python() {
    return this._python;
  }
  public putPython(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython) {
    this._python.internalValue = value;
  }
  public resetPython() {
    this._python.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonInput() {
    return this._python.internalValue;
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource {
  /**
  * Optional. Limits the bytes billed for each BigQuery query job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#big_query_max_billed_bytes GeminiDataAnalyticsDataAgent#big_query_max_billed_bytes}
  */
  readonly bigQueryMaxBilledBytes?: number;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    big_query_max_billed_bytes: cdktn.numberToTerraform(struct!.bigQueryMaxBilledBytes),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    big_query_max_billed_bytes: {
      value: cdktn.numberToHclTerraform(struct!.bigQueryMaxBilledBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bigQueryMaxBilledBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigQueryMaxBilledBytes = this._bigQueryMaxBilledBytes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bigQueryMaxBilledBytes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bigQueryMaxBilledBytes = value.bigQueryMaxBilledBytes;
    }
  }

  // big_query_max_billed_bytes - computed: false, optional: true, required: false
  private _bigQueryMaxBilledBytes?: number; 
  public get bigQueryMaxBilledBytes() {
    return this.getNumberAttribute('big_query_max_billed_bytes');
  }
  public set bigQueryMaxBilledBytes(value: number) {
    this._bigQueryMaxBilledBytes = value;
  }
  public resetBigQueryMaxBilledBytes() {
    this._bigQueryMaxBilledBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigQueryMaxBilledBytesInput() {
    return this._bigQueryMaxBilledBytes;
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions {
  /**
  * Optional. The model to use for the agent loop.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#model GeminiDataAnalyticsDataAgent#model}
  */
  readonly model?: string;
  /**
  * analysis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#analysis GeminiDataAnalyticsDataAgent#analysis}
  */
  readonly analysis?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis;
  /**
  * datasource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#datasource GeminiDataAnalyticsDataAgent#datasource}
  */
  readonly datasource?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    model: cdktn.stringToTerraform(struct!.model),
    analysis: geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisToTerraform(struct!.analysis),
    datasource: geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceToTerraform(struct!.datasource),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    model: {
      value: cdktn.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    analysis: {
      value: geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisToHclTerraform(struct!.analysis),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisList",
    },
    datasource: {
      value: geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceToHclTerraform(struct!.datasource),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._analysis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.analysis = this._analysis?.internalValue;
    }
    if (this._datasource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._model = undefined;
      this._analysis.internalValue = undefined;
      this._datasource.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._model = value.model;
      this._analysis.internalValue = value.analysis;
      this._datasource.internalValue = value.datasource;
    }
  }

  // model - computed: true, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // analysis - computed: false, optional: true, required: false
  private _analysis = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference(this, "analysis");
  public get analysis() {
    return this._analysis;
  }
  public putAnalysis(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis) {
    this._analysis.internalValue = value;
  }
  public resetAnalysis() {
    this._analysis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisInput() {
    return this._analysis.internalValue;
  }

  // datasource - computed: false, optional: true, required: false
  private _datasource = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference(this, "datasource");
  public get datasource() {
    return this._datasource;
  }
  public putDatasource(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource) {
    this._datasource.internalValue = value;
  }
  public resetDatasource() {
    this._datasource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource.internalValue;
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths {
  /**
  * Required. The ordered list of paths within the table schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#paths GeminiDataAnalyticsDataAgent#paths}
  */
  readonly paths: string[];
  /**
  * Required. The service-qualified full resource name of the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#table_fqn GeminiDataAnalyticsDataAgent#table_fqn}
  */
  readonly tableFqn: string;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    paths: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.paths),
    table_fqn: cdktn.stringToTerraform(struct!.tableFqn),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    paths: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.paths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    table_fqn: {
      value: cdktn.stringToHclTerraform(struct!.tableFqn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._paths !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths;
    }
    if (this._tableFqn !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableFqn = this._tableFqn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._paths = undefined;
      this._tableFqn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._paths = value.paths;
      this._tableFqn = value.tableFqn;
    }
  }

  // paths - computed: false, optional: false, required: true
  private _paths?: string[]; 
  public get paths() {
    return this.getListAttribute('paths');
  }
  public set paths(value: string[]) {
    this._paths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths;
  }

  // table_fqn - computed: false, optional: false, required: true
  private _tableFqn?: string; 
  public get tableFqn() {
    return this.getStringAttribute('table_fqn');
  }
  public set tableFqn(value: string) {
    this._tableFqn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableFqnInput() {
    return this._tableFqn;
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths {
  /**
  * Required. The ordered list of paths within the table schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#paths GeminiDataAnalyticsDataAgent#paths}
  */
  readonly paths: string[];
  /**
  * Required. The service-qualified full resource name of the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#table_fqn GeminiDataAnalyticsDataAgent#table_fqn}
  */
  readonly tableFqn: string;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    paths: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.paths),
    table_fqn: cdktn.stringToTerraform(struct!.tableFqn),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    paths: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.paths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    table_fqn: {
      value: cdktn.stringToHclTerraform(struct!.tableFqn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._paths !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths;
    }
    if (this._tableFqn !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableFqn = this._tableFqn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._paths = undefined;
      this._tableFqn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._paths = value.paths;
      this._tableFqn = value.tableFqn;
    }
  }

  // paths - computed: false, optional: false, required: true
  private _paths?: string[]; 
  public get paths() {
    return this.getListAttribute('paths');
  }
  public set paths(value: string[]) {
    this._paths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths;
  }

  // table_fqn - computed: false, optional: false, required: true
  private _tableFqn?: string; 
  public get tableFqn() {
    return this.getStringAttribute('table_fqn');
  }
  public set tableFqn(value: string) {
    this._tableFqn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableFqnInput() {
    return this._tableFqn;
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships {
  /**
  * Optional. A confidence score for the suggested relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#confidence_score GeminiDataAnalyticsDataAgent#confidence_score}
  */
  readonly confidenceScore?: number;
  /**
  * Optional. Sources which generated the schema relation edge.
  * Possible values: BIGQUERY_JOB_HISTORY, LLM_SUGGESTED, BIGQUERY_TABLE_CONSTRAINTS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#sources GeminiDataAnalyticsDataAgent#sources}
  */
  readonly sources?: string[];
  /**
  * left_schema_paths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#left_schema_paths GeminiDataAnalyticsDataAgent#left_schema_paths}
  */
  readonly leftSchemaPaths: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths;
  /**
  * right_schema_paths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#right_schema_paths GeminiDataAnalyticsDataAgent#right_schema_paths}
  */
  readonly rightSchemaPaths: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    confidence_score: cdktn.numberToTerraform(struct!.confidenceScore),
    sources: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sources),
    left_schema_paths: geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsToTerraform(struct!.leftSchemaPaths),
    right_schema_paths: geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsToTerraform(struct!.rightSchemaPaths),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    confidence_score: {
      value: cdktn.numberToHclTerraform(struct!.confidenceScore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sources: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    left_schema_paths: {
      value: geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsToHclTerraform(struct!.leftSchemaPaths),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsList",
    },
    right_schema_paths: {
      value: geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsToHclTerraform(struct!.rightSchemaPaths),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confidenceScore !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidenceScore = this._confidenceScore;
    }
    if (this._sources !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources;
    }
    if (this._leftSchemaPaths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.leftSchemaPaths = this._leftSchemaPaths?.internalValue;
    }
    if (this._rightSchemaPaths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rightSchemaPaths = this._rightSchemaPaths?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._confidenceScore = undefined;
      this._sources = undefined;
      this._leftSchemaPaths.internalValue = undefined;
      this._rightSchemaPaths.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._confidenceScore = value.confidenceScore;
      this._sources = value.sources;
      this._leftSchemaPaths.internalValue = value.leftSchemaPaths;
      this._rightSchemaPaths.internalValue = value.rightSchemaPaths;
    }
  }

  // confidence_score - computed: false, optional: true, required: false
  private _confidenceScore?: number; 
  public get confidenceScore() {
    return this.getNumberAttribute('confidence_score');
  }
  public set confidenceScore(value: number) {
    this._confidenceScore = value;
  }
  public resetConfidenceScore() {
    this._confidenceScore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidenceScoreInput() {
    return this._confidenceScore;
  }

  // sources - computed: false, optional: true, required: false
  private _sources?: string[]; 
  public get sources() {
    return this.getListAttribute('sources');
  }
  public set sources(value: string[]) {
    this._sources = value;
  }
  public resetSources() {
    this._sources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources;
  }

  // left_schema_paths - computed: false, optional: false, required: true
  private _leftSchemaPaths = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference(this, "left_schema_paths");
  public get leftSchemaPaths() {
    return this._leftSchemaPaths;
  }
  public putLeftSchemaPaths(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths) {
    this._leftSchemaPaths.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get leftSchemaPathsInput() {
    return this._leftSchemaPaths.internalValue;
  }

  // right_schema_paths - computed: false, optional: false, required: true
  private _rightSchemaPaths = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference(this, "right_schema_paths");
  public get rightSchemaPaths() {
    return this._rightSchemaPaths;
  }
  public putRightSchemaPaths(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths) {
    this._rightSchemaPaths.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rightSchemaPathsInput() {
    return this._rightSchemaPaths.internalValue;
  }
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList extends cdktn.ComplexList {
  public internalValue? : GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships[] | cdktn.IResolvable

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
  public get(index: number): GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference {
    return new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutinesRoutineReference {
  /**
  * Optional. The dataset ID of the routine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#dataset_id GeminiDataAnalyticsDataAgent#dataset_id}
  */
  readonly datasetId?: string;
  /**
  * Optional. The project ID of the routine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#project_id GeminiDataAnalyticsDataAgent#project_id}
  */
  readonly projectId?: string;
  /**
  * Optional. The routine ID of the routine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#routine_id GeminiDataAnalyticsDataAgent#routine_id}
  */
  readonly routineId?: string;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutinesRoutineReferenceToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutinesRoutineReferenceOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutinesRoutineReference): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dataset_id: cdktn.stringToTerraform(struct!.datasetId),
    project_id: cdktn.stringToTerraform(struct!.projectId),
    routine_id: cdktn.stringToTerraform(struct!.routineId),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutinesRoutineReferenceToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutinesRoutineReferenceOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutinesRoutineReference): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dataset_id: {
      value: cdktn.stringToHclTerraform(struct!.datasetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktn.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routine_id: {
      value: cdktn.stringToHclTerraform(struct!.routineId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutinesRoutineReferenceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutinesRoutineReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._routineId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routineId = this._routineId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutinesRoutineReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetId = undefined;
      this._projectId = undefined;
      this._routineId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetId = value.datasetId;
      this._projectId = value.projectId;
      this._routineId = value.routineId;
    }
  }

  // dataset_id - computed: false, optional: true, required: false
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  public resetDatasetId() {
    this._datasetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // routine_id - computed: false, optional: true, required: false
  private _routineId?: string; 
  public get routineId() {
    return this.getStringAttribute('routine_id');
  }
  public set routineId(value: string) {
    this._routineId = value;
  }
  public resetRoutineId() {
    this._routineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routineIdInput() {
    return this._routineId;
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutines {
  /**
  * Optional. User override or addition to description, to tell the agent when to use the UDF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#description GeminiDataAnalyticsDataAgent#description}
  */
  readonly description?: string;
  /**
  * routine_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#routine_reference GeminiDataAnalyticsDataAgent#routine_reference}
  */
  readonly routineReference?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutinesRoutineReference;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutinesToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutines | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    routine_reference: geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutinesRoutineReferenceToTerraform(struct!.routineReference),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutinesToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutines | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routine_reference: {
      value: geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutinesRoutineReferenceToHclTerraform(struct!.routineReference),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutinesRoutineReferenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutinesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutines | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._routineReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routineReference = this._routineReference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutines | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._routineReference.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._routineReference.internalValue = value.routineReference;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // routine_reference - computed: false, optional: true, required: false
  private _routineReference = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutinesRoutineReferenceOutputReference(this, "routine_reference");
  public get routineReference() {
    return this._routineReference;
  }
  public putRoutineReference(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutinesRoutineReference) {
    this._routineReference.internalValue = value;
  }
  public resetRoutineReference() {
    this._routineReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routineReferenceInput() {
    return this._routineReference.internalValue;
  }
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutinesList extends cdktn.ComplexList {
  public internalValue? : GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutines[] | cdktn.IResolvable

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
  public get(index: number): GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutinesOutputReference {
    return new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutinesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctions {
  /**
  * bq_routines block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#bq_routines GeminiDataAnalyticsDataAgent#bq_routines}
  */
  readonly bqRoutines?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutines[] | cdktn.IResolvable;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bq_routines: cdktn.listMapper(geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutinesToTerraform, true)(struct!.bqRoutines),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bq_routines: {
      value: cdktn.listMapperHcl(geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutinesToHclTerraform, true)(struct!.bqRoutines),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutinesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bqRoutines?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bqRoutines = this._bqRoutines?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bqRoutines.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bqRoutines.internalValue = value.bqRoutines;
    }
  }

  // bq_routines - computed: false, optional: true, required: false
  private _bqRoutines = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutinesList(this, "bq_routines", false);
  public get bqRoutines() {
    return this._bqRoutines;
  }
  public putBqRoutines(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsBqRoutines[] | cdktn.IResolvable) {
    this._bqRoutines.internalValue = value;
  }
  public resetBqRoutines() {
    this._bqRoutines.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bqRoutinesInput() {
    return this._bqRoutines.internalValue;
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext {
  /**
  * Optional. The basic entry point for data owners creating domain
  * knowledge for the agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#system_instruction GeminiDataAnalyticsDataAgent#system_instruction}
  */
  readonly systemInstruction?: string;
  /**
  * datasource_references block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#datasource_references GeminiDataAnalyticsDataAgent#datasource_references}
  */
  readonly datasourceReferences: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences;
  /**
  * example_queries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#example_queries GeminiDataAnalyticsDataAgent#example_queries}
  */
  readonly exampleQueries?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries[] | cdktn.IResolvable;
  /**
  * glossary_terms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#glossary_terms GeminiDataAnalyticsDataAgent#glossary_terms}
  */
  readonly glossaryTerms?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms[] | cdktn.IResolvable;
  /**
  * looker_golden_queries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#looker_golden_queries GeminiDataAnalyticsDataAgent#looker_golden_queries}
  */
  readonly lookerGoldenQueries?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueries[] | cdktn.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#options GeminiDataAnalyticsDataAgent#options}
  */
  readonly options?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions;
  /**
  * schema_relationships block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#schema_relationships GeminiDataAnalyticsDataAgent#schema_relationships}
  */
  readonly schemaRelationships?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships[] | cdktn.IResolvable;
  /**
  * user_functions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#user_functions GeminiDataAnalyticsDataAgent#user_functions}
  */
  readonly userFunctions?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctions;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    system_instruction: cdktn.stringToTerraform(struct!.systemInstruction),
    datasource_references: geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesToTerraform(struct!.datasourceReferences),
    example_queries: cdktn.listMapper(geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesToTerraform, true)(struct!.exampleQueries),
    glossary_terms: cdktn.listMapper(geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsToTerraform, true)(struct!.glossaryTerms),
    looker_golden_queries: cdktn.listMapper(geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesToTerraform, true)(struct!.lookerGoldenQueries),
    options: geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsToTerraform(struct!.options),
    schema_relationships: cdktn.listMapper(geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsToTerraform, true)(struct!.schemaRelationships),
    user_functions: geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsToTerraform(struct!.userFunctions),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    system_instruction: {
      value: cdktn.stringToHclTerraform(struct!.systemInstruction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datasource_references: {
      value: geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesToHclTerraform(struct!.datasourceReferences),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesList",
    },
    example_queries: {
      value: cdktn.listMapperHcl(geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesToHclTerraform, true)(struct!.exampleQueries),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList",
    },
    glossary_terms: {
      value: cdktn.listMapperHcl(geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsToHclTerraform, true)(struct!.glossaryTerms),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList",
    },
    looker_golden_queries: {
      value: cdktn.listMapperHcl(geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesToHclTerraform, true)(struct!.lookerGoldenQueries),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesList",
    },
    options: {
      value: geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsList",
    },
    schema_relationships: {
      value: cdktn.listMapperHcl(geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsToHclTerraform, true)(struct!.schemaRelationships),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList",
    },
    user_functions: {
      value: geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsToHclTerraform(struct!.userFunctions),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._systemInstruction !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemInstruction = this._systemInstruction;
    }
    if (this._datasourceReferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasourceReferences = this._datasourceReferences?.internalValue;
    }
    if (this._exampleQueries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exampleQueries = this._exampleQueries?.internalValue;
    }
    if (this._glossaryTerms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.glossaryTerms = this._glossaryTerms?.internalValue;
    }
    if (this._lookerGoldenQueries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookerGoldenQueries = this._lookerGoldenQueries?.internalValue;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._schemaRelationships?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaRelationships = this._schemaRelationships?.internalValue;
    }
    if (this._userFunctions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userFunctions = this._userFunctions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._systemInstruction = undefined;
      this._datasourceReferences.internalValue = undefined;
      this._exampleQueries.internalValue = undefined;
      this._glossaryTerms.internalValue = undefined;
      this._lookerGoldenQueries.internalValue = undefined;
      this._options.internalValue = undefined;
      this._schemaRelationships.internalValue = undefined;
      this._userFunctions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._systemInstruction = value.systemInstruction;
      this._datasourceReferences.internalValue = value.datasourceReferences;
      this._exampleQueries.internalValue = value.exampleQueries;
      this._glossaryTerms.internalValue = value.glossaryTerms;
      this._lookerGoldenQueries.internalValue = value.lookerGoldenQueries;
      this._options.internalValue = value.options;
      this._schemaRelationships.internalValue = value.schemaRelationships;
      this._userFunctions.internalValue = value.userFunctions;
    }
  }

  // system_instruction - computed: false, optional: true, required: false
  private _systemInstruction?: string; 
  public get systemInstruction() {
    return this.getStringAttribute('system_instruction');
  }
  public set systemInstruction(value: string) {
    this._systemInstruction = value;
  }
  public resetSystemInstruction() {
    this._systemInstruction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemInstructionInput() {
    return this._systemInstruction;
  }

  // datasource_references - computed: false, optional: false, required: true
  private _datasourceReferences = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference(this, "datasource_references");
  public get datasourceReferences() {
    return this._datasourceReferences;
  }
  public putDatasourceReferences(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences) {
    this._datasourceReferences.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceReferencesInput() {
    return this._datasourceReferences.internalValue;
  }

  // example_queries - computed: false, optional: true, required: false
  private _exampleQueries = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList(this, "example_queries", false);
  public get exampleQueries() {
    return this._exampleQueries;
  }
  public putExampleQueries(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries[] | cdktn.IResolvable) {
    this._exampleQueries.internalValue = value;
  }
  public resetExampleQueries() {
    this._exampleQueries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exampleQueriesInput() {
    return this._exampleQueries.internalValue;
  }

  // glossary_terms - computed: false, optional: true, required: false
  private _glossaryTerms = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList(this, "glossary_terms", false);
  public get glossaryTerms() {
    return this._glossaryTerms;
  }
  public putGlossaryTerms(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms[] | cdktn.IResolvable) {
    this._glossaryTerms.internalValue = value;
  }
  public resetGlossaryTerms() {
    this._glossaryTerms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glossaryTermsInput() {
    return this._glossaryTerms.internalValue;
  }

  // looker_golden_queries - computed: false, optional: true, required: false
  private _lookerGoldenQueries = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueriesList(this, "looker_golden_queries", false);
  public get lookerGoldenQueries() {
    return this._lookerGoldenQueries;
  }
  public putLookerGoldenQueries(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextLookerGoldenQueries[] | cdktn.IResolvable) {
    this._lookerGoldenQueries.internalValue = value;
  }
  public resetLookerGoldenQueries() {
    this._lookerGoldenQueries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookerGoldenQueriesInput() {
    return this._lookerGoldenQueries.internalValue;
  }

  // options - computed: false, optional: true, required: false
  private _options = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // schema_relationships - computed: false, optional: true, required: false
  private _schemaRelationships = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList(this, "schema_relationships", false);
  public get schemaRelationships() {
    return this._schemaRelationships;
  }
  public putSchemaRelationships(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships[] | cdktn.IResolvable) {
    this._schemaRelationships.internalValue = value;
  }
  public resetSchemaRelationships() {
    this._schemaRelationships.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRelationshipsInput() {
    return this._schemaRelationships.internalValue;
  }

  // user_functions - computed: false, optional: true, required: false
  private _userFunctions = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctionsOutputReference(this, "user_functions");
  public get userFunctions() {
    return this._userFunctions;
  }
  public putUserFunctions(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextUserFunctions) {
    this._userFunctions.internalValue = value;
  }
  public resetUserFunctions() {
    this._userFunctions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userFunctionsInput() {
    return this._userFunctions.internalValue;
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgent {
  /**
  * published_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#published_context GeminiDataAnalyticsDataAgent#published_context}
  */
  readonly publishedContext?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext;
  /**
  * staging_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#staging_context GeminiDataAnalyticsDataAgent#staging_context}
  */
  readonly stagingContext?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    published_context: geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextToTerraform(struct!.publishedContext),
    staging_context: geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextToTerraform(struct!.stagingContext),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    published_context: {
      value: geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextToHclTerraform(struct!.publishedContext),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextList",
    },
    staging_context: {
      value: geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextToHclTerraform(struct!.stagingContext),
      isBlock: true,
      type: "list",
      storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GeminiDataAnalyticsDataAgentDataAnalyticsAgent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publishedContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishedContext = this._publishedContext?.internalValue;
    }
    if (this._stagingContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stagingContext = this._stagingContext?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publishedContext.internalValue = undefined;
      this._stagingContext.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publishedContext.internalValue = value.publishedContext;
      this._stagingContext.internalValue = value.stagingContext;
    }
  }

  // last_published_context - computed: true, optional: false, required: false
  private _lastPublishedContext = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList(this, "last_published_context", false);
  public get lastPublishedContext() {
    return this._lastPublishedContext;
  }

  // published_context - computed: false, optional: true, required: false
  private _publishedContext = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference(this, "published_context");
  public get publishedContext() {
    return this._publishedContext;
  }
  public putPublishedContext(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext) {
    this._publishedContext.internalValue = value;
  }
  public resetPublishedContext() {
    this._publishedContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishedContextInput() {
    return this._publishedContext.internalValue;
  }

  // staging_context - computed: false, optional: true, required: false
  private _stagingContext = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference(this, "staging_context");
  public get stagingContext() {
    return this._stagingContext;
  }
  public putStagingContext(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext) {
    this._stagingContext.internalValue = value;
  }
  public resetStagingContext() {
    this._stagingContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stagingContextInput() {
    return this._stagingContext.internalValue;
  }
}
export interface GeminiDataAnalyticsDataAgentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#create GeminiDataAnalyticsDataAgent#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#delete GeminiDataAnalyticsDataAgent#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#update GeminiDataAnalyticsDataAgent#update}
  */
  readonly update?: string;
}

export function geminiDataAnalyticsDataAgentTimeoutsToTerraform(struct?: GeminiDataAnalyticsDataAgentTimeouts | cdktn.IResolvable): any {
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


export function geminiDataAnalyticsDataAgentTimeoutsToHclTerraform(struct?: GeminiDataAnalyticsDataAgentTimeouts | cdktn.IResolvable): any {
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

export class GeminiDataAnalyticsDataAgentTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GeminiDataAnalyticsDataAgentTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: GeminiDataAnalyticsDataAgentTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent google_gemini_data_analytics_data_agent}
*/
export class GeminiDataAnalyticsDataAgent extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_gemini_data_analytics_data_agent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GeminiDataAnalyticsDataAgent resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GeminiDataAnalyticsDataAgent to import
  * @param importFromId The id of the existing GeminiDataAnalyticsDataAgent that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GeminiDataAnalyticsDataAgent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_gemini_data_analytics_data_agent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/gemini_data_analytics_data_agent google_gemini_data_analytics_data_agent} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GeminiDataAnalyticsDataAgentConfig
  */
  public constructor(scope: Construct, id: string, config: GeminiDataAnalyticsDataAgentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_gemini_data_analytics_data_agent',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '8.9.0',
        providerVersionConstraint: '~> 8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataAgentId = config.dataAgentId;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._kmsKey = config.kmsKey;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._dataAnalyticsAgent.internalValue = config.dataAnalyticsAgent;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // data_agent_id - computed: false, optional: false, required: true
  private _dataAgentId?: string; 
  public get dataAgentId() {
    return this.getStringAttribute('data_agent_id');
  }
  public set dataAgentId(value: string) {
    this._dataAgentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataAgentIdInput() {
    return this._dataAgentId;
  }

  // delete_time - computed: true, optional: false, required: false
  public get deleteTime() {
    return this.getStringAttribute('delete_time');
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

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktn.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
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

  // kms_key - computed: false, optional: true, required: false
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // purge_time - computed: true, optional: false, required: false
  public get purgeTime() {
    return this.getStringAttribute('purge_time');
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // data_analytics_agent - computed: false, optional: true, required: false
  private _dataAnalyticsAgent = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference(this, "data_analytics_agent");
  public get dataAnalyticsAgent() {
    return this._dataAnalyticsAgent;
  }
  public putDataAnalyticsAgent(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgent) {
    this._dataAnalyticsAgent.internalValue = value;
  }
  public resetDataAnalyticsAgent() {
    this._dataAnalyticsAgent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataAnalyticsAgentInput() {
    return this._dataAnalyticsAgent.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GeminiDataAnalyticsDataAgentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GeminiDataAnalyticsDataAgentTimeouts) {
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
      data_agent_id: cdktn.stringToTerraform(this._dataAgentId),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      display_name: cdktn.stringToTerraform(this._displayName),
      id: cdktn.stringToTerraform(this._id),
      kms_key: cdktn.stringToTerraform(this._kmsKey),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      data_analytics_agent: geminiDataAnalyticsDataAgentDataAnalyticsAgentToTerraform(this._dataAnalyticsAgent.internalValue),
      timeouts: geminiDataAnalyticsDataAgentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_agent_id: {
        value: cdktn.stringToHclTerraform(this._dataAgentId),
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
      description: {
        value: cdktn.stringToHclTerraform(this._description),
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
      kms_key: {
        value: cdktn.stringToHclTerraform(this._kmsKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      data_analytics_agent: {
        value: geminiDataAnalyticsDataAgentDataAnalyticsAgentToHclTerraform(this._dataAnalyticsAgent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GeminiDataAnalyticsDataAgentDataAnalyticsAgentList",
      },
      timeouts: {
        value: geminiDataAnalyticsDataAgentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GeminiDataAnalyticsDataAgentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
