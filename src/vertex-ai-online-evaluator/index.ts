/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface VertexAiOnlineEvaluatorConfig extends cdktn.TerraformMetaArguments {
  /**
  * The name of the agent that the OnlineEvaluator evaluates periodically.
  * This value is used to filter the traces with a matching cloud.resource_id
  * and link the evaluation results with relevant dashboards/UIs. This field
  * is immutable; once set, it cannot be changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#agent_resource VertexAiOnlineEvaluator#agent_resource}
  */
  readonly agentResource: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#deletion_policy VertexAiOnlineEvaluator#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Human-readable name for the OnlineEvaluator. The name doesn't have to be
  * unique. The name can consist of any UTF-8 characters. The maximum length
  * is 63 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#display_name VertexAiOnlineEvaluator#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#id VertexAiOnlineEvaluator#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#project VertexAiOnlineEvaluator#project}
  */
  readonly project?: string;
  /**
  * The region of the OnlineEvaluator (e.g. us-central1). If unset, the provider's region is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#region VertexAiOnlineEvaluator#region}
  */
  readonly region?: string;
  /**
  * cloud_observability block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#cloud_observability VertexAiOnlineEvaluator#cloud_observability}
  */
  readonly cloudObservability: VertexAiOnlineEvaluatorCloudObservability;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#config VertexAiOnlineEvaluator#config}
  */
  readonly config: VertexAiOnlineEvaluatorConfigA;
  /**
  * metric_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#metric_sources VertexAiOnlineEvaluator#metric_sources}
  */
  readonly metricSources: VertexAiOnlineEvaluatorMetricSources[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#timeouts VertexAiOnlineEvaluator#timeouts}
  */
  readonly timeouts?: VertexAiOnlineEvaluatorTimeouts;
}
export interface VertexAiOnlineEvaluatorStateDetails {
}

export function vertexAiOnlineEvaluatorStateDetailsToTerraform(struct?: VertexAiOnlineEvaluatorStateDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function vertexAiOnlineEvaluatorStateDetailsToHclTerraform(struct?: VertexAiOnlineEvaluatorStateDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class VertexAiOnlineEvaluatorStateDetailsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VertexAiOnlineEvaluatorStateDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiOnlineEvaluatorStateDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class VertexAiOnlineEvaluatorStateDetailsList extends cdktn.ComplexList {

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
  public get(index: number): VertexAiOnlineEvaluatorStateDetailsOutputReference {
    return new VertexAiOnlineEvaluatorStateDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry {
  /**
  * Defines which version of the OTel Semantic Convention the data
  * follows. Can be "1.39.0" or newer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#semconv_version VertexAiOnlineEvaluator#semconv_version}
  */
  readonly semconvVersion: string;
}

export function vertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryToTerraform(struct?: VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference | VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    semconv_version: cdktn.stringToTerraform(struct!.semconvVersion),
  }
}


export function vertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryToHclTerraform(struct?: VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference | VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    semconv_version: {
      value: cdktn.stringToHclTerraform(struct!.semconvVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._semconvVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.semconvVersion = this._semconvVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._semconvVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._semconvVersion = value.semconvVersion;
    }
  }

  // semconv_version - computed: false, optional: false, required: true
  private _semconvVersion?: string; 
  public get semconvVersion() {
    return this.getStringAttribute('semconv_version');
  }
  public set semconvVersion(value: string) {
    this._semconvVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get semconvVersionInput() {
    return this._semconvVersion;
  }
}
export interface VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration {
  /**
  * The comparison operator to apply. Possible values are:
  * LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL,
  * GREATER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#comparison_operator VertexAiOnlineEvaluator#comparison_operator}
  */
  readonly comparisonOperator: string;
  /**
  * The value to compare against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#value VertexAiOnlineEvaluator#value}
  */
  readonly value: number;
}

export function vertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationToTerraform(struct?: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference | VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison_operator: cdktn.stringToTerraform(struct!.comparisonOperator),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function vertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationToHclTerraform(struct?: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference | VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison_operator: {
      value: cdktn.stringToHclTerraform(struct!.comparisonOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparisonOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonOperator = this._comparisonOperator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comparisonOperator = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparisonOperator = value.comparisonOperator;
      this._value = value.value;
    }
  }

  // comparison_operator - computed: false, optional: false, required: true
  private _comparisonOperator?: string; 
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }
  public set comparisonOperator(value: string) {
    this._comparisonOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonOperatorInput() {
    return this._comparisonOperator;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors {
  /**
  * The comparison operator to apply. Possible values are:
  * LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL,
  * GREATER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#comparison_operator VertexAiOnlineEvaluator#comparison_operator}
  */
  readonly comparisonOperator: string;
  /**
  * The value to compare against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#value VertexAiOnlineEvaluator#value}
  */
  readonly value: number;
}

export function vertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsToTerraform(struct?: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference | VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison_operator: cdktn.stringToTerraform(struct!.comparisonOperator),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function vertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsToHclTerraform(struct?: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference | VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison_operator: {
      value: cdktn.stringToHclTerraform(struct!.comparisonOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparisonOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonOperator = this._comparisonOperator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comparisonOperator = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparisonOperator = value.comparisonOperator;
      this._value = value.value;
    }
  }

  // comparison_operator - computed: false, optional: false, required: true
  private _comparisonOperator?: string; 
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }
  public set comparisonOperator(value: string) {
    this._comparisonOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonOperatorInput() {
    return this._comparisonOperator;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls {
  /**
  * The comparison operator to apply. Possible values are:
  * LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL,
  * GREATER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#comparison_operator VertexAiOnlineEvaluator#comparison_operator}
  */
  readonly comparisonOperator: string;
  /**
  * The value to compare against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#value VertexAiOnlineEvaluator#value}
  */
  readonly value: number;
}

export function vertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsToTerraform(struct?: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference | VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison_operator: cdktn.stringToTerraform(struct!.comparisonOperator),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function vertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsToHclTerraform(struct?: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference | VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison_operator: {
      value: cdktn.stringToHclTerraform(struct!.comparisonOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparisonOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonOperator = this._comparisonOperator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comparisonOperator = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparisonOperator = value.comparisonOperator;
      this._value = value.value;
    }
  }

  // comparison_operator - computed: false, optional: false, required: true
  private _comparisonOperator?: string; 
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }
  public set comparisonOperator(value: string) {
    this._comparisonOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonOperatorInput() {
    return this._comparisonOperator;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors {
  /**
  * The comparison operator to apply. Possible values are:
  * LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL,
  * GREATER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#comparison_operator VertexAiOnlineEvaluator#comparison_operator}
  */
  readonly comparisonOperator: string;
  /**
  * The value to compare against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#value VertexAiOnlineEvaluator#value}
  */
  readonly value: number;
}

export function vertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsToTerraform(struct?: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference | VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison_operator: cdktn.stringToTerraform(struct!.comparisonOperator),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function vertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsToHclTerraform(struct?: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference | VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison_operator: {
      value: cdktn.stringToHclTerraform(struct!.comparisonOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparisonOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonOperator = this._comparisonOperator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comparisonOperator = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparisonOperator = value.comparisonOperator;
      this._value = value.value;
    }
  }

  // comparison_operator - computed: false, optional: false, required: true
  private _comparisonOperator?: string; 
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }
  public set comparisonOperator(value: string) {
    this._comparisonOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonOperatorInput() {
    return this._comparisonOperator;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls {
  /**
  * The comparison operator to apply. Possible values are:
  * LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL,
  * GREATER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#comparison_operator VertexAiOnlineEvaluator#comparison_operator}
  */
  readonly comparisonOperator: string;
  /**
  * The value to compare against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#value VertexAiOnlineEvaluator#value}
  */
  readonly value: number;
}

export function vertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsToTerraform(struct?: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference | VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison_operator: cdktn.stringToTerraform(struct!.comparisonOperator),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function vertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsToHclTerraform(struct?: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference | VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison_operator: {
      value: cdktn.stringToHclTerraform(struct!.comparisonOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparisonOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonOperator = this._comparisonOperator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comparisonOperator = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparisonOperator = value.comparisonOperator;
      this._value = value.value;
    }
  }

  // comparison_operator - computed: false, optional: false, required: true
  private _comparisonOperator?: string; 
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }
  public set comparisonOperator(value: string) {
    this._comparisonOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonOperatorInput() {
    return this._comparisonOperator;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage {
  /**
  * The comparison operator to apply. Possible values are:
  * LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL,
  * GREATER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#comparison_operator VertexAiOnlineEvaluator#comparison_operator}
  */
  readonly comparisonOperator: string;
  /**
  * The value to compare against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#value VertexAiOnlineEvaluator#value}
  */
  readonly value: number;
}

export function vertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageToTerraform(struct?: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference | VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison_operator: cdktn.stringToTerraform(struct!.comparisonOperator),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function vertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageToHclTerraform(struct?: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference | VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison_operator: {
      value: cdktn.stringToHclTerraform(struct!.comparisonOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparisonOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonOperator = this._comparisonOperator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comparisonOperator = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparisonOperator = value.comparisonOperator;
      this._value = value.value;
    }
  }

  // comparison_operator - computed: false, optional: false, required: true
  private _comparisonOperator?: string; 
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }
  public set comparisonOperator(value: string) {
    this._comparisonOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonOperatorInput() {
    return this._comparisonOperator;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns {
  /**
  * The comparison operator to apply. Possible values are:
  * LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL,
  * GREATER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#comparison_operator VertexAiOnlineEvaluator#comparison_operator}
  */
  readonly comparisonOperator: string;
  /**
  * The value to compare against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#value VertexAiOnlineEvaluator#value}
  */
  readonly value: number;
}

export function vertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsToTerraform(struct?: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference | VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison_operator: cdktn.stringToTerraform(struct!.comparisonOperator),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function vertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsToHclTerraform(struct?: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference | VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison_operator: {
      value: cdktn.stringToHclTerraform(struct!.comparisonOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparisonOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonOperator = this._comparisonOperator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comparisonOperator = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparisonOperator = value.comparisonOperator;
      this._value = value.value;
    }
  }

  // comparison_operator - computed: false, optional: false, required: true
  private _comparisonOperator?: string; 
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }
  public set comparisonOperator(value: string) {
    this._comparisonOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonOperatorInput() {
    return this._comparisonOperator;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter {
  /**
  * duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#duration VertexAiOnlineEvaluator#duration}
  */
  readonly duration?: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration;
  /**
  * model_call_errors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#model_call_errors VertexAiOnlineEvaluator#model_call_errors}
  */
  readonly modelCallErrors?: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors;
  /**
  * model_calls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#model_calls VertexAiOnlineEvaluator#model_calls}
  */
  readonly modelCalls?: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls;
  /**
  * tool_call_errors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#tool_call_errors VertexAiOnlineEvaluator#tool_call_errors}
  */
  readonly toolCallErrors?: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors;
  /**
  * tool_calls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#tool_calls VertexAiOnlineEvaluator#tool_calls}
  */
  readonly toolCalls?: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls;
  /**
  * total_token_usage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#total_token_usage VertexAiOnlineEvaluator#total_token_usage}
  */
  readonly totalTokenUsage?: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage;
  /**
  * user_turns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#user_turns VertexAiOnlineEvaluator#user_turns}
  */
  readonly userTurns?: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns;
}

export function vertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToTerraform(struct?: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    duration: vertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationToTerraform(struct!.duration),
    model_call_errors: vertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsToTerraform(struct!.modelCallErrors),
    model_calls: vertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsToTerraform(struct!.modelCalls),
    tool_call_errors: vertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsToTerraform(struct!.toolCallErrors),
    tool_calls: vertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsToTerraform(struct!.toolCalls),
    total_token_usage: vertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageToTerraform(struct!.totalTokenUsage),
    user_turns: vertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsToTerraform(struct!.userTurns),
  }
}


export function vertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToHclTerraform(struct?: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    duration: {
      value: vertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationToHclTerraform(struct!.duration),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationList",
    },
    model_call_errors: {
      value: vertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsToHclTerraform(struct!.modelCallErrors),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsList",
    },
    model_calls: {
      value: vertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsToHclTerraform(struct!.modelCalls),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsList",
    },
    tool_call_errors: {
      value: vertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsToHclTerraform(struct!.toolCallErrors),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsList",
    },
    tool_calls: {
      value: vertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsToHclTerraform(struct!.toolCalls),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsList",
    },
    total_token_usage: {
      value: vertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageToHclTerraform(struct!.totalTokenUsage),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageList",
    },
    user_turns: {
      value: vertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsToHclTerraform(struct!.userTurns),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration?.internalValue;
    }
    if (this._modelCallErrors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelCallErrors = this._modelCallErrors?.internalValue;
    }
    if (this._modelCalls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelCalls = this._modelCalls?.internalValue;
    }
    if (this._toolCallErrors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolCallErrors = this._toolCallErrors?.internalValue;
    }
    if (this._toolCalls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolCalls = this._toolCalls?.internalValue;
    }
    if (this._totalTokenUsage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalTokenUsage = this._totalTokenUsage?.internalValue;
    }
    if (this._userTurns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTurns = this._userTurns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration.internalValue = undefined;
      this._modelCallErrors.internalValue = undefined;
      this._modelCalls.internalValue = undefined;
      this._toolCallErrors.internalValue = undefined;
      this._toolCalls.internalValue = undefined;
      this._totalTokenUsage.internalValue = undefined;
      this._userTurns.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration.internalValue = value.duration;
      this._modelCallErrors.internalValue = value.modelCallErrors;
      this._modelCalls.internalValue = value.modelCalls;
      this._toolCallErrors.internalValue = value.toolCallErrors;
      this._toolCalls.internalValue = value.toolCalls;
      this._totalTokenUsage.internalValue = value.totalTokenUsage;
      this._userTurns.internalValue = value.userTurns;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration = new VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference(this, "duration");
  public get duration() {
    return this._duration;
  }
  public putDuration(value: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration) {
    this._duration.internalValue = value;
  }
  public resetDuration() {
    this._duration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration.internalValue;
  }

  // model_call_errors - computed: false, optional: true, required: false
  private _modelCallErrors = new VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference(this, "model_call_errors");
  public get modelCallErrors() {
    return this._modelCallErrors;
  }
  public putModelCallErrors(value: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors) {
    this._modelCallErrors.internalValue = value;
  }
  public resetModelCallErrors() {
    this._modelCallErrors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelCallErrorsInput() {
    return this._modelCallErrors.internalValue;
  }

  // model_calls - computed: false, optional: true, required: false
  private _modelCalls = new VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference(this, "model_calls");
  public get modelCalls() {
    return this._modelCalls;
  }
  public putModelCalls(value: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls) {
    this._modelCalls.internalValue = value;
  }
  public resetModelCalls() {
    this._modelCalls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelCallsInput() {
    return this._modelCalls.internalValue;
  }

  // tool_call_errors - computed: false, optional: true, required: false
  private _toolCallErrors = new VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference(this, "tool_call_errors");
  public get toolCallErrors() {
    return this._toolCallErrors;
  }
  public putToolCallErrors(value: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors) {
    this._toolCallErrors.internalValue = value;
  }
  public resetToolCallErrors() {
    this._toolCallErrors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolCallErrorsInput() {
    return this._toolCallErrors.internalValue;
  }

  // tool_calls - computed: false, optional: true, required: false
  private _toolCalls = new VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference(this, "tool_calls");
  public get toolCalls() {
    return this._toolCalls;
  }
  public putToolCalls(value: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls) {
    this._toolCalls.internalValue = value;
  }
  public resetToolCalls() {
    this._toolCalls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolCallsInput() {
    return this._toolCalls.internalValue;
  }

  // total_token_usage - computed: false, optional: true, required: false
  private _totalTokenUsage = new VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference(this, "total_token_usage");
  public get totalTokenUsage() {
    return this._totalTokenUsage;
  }
  public putTotalTokenUsage(value: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage) {
    this._totalTokenUsage.internalValue = value;
  }
  public resetTotalTokenUsage() {
    this._totalTokenUsage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalTokenUsageInput() {
    return this._totalTokenUsage.internalValue;
  }

  // user_turns - computed: false, optional: true, required: false
  private _userTurns = new VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference(this, "user_turns");
  public get userTurns() {
    return this._userTurns;
  }
  public putUserTurns(value: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns) {
    this._userTurns.internalValue = value;
  }
  public resetUserTurns() {
    this._userTurns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTurnsInput() {
    return this._userTurns.internalValue;
  }
}

export class VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList extends cdktn.ComplexList {
  public internalValue? : VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter[] | cdktn.IResolvable

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
  public get(index: number): VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference {
    return new VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger {
  /**
  * The amount of time that must pass with no new traces before a
  * session is considered ready for evaluation. Must be a positive
  * duration no greater than 7 days (604800 seconds), e.g. "3600s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#threshold VertexAiOnlineEvaluator#threshold}
  */
  readonly threshold: string;
}

export function vertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerToTerraform(struct?: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference | VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    threshold: cdktn.stringToTerraform(struct!.threshold),
  }
}


export function vertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerToHclTerraform(struct?: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference | VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    threshold: {
      value: cdktn.stringToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._threshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._threshold = value.threshold;
    }
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: string; 
  public get threshold() {
    return this.getStringAttribute('threshold');
  }
  public set threshold(value: string) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface VertexAiOnlineEvaluatorCloudObservabilitySessionScope {
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#filter VertexAiOnlineEvaluator#filter}
  */
  readonly filter?: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter[] | cdktn.IResolvable;
  /**
  * inactivity_trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#inactivity_trigger VertexAiOnlineEvaluator#inactivity_trigger}
  */
  readonly inactivityTrigger?: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger;
}

export function vertexAiOnlineEvaluatorCloudObservabilitySessionScopeToTerraform(struct?: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference | VertexAiOnlineEvaluatorCloudObservabilitySessionScope): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filter: cdktn.listMapper(vertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToTerraform, true)(struct!.filter),
    inactivity_trigger: vertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerToTerraform(struct!.inactivityTrigger),
  }
}


export function vertexAiOnlineEvaluatorCloudObservabilitySessionScopeToHclTerraform(struct?: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference | VertexAiOnlineEvaluatorCloudObservabilitySessionScope): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    filter: {
      value: cdktn.listMapperHcl(vertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToHclTerraform, true)(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList",
    },
    inactivity_trigger: {
      value: vertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerToHclTerraform(struct!.inactivityTrigger),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiOnlineEvaluatorCloudObservabilitySessionScope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._inactivityTrigger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inactivityTrigger = this._inactivityTrigger?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiOnlineEvaluatorCloudObservabilitySessionScope | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filter.internalValue = undefined;
      this._inactivityTrigger.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filter.internalValue = value.filter;
      this._inactivityTrigger.internalValue = value.inactivityTrigger;
    }
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter[] | cdktn.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // inactivity_trigger - computed: false, optional: true, required: false
  private _inactivityTrigger = new VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference(this, "inactivity_trigger");
  public get inactivityTrigger() {
    return this._inactivityTrigger;
  }
  public putInactivityTrigger(value: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger) {
    this._inactivityTrigger.internalValue = value;
  }
  public resetInactivityTrigger() {
    this._inactivityTrigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactivityTriggerInput() {
    return this._inactivityTrigger.internalValue;
  }
}
export interface VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration {
  /**
  * The comparison operator to apply. Possible values are:
  * LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL,
  * GREATER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#comparison_operator VertexAiOnlineEvaluator#comparison_operator}
  */
  readonly comparisonOperator: string;
  /**
  * The value to compare against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#value VertexAiOnlineEvaluator#value}
  */
  readonly value: number;
}

export function vertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationToTerraform(struct?: VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference | VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison_operator: cdktn.stringToTerraform(struct!.comparisonOperator),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function vertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationToHclTerraform(struct?: VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference | VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison_operator: {
      value: cdktn.stringToHclTerraform(struct!.comparisonOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparisonOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonOperator = this._comparisonOperator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comparisonOperator = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparisonOperator = value.comparisonOperator;
      this._value = value.value;
    }
  }

  // comparison_operator - computed: false, optional: false, required: true
  private _comparisonOperator?: string; 
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }
  public set comparisonOperator(value: string) {
    this._comparisonOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonOperatorInput() {
    return this._comparisonOperator;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage {
  /**
  * The comparison operator to apply. Possible values are:
  * LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL,
  * GREATER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#comparison_operator VertexAiOnlineEvaluator#comparison_operator}
  */
  readonly comparisonOperator: string;
  /**
  * The value to compare against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#value VertexAiOnlineEvaluator#value}
  */
  readonly value: number;
}

export function vertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageToTerraform(struct?: VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference | VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison_operator: cdktn.stringToTerraform(struct!.comparisonOperator),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function vertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageToHclTerraform(struct?: VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference | VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison_operator: {
      value: cdktn.stringToHclTerraform(struct!.comparisonOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparisonOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonOperator = this._comparisonOperator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comparisonOperator = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparisonOperator = value.comparisonOperator;
      this._value = value.value;
    }
  }

  // comparison_operator - computed: false, optional: false, required: true
  private _comparisonOperator?: string; 
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }
  public set comparisonOperator(value: string) {
    this._comparisonOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonOperatorInput() {
    return this._comparisonOperator;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter {
  /**
  * duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#duration VertexAiOnlineEvaluator#duration}
  */
  readonly duration?: VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration;
  /**
  * total_token_usage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#total_token_usage VertexAiOnlineEvaluator#total_token_usage}
  */
  readonly totalTokenUsage?: VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage;
}

export function vertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterToTerraform(struct?: VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    duration: vertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationToTerraform(struct!.duration),
    total_token_usage: vertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageToTerraform(struct!.totalTokenUsage),
  }
}


export function vertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterToHclTerraform(struct?: VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    duration: {
      value: vertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationToHclTerraform(struct!.duration),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationList",
    },
    total_token_usage: {
      value: vertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageToHclTerraform(struct!.totalTokenUsage),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration?.internalValue;
    }
    if (this._totalTokenUsage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalTokenUsage = this._totalTokenUsage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration.internalValue = undefined;
      this._totalTokenUsage.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration.internalValue = value.duration;
      this._totalTokenUsage.internalValue = value.totalTokenUsage;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration = new VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference(this, "duration");
  public get duration() {
    return this._duration;
  }
  public putDuration(value: VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration) {
    this._duration.internalValue = value;
  }
  public resetDuration() {
    this._duration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration.internalValue;
  }

  // total_token_usage - computed: false, optional: true, required: false
  private _totalTokenUsage = new VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference(this, "total_token_usage");
  public get totalTokenUsage() {
    return this._totalTokenUsage;
  }
  public putTotalTokenUsage(value: VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage) {
    this._totalTokenUsage.internalValue = value;
  }
  public resetTotalTokenUsage() {
    this._totalTokenUsage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalTokenUsageInput() {
    return this._totalTokenUsage.internalValue;
  }
}

export class VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList extends cdktn.ComplexList {
  public internalValue? : VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter[] | cdktn.IResolvable

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
  public get(index: number): VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference {
    return new VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiOnlineEvaluatorCloudObservabilityTraceScope {
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#filter VertexAiOnlineEvaluator#filter}
  */
  readonly filter?: VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter[] | cdktn.IResolvable;
}

export function vertexAiOnlineEvaluatorCloudObservabilityTraceScopeToTerraform(struct?: VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference | VertexAiOnlineEvaluatorCloudObservabilityTraceScope): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filter: cdktn.listMapper(vertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterToTerraform, true)(struct!.filter),
  }
}


export function vertexAiOnlineEvaluatorCloudObservabilityTraceScopeToHclTerraform(struct?: VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference | VertexAiOnlineEvaluatorCloudObservabilityTraceScope): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    filter: {
      value: cdktn.listMapperHcl(vertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterToHclTerraform, true)(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiOnlineEvaluatorCloudObservabilityTraceScope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiOnlineEvaluatorCloudObservabilityTraceScope | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filter.internalValue = value.filter;
    }
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter[] | cdktn.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}
export interface VertexAiOnlineEvaluatorCloudObservability {
  /**
  * Optional log view that will be used to query logs. If empty, the
  * project's default view ('projects/{{project_id}}') will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#log_view VertexAiOnlineEvaluator#log_view}
  */
  readonly logView?: string;
  /**
  * Optional trace view that will be used to query traces. If empty, the
  * '_AllSpans' view from the '_Trace' US bucket will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#trace_view VertexAiOnlineEvaluator#trace_view}
  */
  readonly traceView?: string;
  /**
  * open_telemetry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#open_telemetry VertexAiOnlineEvaluator#open_telemetry}
  */
  readonly openTelemetry: VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry;
  /**
  * session_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#session_scope VertexAiOnlineEvaluator#session_scope}
  */
  readonly sessionScope?: VertexAiOnlineEvaluatorCloudObservabilitySessionScope;
  /**
  * trace_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#trace_scope VertexAiOnlineEvaluator#trace_scope}
  */
  readonly traceScope?: VertexAiOnlineEvaluatorCloudObservabilityTraceScope;
}

export function vertexAiOnlineEvaluatorCloudObservabilityToTerraform(struct?: VertexAiOnlineEvaluatorCloudObservabilityOutputReference | VertexAiOnlineEvaluatorCloudObservability): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    log_view: cdktn.stringToTerraform(struct!.logView),
    trace_view: cdktn.stringToTerraform(struct!.traceView),
    open_telemetry: vertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryToTerraform(struct!.openTelemetry),
    session_scope: vertexAiOnlineEvaluatorCloudObservabilitySessionScopeToTerraform(struct!.sessionScope),
    trace_scope: vertexAiOnlineEvaluatorCloudObservabilityTraceScopeToTerraform(struct!.traceScope),
  }
}


export function vertexAiOnlineEvaluatorCloudObservabilityToHclTerraform(struct?: VertexAiOnlineEvaluatorCloudObservabilityOutputReference | VertexAiOnlineEvaluatorCloudObservability): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    log_view: {
      value: cdktn.stringToHclTerraform(struct!.logView),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trace_view: {
      value: cdktn.stringToHclTerraform(struct!.traceView),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    open_telemetry: {
      value: vertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryToHclTerraform(struct!.openTelemetry),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryList",
    },
    session_scope: {
      value: vertexAiOnlineEvaluatorCloudObservabilitySessionScopeToHclTerraform(struct!.sessionScope),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiOnlineEvaluatorCloudObservabilitySessionScopeList",
    },
    trace_scope: {
      value: vertexAiOnlineEvaluatorCloudObservabilityTraceScopeToHclTerraform(struct!.traceScope),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiOnlineEvaluatorCloudObservabilityTraceScopeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiOnlineEvaluatorCloudObservabilityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiOnlineEvaluatorCloudObservability | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logView !== undefined) {
      hasAnyValues = true;
      internalValueResult.logView = this._logView;
    }
    if (this._traceView !== undefined) {
      hasAnyValues = true;
      internalValueResult.traceView = this._traceView;
    }
    if (this._openTelemetry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openTelemetry = this._openTelemetry?.internalValue;
    }
    if (this._sessionScope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionScope = this._sessionScope?.internalValue;
    }
    if (this._traceScope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.traceScope = this._traceScope?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiOnlineEvaluatorCloudObservability | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logView = undefined;
      this._traceView = undefined;
      this._openTelemetry.internalValue = undefined;
      this._sessionScope.internalValue = undefined;
      this._traceScope.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logView = value.logView;
      this._traceView = value.traceView;
      this._openTelemetry.internalValue = value.openTelemetry;
      this._sessionScope.internalValue = value.sessionScope;
      this._traceScope.internalValue = value.traceScope;
    }
  }

  // log_view - computed: false, optional: true, required: false
  private _logView?: string; 
  public get logView() {
    return this.getStringAttribute('log_view');
  }
  public set logView(value: string) {
    this._logView = value;
  }
  public resetLogView() {
    this._logView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logViewInput() {
    return this._logView;
  }

  // trace_view - computed: false, optional: true, required: false
  private _traceView?: string; 
  public get traceView() {
    return this.getStringAttribute('trace_view');
  }
  public set traceView(value: string) {
    this._traceView = value;
  }
  public resetTraceView() {
    this._traceView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceViewInput() {
    return this._traceView;
  }

  // open_telemetry - computed: false, optional: false, required: true
  private _openTelemetry = new VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference(this, "open_telemetry");
  public get openTelemetry() {
    return this._openTelemetry;
  }
  public putOpenTelemetry(value: VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry) {
    this._openTelemetry.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get openTelemetryInput() {
    return this._openTelemetry.internalValue;
  }

  // session_scope - computed: false, optional: true, required: false
  private _sessionScope = new VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference(this, "session_scope");
  public get sessionScope() {
    return this._sessionScope;
  }
  public putSessionScope(value: VertexAiOnlineEvaluatorCloudObservabilitySessionScope) {
    this._sessionScope.internalValue = value;
  }
  public resetSessionScope() {
    this._sessionScope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionScopeInput() {
    return this._sessionScope.internalValue;
  }

  // trace_scope - computed: false, optional: true, required: false
  private _traceScope = new VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference(this, "trace_scope");
  public get traceScope() {
    return this._traceScope;
  }
  public putTraceScope(value: VertexAiOnlineEvaluatorCloudObservabilityTraceScope) {
    this._traceScope.internalValue = value;
  }
  public resetTraceScope() {
    this._traceScope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceScopeInput() {
    return this._traceScope.internalValue;
  }
}
export interface VertexAiOnlineEvaluatorConfigRandomSampling {
  /**
  * The percentage of traces to sample for evaluation. Must be an
  * integer between 1 and 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#percentage VertexAiOnlineEvaluator#percentage}
  */
  readonly percentage: number;
}

export function vertexAiOnlineEvaluatorConfigRandomSamplingToTerraform(struct?: VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference | VertexAiOnlineEvaluatorConfigRandomSampling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    percentage: cdktn.numberToTerraform(struct!.percentage),
  }
}


export function vertexAiOnlineEvaluatorConfigRandomSamplingToHclTerraform(struct?: VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference | VertexAiOnlineEvaluatorConfigRandomSampling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    percentage: {
      value: cdktn.numberToHclTerraform(struct!.percentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiOnlineEvaluatorConfigRandomSampling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiOnlineEvaluatorConfigRandomSampling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._percentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._percentage = value.percentage;
    }
  }

  // percentage - computed: false, optional: false, required: true
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }
}
export interface VertexAiOnlineEvaluatorConfigA {
  /**
  * The maximum number of evaluations to perform per run. If set to 0, the
  * number is unbounded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#max_evaluated_samples_per_run VertexAiOnlineEvaluator#max_evaluated_samples_per_run}
  */
  readonly maxEvaluatedSamplesPerRun?: string;
  /**
  * random_sampling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#random_sampling VertexAiOnlineEvaluator#random_sampling}
  */
  readonly randomSampling?: VertexAiOnlineEvaluatorConfigRandomSampling;
}

export function vertexAiOnlineEvaluatorConfigAToTerraform(struct?: VertexAiOnlineEvaluatorConfigAOutputReference | VertexAiOnlineEvaluatorConfigA): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_evaluated_samples_per_run: cdktn.stringToTerraform(struct!.maxEvaluatedSamplesPerRun),
    random_sampling: vertexAiOnlineEvaluatorConfigRandomSamplingToTerraform(struct!.randomSampling),
  }
}


export function vertexAiOnlineEvaluatorConfigAToHclTerraform(struct?: VertexAiOnlineEvaluatorConfigAOutputReference | VertexAiOnlineEvaluatorConfigA): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_evaluated_samples_per_run: {
      value: cdktn.stringToHclTerraform(struct!.maxEvaluatedSamplesPerRun),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    random_sampling: {
      value: vertexAiOnlineEvaluatorConfigRandomSamplingToHclTerraform(struct!.randomSampling),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiOnlineEvaluatorConfigRandomSamplingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiOnlineEvaluatorConfigAOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiOnlineEvaluatorConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxEvaluatedSamplesPerRun !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEvaluatedSamplesPerRun = this._maxEvaluatedSamplesPerRun;
    }
    if (this._randomSampling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.randomSampling = this._randomSampling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiOnlineEvaluatorConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxEvaluatedSamplesPerRun = undefined;
      this._randomSampling.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxEvaluatedSamplesPerRun = value.maxEvaluatedSamplesPerRun;
      this._randomSampling.internalValue = value.randomSampling;
    }
  }

  // max_evaluated_samples_per_run - computed: false, optional: true, required: false
  private _maxEvaluatedSamplesPerRun?: string; 
  public get maxEvaluatedSamplesPerRun() {
    return this.getStringAttribute('max_evaluated_samples_per_run');
  }
  public set maxEvaluatedSamplesPerRun(value: string) {
    this._maxEvaluatedSamplesPerRun = value;
  }
  public resetMaxEvaluatedSamplesPerRun() {
    this._maxEvaluatedSamplesPerRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEvaluatedSamplesPerRunInput() {
    return this._maxEvaluatedSamplesPerRun;
  }

  // random_sampling - computed: false, optional: true, required: false
  private _randomSampling = new VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference(this, "random_sampling");
  public get randomSampling() {
    return this._randomSampling;
  }
  public putRandomSampling(value: VertexAiOnlineEvaluatorConfigRandomSampling) {
    this._randomSampling.internalValue = value;
  }
  public resetRandomSampling() {
    this._randomSampling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get randomSamplingInput() {
    return this._randomSampling.internalValue;
  }
}
export interface VertexAiOnlineEvaluatorMetricSources {
  /**
  * Inline metric config, provided as a JSON-formatted string using
  * camelCase field names to match the API format (see the
  * [Metric API documentation](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/Metric)).
  * The suggested predefined 'metricSpecName' values depend on the
  * evaluation scope configured in 'cloud_observability'; a predefined
  * metric must match the scope or the create request will be rejected:
  *   - 'trace_scope' (single trace): 'final_response_quality_v1',
  *     'tool_use_quality_v1', 'hallucination_v1', 'safety_v1'.
  *   - 'session_scope' (multi-turn session):
  *     'multi_turn_task_success_v1', 'multi_turn_tool_use_quality_v1',
  *     'multi_turn_trajectory_quality_v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#metric VertexAiOnlineEvaluator#metric}
  */
  readonly metric?: string;
  /**
  * Resource name of a registered metric (a
  * 'google_vertex_ai_evaluation_metric'), e.g.
  * projects/{{project}}/locations/{{region}}/evaluationMetrics/{{id}}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#metric_resource_name VertexAiOnlineEvaluator#metric_resource_name}
  */
  readonly metricResourceName?: string;
}

export function vertexAiOnlineEvaluatorMetricSourcesToTerraform(struct?: VertexAiOnlineEvaluatorMetricSources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metric: cdktn.stringToTerraform(struct!.metric),
    metric_resource_name: cdktn.stringToTerraform(struct!.metricResourceName),
  }
}


export function vertexAiOnlineEvaluatorMetricSourcesToHclTerraform(struct?: VertexAiOnlineEvaluatorMetricSources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metric: {
      value: cdktn.stringToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_resource_name: {
      value: cdktn.stringToHclTerraform(struct!.metricResourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiOnlineEvaluatorMetricSourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VertexAiOnlineEvaluatorMetricSources | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._metricResourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricResourceName = this._metricResourceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiOnlineEvaluatorMetricSources | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric = undefined;
      this._metricResourceName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric = value.metric;
      this._metricResourceName = value.metricResourceName;
    }
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // metric_resource_name - computed: false, optional: true, required: false
  private _metricResourceName?: string; 
  public get metricResourceName() {
    return this.getStringAttribute('metric_resource_name');
  }
  public set metricResourceName(value: string) {
    this._metricResourceName = value;
  }
  public resetMetricResourceName() {
    this._metricResourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricResourceNameInput() {
    return this._metricResourceName;
  }
}

export class VertexAiOnlineEvaluatorMetricSourcesList extends cdktn.ComplexList {
  public internalValue? : VertexAiOnlineEvaluatorMetricSources[] | cdktn.IResolvable

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
  public get(index: number): VertexAiOnlineEvaluatorMetricSourcesOutputReference {
    return new VertexAiOnlineEvaluatorMetricSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiOnlineEvaluatorTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#create VertexAiOnlineEvaluator#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#delete VertexAiOnlineEvaluator#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#update VertexAiOnlineEvaluator#update}
  */
  readonly update?: string;
}

export function vertexAiOnlineEvaluatorTimeoutsToTerraform(struct?: VertexAiOnlineEvaluatorTimeouts | cdktn.IResolvable): any {
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


export function vertexAiOnlineEvaluatorTimeoutsToHclTerraform(struct?: VertexAiOnlineEvaluatorTimeouts | cdktn.IResolvable): any {
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

export class VertexAiOnlineEvaluatorTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VertexAiOnlineEvaluatorTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: VertexAiOnlineEvaluatorTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator google_vertex_ai_online_evaluator}
*/
export class VertexAiOnlineEvaluator extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_vertex_ai_online_evaluator";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a VertexAiOnlineEvaluator resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VertexAiOnlineEvaluator to import
  * @param importFromId The id of the existing VertexAiOnlineEvaluator that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VertexAiOnlineEvaluator to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_vertex_ai_online_evaluator", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator google_vertex_ai_online_evaluator} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VertexAiOnlineEvaluatorConfig
  */
  public constructor(scope: Construct, id: string, config: VertexAiOnlineEvaluatorConfig) {
    super(scope, id, {
      terraformResourceType: 'google_vertex_ai_online_evaluator',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '8.7.0',
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
    this._agentResource = config.agentResource;
    this._deletionPolicy = config.deletionPolicy;
    this._displayName = config.displayName;
    this._id = config.id;
    this._project = config.project;
    this._region = config.region;
    this._cloudObservability.internalValue = config.cloudObservability;
    this._config.internalValue = config.config;
    this._metricSources.internalValue = config.metricSources;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_resource - computed: false, optional: false, required: true
  private _agentResource?: string; 
  public get agentResource() {
    return this.getStringAttribute('agent_resource');
  }
  public set agentResource(value: string) {
    this._agentResource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentResourceInput() {
    return this._agentResource;
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

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_details - computed: true, optional: false, required: false
  private _stateDetails = new VertexAiOnlineEvaluatorStateDetailsList(this, "state_details", false);
  public get stateDetails() {
    return this._stateDetails;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // cloud_observability - computed: false, optional: false, required: true
  private _cloudObservability = new VertexAiOnlineEvaluatorCloudObservabilityOutputReference(this, "cloud_observability");
  public get cloudObservability() {
    return this._cloudObservability;
  }
  public putCloudObservability(value: VertexAiOnlineEvaluatorCloudObservability) {
    this._cloudObservability.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudObservabilityInput() {
    return this._cloudObservability.internalValue;
  }

  // config - computed: false, optional: false, required: true
  private _config = new VertexAiOnlineEvaluatorConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: VertexAiOnlineEvaluatorConfigA) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // metric_sources - computed: false, optional: false, required: true
  private _metricSources = new VertexAiOnlineEvaluatorMetricSourcesList(this, "metric_sources", false);
  public get metricSources() {
    return this._metricSources;
  }
  public putMetricSources(value: VertexAiOnlineEvaluatorMetricSources[] | cdktn.IResolvable) {
    this._metricSources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricSourcesInput() {
    return this._metricSources.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VertexAiOnlineEvaluatorTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VertexAiOnlineEvaluatorTimeouts) {
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
      agent_resource: cdktn.stringToTerraform(this._agentResource),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      display_name: cdktn.stringToTerraform(this._displayName),
      id: cdktn.stringToTerraform(this._id),
      project: cdktn.stringToTerraform(this._project),
      region: cdktn.stringToTerraform(this._region),
      cloud_observability: vertexAiOnlineEvaluatorCloudObservabilityToTerraform(this._cloudObservability.internalValue),
      config: vertexAiOnlineEvaluatorConfigAToTerraform(this._config.internalValue),
      metric_sources: cdktn.listMapper(vertexAiOnlineEvaluatorMetricSourcesToTerraform, true)(this._metricSources.internalValue),
      timeouts: vertexAiOnlineEvaluatorTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_resource: {
        value: cdktn.stringToHclTerraform(this._agentResource),
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
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_observability: {
        value: vertexAiOnlineEvaluatorCloudObservabilityToHclTerraform(this._cloudObservability.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VertexAiOnlineEvaluatorCloudObservabilityList",
      },
      config: {
        value: vertexAiOnlineEvaluatorConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VertexAiOnlineEvaluatorConfigAList",
      },
      metric_sources: {
        value: cdktn.listMapperHcl(vertexAiOnlineEvaluatorMetricSourcesToHclTerraform, true)(this._metricSources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VertexAiOnlineEvaluatorMetricSourcesList",
      },
      timeouts: {
        value: vertexAiOnlineEvaluatorTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VertexAiOnlineEvaluatorTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
