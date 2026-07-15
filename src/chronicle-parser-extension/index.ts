/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_parser_extension
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ChronicleParserExtensionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Parser config could be a cbn snippet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_parser_extension#cbn_snippet ChronicleParserExtension#cbn_snippet}
  */
  readonly cbnSnippet?: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_parser_extension#deletion_policy ChronicleParserExtension#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_parser_extension#id ChronicleParserExtension#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_parser_extension#instance ChronicleParserExtension#instance}
  */
  readonly instance: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_parser_extension#location ChronicleParserExtension#location}
  */
  readonly location: string;
  /**
  * Raw log used to assist the user in creation of augmentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_parser_extension#log ChronicleParserExtension#log}
  */
  readonly log?: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_parser_extension#log_type ChronicleParserExtension#log_type}
  */
  readonly logType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_parser_extension#project ChronicleParserExtension#project}
  */
  readonly project?: string;
  /**
  * Flag to bypass parser extension validation.
  * If enabled, the parser extension won't be rejected during the validation
  * phase and validation will be skipped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_parser_extension#validation_skipped ChronicleParserExtension#validation_skipped}
  */
  readonly validationSkipped?: boolean | cdktn.IResolvable;
  /**
  * dynamic_parsing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_parser_extension#dynamic_parsing ChronicleParserExtension#dynamic_parsing}
  */
  readonly dynamicParsing?: ChronicleParserExtensionDynamicParsing;
  /**
  * field_extractors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_parser_extension#field_extractors ChronicleParserExtension#field_extractors}
  */
  readonly fieldExtractors?: ChronicleParserExtensionFieldExtractors;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_parser_extension#timeouts ChronicleParserExtension#timeouts}
  */
  readonly timeouts?: ChronicleParserExtensionTimeouts;
}
export interface ChronicleParserExtensionDynamicParsingOptedFields {
  /**
  * Path of the log field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_parser_extension#path ChronicleParserExtension#path}
  */
  readonly path?: string;
  /**
  * Sample value of the log field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_parser_extension#sample_value ChronicleParserExtension#sample_value}
  */
  readonly sampleValue?: string;
}

export function chronicleParserExtensionDynamicParsingOptedFieldsToTerraform(struct?: ChronicleParserExtensionDynamicParsingOptedFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    path: cdktn.stringToTerraform(struct!.path),
    sample_value: cdktn.stringToTerraform(struct!.sampleValue),
  }
}


export function chronicleParserExtensionDynamicParsingOptedFieldsToHclTerraform(struct?: ChronicleParserExtensionDynamicParsingOptedFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sample_value: {
      value: cdktn.stringToHclTerraform(struct!.sampleValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ChronicleParserExtensionDynamicParsingOptedFields | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._sampleValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleValue = this._sampleValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleParserExtensionDynamicParsingOptedFields | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._sampleValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._sampleValue = value.sampleValue;
    }
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

  // sample_value - computed: false, optional: true, required: false
  private _sampleValue?: string; 
  public get sampleValue() {
    return this.getStringAttribute('sample_value');
  }
  public set sampleValue(value: string) {
    this._sampleValue = value;
  }
  public resetSampleValue() {
    this._sampleValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleValueInput() {
    return this._sampleValue;
  }
}

export class ChronicleParserExtensionDynamicParsingOptedFieldsList extends cdktn.ComplexList {
  public internalValue? : ChronicleParserExtensionDynamicParsingOptedFields[] | cdktn.IResolvable

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
  public get(index: number): ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference {
    return new ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChronicleParserExtensionDynamicParsing {
  /**
  * opted_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_parser_extension#opted_fields ChronicleParserExtension#opted_fields}
  */
  readonly optedFields?: ChronicleParserExtensionDynamicParsingOptedFields[] | cdktn.IResolvable;
}

export function chronicleParserExtensionDynamicParsingToTerraform(struct?: ChronicleParserExtensionDynamicParsingOutputReference | ChronicleParserExtensionDynamicParsing): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    opted_fields: cdktn.listMapper(chronicleParserExtensionDynamicParsingOptedFieldsToTerraform, true)(struct!.optedFields),
  }
}


export function chronicleParserExtensionDynamicParsingToHclTerraform(struct?: ChronicleParserExtensionDynamicParsingOutputReference | ChronicleParserExtensionDynamicParsing): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    opted_fields: {
      value: cdktn.listMapperHcl(chronicleParserExtensionDynamicParsingOptedFieldsToHclTerraform, true)(struct!.optedFields),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleParserExtensionDynamicParsingOptedFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleParserExtensionDynamicParsingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleParserExtensionDynamicParsing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optedFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.optedFields = this._optedFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleParserExtensionDynamicParsing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._optedFields.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._optedFields.internalValue = value.optedFields;
    }
  }

  // opted_fields - computed: false, optional: true, required: false
  private _optedFields = new ChronicleParserExtensionDynamicParsingOptedFieldsList(this, "opted_fields", false);
  public get optedFields() {
    return this._optedFields;
  }
  public putOptedFields(value: ChronicleParserExtensionDynamicParsingOptedFields[] | cdktn.IResolvable) {
    this._optedFields.internalValue = value;
  }
  public resetOptedFields() {
    this._optedFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optedFieldsInput() {
    return this._optedFields.internalValue;
  }
}
export interface ChronicleParserExtensionFieldExtractorsExtractors {
  /**
  * Path in generated event which is to be populated. This is required if the
  * FieldExtractor is used to specify the parser extension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_parser_extension#destination_path ChronicleParserExtension#destination_path}
  */
  readonly destinationPath?: string;
  /**
  * Field path could be a json path, xml path or csv column name
  * depending on log format. It refers to a section or substring in raw log.
  * This is required if the FieldExtractor is used to specify the parser
  * extension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_parser_extension#field_path ChronicleParserExtension#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Operator used for precondition.
  * Possible values:
  * EQUALS
  * NOT_EQUALS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_parser_extension#precondition_op ChronicleParserExtension#precondition_op}
  */
  readonly preconditionOp?: string;
  /**
  * Precondition path could be a json path, xml path or csv column name
  * depending on log format. It refers to a section or substring in raw log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_parser_extension#precondition_path ChronicleParserExtension#precondition_path}
  */
  readonly preconditionPath?: string;
  /**
  * Precondition value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_parser_extension#precondition_value ChronicleParserExtension#precondition_value}
  */
  readonly preconditionValue?: string;
  /**
  * Value to be mapped to the destination path directly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_parser_extension#value ChronicleParserExtension#value}
  */
  readonly value?: string;
}

export function chronicleParserExtensionFieldExtractorsExtractorsToTerraform(struct?: ChronicleParserExtensionFieldExtractorsExtractors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_path: cdktn.stringToTerraform(struct!.destinationPath),
    field_path: cdktn.stringToTerraform(struct!.fieldPath),
    precondition_op: cdktn.stringToTerraform(struct!.preconditionOp),
    precondition_path: cdktn.stringToTerraform(struct!.preconditionPath),
    precondition_value: cdktn.stringToTerraform(struct!.preconditionValue),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function chronicleParserExtensionFieldExtractorsExtractorsToHclTerraform(struct?: ChronicleParserExtensionFieldExtractorsExtractors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_path: {
      value: cdktn.stringToHclTerraform(struct!.destinationPath),
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
    precondition_op: {
      value: cdktn.stringToHclTerraform(struct!.preconditionOp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    precondition_path: {
      value: cdktn.stringToHclTerraform(struct!.preconditionPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    precondition_value: {
      value: cdktn.stringToHclTerraform(struct!.preconditionValue),
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

export class ChronicleParserExtensionFieldExtractorsExtractorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ChronicleParserExtensionFieldExtractorsExtractors | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPath = this._destinationPath;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    if (this._preconditionOp !== undefined) {
      hasAnyValues = true;
      internalValueResult.preconditionOp = this._preconditionOp;
    }
    if (this._preconditionPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.preconditionPath = this._preconditionPath;
    }
    if (this._preconditionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preconditionValue = this._preconditionValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleParserExtensionFieldExtractorsExtractors | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationPath = undefined;
      this._fieldPath = undefined;
      this._preconditionOp = undefined;
      this._preconditionPath = undefined;
      this._preconditionValue = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationPath = value.destinationPath;
      this._fieldPath = value.fieldPath;
      this._preconditionOp = value.preconditionOp;
      this._preconditionPath = value.preconditionPath;
      this._preconditionValue = value.preconditionValue;
      this._value = value.value;
    }
  }

  // destination_path - computed: false, optional: true, required: false
  private _destinationPath?: string; 
  public get destinationPath() {
    return this.getStringAttribute('destination_path');
  }
  public set destinationPath(value: string) {
    this._destinationPath = value;
  }
  public resetDestinationPath() {
    this._destinationPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPathInput() {
    return this._destinationPath;
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

  // precondition_op - computed: false, optional: true, required: false
  private _preconditionOp?: string; 
  public get preconditionOp() {
    return this.getStringAttribute('precondition_op');
  }
  public set preconditionOp(value: string) {
    this._preconditionOp = value;
  }
  public resetPreconditionOp() {
    this._preconditionOp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preconditionOpInput() {
    return this._preconditionOp;
  }

  // precondition_path - computed: false, optional: true, required: false
  private _preconditionPath?: string; 
  public get preconditionPath() {
    return this.getStringAttribute('precondition_path');
  }
  public set preconditionPath(value: string) {
    this._preconditionPath = value;
  }
  public resetPreconditionPath() {
    this._preconditionPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preconditionPathInput() {
    return this._preconditionPath;
  }

  // precondition_value - computed: false, optional: true, required: false
  private _preconditionValue?: string; 
  public get preconditionValue() {
    return this.getStringAttribute('precondition_value');
  }
  public set preconditionValue(value: string) {
    this._preconditionValue = value;
  }
  public resetPreconditionValue() {
    this._preconditionValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preconditionValueInput() {
    return this._preconditionValue;
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

export class ChronicleParserExtensionFieldExtractorsExtractorsList extends cdktn.ComplexList {
  public internalValue? : ChronicleParserExtensionFieldExtractorsExtractors[] | cdktn.IResolvable

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
  public get(index: number): ChronicleParserExtensionFieldExtractorsExtractorsOutputReference {
    return new ChronicleParserExtensionFieldExtractorsExtractorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChronicleParserExtensionFieldExtractorsPreprocessConfig {
  /**
  * GROK Regex to extract the structured part of the log.
  * syntax documentation:
  * www.elastic.co/guide/en/logstash/current/plugins-filters-grok.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_parser_extension#grok_regex ChronicleParserExtension#grok_regex}
  */
  readonly grokRegex?: string;
  /**
  * Target field name for the structured part of the log.
  * This should match a SEMANTIC identifier from the grok expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_parser_extension#target ChronicleParserExtension#target}
  */
  readonly target?: string;
}

export function chronicleParserExtensionFieldExtractorsPreprocessConfigToTerraform(struct?: ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference | ChronicleParserExtensionFieldExtractorsPreprocessConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    grok_regex: cdktn.stringToTerraform(struct!.grokRegex),
    target: cdktn.stringToTerraform(struct!.target),
  }
}


export function chronicleParserExtensionFieldExtractorsPreprocessConfigToHclTerraform(struct?: ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference | ChronicleParserExtensionFieldExtractorsPreprocessConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    grok_regex: {
      value: cdktn.stringToHclTerraform(struct!.grokRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktn.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleParserExtensionFieldExtractorsPreprocessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._grokRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.grokRegex = this._grokRegex;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleParserExtensionFieldExtractorsPreprocessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._grokRegex = undefined;
      this._target = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._grokRegex = value.grokRegex;
      this._target = value.target;
    }
  }

  // grok_regex - computed: false, optional: true, required: false
  private _grokRegex?: string; 
  public get grokRegex() {
    return this.getStringAttribute('grok_regex');
  }
  public set grokRegex(value: string) {
    this._grokRegex = value;
  }
  public resetGrokRegex() {
    this._grokRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grokRegexInput() {
    return this._grokRegex;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}
export interface ChronicleParserExtensionFieldExtractors {
  /**
  * Whether to append repeated fields or not.
  * When false, repeated fields will be replaced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_parser_extension#append_repeated_fields ChronicleParserExtension#append_repeated_fields}
  */
  readonly appendRepeatedFields?: boolean | cdktn.IResolvable;
  /**
  * Possible values:
  * JSON
  * CSV
  * XML
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_parser_extension#log_format ChronicleParserExtension#log_format}
  */
  readonly logFormat?: string;
  /**
  * extractors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_parser_extension#extractors ChronicleParserExtension#extractors}
  */
  readonly extractors?: ChronicleParserExtensionFieldExtractorsExtractors[] | cdktn.IResolvable;
  /**
  * preprocess_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_parser_extension#preprocess_config ChronicleParserExtension#preprocess_config}
  */
  readonly preprocessConfig?: ChronicleParserExtensionFieldExtractorsPreprocessConfig;
}

export function chronicleParserExtensionFieldExtractorsToTerraform(struct?: ChronicleParserExtensionFieldExtractorsOutputReference | ChronicleParserExtensionFieldExtractors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    append_repeated_fields: cdktn.booleanToTerraform(struct!.appendRepeatedFields),
    log_format: cdktn.stringToTerraform(struct!.logFormat),
    extractors: cdktn.listMapper(chronicleParserExtensionFieldExtractorsExtractorsToTerraform, true)(struct!.extractors),
    preprocess_config: chronicleParserExtensionFieldExtractorsPreprocessConfigToTerraform(struct!.preprocessConfig),
  }
}


export function chronicleParserExtensionFieldExtractorsToHclTerraform(struct?: ChronicleParserExtensionFieldExtractorsOutputReference | ChronicleParserExtensionFieldExtractors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    append_repeated_fields: {
      value: cdktn.booleanToHclTerraform(struct!.appendRepeatedFields),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_format: {
      value: cdktn.stringToHclTerraform(struct!.logFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extractors: {
      value: cdktn.listMapperHcl(chronicleParserExtensionFieldExtractorsExtractorsToHclTerraform, true)(struct!.extractors),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleParserExtensionFieldExtractorsExtractorsList",
    },
    preprocess_config: {
      value: chronicleParserExtensionFieldExtractorsPreprocessConfigToHclTerraform(struct!.preprocessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleParserExtensionFieldExtractorsPreprocessConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleParserExtensionFieldExtractorsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleParserExtensionFieldExtractors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appendRepeatedFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.appendRepeatedFields = this._appendRepeatedFields;
    }
    if (this._logFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFormat = this._logFormat;
    }
    if (this._extractors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extractors = this._extractors?.internalValue;
    }
    if (this._preprocessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preprocessConfig = this._preprocessConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleParserExtensionFieldExtractors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appendRepeatedFields = undefined;
      this._logFormat = undefined;
      this._extractors.internalValue = undefined;
      this._preprocessConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appendRepeatedFields = value.appendRepeatedFields;
      this._logFormat = value.logFormat;
      this._extractors.internalValue = value.extractors;
      this._preprocessConfig.internalValue = value.preprocessConfig;
    }
  }

  // append_repeated_fields - computed: false, optional: true, required: false
  private _appendRepeatedFields?: boolean | cdktn.IResolvable; 
  public get appendRepeatedFields() {
    return this.getBooleanAttribute('append_repeated_fields');
  }
  public set appendRepeatedFields(value: boolean | cdktn.IResolvable) {
    this._appendRepeatedFields = value;
  }
  public resetAppendRepeatedFields() {
    this._appendRepeatedFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendRepeatedFieldsInput() {
    return this._appendRepeatedFields;
  }

  // log_format - computed: false, optional: true, required: false
  private _logFormat?: string; 
  public get logFormat() {
    return this.getStringAttribute('log_format');
  }
  public set logFormat(value: string) {
    this._logFormat = value;
  }
  public resetLogFormat() {
    this._logFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFormatInput() {
    return this._logFormat;
  }

  // transformed_cbn_snippet - computed: true, optional: false, required: false
  public get transformedCbnSnippet() {
    return this.getStringAttribute('transformed_cbn_snippet');
  }

  // extractors - computed: false, optional: true, required: false
  private _extractors = new ChronicleParserExtensionFieldExtractorsExtractorsList(this, "extractors", false);
  public get extractors() {
    return this._extractors;
  }
  public putExtractors(value: ChronicleParserExtensionFieldExtractorsExtractors[] | cdktn.IResolvable) {
    this._extractors.internalValue = value;
  }
  public resetExtractors() {
    this._extractors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractorsInput() {
    return this._extractors.internalValue;
  }

  // preprocess_config - computed: false, optional: true, required: false
  private _preprocessConfig = new ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference(this, "preprocess_config");
  public get preprocessConfig() {
    return this._preprocessConfig;
  }
  public putPreprocessConfig(value: ChronicleParserExtensionFieldExtractorsPreprocessConfig) {
    this._preprocessConfig.internalValue = value;
  }
  public resetPreprocessConfig() {
    this._preprocessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preprocessConfigInput() {
    return this._preprocessConfig.internalValue;
  }
}
export interface ChronicleParserExtensionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_parser_extension#create ChronicleParserExtension#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_parser_extension#delete ChronicleParserExtension#delete}
  */
  readonly delete?: string;
}

export function chronicleParserExtensionTimeoutsToTerraform(struct?: ChronicleParserExtensionTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
  }
}


export function chronicleParserExtensionTimeoutsToHclTerraform(struct?: ChronicleParserExtensionTimeouts | cdktn.IResolvable): any {
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

export class ChronicleParserExtensionTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ChronicleParserExtensionTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ChronicleParserExtensionTimeouts | cdktn.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_parser_extension google_chronicle_parser_extension}
*/
export class ChronicleParserExtension extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_chronicle_parser_extension";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ChronicleParserExtension resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ChronicleParserExtension to import
  * @param importFromId The id of the existing ChronicleParserExtension that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_parser_extension#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ChronicleParserExtension to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_chronicle_parser_extension", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_parser_extension google_chronicle_parser_extension} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChronicleParserExtensionConfig
  */
  public constructor(scope: Construct, id: string, config: ChronicleParserExtensionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_chronicle_parser_extension',
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
    this._cbnSnippet = config.cbnSnippet;
    this._deletionPolicy = config.deletionPolicy;
    this._id = config.id;
    this._instance = config.instance;
    this._location = config.location;
    this._log = config.log;
    this._logType = config.logType;
    this._project = config.project;
    this._validationSkipped = config.validationSkipped;
    this._dynamicParsing.internalValue = config.dynamicParsing;
    this._fieldExtractors.internalValue = config.fieldExtractors;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cbn_snippet - computed: false, optional: true, required: false
  private _cbnSnippet?: string; 
  public get cbnSnippet() {
    return this.getStringAttribute('cbn_snippet');
  }
  public set cbnSnippet(value: string) {
    this._cbnSnippet = value;
  }
  public resetCbnSnippet() {
    this._cbnSnippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbnSnippetInput() {
    return this._cbnSnippet;
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

  // extension_validation_report - computed: true, optional: false, required: false
  public get extensionValidationReport() {
    return this.getStringAttribute('extension_validation_report');
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

  // last_live_time - computed: true, optional: false, required: false
  public get lastLiveTime() {
    return this.getStringAttribute('last_live_time');
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

  // log - computed: false, optional: true, required: false
  private _log?: string; 
  public get log() {
    return this.getStringAttribute('log');
  }
  public set log(value: string) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // log_type - computed: false, optional: false, required: true
  private _logType?: string; 
  public get logType() {
    return this.getStringAttribute('log_type');
  }
  public set logType(value: string) {
    this._logType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeInput() {
    return this._logType;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parserextension - computed: true, optional: false, required: false
  public get parserextension() {
    return this.getStringAttribute('parserextension');
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_last_changed_time - computed: true, optional: false, required: false
  public get stateLastChangedTime() {
    return this.getStringAttribute('state_last_changed_time');
  }

  // validation_report - computed: true, optional: false, required: false
  public get validationReport() {
    return this.getStringAttribute('validation_report');
  }

  // validation_skipped - computed: false, optional: true, required: false
  private _validationSkipped?: boolean | cdktn.IResolvable; 
  public get validationSkipped() {
    return this.getBooleanAttribute('validation_skipped');
  }
  public set validationSkipped(value: boolean | cdktn.IResolvable) {
    this._validationSkipped = value;
  }
  public resetValidationSkipped() {
    this._validationSkipped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationSkippedInput() {
    return this._validationSkipped;
  }

  // dynamic_parsing - computed: false, optional: true, required: false
  private _dynamicParsing = new ChronicleParserExtensionDynamicParsingOutputReference(this, "dynamic_parsing");
  public get dynamicParsing() {
    return this._dynamicParsing;
  }
  public putDynamicParsing(value: ChronicleParserExtensionDynamicParsing) {
    this._dynamicParsing.internalValue = value;
  }
  public resetDynamicParsing() {
    this._dynamicParsing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicParsingInput() {
    return this._dynamicParsing.internalValue;
  }

  // field_extractors - computed: false, optional: true, required: false
  private _fieldExtractors = new ChronicleParserExtensionFieldExtractorsOutputReference(this, "field_extractors");
  public get fieldExtractors() {
    return this._fieldExtractors;
  }
  public putFieldExtractors(value: ChronicleParserExtensionFieldExtractors) {
    this._fieldExtractors.internalValue = value;
  }
  public resetFieldExtractors() {
    this._fieldExtractors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldExtractorsInput() {
    return this._fieldExtractors.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ChronicleParserExtensionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ChronicleParserExtensionTimeouts) {
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
      cbn_snippet: cdktn.stringToTerraform(this._cbnSnippet),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      id: cdktn.stringToTerraform(this._id),
      instance: cdktn.stringToTerraform(this._instance),
      location: cdktn.stringToTerraform(this._location),
      log: cdktn.stringToTerraform(this._log),
      log_type: cdktn.stringToTerraform(this._logType),
      project: cdktn.stringToTerraform(this._project),
      validation_skipped: cdktn.booleanToTerraform(this._validationSkipped),
      dynamic_parsing: chronicleParserExtensionDynamicParsingToTerraform(this._dynamicParsing.internalValue),
      field_extractors: chronicleParserExtensionFieldExtractorsToTerraform(this._fieldExtractors.internalValue),
      timeouts: chronicleParserExtensionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cbn_snippet: {
        value: cdktn.stringToHclTerraform(this._cbnSnippet),
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
      log: {
        value: cdktn.stringToHclTerraform(this._log),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_type: {
        value: cdktn.stringToHclTerraform(this._logType),
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
      validation_skipped: {
        value: cdktn.booleanToHclTerraform(this._validationSkipped),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dynamic_parsing: {
        value: chronicleParserExtensionDynamicParsingToHclTerraform(this._dynamicParsing.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ChronicleParserExtensionDynamicParsingList",
      },
      field_extractors: {
        value: chronicleParserExtensionFieldExtractorsToHclTerraform(this._fieldExtractors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ChronicleParserExtensionFieldExtractorsList",
      },
      timeouts: {
        value: chronicleParserExtensionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ChronicleParserExtensionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
