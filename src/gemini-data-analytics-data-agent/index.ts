/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#data_agent_id GeminiDataAnalyticsDataAgent#data_agent_id}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#deletion_policy GeminiDataAnalyticsDataAgent#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Optional. Description of the agent. Must be between 1 and 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#description GeminiDataAnalyticsDataAgent#description}
  */
  readonly description?: string;
  /**
  * Optional. User friendly display name. Must be between 1 and 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#display_name GeminiDataAnalyticsDataAgent#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#id GeminiDataAnalyticsDataAgent#id}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#kms_key GeminiDataAnalyticsDataAgent#kms_key}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#labels GeminiDataAnalyticsDataAgent#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location of the DataAgent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#location GeminiDataAnalyticsDataAgent#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#project GeminiDataAnalyticsDataAgent#project}
  */
  readonly project?: string;
  /**
  * data_analytics_agent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#data_analytics_agent GeminiDataAnalyticsDataAgent#data_analytics_agent}
  */
  readonly dataAnalyticsAgent?: GeminiDataAnalyticsDataAgentDataAnalyticsAgent;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#timeouts GeminiDataAnalyticsDataAgent#timeouts}
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
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences {
  /**
  * Required. The dataset that the table belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#dataset_id GeminiDataAnalyticsDataAgent#dataset_id}
  */
  readonly datasetId: string;
  /**
  * Required. The project that the table belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#project_id GeminiDataAnalyticsDataAgent#project_id}
  */
  readonly projectId: string;
  /**
  * Required. The table ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#table_id GeminiDataAnalyticsDataAgent#table_id}
  */
  readonly tableId: string;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasetId = undefined;
      this._projectId = undefined;
      this._tableId = undefined;
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
  * table_references block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#table_references GeminiDataAnalyticsDataAgent#table_references}
  */
  readonly tableReferences?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences[] | cdktn.IResolvable;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    table_references: cdktn.listMapper(geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesToTerraform, true)(struct!.tableReferences),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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
    if (this._tableReferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableReferences = this._tableReferences?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tableReferences.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tableReferences.internalValue = value.tableReferences;
    }
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
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences {
  /**
  * bq block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#bq GeminiDataAnalyticsDataAgent#bq}
  */
  readonly bq: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bq: geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqToTerraform(struct!.bq),
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bq.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bq.internalValue = value.bq;
    }
  }

  // bq - computed: false, optional: false, required: true
  private _bq = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference(this, "bq");
  public get bq() {
    return this._bq;
  }
  public putBq(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq) {
    this._bq.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bqInput() {
    return this._bq.internalValue;
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries {
  /**
  * Optional. A natural language question that a user might ask.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#natural_language_question GeminiDataAnalyticsDataAgent#natural_language_question}
  */
  readonly naturalLanguageQuestion?: string;
  /**
  * Optional. The SQL query that should be generated to answer
  * the natural language question.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#sql_query GeminiDataAnalyticsDataAgent#sql_query}
  */
  readonly sqlQuery?: string;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    natural_language_question: cdktn.stringToTerraform(struct!.naturalLanguageQuestion),
    sql_query: cdktn.stringToTerraform(struct!.sqlQuery),
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._naturalLanguageQuestion = undefined;
      this._sqlQuery = undefined;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#description GeminiDataAnalyticsDataAgent#description}
  */
  readonly description: string;
  /**
  * Required. User friendly display name of the glossary term.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#display_name GeminiDataAnalyticsDataAgent#display_name}
  */
  readonly displayName: string;
  /**
  * Optional. A list of general purpose labels associated with this term.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#labels GeminiDataAnalyticsDataAgent#labels}
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
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython {
  /**
  * Optional. Whether to enable Python analysis. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#enabled GeminiDataAnalyticsDataAgent#enabled}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#python GeminiDataAnalyticsDataAgent#python}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#big_query_max_billed_bytes GeminiDataAnalyticsDataAgent#big_query_max_billed_bytes}
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
  * analysis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#analysis GeminiDataAnalyticsDataAgent#analysis}
  */
  readonly analysis?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis;
  /**
  * datasource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#datasource GeminiDataAnalyticsDataAgent#datasource}
  */
  readonly datasource?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
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
      this._analysis.internalValue = undefined;
      this._datasource.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._analysis.internalValue = value.analysis;
      this._datasource.internalValue = value.datasource;
    }
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#paths GeminiDataAnalyticsDataAgent#paths}
  */
  readonly paths: string[];
  /**
  * Required. The service-qualified full resource name of the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#table_fqn GeminiDataAnalyticsDataAgent#table_fqn}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#paths GeminiDataAnalyticsDataAgent#paths}
  */
  readonly paths: string[];
  /**
  * Required. The service-qualified full resource name of the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#table_fqn GeminiDataAnalyticsDataAgent#table_fqn}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#confidence_score GeminiDataAnalyticsDataAgent#confidence_score}
  */
  readonly confidenceScore?: number;
  /**
  * Optional. Sources which generated the schema relation edge.
  * Possible values: BIGQUERY_JOB_HISTORY, LLM_SUGGESTED, BIGQUERY_TABLE_CONSTRAINTS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#sources GeminiDataAnalyticsDataAgent#sources}
  */
  readonly sources?: string[];
  /**
  * left_schema_paths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#left_schema_paths GeminiDataAnalyticsDataAgent#left_schema_paths}
  */
  readonly leftSchemaPaths: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths;
  /**
  * right_schema_paths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#right_schema_paths GeminiDataAnalyticsDataAgent#right_schema_paths}
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
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext {
  /**
  * Optional. The basic entry point for data owners creating domain
  * knowledge for the agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#system_instruction GeminiDataAnalyticsDataAgent#system_instruction}
  */
  readonly systemInstruction?: string;
  /**
  * datasource_references block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#datasource_references GeminiDataAnalyticsDataAgent#datasource_references}
  */
  readonly datasourceReferences: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences;
  /**
  * example_queries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#example_queries GeminiDataAnalyticsDataAgent#example_queries}
  */
  readonly exampleQueries?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries[] | cdktn.IResolvable;
  /**
  * glossary_terms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#glossary_terms GeminiDataAnalyticsDataAgent#glossary_terms}
  */
  readonly glossaryTerms?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms[] | cdktn.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#options GeminiDataAnalyticsDataAgent#options}
  */
  readonly options?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions;
  /**
  * schema_relationships block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#schema_relationships GeminiDataAnalyticsDataAgent#schema_relationships}
  */
  readonly schemaRelationships?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships[] | cdktn.IResolvable;
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
    options: geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsToTerraform(struct!.options),
    schema_relationships: cdktn.listMapper(geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsToTerraform, true)(struct!.schemaRelationships),
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
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._schemaRelationships?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaRelationships = this._schemaRelationships?.internalValue;
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
      this._options.internalValue = undefined;
      this._schemaRelationships.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._systemInstruction = value.systemInstruction;
      this._datasourceReferences.internalValue = value.datasourceReferences;
      this._exampleQueries.internalValue = value.exampleQueries;
      this._glossaryTerms.internalValue = value.glossaryTerms;
      this._options.internalValue = value.options;
      this._schemaRelationships.internalValue = value.schemaRelationships;
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
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences {
  /**
  * Required. The dataset that the table belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#dataset_id GeminiDataAnalyticsDataAgent#dataset_id}
  */
  readonly datasetId: string;
  /**
  * Required. The project that the table belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#project_id GeminiDataAnalyticsDataAgent#project_id}
  */
  readonly projectId: string;
  /**
  * Required. The table ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#table_id GeminiDataAnalyticsDataAgent#table_id}
  */
  readonly tableId: string;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasetId = undefined;
      this._projectId = undefined;
      this._tableId = undefined;
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
  * table_references block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#table_references GeminiDataAnalyticsDataAgent#table_references}
  */
  readonly tableReferences?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences[] | cdktn.IResolvable;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    table_references: cdktn.listMapper(geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesToTerraform, true)(struct!.tableReferences),
  }
}


export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqToHclTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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
    if (this._tableReferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableReferences = this._tableReferences?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tableReferences.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tableReferences.internalValue = value.tableReferences;
    }
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
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences {
  /**
  * bq block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#bq GeminiDataAnalyticsDataAgent#bq}
  */
  readonly bq: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bq: geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqToTerraform(struct!.bq),
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bq.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bq.internalValue = value.bq;
    }
  }

  // bq - computed: false, optional: false, required: true
  private _bq = new GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference(this, "bq");
  public get bq() {
    return this._bq;
  }
  public putBq(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq) {
    this._bq.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bqInput() {
    return this._bq.internalValue;
  }
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries {
  /**
  * Optional. A natural language question that a user might ask.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#natural_language_question GeminiDataAnalyticsDataAgent#natural_language_question}
  */
  readonly naturalLanguageQuestion?: string;
  /**
  * Optional. The SQL query that should be generated to answer
  * the natural language question.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#sql_query GeminiDataAnalyticsDataAgent#sql_query}
  */
  readonly sqlQuery?: string;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    natural_language_question: cdktn.stringToTerraform(struct!.naturalLanguageQuestion),
    sql_query: cdktn.stringToTerraform(struct!.sqlQuery),
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._naturalLanguageQuestion = undefined;
      this._sqlQuery = undefined;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#description GeminiDataAnalyticsDataAgent#description}
  */
  readonly description: string;
  /**
  * Required. User friendly display name of the glossary term.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#display_name GeminiDataAnalyticsDataAgent#display_name}
  */
  readonly displayName: string;
  /**
  * Optional. A list of general purpose labels associated with this term.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#labels GeminiDataAnalyticsDataAgent#labels}
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
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython {
  /**
  * Optional. Whether to enable Python analysis. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#enabled GeminiDataAnalyticsDataAgent#enabled}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#python GeminiDataAnalyticsDataAgent#python}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#big_query_max_billed_bytes GeminiDataAnalyticsDataAgent#big_query_max_billed_bytes}
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
  * analysis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#analysis GeminiDataAnalyticsDataAgent#analysis}
  */
  readonly analysis?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis;
  /**
  * datasource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#datasource GeminiDataAnalyticsDataAgent#datasource}
  */
  readonly datasource?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource;
}

export function geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsToTerraform(struct?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
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
      this._analysis.internalValue = undefined;
      this._datasource.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._analysis.internalValue = value.analysis;
      this._datasource.internalValue = value.datasource;
    }
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#paths GeminiDataAnalyticsDataAgent#paths}
  */
  readonly paths: string[];
  /**
  * Required. The service-qualified full resource name of the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#table_fqn GeminiDataAnalyticsDataAgent#table_fqn}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#paths GeminiDataAnalyticsDataAgent#paths}
  */
  readonly paths: string[];
  /**
  * Required. The service-qualified full resource name of the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#table_fqn GeminiDataAnalyticsDataAgent#table_fqn}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#confidence_score GeminiDataAnalyticsDataAgent#confidence_score}
  */
  readonly confidenceScore?: number;
  /**
  * Optional. Sources which generated the schema relation edge.
  * Possible values: BIGQUERY_JOB_HISTORY, LLM_SUGGESTED, BIGQUERY_TABLE_CONSTRAINTS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#sources GeminiDataAnalyticsDataAgent#sources}
  */
  readonly sources?: string[];
  /**
  * left_schema_paths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#left_schema_paths GeminiDataAnalyticsDataAgent#left_schema_paths}
  */
  readonly leftSchemaPaths: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths;
  /**
  * right_schema_paths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#right_schema_paths GeminiDataAnalyticsDataAgent#right_schema_paths}
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
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext {
  /**
  * Optional. The basic entry point for data owners creating domain
  * knowledge for the agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#system_instruction GeminiDataAnalyticsDataAgent#system_instruction}
  */
  readonly systemInstruction?: string;
  /**
  * datasource_references block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#datasource_references GeminiDataAnalyticsDataAgent#datasource_references}
  */
  readonly datasourceReferences: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences;
  /**
  * example_queries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#example_queries GeminiDataAnalyticsDataAgent#example_queries}
  */
  readonly exampleQueries?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries[] | cdktn.IResolvable;
  /**
  * glossary_terms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#glossary_terms GeminiDataAnalyticsDataAgent#glossary_terms}
  */
  readonly glossaryTerms?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms[] | cdktn.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#options GeminiDataAnalyticsDataAgent#options}
  */
  readonly options?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions;
  /**
  * schema_relationships block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#schema_relationships GeminiDataAnalyticsDataAgent#schema_relationships}
  */
  readonly schemaRelationships?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships[] | cdktn.IResolvable;
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
    options: geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsToTerraform(struct!.options),
    schema_relationships: cdktn.listMapper(geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsToTerraform, true)(struct!.schemaRelationships),
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
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._schemaRelationships?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaRelationships = this._schemaRelationships?.internalValue;
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
      this._options.internalValue = undefined;
      this._schemaRelationships.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._systemInstruction = value.systemInstruction;
      this._datasourceReferences.internalValue = value.datasourceReferences;
      this._exampleQueries.internalValue = value.exampleQueries;
      this._glossaryTerms.internalValue = value.glossaryTerms;
      this._options.internalValue = value.options;
      this._schemaRelationships.internalValue = value.schemaRelationships;
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
}
export interface GeminiDataAnalyticsDataAgentDataAnalyticsAgent {
  /**
  * published_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#published_context GeminiDataAnalyticsDataAgent#published_context}
  */
  readonly publishedContext?: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext;
  /**
  * staging_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#staging_context GeminiDataAnalyticsDataAgent#staging_context}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#create GeminiDataAnalyticsDataAgent#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#delete GeminiDataAnalyticsDataAgent#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#update GeminiDataAnalyticsDataAgent#update}
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent google_gemini_data_analytics_data_agent}
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
  * @param importFromId The id of the existing GeminiDataAnalyticsDataAgent that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GeminiDataAnalyticsDataAgent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_gemini_data_analytics_data_agent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/gemini_data_analytics_data_agent google_gemini_data_analytics_data_agent} Resource
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
        providerVersion: '8.8.1',
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
