/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_example
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CesExampleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Resource ID segment making up resource 'name', defining the app the example belongs to. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_example#app CesExample#app}
  */
  readonly app: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_example#deletion_policy CesExample#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Human-readable description of the example.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_example#description CesExample#description}
  */
  readonly description?: string;
  /**
  * Display name of the example.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_example#display_name CesExample#display_name}
  */
  readonly displayName: string;
  /**
  * The agent that initially handles the conversation. If not specified, the
  * example represents a conversation that is handled by the root agent.
  * Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_example#entry_agent CesExample#entry_agent}
  */
  readonly entryAgent?: string;
  /**
  * The ID to use for the example, which will become the final component of
  * the example's resource name. In Terraform, this field is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_example#example_id CesExample#example_id}
  */
  readonly exampleId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_example#id CesExample#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource ID segment making up resource 'name', defining what region the parent app is in. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_example#location CesExample#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_example#project CesExample#project}
  */
  readonly project?: string;
  /**
  * messages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_example#messages CesExample#messages}
  */
  readonly messages?: CesExampleMessages[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_example#timeouts CesExample#timeouts}
  */
  readonly timeouts?: CesExampleTimeouts;
}
export interface CesExampleMessagesChunksAgentTransfer {
  /**
  * The agent to which the conversation is being transferred. The agent will
  * handle the conversation from this point forward.
  * Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_example#target_agent CesExample#target_agent}
  */
  readonly targetAgent: string;
}

export function cesExampleMessagesChunksAgentTransferToTerraform(struct?: CesExampleMessagesChunksAgentTransferOutputReference | CesExampleMessagesChunksAgentTransfer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    target_agent: cdktn.stringToTerraform(struct!.targetAgent),
  }
}


export function cesExampleMessagesChunksAgentTransferToHclTerraform(struct?: CesExampleMessagesChunksAgentTransferOutputReference | CesExampleMessagesChunksAgentTransfer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    target_agent: {
      value: cdktn.stringToHclTerraform(struct!.targetAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesExampleMessagesChunksAgentTransferOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesExampleMessagesChunksAgentTransfer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetAgent = this._targetAgent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesExampleMessagesChunksAgentTransfer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._targetAgent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._targetAgent = value.targetAgent;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // target_agent - computed: false, optional: false, required: true
  private _targetAgent?: string; 
  public get targetAgent() {
    return this.getStringAttribute('target_agent');
  }
  public set targetAgent(value: string) {
    this._targetAgent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetAgentInput() {
    return this._targetAgent;
  }
}
export interface CesExampleMessagesChunksImage {
  /**
  * Raw bytes of the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_example#data CesExample#data}
  */
  readonly data: string;
  /**
  * The IANA standard MIME type of the source data.
  * Supported image types includes:
  * * image/png
  * * image/jpeg
  * * image/webp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_example#mime_type CesExample#mime_type}
  */
  readonly mimeType: string;
}

export function cesExampleMessagesChunksImageToTerraform(struct?: CesExampleMessagesChunksImageOutputReference | CesExampleMessagesChunksImage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data: cdktn.stringToTerraform(struct!.data),
    mime_type: cdktn.stringToTerraform(struct!.mimeType),
  }
}


export function cesExampleMessagesChunksImageToHclTerraform(struct?: CesExampleMessagesChunksImageOutputReference | CesExampleMessagesChunksImage): any {
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
    mime_type: {
      value: cdktn.stringToHclTerraform(struct!.mimeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesExampleMessagesChunksImageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesExampleMessagesChunksImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._mimeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mimeType = this._mimeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesExampleMessagesChunksImage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._data = undefined;
      this._mimeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._data = value.data;
      this._mimeType = value.mimeType;
    }
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

  // mime_type - computed: false, optional: false, required: true
  private _mimeType?: string; 
  public get mimeType() {
    return this.getStringAttribute('mime_type');
  }
  public set mimeType(value: string) {
    this._mimeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mimeTypeInput() {
    return this._mimeType;
  }
}
export interface CesExampleMessagesChunksToolCallToolsetTool {
  /**
  * The tool ID to filter the tools to retrieve the schema for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_example#tool_id CesExample#tool_id}
  */
  readonly toolId?: string;
  /**
  * The resource name of the Toolset from which this tool is derived.
  * Format:
  * 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_example#toolset CesExample#toolset}
  */
  readonly toolset: string;
}

export function cesExampleMessagesChunksToolCallToolsetToolToTerraform(struct?: CesExampleMessagesChunksToolCallToolsetToolOutputReference | CesExampleMessagesChunksToolCallToolsetTool): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    tool_id: cdktn.stringToTerraform(struct!.toolId),
    toolset: cdktn.stringToTerraform(struct!.toolset),
  }
}


export function cesExampleMessagesChunksToolCallToolsetToolToHclTerraform(struct?: CesExampleMessagesChunksToolCallToolsetToolOutputReference | CesExampleMessagesChunksToolCallToolsetTool): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    tool_id: {
      value: cdktn.stringToHclTerraform(struct!.toolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toolset: {
      value: cdktn.stringToHclTerraform(struct!.toolset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesExampleMessagesChunksToolCallToolsetToolOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesExampleMessagesChunksToolCallToolsetTool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._toolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolId = this._toolId;
    }
    if (this._toolset !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolset = this._toolset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesExampleMessagesChunksToolCallToolsetTool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._toolId = undefined;
      this._toolset = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._toolId = value.toolId;
      this._toolset = value.toolset;
    }
  }

  // tool_id - computed: false, optional: true, required: false
  private _toolId?: string; 
  public get toolId() {
    return this.getStringAttribute('tool_id');
  }
  public set toolId(value: string) {
    this._toolId = value;
  }
  public resetToolId() {
    this._toolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolIdInput() {
    return this._toolId;
  }

  // toolset - computed: false, optional: false, required: true
  private _toolset?: string; 
  public get toolset() {
    return this.getStringAttribute('toolset');
  }
  public set toolset(value: string) {
    this._toolset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toolsetInput() {
    return this._toolset;
  }
}
export interface CesExampleMessagesChunksToolCall {
  /**
  * The input parameters and values for the tool in JSON object format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_example#args CesExample#args}
  */
  readonly args?: string;
  /**
  * The unique identifier of the tool call. If populated, the client should
  * return the execution result with the matching ID in
  * ToolResponse.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_example#id CesExample#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the tool to execute.
  * Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_example#tool CesExample#tool}
  */
  readonly tool?: string;
  /**
  * toolset_tool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_example#toolset_tool CesExample#toolset_tool}
  */
  readonly toolsetTool?: CesExampleMessagesChunksToolCallToolsetTool;
}

export function cesExampleMessagesChunksToolCallToTerraform(struct?: CesExampleMessagesChunksToolCallOutputReference | CesExampleMessagesChunksToolCall): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    args: cdktn.stringToTerraform(struct!.args),
    id: cdktn.stringToTerraform(struct!.id),
    tool: cdktn.stringToTerraform(struct!.tool),
    toolset_tool: cesExampleMessagesChunksToolCallToolsetToolToTerraform(struct!.toolsetTool),
  }
}


export function cesExampleMessagesChunksToolCallToHclTerraform(struct?: CesExampleMessagesChunksToolCallOutputReference | CesExampleMessagesChunksToolCall): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    args: {
      value: cdktn.stringToHclTerraform(struct!.args),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tool: {
      value: cdktn.stringToHclTerraform(struct!.tool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toolset_tool: {
      value: cesExampleMessagesChunksToolCallToolsetToolToHclTerraform(struct!.toolsetTool),
      isBlock: true,
      type: "list",
      storageClassType: "CesExampleMessagesChunksToolCallToolsetToolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesExampleMessagesChunksToolCallOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesExampleMessagesChunksToolCall | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._tool !== undefined) {
      hasAnyValues = true;
      internalValueResult.tool = this._tool;
    }
    if (this._toolsetTool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolsetTool = this._toolsetTool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesExampleMessagesChunksToolCall | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._args = undefined;
      this._id = undefined;
      this._tool = undefined;
      this._toolsetTool.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._args = value.args;
      this._id = value.id;
      this._tool = value.tool;
      this._toolsetTool.internalValue = value.toolsetTool;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string; 
  public get args() {
    return this.getStringAttribute('args');
  }
  public set args(value: string) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: false, optional: true, required: false
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

  // tool - computed: false, optional: true, required: false
  private _tool?: string; 
  public get tool() {
    return this.getStringAttribute('tool');
  }
  public set tool(value: string) {
    this._tool = value;
  }
  public resetTool() {
    this._tool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolInput() {
    return this._tool;
  }

  // toolset_tool - computed: false, optional: true, required: false
  private _toolsetTool = new CesExampleMessagesChunksToolCallToolsetToolOutputReference(this, "toolset_tool");
  public get toolsetTool() {
    return this._toolsetTool;
  }
  public putToolsetTool(value: CesExampleMessagesChunksToolCallToolsetTool) {
    this._toolsetTool.internalValue = value;
  }
  public resetToolsetTool() {
    this._toolsetTool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolsetToolInput() {
    return this._toolsetTool.internalValue;
  }
}
export interface CesExampleMessagesChunksToolResponseToolsetTool {
  /**
  * The tool ID to filter the tools to retrieve the schema for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_example#tool_id CesExample#tool_id}
  */
  readonly toolId?: string;
  /**
  * The resource name of the Toolset from which this tool is derived.
  * Format:
  * 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_example#toolset CesExample#toolset}
  */
  readonly toolset: string;
}

export function cesExampleMessagesChunksToolResponseToolsetToolToTerraform(struct?: CesExampleMessagesChunksToolResponseToolsetToolOutputReference | CesExampleMessagesChunksToolResponseToolsetTool): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    tool_id: cdktn.stringToTerraform(struct!.toolId),
    toolset: cdktn.stringToTerraform(struct!.toolset),
  }
}


export function cesExampleMessagesChunksToolResponseToolsetToolToHclTerraform(struct?: CesExampleMessagesChunksToolResponseToolsetToolOutputReference | CesExampleMessagesChunksToolResponseToolsetTool): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    tool_id: {
      value: cdktn.stringToHclTerraform(struct!.toolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toolset: {
      value: cdktn.stringToHclTerraform(struct!.toolset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesExampleMessagesChunksToolResponseToolsetToolOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesExampleMessagesChunksToolResponseToolsetTool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._toolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolId = this._toolId;
    }
    if (this._toolset !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolset = this._toolset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesExampleMessagesChunksToolResponseToolsetTool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._toolId = undefined;
      this._toolset = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._toolId = value.toolId;
      this._toolset = value.toolset;
    }
  }

  // tool_id - computed: false, optional: true, required: false
  private _toolId?: string; 
  public get toolId() {
    return this.getStringAttribute('tool_id');
  }
  public set toolId(value: string) {
    this._toolId = value;
  }
  public resetToolId() {
    this._toolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolIdInput() {
    return this._toolId;
  }

  // toolset - computed: false, optional: false, required: true
  private _toolset?: string; 
  public get toolset() {
    return this.getStringAttribute('toolset');
  }
  public set toolset(value: string) {
    this._toolset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toolsetInput() {
    return this._toolset;
  }
}
export interface CesExampleMessagesChunksToolResponse {
  /**
  * The matching ID of the tool call the response is for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_example#id CesExample#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The tool execution result in JSON object format.
  * Use "output" key to specify tool response and "error" key to specify
  * error details (if any). If "output" and "error" keys are not specified,
  * then whole "response" is treated as tool execution result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_example#response CesExample#response}
  */
  readonly response: string;
  /**
  * The name of the tool to execute.
  * Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_example#tool CesExample#tool}
  */
  readonly tool?: string;
  /**
  * toolset_tool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_example#toolset_tool CesExample#toolset_tool}
  */
  readonly toolsetTool?: CesExampleMessagesChunksToolResponseToolsetTool;
}

export function cesExampleMessagesChunksToolResponseToTerraform(struct?: CesExampleMessagesChunksToolResponseOutputReference | CesExampleMessagesChunksToolResponse): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    response: cdktn.stringToTerraform(struct!.response),
    tool: cdktn.stringToTerraform(struct!.tool),
    toolset_tool: cesExampleMessagesChunksToolResponseToolsetToolToTerraform(struct!.toolsetTool),
  }
}


export function cesExampleMessagesChunksToolResponseToHclTerraform(struct?: CesExampleMessagesChunksToolResponseOutputReference | CesExampleMessagesChunksToolResponse): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response: {
      value: cdktn.stringToHclTerraform(struct!.response),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tool: {
      value: cdktn.stringToHclTerraform(struct!.tool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toolset_tool: {
      value: cesExampleMessagesChunksToolResponseToolsetToolToHclTerraform(struct!.toolsetTool),
      isBlock: true,
      type: "list",
      storageClassType: "CesExampleMessagesChunksToolResponseToolsetToolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesExampleMessagesChunksToolResponseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesExampleMessagesChunksToolResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._response !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response;
    }
    if (this._tool !== undefined) {
      hasAnyValues = true;
      internalValueResult.tool = this._tool;
    }
    if (this._toolsetTool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolsetTool = this._toolsetTool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesExampleMessagesChunksToolResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._response = undefined;
      this._tool = undefined;
      this._toolsetTool.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._response = value.response;
      this._tool = value.tool;
      this._toolsetTool.internalValue = value.toolsetTool;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: false, optional: true, required: false
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

  // response - computed: false, optional: false, required: true
  private _response?: string; 
  public get response() {
    return this.getStringAttribute('response');
  }
  public set response(value: string) {
    this._response = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response;
  }

  // tool - computed: false, optional: true, required: false
  private _tool?: string; 
  public get tool() {
    return this.getStringAttribute('tool');
  }
  public set tool(value: string) {
    this._tool = value;
  }
  public resetTool() {
    this._tool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolInput() {
    return this._tool;
  }

  // toolset_tool - computed: false, optional: true, required: false
  private _toolsetTool = new CesExampleMessagesChunksToolResponseToolsetToolOutputReference(this, "toolset_tool");
  public get toolsetTool() {
    return this._toolsetTool;
  }
  public putToolsetTool(value: CesExampleMessagesChunksToolResponseToolsetTool) {
    this._toolsetTool.internalValue = value;
  }
  public resetToolsetTool() {
    this._toolsetTool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolsetToolInput() {
    return this._toolsetTool.internalValue;
  }
}
export interface CesExampleMessagesChunks {
  /**
  * Text data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_example#text CesExample#text}
  */
  readonly text?: string;
  /**
  * A struct represents variables that were updated in the conversation,
  * keyed by variable names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_example#updated_variables CesExample#updated_variables}
  */
  readonly updatedVariables?: string;
  /**
  * agent_transfer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_example#agent_transfer CesExample#agent_transfer}
  */
  readonly agentTransfer?: CesExampleMessagesChunksAgentTransfer;
  /**
  * image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_example#image CesExample#image}
  */
  readonly image?: CesExampleMessagesChunksImage;
  /**
  * tool_call block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_example#tool_call CesExample#tool_call}
  */
  readonly toolCall?: CesExampleMessagesChunksToolCall;
  /**
  * tool_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_example#tool_response CesExample#tool_response}
  */
  readonly toolResponse?: CesExampleMessagesChunksToolResponse;
}

export function cesExampleMessagesChunksToTerraform(struct?: CesExampleMessagesChunks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    text: cdktn.stringToTerraform(struct!.text),
    updated_variables: cdktn.stringToTerraform(struct!.updatedVariables),
    agent_transfer: cesExampleMessagesChunksAgentTransferToTerraform(struct!.agentTransfer),
    image: cesExampleMessagesChunksImageToTerraform(struct!.image),
    tool_call: cesExampleMessagesChunksToolCallToTerraform(struct!.toolCall),
    tool_response: cesExampleMessagesChunksToolResponseToTerraform(struct!.toolResponse),
  }
}


export function cesExampleMessagesChunksToHclTerraform(struct?: CesExampleMessagesChunks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    text: {
      value: cdktn.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    updated_variables: {
      value: cdktn.stringToHclTerraform(struct!.updatedVariables),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    agent_transfer: {
      value: cesExampleMessagesChunksAgentTransferToHclTerraform(struct!.agentTransfer),
      isBlock: true,
      type: "list",
      storageClassType: "CesExampleMessagesChunksAgentTransferList",
    },
    image: {
      value: cesExampleMessagesChunksImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "list",
      storageClassType: "CesExampleMessagesChunksImageList",
    },
    tool_call: {
      value: cesExampleMessagesChunksToolCallToHclTerraform(struct!.toolCall),
      isBlock: true,
      type: "list",
      storageClassType: "CesExampleMessagesChunksToolCallList",
    },
    tool_response: {
      value: cesExampleMessagesChunksToolResponseToHclTerraform(struct!.toolResponse),
      isBlock: true,
      type: "list",
      storageClassType: "CesExampleMessagesChunksToolResponseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesExampleMessagesChunksOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CesExampleMessagesChunks | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._updatedVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedVariables = this._updatedVariables;
    }
    if (this._agentTransfer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentTransfer = this._agentTransfer?.internalValue;
    }
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
    }
    if (this._toolCall?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolCall = this._toolCall?.internalValue;
    }
    if (this._toolResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolResponse = this._toolResponse?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesExampleMessagesChunks | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
      this._updatedVariables = undefined;
      this._agentTransfer.internalValue = undefined;
      this._image.internalValue = undefined;
      this._toolCall.internalValue = undefined;
      this._toolResponse.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
      this._updatedVariables = value.updatedVariables;
      this._agentTransfer.internalValue = value.agentTransfer;
      this._image.internalValue = value.image;
      this._toolCall.internalValue = value.toolCall;
      this._toolResponse.internalValue = value.toolResponse;
    }
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // updated_variables - computed: false, optional: true, required: false
  private _updatedVariables?: string; 
  public get updatedVariables() {
    return this.getStringAttribute('updated_variables');
  }
  public set updatedVariables(value: string) {
    this._updatedVariables = value;
  }
  public resetUpdatedVariables() {
    this._updatedVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedVariablesInput() {
    return this._updatedVariables;
  }

  // agent_transfer - computed: false, optional: true, required: false
  private _agentTransfer = new CesExampleMessagesChunksAgentTransferOutputReference(this, "agent_transfer");
  public get agentTransfer() {
    return this._agentTransfer;
  }
  public putAgentTransfer(value: CesExampleMessagesChunksAgentTransfer) {
    this._agentTransfer.internalValue = value;
  }
  public resetAgentTransfer() {
    this._agentTransfer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentTransferInput() {
    return this._agentTransfer.internalValue;
  }

  // image - computed: false, optional: true, required: false
  private _image = new CesExampleMessagesChunksImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: CesExampleMessagesChunksImage) {
    this._image.internalValue = value;
  }
  public resetImage() {
    this._image.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // tool_call - computed: false, optional: true, required: false
  private _toolCall = new CesExampleMessagesChunksToolCallOutputReference(this, "tool_call");
  public get toolCall() {
    return this._toolCall;
  }
  public putToolCall(value: CesExampleMessagesChunksToolCall) {
    this._toolCall.internalValue = value;
  }
  public resetToolCall() {
    this._toolCall.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolCallInput() {
    return this._toolCall.internalValue;
  }

  // tool_response - computed: false, optional: true, required: false
  private _toolResponse = new CesExampleMessagesChunksToolResponseOutputReference(this, "tool_response");
  public get toolResponse() {
    return this._toolResponse;
  }
  public putToolResponse(value: CesExampleMessagesChunksToolResponse) {
    this._toolResponse.internalValue = value;
  }
  public resetToolResponse() {
    this._toolResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolResponseInput() {
    return this._toolResponse.internalValue;
  }
}

export class CesExampleMessagesChunksList extends cdktn.ComplexList {
  public internalValue? : CesExampleMessagesChunks[] | cdktn.IResolvable

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
  public get(index: number): CesExampleMessagesChunksOutputReference {
    return new CesExampleMessagesChunksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesExampleMessages {
  /**
  * The role within the conversation, e.g., user, agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_example#role CesExample#role}
  */
  readonly role?: string;
  /**
  * chunks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_example#chunks CesExample#chunks}
  */
  readonly chunks?: CesExampleMessagesChunks[] | cdktn.IResolvable;
}

export function cesExampleMessagesToTerraform(struct?: CesExampleMessages | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    role: cdktn.stringToTerraform(struct!.role),
    chunks: cdktn.listMapper(cesExampleMessagesChunksToTerraform, true)(struct!.chunks),
  }
}


export function cesExampleMessagesToHclTerraform(struct?: CesExampleMessages | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    role: {
      value: cdktn.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chunks: {
      value: cdktn.listMapperHcl(cesExampleMessagesChunksToHclTerraform, true)(struct!.chunks),
      isBlock: true,
      type: "list",
      storageClassType: "CesExampleMessagesChunksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesExampleMessagesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CesExampleMessages | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._chunks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunks = this._chunks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesExampleMessages | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._role = undefined;
      this._chunks.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._role = value.role;
      this._chunks.internalValue = value.chunks;
    }
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // chunks - computed: false, optional: true, required: false
  private _chunks = new CesExampleMessagesChunksList(this, "chunks", false);
  public get chunks() {
    return this._chunks;
  }
  public putChunks(value: CesExampleMessagesChunks[] | cdktn.IResolvable) {
    this._chunks.internalValue = value;
  }
  public resetChunks() {
    this._chunks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunksInput() {
    return this._chunks.internalValue;
  }
}

export class CesExampleMessagesList extends cdktn.ComplexList {
  public internalValue? : CesExampleMessages[] | cdktn.IResolvable

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
  public get(index: number): CesExampleMessagesOutputReference {
    return new CesExampleMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesExampleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_example#create CesExample#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_example#delete CesExample#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_example#update CesExample#update}
  */
  readonly update?: string;
}

export function cesExampleTimeoutsToTerraform(struct?: CesExampleTimeouts | cdktn.IResolvable): any {
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


export function cesExampleTimeoutsToHclTerraform(struct?: CesExampleTimeouts | cdktn.IResolvable): any {
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

export class CesExampleTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CesExampleTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CesExampleTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_example google_ces_example}
*/
export class CesExample extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_ces_example";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CesExample resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CesExample to import
  * @param importFromId The id of the existing CesExample that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_example#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CesExample to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_ces_example", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_example google_ces_example} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CesExampleConfig
  */
  public constructor(scope: Construct, id: string, config: CesExampleConfig) {
    super(scope, id, {
      terraformResourceType: 'google_ces_example',
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
    this._app = config.app;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._displayName = config.displayName;
    this._entryAgent = config.entryAgent;
    this._exampleId = config.exampleId;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._messages.internalValue = config.messages;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app - computed: false, optional: false, required: true
  private _app?: string; 
  public get app() {
    return this.getStringAttribute('app');
  }
  public set app(value: string) {
    this._app = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appInput() {
    return this._app;
  }

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

  // entry_agent - computed: false, optional: true, required: false
  private _entryAgent?: string; 
  public get entryAgent() {
    return this.getStringAttribute('entry_agent');
  }
  public set entryAgent(value: string) {
    this._entryAgent = value;
  }
  public resetEntryAgent() {
    this._entryAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryAgentInput() {
    return this._entryAgent;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // example_id - computed: false, optional: false, required: true
  private _exampleId?: string; 
  public get exampleId() {
    return this.getStringAttribute('example_id');
  }
  public set exampleId(value: string) {
    this._exampleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exampleIdInput() {
    return this._exampleId;
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

  // invalid - computed: true, optional: false, required: false
  public get invalid() {
    return this.getBooleanAttribute('invalid');
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

  // messages - computed: false, optional: true, required: false
  private _messages = new CesExampleMessagesList(this, "messages", false);
  public get messages() {
    return this._messages;
  }
  public putMessages(value: CesExampleMessages[] | cdktn.IResolvable) {
    this._messages.internalValue = value;
  }
  public resetMessages() {
    this._messages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagesInput() {
    return this._messages.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CesExampleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CesExampleTimeouts) {
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
      app: cdktn.stringToTerraform(this._app),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      display_name: cdktn.stringToTerraform(this._displayName),
      entry_agent: cdktn.stringToTerraform(this._entryAgent),
      example_id: cdktn.stringToTerraform(this._exampleId),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      messages: cdktn.listMapper(cesExampleMessagesToTerraform, true)(this._messages.internalValue),
      timeouts: cesExampleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app: {
        value: cdktn.stringToHclTerraform(this._app),
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
      entry_agent: {
        value: cdktn.stringToHclTerraform(this._entryAgent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      example_id: {
        value: cdktn.stringToHclTerraform(this._exampleId),
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
      messages: {
        value: cdktn.listMapperHcl(cesExampleMessagesToHclTerraform, true)(this._messages.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CesExampleMessagesList",
      },
      timeouts: {
        value: cesExampleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CesExampleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
