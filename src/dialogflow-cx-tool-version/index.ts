/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_cx_tool_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DialogflowCxToolVersionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_cx_tool_version#deletion_policy DialogflowCxToolVersion#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * The display name of the tool version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_cx_tool_version#display_name DialogflowCxToolVersion#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_cx_tool_version#id DialogflowCxToolVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The tool to create a Version for.
  * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/tools/<Tool ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_cx_tool_version#parent DialogflowCxToolVersion#parent}
  */
  readonly parent: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_cx_tool_version#timeouts DialogflowCxToolVersion#timeouts}
  */
  readonly timeouts?: DialogflowCxToolVersionTimeouts;
  /**
  * tool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_cx_tool_version#tool DialogflowCxToolVersion#tool}
  */
  readonly tool: DialogflowCxToolVersionTool;
}
export interface DialogflowCxToolVersionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_cx_tool_version#create DialogflowCxToolVersion#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_cx_tool_version#delete DialogflowCxToolVersion#delete}
  */
  readonly delete?: string;
}

export function dialogflowCxToolVersionTimeoutsToTerraform(struct?: DialogflowCxToolVersionTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
  }
}


export function dialogflowCxToolVersionTimeoutsToHclTerraform(struct?: DialogflowCxToolVersionTimeouts | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxToolVersionTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DialogflowCxToolVersionTimeouts | cdktn.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxToolVersionTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}
export interface DialogflowCxToolVersionToolDataStoreSpecDataStoreConnections {
  /**
  * The full name of the referenced data store. Formats: projects/{project}/locations/{location}/collections/{collection}/dataStores/{dataStore} projects/{project}/locations/{location}/dataStores/{dataStore}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_cx_tool_version#data_store DialogflowCxToolVersion#data_store}
  */
  readonly dataStore?: string;
  /**
  * The type of the connected data store.
  * See [DataStoreType](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/DataStoreConnection#datastoretype) for valid values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_cx_tool_version#data_store_type DialogflowCxToolVersion#data_store_type}
  */
  readonly dataStoreType?: string;
  /**
  * The document processing mode for the data store connection. Should only be set for PUBLIC_WEB and UNSTRUCTURED data stores. If not set it is considered as DOCUMENTS, as this is the legacy mode.
  * See [DocumentProcessingMode](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/DataStoreConnection#documentprocessingmode) for valid values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_cx_tool_version#document_processing_mode DialogflowCxToolVersion#document_processing_mode}
  */
  readonly documentProcessingMode?: string;
}

export function dialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsToTerraform(struct?: DialogflowCxToolVersionToolDataStoreSpecDataStoreConnections | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_store: cdktn.stringToTerraform(struct!.dataStore),
    data_store_type: cdktn.stringToTerraform(struct!.dataStoreType),
    document_processing_mode: cdktn.stringToTerraform(struct!.documentProcessingMode),
  }
}


export function dialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsToHclTerraform(struct?: DialogflowCxToolVersionToolDataStoreSpecDataStoreConnections | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_store: {
      value: cdktn.stringToHclTerraform(struct!.dataStore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_store_type: {
      value: cdktn.stringToHclTerraform(struct!.dataStoreType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    document_processing_mode: {
      value: cdktn.stringToHclTerraform(struct!.documentProcessingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DialogflowCxToolVersionToolDataStoreSpecDataStoreConnections | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataStore !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStore = this._dataStore;
    }
    if (this._dataStoreType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStoreType = this._dataStoreType;
    }
    if (this._documentProcessingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentProcessingMode = this._documentProcessingMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxToolVersionToolDataStoreSpecDataStoreConnections | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataStore = undefined;
      this._dataStoreType = undefined;
      this._documentProcessingMode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataStore = value.dataStore;
      this._dataStoreType = value.dataStoreType;
      this._documentProcessingMode = value.documentProcessingMode;
    }
  }

  // data_store - computed: false, optional: true, required: false
  private _dataStore?: string; 
  public get dataStore() {
    return this.getStringAttribute('data_store');
  }
  public set dataStore(value: string) {
    this._dataStore = value;
  }
  public resetDataStore() {
    this._dataStore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreInput() {
    return this._dataStore;
  }

  // data_store_type - computed: false, optional: true, required: false
  private _dataStoreType?: string; 
  public get dataStoreType() {
    return this.getStringAttribute('data_store_type');
  }
  public set dataStoreType(value: string) {
    this._dataStoreType = value;
  }
  public resetDataStoreType() {
    this._dataStoreType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreTypeInput() {
    return this._dataStoreType;
  }

  // document_processing_mode - computed: false, optional: true, required: false
  private _documentProcessingMode?: string; 
  public get documentProcessingMode() {
    return this.getStringAttribute('document_processing_mode');
  }
  public set documentProcessingMode(value: string) {
    this._documentProcessingMode = value;
  }
  public resetDocumentProcessingMode() {
    this._documentProcessingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentProcessingModeInput() {
    return this._documentProcessingMode;
  }
}

export class DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList extends cdktn.ComplexList {
  public internalValue? : DialogflowCxToolVersionToolDataStoreSpecDataStoreConnections[] | cdktn.IResolvable

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
  public get(index: number): DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference {
    return new DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxToolVersionToolDataStoreSpecFallbackPrompt {
}

export function dialogflowCxToolVersionToolDataStoreSpecFallbackPromptToTerraform(struct?: DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference | DialogflowCxToolVersionToolDataStoreSpecFallbackPrompt): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dialogflowCxToolVersionToolDataStoreSpecFallbackPromptToHclTerraform(struct?: DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference | DialogflowCxToolVersionToolDataStoreSpecFallbackPrompt): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxToolVersionToolDataStoreSpecFallbackPrompt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxToolVersionToolDataStoreSpecFallbackPrompt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DialogflowCxToolVersionToolDataStoreSpec {
  /**
  * data_store_connections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_cx_tool_version#data_store_connections DialogflowCxToolVersion#data_store_connections}
  */
  readonly dataStoreConnections: DialogflowCxToolVersionToolDataStoreSpecDataStoreConnections[] | cdktn.IResolvable;
  /**
  * fallback_prompt block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_cx_tool_version#fallback_prompt DialogflowCxToolVersion#fallback_prompt}
  */
  readonly fallbackPrompt: DialogflowCxToolVersionToolDataStoreSpecFallbackPrompt;
}

export function dialogflowCxToolVersionToolDataStoreSpecToTerraform(struct?: DialogflowCxToolVersionToolDataStoreSpecOutputReference | DialogflowCxToolVersionToolDataStoreSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_store_connections: cdktn.listMapper(dialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsToTerraform, true)(struct!.dataStoreConnections),
    fallback_prompt: dialogflowCxToolVersionToolDataStoreSpecFallbackPromptToTerraform(struct!.fallbackPrompt),
  }
}


export function dialogflowCxToolVersionToolDataStoreSpecToHclTerraform(struct?: DialogflowCxToolVersionToolDataStoreSpecOutputReference | DialogflowCxToolVersionToolDataStoreSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_store_connections: {
      value: cdktn.listMapperHcl(dialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsToHclTerraform, true)(struct!.dataStoreConnections),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList",
    },
    fallback_prompt: {
      value: dialogflowCxToolVersionToolDataStoreSpecFallbackPromptToHclTerraform(struct!.fallbackPrompt),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxToolVersionToolDataStoreSpecFallbackPromptList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxToolVersionToolDataStoreSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxToolVersionToolDataStoreSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataStoreConnections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStoreConnections = this._dataStoreConnections?.internalValue;
    }
    if (this._fallbackPrompt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackPrompt = this._fallbackPrompt?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxToolVersionToolDataStoreSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataStoreConnections.internalValue = undefined;
      this._fallbackPrompt.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataStoreConnections.internalValue = value.dataStoreConnections;
      this._fallbackPrompt.internalValue = value.fallbackPrompt;
    }
  }

  // data_store_connections - computed: false, optional: false, required: true
  private _dataStoreConnections = new DialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList(this, "data_store_connections", false);
  public get dataStoreConnections() {
    return this._dataStoreConnections;
  }
  public putDataStoreConnections(value: DialogflowCxToolVersionToolDataStoreSpecDataStoreConnections[] | cdktn.IResolvable) {
    this._dataStoreConnections.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreConnectionsInput() {
    return this._dataStoreConnections.internalValue;
  }

  // fallback_prompt - computed: false, optional: false, required: true
  private _fallbackPrompt = new DialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference(this, "fallback_prompt");
  public get fallbackPrompt() {
    return this._fallbackPrompt;
  }
  public putFallbackPrompt(value: DialogflowCxToolVersionToolDataStoreSpecFallbackPrompt) {
    this._fallbackPrompt.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackPromptInput() {
    return this._fallbackPrompt.internalValue;
  }
}
export interface DialogflowCxToolVersionToolFunctionSpec {
  /**
  * Optional. The JSON schema is encapsulated in a [google.protobuf.Struct](https://protobuf.dev/reference/protobuf/google.protobuf/#struct) to describe the input of the function.
  * This input is a JSON object that contains the function's parameters as properties of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_cx_tool_version#input_schema DialogflowCxToolVersion#input_schema}
  */
  readonly inputSchema?: string;
  /**
  * Optional. The JSON schema is encapsulated in a [google.protobuf.Struct](https://protobuf.dev/reference/protobuf/google.protobuf/#struct) to describe the output of the function.
  * This output is a JSON object that contains the function's parameters as properties of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_cx_tool_version#output_schema DialogflowCxToolVersion#output_schema}
  */
  readonly outputSchema?: string;
}

export function dialogflowCxToolVersionToolFunctionSpecToTerraform(struct?: DialogflowCxToolVersionToolFunctionSpecOutputReference | DialogflowCxToolVersionToolFunctionSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    input_schema: cdktn.stringToTerraform(struct!.inputSchema),
    output_schema: cdktn.stringToTerraform(struct!.outputSchema),
  }
}


export function dialogflowCxToolVersionToolFunctionSpecToHclTerraform(struct?: DialogflowCxToolVersionToolFunctionSpecOutputReference | DialogflowCxToolVersionToolFunctionSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    input_schema: {
      value: cdktn.stringToHclTerraform(struct!.inputSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_schema: {
      value: cdktn.stringToHclTerraform(struct!.outputSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxToolVersionToolFunctionSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxToolVersionToolFunctionSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputSchema = this._inputSchema;
    }
    if (this._outputSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputSchema = this._outputSchema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxToolVersionToolFunctionSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inputSchema = undefined;
      this._outputSchema = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inputSchema = value.inputSchema;
      this._outputSchema = value.outputSchema;
    }
  }

  // input_schema - computed: false, optional: true, required: false
  private _inputSchema?: string; 
  public get inputSchema() {
    return this.getStringAttribute('input_schema');
  }
  public set inputSchema(value: string) {
    this._inputSchema = value;
  }
  public resetInputSchema() {
    this._inputSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputSchemaInput() {
    return this._inputSchema;
  }

  // output_schema - computed: false, optional: true, required: false
  private _outputSchema?: string; 
  public get outputSchema() {
    return this.getStringAttribute('output_schema');
  }
  public set outputSchema(value: string) {
    this._outputSchema = value;
  }
  public resetOutputSchema() {
    this._outputSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputSchemaInput() {
    return this._outputSchema;
  }
}
export interface DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig {
  /**
  * Optional. The API key. If the 'secretVersionForApiKey'' field is set, this field will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_cx_tool_version#api_key DialogflowCxToolVersion#api_key}
  */
  readonly apiKey?: string;
  /**
  * The parameter name or the header name of the API key.
  * E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_cx_tool_version#key_name DialogflowCxToolVersion#key_name}
  */
  readonly keyName: string;
  /**
  * Key location in the request.
  * See [RequestLocation](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#requestlocation) for valid values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_cx_tool_version#request_location DialogflowCxToolVersion#request_location}
  */
  readonly requestLocation: string;
  /**
  * Optional. The name of the SecretManager secret version resource storing the API key.
  * If this field is set, the apiKey field will be ignored.
  * Format: projects/{project}/secrets/{secret}/versions/{version}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_cx_tool_version#secret_version_for_api_key DialogflowCxToolVersion#secret_version_for_api_key}
  */
  readonly secretVersionForApiKey?: string;
}

export function dialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigToTerraform(struct?: DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference | DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: cdktn.stringToTerraform(struct!.apiKey),
    key_name: cdktn.stringToTerraform(struct!.keyName),
    request_location: cdktn.stringToTerraform(struct!.requestLocation),
    secret_version_for_api_key: cdktn.stringToTerraform(struct!.secretVersionForApiKey),
  }
}


export function dialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigToHclTerraform(struct?: DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference | DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: cdktn.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_name: {
      value: cdktn.stringToHclTerraform(struct!.keyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_location: {
      value: cdktn.stringToHclTerraform(struct!.requestLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_version_for_api_key: {
      value: cdktn.stringToHclTerraform(struct!.secretVersionForApiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._keyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyName = this._keyName;
    }
    if (this._requestLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestLocation = this._requestLocation;
    }
    if (this._secretVersionForApiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersionForApiKey = this._secretVersionForApiKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKey = undefined;
      this._keyName = undefined;
      this._requestLocation = undefined;
      this._secretVersionForApiKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKey = value.apiKey;
      this._keyName = value.keyName;
      this._requestLocation = value.requestLocation;
      this._secretVersionForApiKey = value.secretVersionForApiKey;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // key_name - computed: false, optional: false, required: true
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // request_location - computed: false, optional: false, required: true
  private _requestLocation?: string; 
  public get requestLocation() {
    return this.getStringAttribute('request_location');
  }
  public set requestLocation(value: string) {
    this._requestLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestLocationInput() {
    return this._requestLocation;
  }

  // secret_version_for_api_key - computed: false, optional: true, required: false
  private _secretVersionForApiKey?: string; 
  public get secretVersionForApiKey() {
    return this.getStringAttribute('secret_version_for_api_key');
  }
  public set secretVersionForApiKey(value: string) {
    this._secretVersionForApiKey = value;
  }
  public resetSecretVersionForApiKey() {
    this._secretVersionForApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionForApiKeyInput() {
    return this._secretVersionForApiKey;
  }
}
export interface DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig {
  /**
  * Optional. The name of the SecretManager secret version resource storing the Bearer token. If this field is set, the 'token' field will be ignored.
  * Format: projects/{project}/secrets/{secret}/versions/{version}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_cx_tool_version#secret_version_for_token DialogflowCxToolVersion#secret_version_for_token}
  */
  readonly secretVersionForToken?: string;
  /**
  * Optional. The text token appended to the text Bearer to the request Authorization header.
  * [Session parameters reference](https://cloud.google.com/dialogflow/cx/docs/concept/parameter#session-ref) can be used to pass the token dynamically, e.g. '$session.params.parameter-id'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_cx_tool_version#token DialogflowCxToolVersion#token}
  */
  readonly token?: string;
}

export function dialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigToTerraform(struct?: DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference | DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    secret_version_for_token: cdktn.stringToTerraform(struct!.secretVersionForToken),
    token: cdktn.stringToTerraform(struct!.token),
  }
}


export function dialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigToHclTerraform(struct?: DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference | DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    secret_version_for_token: {
      value: cdktn.stringToHclTerraform(struct!.secretVersionForToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktn.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretVersionForToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersionForToken = this._secretVersionForToken;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretVersionForToken = undefined;
      this._token = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretVersionForToken = value.secretVersionForToken;
      this._token = value.token;
    }
  }

  // secret_version_for_token - computed: false, optional: true, required: false
  private _secretVersionForToken?: string; 
  public get secretVersionForToken() {
    return this.getStringAttribute('secret_version_for_token');
  }
  public set secretVersionForToken(value: string) {
    this._secretVersionForToken = value;
  }
  public resetSecretVersionForToken() {
    this._secretVersionForToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionForTokenInput() {
    return this._secretVersionForToken;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}
export interface DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig {
  /**
  * The client ID from the OAuth provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_cx_tool_version#client_id DialogflowCxToolVersion#client_id}
  */
  readonly clientId: string;
  /**
  * Optional. The client secret from the OAuth provider. If the 'secretVersionForClientSecret' field is set, this field will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_cx_tool_version#client_secret DialogflowCxToolVersion#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * OAuth grant types.
  * See [OauthGrantType](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#oauthgranttype) for valid values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_cx_tool_version#oauth_grant_type DialogflowCxToolVersion#oauth_grant_type}
  */
  readonly oauthGrantType: string;
  /**
  * Optional. The OAuth scopes to grant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_cx_tool_version#scopes DialogflowCxToolVersion#scopes}
  */
  readonly scopes?: string[];
  /**
  * Optional. The name of the SecretManager secret version resource storing the client secret.
  * If this field is set, the clientSecret field will be ignored.
  * Format: projects/{project}/secrets/{secret}/versions/{version}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_cx_tool_version#secret_version_for_client_secret DialogflowCxToolVersion#secret_version_for_client_secret}
  */
  readonly secretVersionForClientSecret?: string;
  /**
  * The token endpoint in the OAuth provider to exchange for an access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_cx_tool_version#token_endpoint DialogflowCxToolVersion#token_endpoint}
  */
  readonly tokenEndpoint: string;
}

export function dialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigToTerraform(struct?: DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference | DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    oauth_grant_type: cdktn.stringToTerraform(struct!.oauthGrantType),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
    secret_version_for_client_secret: cdktn.stringToTerraform(struct!.secretVersionForClientSecret),
    token_endpoint: cdktn.stringToTerraform(struct!.tokenEndpoint),
  }
}


export function dialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigToHclTerraform(struct?: DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference | DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig): any {
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
    client_secret: {
      value: cdktn.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_grant_type: {
      value: cdktn.stringToHclTerraform(struct!.oauthGrantType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    secret_version_for_client_secret: {
      value: cdktn.stringToHclTerraform(struct!.secretVersionForClientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.tokenEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._oauthGrantType !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthGrantType = this._oauthGrantType;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._secretVersionForClientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersionForClientSecret = this._secretVersionForClientSecret;
    }
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._oauthGrantType = undefined;
      this._scopes = undefined;
      this._secretVersionForClientSecret = undefined;
      this._tokenEndpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._oauthGrantType = value.oauthGrantType;
      this._scopes = value.scopes;
      this._secretVersionForClientSecret = value.secretVersionForClientSecret;
      this._tokenEndpoint = value.tokenEndpoint;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // oauth_grant_type - computed: false, optional: false, required: true
  private _oauthGrantType?: string; 
  public get oauthGrantType() {
    return this.getStringAttribute('oauth_grant_type');
  }
  public set oauthGrantType(value: string) {
    this._oauthGrantType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthGrantTypeInput() {
    return this._oauthGrantType;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // secret_version_for_client_secret - computed: false, optional: true, required: false
  private _secretVersionForClientSecret?: string; 
  public get secretVersionForClientSecret() {
    return this.getStringAttribute('secret_version_for_client_secret');
  }
  public set secretVersionForClientSecret(value: string) {
    this._secretVersionForClientSecret = value;
  }
  public resetSecretVersionForClientSecret() {
    this._secretVersionForClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionForClientSecretInput() {
    return this._secretVersionForClientSecret;
  }

  // token_endpoint - computed: false, optional: false, required: true
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }
}
export interface DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig {
  /**
  * Optional. Indicate the auth token type generated from the Diglogflow service agent.
  * The generated token is sent in the Authorization header.
  * See [ServiceAgentAuth](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#serviceagentauth) for valid values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_cx_tool_version#service_agent_auth DialogflowCxToolVersion#service_agent_auth}
  */
  readonly serviceAgentAuth?: string;
}

export function dialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigToTerraform(struct?: DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference | DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    service_agent_auth: cdktn.stringToTerraform(struct!.serviceAgentAuth),
  }
}


export function dialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigToHclTerraform(struct?: DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference | DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    service_agent_auth: {
      value: cdktn.stringToHclTerraform(struct!.serviceAgentAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceAgentAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAgentAuth = this._serviceAgentAuth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serviceAgentAuth = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serviceAgentAuth = value.serviceAgentAuth;
    }
  }

  // service_agent_auth - computed: false, optional: true, required: false
  private _serviceAgentAuth?: string; 
  public get serviceAgentAuth() {
    return this.getStringAttribute('service_agent_auth');
  }
  public set serviceAgentAuth(value: string) {
    this._serviceAgentAuth = value;
  }
  public resetServiceAgentAuth() {
    this._serviceAgentAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAgentAuthInput() {
    return this._serviceAgentAuth;
  }
}
export interface DialogflowCxToolVersionToolOpenApiSpecAuthentication {
  /**
  * api_key_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_cx_tool_version#api_key_config DialogflowCxToolVersion#api_key_config}
  */
  readonly apiKeyConfig?: DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig;
  /**
  * bearer_token_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_cx_tool_version#bearer_token_config DialogflowCxToolVersion#bearer_token_config}
  */
  readonly bearerTokenConfig?: DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig;
  /**
  * oauth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_cx_tool_version#oauth_config DialogflowCxToolVersion#oauth_config}
  */
  readonly oauthConfig?: DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig;
  /**
  * service_agent_auth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_cx_tool_version#service_agent_auth_config DialogflowCxToolVersion#service_agent_auth_config}
  */
  readonly serviceAgentAuthConfig?: DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig;
}

export function dialogflowCxToolVersionToolOpenApiSpecAuthenticationToTerraform(struct?: DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference | DialogflowCxToolVersionToolOpenApiSpecAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key_config: dialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigToTerraform(struct!.apiKeyConfig),
    bearer_token_config: dialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigToTerraform(struct!.bearerTokenConfig),
    oauth_config: dialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigToTerraform(struct!.oauthConfig),
    service_agent_auth_config: dialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigToTerraform(struct!.serviceAgentAuthConfig),
  }
}


export function dialogflowCxToolVersionToolOpenApiSpecAuthenticationToHclTerraform(struct?: DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference | DialogflowCxToolVersionToolOpenApiSpecAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key_config: {
      value: dialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigToHclTerraform(struct!.apiKeyConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigList",
    },
    bearer_token_config: {
      value: dialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigToHclTerraform(struct!.bearerTokenConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigList",
    },
    oauth_config: {
      value: dialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigToHclTerraform(struct!.oauthConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigList",
    },
    service_agent_auth_config: {
      value: dialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigToHclTerraform(struct!.serviceAgentAuthConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxToolVersionToolOpenApiSpecAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKeyConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeyConfig = this._apiKeyConfig?.internalValue;
    }
    if (this._bearerTokenConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerTokenConfig = this._bearerTokenConfig?.internalValue;
    }
    if (this._oauthConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthConfig = this._oauthConfig?.internalValue;
    }
    if (this._serviceAgentAuthConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAgentAuthConfig = this._serviceAgentAuthConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxToolVersionToolOpenApiSpecAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKeyConfig.internalValue = undefined;
      this._bearerTokenConfig.internalValue = undefined;
      this._oauthConfig.internalValue = undefined;
      this._serviceAgentAuthConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKeyConfig.internalValue = value.apiKeyConfig;
      this._bearerTokenConfig.internalValue = value.bearerTokenConfig;
      this._oauthConfig.internalValue = value.oauthConfig;
      this._serviceAgentAuthConfig.internalValue = value.serviceAgentAuthConfig;
    }
  }

  // api_key_config - computed: false, optional: true, required: false
  private _apiKeyConfig = new DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference(this, "api_key_config");
  public get apiKeyConfig() {
    return this._apiKeyConfig;
  }
  public putApiKeyConfig(value: DialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig) {
    this._apiKeyConfig.internalValue = value;
  }
  public resetApiKeyConfig() {
    this._apiKeyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyConfigInput() {
    return this._apiKeyConfig.internalValue;
  }

  // bearer_token_config - computed: false, optional: true, required: false
  private _bearerTokenConfig = new DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference(this, "bearer_token_config");
  public get bearerTokenConfig() {
    return this._bearerTokenConfig;
  }
  public putBearerTokenConfig(value: DialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig) {
    this._bearerTokenConfig.internalValue = value;
  }
  public resetBearerTokenConfig() {
    this._bearerTokenConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenConfigInput() {
    return this._bearerTokenConfig.internalValue;
  }

  // oauth_config - computed: false, optional: true, required: false
  private _oauthConfig = new DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference(this, "oauth_config");
  public get oauthConfig() {
    return this._oauthConfig;
  }
  public putOauthConfig(value: DialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig) {
    this._oauthConfig.internalValue = value;
  }
  public resetOauthConfig() {
    this._oauthConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthConfigInput() {
    return this._oauthConfig.internalValue;
  }

  // service_agent_auth_config - computed: false, optional: true, required: false
  private _serviceAgentAuthConfig = new DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference(this, "service_agent_auth_config");
  public get serviceAgentAuthConfig() {
    return this._serviceAgentAuthConfig;
  }
  public putServiceAgentAuthConfig(value: DialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig) {
    this._serviceAgentAuthConfig.internalValue = value;
  }
  public resetServiceAgentAuthConfig() {
    this._serviceAgentAuthConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAgentAuthConfigInput() {
    return this._serviceAgentAuthConfig.internalValue;
  }
}
export interface DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig {
  /**
  * The name of [Service Directory](https://cloud.google.com/service-directory/docs) service.
  * Format: projects/<ProjectID>/locations/<LocationID>/namespaces/<NamespaceID>/services/<ServiceID>. LocationID of the service directory must be the same as the location of the agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_cx_tool_version#service DialogflowCxToolVersion#service}
  */
  readonly service: string;
}

export function dialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigToTerraform(struct?: DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference | DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    service: cdktn.stringToTerraform(struct!.service),
  }
}


export function dialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigToHclTerraform(struct?: DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference | DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    service: {
      value: cdktn.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._service = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._service = value.service;
    }
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts {
  /**
  * The allowed custom CA certificates (in DER format) for HTTPS verification. This overrides the default SSL trust store.
  * If this is empty or unspecified, Dialogflow will use Google's default trust store to verify certificates.
  * N.B. Make sure the HTTPS server certificates are signed with "subject alt name".
  * For instance a certificate can be self-signed using the following command:
  * ```
  *   openssl x509 -req -days 200 -in example.com.csr \
  *     -signkey example.com.key \
  *     -out example.com.crt \
  *     -extfile <(printf "\nsubjectAltName='DNS:www.example.com'")
  * ```
  * A base64-encoded string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_cx_tool_version#cert DialogflowCxToolVersion#cert}
  */
  readonly cert: string;
  /**
  * The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_cx_tool_version#display_name DialogflowCxToolVersion#display_name}
  */
  readonly displayName: string;
}

export function dialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsToTerraform(struct?: DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cert: cdktn.stringToTerraform(struct!.cert),
    display_name: cdktn.stringToTerraform(struct!.displayName),
  }
}


export function dialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsToHclTerraform(struct?: DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cert: {
      value: cdktn.stringToHclTerraform(struct!.cert),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cert !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cert = undefined;
      this._displayName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cert = value.cert;
      this._displayName = value.displayName;
    }
  }

  // cert - computed: false, optional: false, required: true
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
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
}

export class DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList extends cdktn.ComplexList {
  public internalValue? : DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts[] | cdktn.IResolvable

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
  public get(index: number): DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference {
    return new DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxToolVersionToolOpenApiSpecTlsConfig {
  /**
  * ca_certs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_cx_tool_version#ca_certs DialogflowCxToolVersion#ca_certs}
  */
  readonly caCerts: DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts[] | cdktn.IResolvable;
}

export function dialogflowCxToolVersionToolOpenApiSpecTlsConfigToTerraform(struct?: DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference | DialogflowCxToolVersionToolOpenApiSpecTlsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ca_certs: cdktn.listMapper(dialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsToTerraform, true)(struct!.caCerts),
  }
}


export function dialogflowCxToolVersionToolOpenApiSpecTlsConfigToHclTerraform(struct?: DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference | DialogflowCxToolVersionToolOpenApiSpecTlsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ca_certs: {
      value: cdktn.listMapperHcl(dialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsToHclTerraform, true)(struct!.caCerts),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxToolVersionToolOpenApiSpecTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCerts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCerts = this._caCerts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxToolVersionToolOpenApiSpecTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCerts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCerts.internalValue = value.caCerts;
    }
  }

  // ca_certs - computed: false, optional: false, required: true
  private _caCerts = new DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList(this, "ca_certs", false);
  public get caCerts() {
    return this._caCerts;
  }
  public putCaCerts(value: DialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts[] | cdktn.IResolvable) {
    this._caCerts.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertsInput() {
    return this._caCerts.internalValue;
  }
}
export interface DialogflowCxToolVersionToolOpenApiSpec {
  /**
  * The OpenAPI schema specified as a text.
  * This field is part of a union field 'schema': only one of 'textSchema' may be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_cx_tool_version#text_schema DialogflowCxToolVersion#text_schema}
  */
  readonly textSchema: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_cx_tool_version#authentication DialogflowCxToolVersion#authentication}
  */
  readonly authentication?: DialogflowCxToolVersionToolOpenApiSpecAuthentication;
  /**
  * service_directory_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_cx_tool_version#service_directory_config DialogflowCxToolVersion#service_directory_config}
  */
  readonly serviceDirectoryConfig?: DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig;
  /**
  * tls_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_cx_tool_version#tls_config DialogflowCxToolVersion#tls_config}
  */
  readonly tlsConfig?: DialogflowCxToolVersionToolOpenApiSpecTlsConfig;
}

export function dialogflowCxToolVersionToolOpenApiSpecToTerraform(struct?: DialogflowCxToolVersionToolOpenApiSpecOutputReference | DialogflowCxToolVersionToolOpenApiSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    text_schema: cdktn.stringToTerraform(struct!.textSchema),
    authentication: dialogflowCxToolVersionToolOpenApiSpecAuthenticationToTerraform(struct!.authentication),
    service_directory_config: dialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigToTerraform(struct!.serviceDirectoryConfig),
    tls_config: dialogflowCxToolVersionToolOpenApiSpecTlsConfigToTerraform(struct!.tlsConfig),
  }
}


export function dialogflowCxToolVersionToolOpenApiSpecToHclTerraform(struct?: DialogflowCxToolVersionToolOpenApiSpecOutputReference | DialogflowCxToolVersionToolOpenApiSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    text_schema: {
      value: cdktn.stringToHclTerraform(struct!.textSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: dialogflowCxToolVersionToolOpenApiSpecAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxToolVersionToolOpenApiSpecAuthenticationList",
    },
    service_directory_config: {
      value: dialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigToHclTerraform(struct!.serviceDirectoryConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigList",
    },
    tls_config: {
      value: dialogflowCxToolVersionToolOpenApiSpecTlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxToolVersionToolOpenApiSpecTlsConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxToolVersionToolOpenApiSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxToolVersionToolOpenApiSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._textSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.textSchema = this._textSchema;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._serviceDirectoryConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDirectoryConfig = this._serviceDirectoryConfig?.internalValue;
    }
    if (this._tlsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxToolVersionToolOpenApiSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._textSchema = undefined;
      this._authentication.internalValue = undefined;
      this._serviceDirectoryConfig.internalValue = undefined;
      this._tlsConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._textSchema = value.textSchema;
      this._authentication.internalValue = value.authentication;
      this._serviceDirectoryConfig.internalValue = value.serviceDirectoryConfig;
      this._tlsConfig.internalValue = value.tlsConfig;
    }
  }

  // text_schema - computed: false, optional: false, required: true
  private _textSchema?: string; 
  public get textSchema() {
    return this.getStringAttribute('text_schema');
  }
  public set textSchema(value: string) {
    this._textSchema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textSchemaInput() {
    return this._textSchema;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new DialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: DialogflowCxToolVersionToolOpenApiSpecAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // service_directory_config - computed: false, optional: true, required: false
  private _serviceDirectoryConfig = new DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference(this, "service_directory_config");
  public get serviceDirectoryConfig() {
    return this._serviceDirectoryConfig;
  }
  public putServiceDirectoryConfig(value: DialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig) {
    this._serviceDirectoryConfig.internalValue = value;
  }
  public resetServiceDirectoryConfig() {
    this._serviceDirectoryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDirectoryConfigInput() {
    return this._serviceDirectoryConfig.internalValue;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new DialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: DialogflowCxToolVersionToolOpenApiSpecTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }
}
export interface DialogflowCxToolVersionTool {
  /**
  * High level description of the Tool and its usage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_cx_tool_version#description DialogflowCxToolVersion#description}
  */
  readonly description: string;
  /**
  * The human-readable name of the tool, unique within the agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_cx_tool_version#display_name DialogflowCxToolVersion#display_name}
  */
  readonly displayName: string;
  /**
  * data_store_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_cx_tool_version#data_store_spec DialogflowCxToolVersion#data_store_spec}
  */
  readonly dataStoreSpec?: DialogflowCxToolVersionToolDataStoreSpec;
  /**
  * function_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_cx_tool_version#function_spec DialogflowCxToolVersion#function_spec}
  */
  readonly functionSpec?: DialogflowCxToolVersionToolFunctionSpec;
  /**
  * open_api_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_cx_tool_version#open_api_spec DialogflowCxToolVersion#open_api_spec}
  */
  readonly openApiSpec?: DialogflowCxToolVersionToolOpenApiSpec;
}

export function dialogflowCxToolVersionToolToTerraform(struct?: DialogflowCxToolVersionToolOutputReference | DialogflowCxToolVersionTool): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    display_name: cdktn.stringToTerraform(struct!.displayName),
    data_store_spec: dialogflowCxToolVersionToolDataStoreSpecToTerraform(struct!.dataStoreSpec),
    function_spec: dialogflowCxToolVersionToolFunctionSpecToTerraform(struct!.functionSpec),
    open_api_spec: dialogflowCxToolVersionToolOpenApiSpecToTerraform(struct!.openApiSpec),
  }
}


export function dialogflowCxToolVersionToolToHclTerraform(struct?: DialogflowCxToolVersionToolOutputReference | DialogflowCxToolVersionTool): any {
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
    data_store_spec: {
      value: dialogflowCxToolVersionToolDataStoreSpecToHclTerraform(struct!.dataStoreSpec),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxToolVersionToolDataStoreSpecList",
    },
    function_spec: {
      value: dialogflowCxToolVersionToolFunctionSpecToHclTerraform(struct!.functionSpec),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxToolVersionToolFunctionSpecList",
    },
    open_api_spec: {
      value: dialogflowCxToolVersionToolOpenApiSpecToHclTerraform(struct!.openApiSpec),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxToolVersionToolOpenApiSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxToolVersionToolOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxToolVersionTool | undefined {
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
    if (this._dataStoreSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStoreSpec = this._dataStoreSpec?.internalValue;
    }
    if (this._functionSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionSpec = this._functionSpec?.internalValue;
    }
    if (this._openApiSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openApiSpec = this._openApiSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxToolVersionTool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._displayName = undefined;
      this._dataStoreSpec.internalValue = undefined;
      this._functionSpec.internalValue = undefined;
      this._openApiSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._displayName = value.displayName;
      this._dataStoreSpec.internalValue = value.dataStoreSpec;
      this._functionSpec.internalValue = value.functionSpec;
      this._openApiSpec.internalValue = value.openApiSpec;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tool_type - computed: true, optional: false, required: false
  public get toolType() {
    return this.getStringAttribute('tool_type');
  }

  // data_store_spec - computed: false, optional: true, required: false
  private _dataStoreSpec = new DialogflowCxToolVersionToolDataStoreSpecOutputReference(this, "data_store_spec");
  public get dataStoreSpec() {
    return this._dataStoreSpec;
  }
  public putDataStoreSpec(value: DialogflowCxToolVersionToolDataStoreSpec) {
    this._dataStoreSpec.internalValue = value;
  }
  public resetDataStoreSpec() {
    this._dataStoreSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreSpecInput() {
    return this._dataStoreSpec.internalValue;
  }

  // function_spec - computed: false, optional: true, required: false
  private _functionSpec = new DialogflowCxToolVersionToolFunctionSpecOutputReference(this, "function_spec");
  public get functionSpec() {
    return this._functionSpec;
  }
  public putFunctionSpec(value: DialogflowCxToolVersionToolFunctionSpec) {
    this._functionSpec.internalValue = value;
  }
  public resetFunctionSpec() {
    this._functionSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionSpecInput() {
    return this._functionSpec.internalValue;
  }

  // open_api_spec - computed: false, optional: true, required: false
  private _openApiSpec = new DialogflowCxToolVersionToolOpenApiSpecOutputReference(this, "open_api_spec");
  public get openApiSpec() {
    return this._openApiSpec;
  }
  public putOpenApiSpec(value: DialogflowCxToolVersionToolOpenApiSpec) {
    this._openApiSpec.internalValue = value;
  }
  public resetOpenApiSpec() {
    this._openApiSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openApiSpecInput() {
    return this._openApiSpec.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_cx_tool_version google_dialogflow_cx_tool_version}
*/
export class DialogflowCxToolVersion extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dialogflow_cx_tool_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DialogflowCxToolVersion resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DialogflowCxToolVersion to import
  * @param importFromId The id of the existing DialogflowCxToolVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_cx_tool_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DialogflowCxToolVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_dialogflow_cx_tool_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_cx_tool_version google_dialogflow_cx_tool_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DialogflowCxToolVersionConfig
  */
  public constructor(scope: Construct, id: string, config: DialogflowCxToolVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dialogflow_cx_tool_version',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.43.0',
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
    this._id = config.id;
    this._parent = config.parent;
    this._timeouts.internalValue = config.timeouts;
    this._tool.internalValue = config.tool;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent - computed: false, optional: false, required: true
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DialogflowCxToolVersionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DialogflowCxToolVersionTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // tool - computed: false, optional: false, required: true
  private _tool = new DialogflowCxToolVersionToolOutputReference(this, "tool");
  public get tool() {
    return this._tool;
  }
  public putTool(value: DialogflowCxToolVersionTool) {
    this._tool.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toolInput() {
    return this._tool.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      display_name: cdktn.stringToTerraform(this._displayName),
      id: cdktn.stringToTerraform(this._id),
      parent: cdktn.stringToTerraform(this._parent),
      timeouts: dialogflowCxToolVersionTimeoutsToTerraform(this._timeouts.internalValue),
      tool: dialogflowCxToolVersionToolToTerraform(this._tool.internalValue),
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
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent: {
        value: cdktn.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dialogflowCxToolVersionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DialogflowCxToolVersionTimeouts",
      },
      tool: {
        value: dialogflowCxToolVersionToolToHclTerraform(this._tool.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowCxToolVersionToolList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
