/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BiglakeHiveTableConfig extends cdktn.TerraformMetaArguments {
  /**
  * The Hive catalog where the table is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#catalog BiglakeHiveTable#catalog}
  */
  readonly catalog: string;
  /**
  * The Hive database where the table is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#database BiglakeHiveTable#database}
  */
  readonly database: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#deletion_policy BiglakeHiveTable#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Description of the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#description BiglakeHiveTable#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#id BiglakeHiveTable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#name BiglakeHiveTable#name}
  */
  readonly name: string;
  /**
  * Additional parameters associated with the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#parameters BiglakeHiveTable#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#project BiglakeHiveTable#project}
  */
  readonly project?: string;
  /**
  * Expanded view text for Hive views. Empty for non-view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#view_expanded_text BiglakeHiveTable#view_expanded_text}
  */
  readonly viewExpandedText?: string;
  /**
  * Original view text for Hive views. Empty for non-view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#view_original_text BiglakeHiveTable#view_original_text}
  */
  readonly viewOriginalText?: string;
  /**
  * partition_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#partition_keys BiglakeHiveTable#partition_keys}
  */
  readonly partitionKeys?: BiglakeHiveTablePartitionKeys[] | cdktn.IResolvable;
  /**
  * storage_descriptor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#storage_descriptor BiglakeHiveTable#storage_descriptor}
  */
  readonly storageDescriptor: BiglakeHiveTableStorageDescriptor;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#timeouts BiglakeHiveTable#timeouts}
  */
  readonly timeouts?: BiglakeHiveTableTimeouts;
}
export interface BiglakeHiveTablePartitionKeys {
  /**
  * Comment of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#comment BiglakeHiveTable#comment}
  */
  readonly comment?: string;
  /**
  * Name of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#name BiglakeHiveTable#name}
  */
  readonly name: string;
  /**
  * Type of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#type BiglakeHiveTable#type}
  */
  readonly type: string;
}

export function biglakeHiveTablePartitionKeysToTerraform(struct?: BiglakeHiveTablePartitionKeys | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comment: cdktn.stringToTerraform(struct!.comment),
    name: cdktn.stringToTerraform(struct!.name),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function biglakeHiveTablePartitionKeysToHclTerraform(struct?: BiglakeHiveTablePartitionKeys | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comment: {
      value: cdktn.stringToHclTerraform(struct!.comment),
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

export class BiglakeHiveTablePartitionKeysOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BiglakeHiveTablePartitionKeys | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BiglakeHiveTablePartitionKeys | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class BiglakeHiveTablePartitionKeysList extends cdktn.ComplexList {
  public internalValue? : BiglakeHiveTablePartitionKeys[] | cdktn.IResolvable

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
  public get(index: number): BiglakeHiveTablePartitionKeysOutputReference {
    return new BiglakeHiveTablePartitionKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BiglakeHiveTableStorageDescriptorColumns {
  /**
  * Comment of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#comment BiglakeHiveTable#comment}
  */
  readonly comment?: string;
  /**
  * Name of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#name BiglakeHiveTable#name}
  */
  readonly name: string;
  /**
  * Type of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#type BiglakeHiveTable#type}
  */
  readonly type: string;
}

export function biglakeHiveTableStorageDescriptorColumnsToTerraform(struct?: BiglakeHiveTableStorageDescriptorColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comment: cdktn.stringToTerraform(struct!.comment),
    name: cdktn.stringToTerraform(struct!.name),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function biglakeHiveTableStorageDescriptorColumnsToHclTerraform(struct?: BiglakeHiveTableStorageDescriptorColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comment: {
      value: cdktn.stringToHclTerraform(struct!.comment),
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

export class BiglakeHiveTableStorageDescriptorColumnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BiglakeHiveTableStorageDescriptorColumns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BiglakeHiveTableStorageDescriptorColumns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class BiglakeHiveTableStorageDescriptorColumnsList extends cdktn.ComplexList {
  public internalValue? : BiglakeHiveTableStorageDescriptorColumns[] | cdktn.IResolvable

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
  public get(index: number): BiglakeHiveTableStorageDescriptorColumnsOutputReference {
    return new BiglakeHiveTableStorageDescriptorColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BiglakeHiveTableStorageDescriptorSerdeInfo {
  /**
  * Description of the SerDe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#description BiglakeHiveTable#description}
  */
  readonly description?: string;
  /**
  * The fully qualified Java class name of the deserializer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#deserializer_class BiglakeHiveTable#deserializer_class}
  */
  readonly deserializerClass?: string;
  /**
  * Name of the SerDe, table name by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#name BiglakeHiveTable#name}
  */
  readonly name: string;
  /**
  * Parameters of the SerDe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#parameters BiglakeHiveTable#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * The SerDe type. Possible values: ["SERDE_TYPE_UNSPECIFIED", "HIVE", "SCHEMA_REGISTRY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#serde_type BiglakeHiveTable#serde_type}
  */
  readonly serdeType?: string;
  /**
  * The fully qualified Java class name of the serialization library.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#serialization_lib BiglakeHiveTable#serialization_lib}
  */
  readonly serializationLib: string;
  /**
  * The fully qualified Java class name of the serializer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#serializer_class BiglakeHiveTable#serializer_class}
  */
  readonly serializerClass?: string;
}

export function biglakeHiveTableStorageDescriptorSerdeInfoToTerraform(struct?: BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference | BiglakeHiveTableStorageDescriptorSerdeInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    deserializer_class: cdktn.stringToTerraform(struct!.deserializerClass),
    name: cdktn.stringToTerraform(struct!.name),
    parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.parameters),
    serde_type: cdktn.stringToTerraform(struct!.serdeType),
    serialization_lib: cdktn.stringToTerraform(struct!.serializationLib),
    serializer_class: cdktn.stringToTerraform(struct!.serializerClass),
  }
}


export function biglakeHiveTableStorageDescriptorSerdeInfoToHclTerraform(struct?: BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference | BiglakeHiveTableStorageDescriptorSerdeInfo): any {
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
    deserializer_class: {
      value: cdktn.stringToHclTerraform(struct!.deserializerClass),
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
    parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    serde_type: {
      value: cdktn.stringToHclTerraform(struct!.serdeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serialization_lib: {
      value: cdktn.stringToHclTerraform(struct!.serializationLib),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serializer_class: {
      value: cdktn.stringToHclTerraform(struct!.serializerClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BiglakeHiveTableStorageDescriptorSerdeInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._deserializerClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.deserializerClass = this._deserializerClass;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._serdeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serdeType = this._serdeType;
    }
    if (this._serializationLib !== undefined) {
      hasAnyValues = true;
      internalValueResult.serializationLib = this._serializationLib;
    }
    if (this._serializerClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.serializerClass = this._serializerClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BiglakeHiveTableStorageDescriptorSerdeInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._deserializerClass = undefined;
      this._name = undefined;
      this._parameters = undefined;
      this._serdeType = undefined;
      this._serializationLib = undefined;
      this._serializerClass = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._deserializerClass = value.deserializerClass;
      this._name = value.name;
      this._parameters = value.parameters;
      this._serdeType = value.serdeType;
      this._serializationLib = value.serializationLib;
      this._serializerClass = value.serializerClass;
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

  // deserializer_class - computed: false, optional: true, required: false
  private _deserializerClass?: string; 
  public get deserializerClass() {
    return this.getStringAttribute('deserializer_class');
  }
  public set deserializerClass(value: string) {
    this._deserializerClass = value;
  }
  public resetDeserializerClass() {
    this._deserializerClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deserializerClassInput() {
    return this._deserializerClass;
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

  // parameters - computed: true, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // serde_type - computed: false, optional: true, required: false
  private _serdeType?: string; 
  public get serdeType() {
    return this.getStringAttribute('serde_type');
  }
  public set serdeType(value: string) {
    this._serdeType = value;
  }
  public resetSerdeType() {
    this._serdeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serdeTypeInput() {
    return this._serdeType;
  }

  // serialization_lib - computed: false, optional: false, required: true
  private _serializationLib?: string; 
  public get serializationLib() {
    return this.getStringAttribute('serialization_lib');
  }
  public set serializationLib(value: string) {
    this._serializationLib = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serializationLibInput() {
    return this._serializationLib;
  }

  // serializer_class - computed: false, optional: true, required: false
  private _serializerClass?: string; 
  public get serializerClass() {
    return this.getStringAttribute('serializer_class');
  }
  public set serializerClass(value: string) {
    this._serializerClass = value;
  }
  public resetSerializerClass() {
    this._serializerClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serializerClassInput() {
    return this._serializerClass;
  }
}
export interface BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#values BiglakeHiveTable#values}
  */
  readonly values: string[];
}

export function biglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesToTerraform(struct?: BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function biglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesToHclTerraform(struct?: BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._values = value.values;
    }
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList extends cdktn.ComplexList {
  public internalValue? : BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues[] | cdktn.IResolvable

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
  public get(index: number): BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference {
    return new BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#location BiglakeHiveTable#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#values BiglakeHiveTable#values}
  */
  readonly values: string[];
}

export function biglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsToTerraform(struct?: BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    location: cdktn.stringToTerraform(struct!.location),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function biglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsToHclTerraform(struct?: BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    location: {
      value: cdktn.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._location = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._location = value.location;
      this._values = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList extends cdktn.ComplexList {
  public internalValue? : BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations[] | cdktn.IResolvable

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
  public get(index: number): BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference {
    return new BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BiglakeHiveTableStorageDescriptorSkewedInfo {
  /**
  * The column names that are skewed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#skewed_col_names BiglakeHiveTable#skewed_col_names}
  */
  readonly skewedColNames: string[];
  /**
  * skewed_col_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#skewed_col_values BiglakeHiveTable#skewed_col_values}
  */
  readonly skewedColValues: BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues[] | cdktn.IResolvable;
  /**
  * skewed_key_values_locations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#skewed_key_values_locations BiglakeHiveTable#skewed_key_values_locations}
  */
  readonly skewedKeyValuesLocations: BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations[] | cdktn.IResolvable;
}

export function biglakeHiveTableStorageDescriptorSkewedInfoToTerraform(struct?: BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference | BiglakeHiveTableStorageDescriptorSkewedInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    skewed_col_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.skewedColNames),
    skewed_col_values: cdktn.listMapper(biglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesToTerraform, true)(struct!.skewedColValues),
    skewed_key_values_locations: cdktn.listMapper(biglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsToTerraform, true)(struct!.skewedKeyValuesLocations),
  }
}


export function biglakeHiveTableStorageDescriptorSkewedInfoToHclTerraform(struct?: BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference | BiglakeHiveTableStorageDescriptorSkewedInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    skewed_col_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.skewedColNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    skewed_col_values: {
      value: cdktn.listMapperHcl(biglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesToHclTerraform, true)(struct!.skewedColValues),
      isBlock: true,
      type: "list",
      storageClassType: "BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList",
    },
    skewed_key_values_locations: {
      value: cdktn.listMapperHcl(biglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsToHclTerraform, true)(struct!.skewedKeyValuesLocations),
      isBlock: true,
      type: "list",
      storageClassType: "BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BiglakeHiveTableStorageDescriptorSkewedInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._skewedColNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.skewedColNames = this._skewedColNames;
    }
    if (this._skewedColValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.skewedColValues = this._skewedColValues?.internalValue;
    }
    if (this._skewedKeyValuesLocations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.skewedKeyValuesLocations = this._skewedKeyValuesLocations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BiglakeHiveTableStorageDescriptorSkewedInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._skewedColNames = undefined;
      this._skewedColValues.internalValue = undefined;
      this._skewedKeyValuesLocations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._skewedColNames = value.skewedColNames;
      this._skewedColValues.internalValue = value.skewedColValues;
      this._skewedKeyValuesLocations.internalValue = value.skewedKeyValuesLocations;
    }
  }

  // skewed_col_names - computed: false, optional: false, required: true
  private _skewedColNames?: string[]; 
  public get skewedColNames() {
    return this.getListAttribute('skewed_col_names');
  }
  public set skewedColNames(value: string[]) {
    this._skewedColNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skewedColNamesInput() {
    return this._skewedColNames;
  }

  // skewed_col_values - computed: false, optional: false, required: true
  private _skewedColValues = new BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList(this, "skewed_col_values", false);
  public get skewedColValues() {
    return this._skewedColValues;
  }
  public putSkewedColValues(value: BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues[] | cdktn.IResolvable) {
    this._skewedColValues.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skewedColValuesInput() {
    return this._skewedColValues.internalValue;
  }

  // skewed_key_values_locations - computed: false, optional: false, required: true
  private _skewedKeyValuesLocations = new BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList(this, "skewed_key_values_locations", false);
  public get skewedKeyValuesLocations() {
    return this._skewedKeyValuesLocations;
  }
  public putSkewedKeyValuesLocations(value: BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations[] | cdktn.IResolvable) {
    this._skewedKeyValuesLocations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skewedKeyValuesLocationsInput() {
    return this._skewedKeyValuesLocations.internalValue;
  }
}
export interface BiglakeHiveTableStorageDescriptorSortCols {
  /**
  * The column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#col BiglakeHiveTable#col}
  */
  readonly col: string;
  /**
  * Sort order: 1 for Ascending, 0 for Descending.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#order BiglakeHiveTable#order}
  */
  readonly order: number;
}

export function biglakeHiveTableStorageDescriptorSortColsToTerraform(struct?: BiglakeHiveTableStorageDescriptorSortCols | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    col: cdktn.stringToTerraform(struct!.col),
    order: cdktn.numberToTerraform(struct!.order),
  }
}


export function biglakeHiveTableStorageDescriptorSortColsToHclTerraform(struct?: BiglakeHiveTableStorageDescriptorSortCols | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    col: {
      value: cdktn.stringToHclTerraform(struct!.col),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktn.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BiglakeHiveTableStorageDescriptorSortColsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BiglakeHiveTableStorageDescriptorSortCols | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._col !== undefined) {
      hasAnyValues = true;
      internalValueResult.col = this._col;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BiglakeHiveTableStorageDescriptorSortCols | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._col = undefined;
      this._order = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._col = value.col;
      this._order = value.order;
    }
  }

  // col - computed: false, optional: false, required: true
  private _col?: string; 
  public get col() {
    return this.getStringAttribute('col');
  }
  public set col(value: string) {
    this._col = value;
  }
  // Temporarily expose input value. Use with caution.
  public get colInput() {
    return this._col;
  }

  // order - computed: false, optional: false, required: true
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }
}

export class BiglakeHiveTableStorageDescriptorSortColsList extends cdktn.ComplexList {
  public internalValue? : BiglakeHiveTableStorageDescriptorSortCols[] | cdktn.IResolvable

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
  public get(index: number): BiglakeHiveTableStorageDescriptorSortColsOutputReference {
    return new BiglakeHiveTableStorageDescriptorSortColsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BiglakeHiveTableStorageDescriptor {
  /**
  * Reducer grouping columns, clustering columns, and bucketing columns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#bucket_cols BiglakeHiveTable#bucket_cols}
  */
  readonly bucketCols?: string[];
  /**
  * Whether the table data is compressed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#compressed BiglakeHiveTable#compressed}
  */
  readonly compressed?: boolean | cdktn.IResolvable;
  /**
  * The fully qualified Java class name of the input format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#input_format BiglakeHiveTable#input_format}
  */
  readonly inputFormat?: string;
  /**
  * The Cloud Storage URI where the table data is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#location_uri BiglakeHiveTable#location_uri}
  */
  readonly locationUri?: string;
  /**
  * The number of buckets in the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#num_buckets BiglakeHiveTable#num_buckets}
  */
  readonly numBuckets?: number;
  /**
  * The fully qualified Java class name of the output format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#output_format BiglakeHiveTable#output_format}
  */
  readonly outputFormat?: string;
  /**
  * Key-value pairs for the storage descriptor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#parameters BiglakeHiveTable#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Whether the table is stored as sub directories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#stored_as_sub_dirs BiglakeHiveTable#stored_as_sub_dirs}
  */
  readonly storedAsSubDirs?: boolean | cdktn.IResolvable;
  /**
  * columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#columns BiglakeHiveTable#columns}
  */
  readonly columns: BiglakeHiveTableStorageDescriptorColumns[] | cdktn.IResolvable;
  /**
  * serde_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#serde_info BiglakeHiveTable#serde_info}
  */
  readonly serdeInfo?: BiglakeHiveTableStorageDescriptorSerdeInfo;
  /**
  * skewed_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#skewed_info BiglakeHiveTable#skewed_info}
  */
  readonly skewedInfo?: BiglakeHiveTableStorageDescriptorSkewedInfo;
  /**
  * sort_cols block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#sort_cols BiglakeHiveTable#sort_cols}
  */
  readonly sortCols?: BiglakeHiveTableStorageDescriptorSortCols[] | cdktn.IResolvable;
}

export function biglakeHiveTableStorageDescriptorToTerraform(struct?: BiglakeHiveTableStorageDescriptorOutputReference | BiglakeHiveTableStorageDescriptor): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_cols: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.bucketCols),
    compressed: cdktn.booleanToTerraform(struct!.compressed),
    input_format: cdktn.stringToTerraform(struct!.inputFormat),
    location_uri: cdktn.stringToTerraform(struct!.locationUri),
    num_buckets: cdktn.numberToTerraform(struct!.numBuckets),
    output_format: cdktn.stringToTerraform(struct!.outputFormat),
    parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.parameters),
    stored_as_sub_dirs: cdktn.booleanToTerraform(struct!.storedAsSubDirs),
    columns: cdktn.listMapper(biglakeHiveTableStorageDescriptorColumnsToTerraform, true)(struct!.columns),
    serde_info: biglakeHiveTableStorageDescriptorSerdeInfoToTerraform(struct!.serdeInfo),
    skewed_info: biglakeHiveTableStorageDescriptorSkewedInfoToTerraform(struct!.skewedInfo),
    sort_cols: cdktn.listMapper(biglakeHiveTableStorageDescriptorSortColsToTerraform, true)(struct!.sortCols),
  }
}


export function biglakeHiveTableStorageDescriptorToHclTerraform(struct?: BiglakeHiveTableStorageDescriptorOutputReference | BiglakeHiveTableStorageDescriptor): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_cols: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.bucketCols),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    compressed: {
      value: cdktn.booleanToHclTerraform(struct!.compressed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    input_format: {
      value: cdktn.stringToHclTerraform(struct!.inputFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location_uri: {
      value: cdktn.stringToHclTerraform(struct!.locationUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_buckets: {
      value: cdktn.numberToHclTerraform(struct!.numBuckets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    output_format: {
      value: cdktn.stringToHclTerraform(struct!.outputFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    stored_as_sub_dirs: {
      value: cdktn.booleanToHclTerraform(struct!.storedAsSubDirs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    columns: {
      value: cdktn.listMapperHcl(biglakeHiveTableStorageDescriptorColumnsToHclTerraform, true)(struct!.columns),
      isBlock: true,
      type: "list",
      storageClassType: "BiglakeHiveTableStorageDescriptorColumnsList",
    },
    serde_info: {
      value: biglakeHiveTableStorageDescriptorSerdeInfoToHclTerraform(struct!.serdeInfo),
      isBlock: true,
      type: "list",
      storageClassType: "BiglakeHiveTableStorageDescriptorSerdeInfoList",
    },
    skewed_info: {
      value: biglakeHiveTableStorageDescriptorSkewedInfoToHclTerraform(struct!.skewedInfo),
      isBlock: true,
      type: "list",
      storageClassType: "BiglakeHiveTableStorageDescriptorSkewedInfoList",
    },
    sort_cols: {
      value: cdktn.listMapperHcl(biglakeHiveTableStorageDescriptorSortColsToHclTerraform, true)(struct!.sortCols),
      isBlock: true,
      type: "list",
      storageClassType: "BiglakeHiveTableStorageDescriptorSortColsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BiglakeHiveTableStorageDescriptorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BiglakeHiveTableStorageDescriptor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketCols !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketCols = this._bucketCols;
    }
    if (this._compressed !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressed = this._compressed;
    }
    if (this._inputFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputFormat = this._inputFormat;
    }
    if (this._locationUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationUri = this._locationUri;
    }
    if (this._numBuckets !== undefined) {
      hasAnyValues = true;
      internalValueResult.numBuckets = this._numBuckets;
    }
    if (this._outputFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputFormat = this._outputFormat;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._storedAsSubDirs !== undefined) {
      hasAnyValues = true;
      internalValueResult.storedAsSubDirs = this._storedAsSubDirs;
    }
    if (this._columns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns?.internalValue;
    }
    if (this._serdeInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serdeInfo = this._serdeInfo?.internalValue;
    }
    if (this._skewedInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.skewedInfo = this._skewedInfo?.internalValue;
    }
    if (this._sortCols?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortCols = this._sortCols?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BiglakeHiveTableStorageDescriptor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketCols = undefined;
      this._compressed = undefined;
      this._inputFormat = undefined;
      this._locationUri = undefined;
      this._numBuckets = undefined;
      this._outputFormat = undefined;
      this._parameters = undefined;
      this._storedAsSubDirs = undefined;
      this._columns.internalValue = undefined;
      this._serdeInfo.internalValue = undefined;
      this._skewedInfo.internalValue = undefined;
      this._sortCols.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketCols = value.bucketCols;
      this._compressed = value.compressed;
      this._inputFormat = value.inputFormat;
      this._locationUri = value.locationUri;
      this._numBuckets = value.numBuckets;
      this._outputFormat = value.outputFormat;
      this._parameters = value.parameters;
      this._storedAsSubDirs = value.storedAsSubDirs;
      this._columns.internalValue = value.columns;
      this._serdeInfo.internalValue = value.serdeInfo;
      this._skewedInfo.internalValue = value.skewedInfo;
      this._sortCols.internalValue = value.sortCols;
    }
  }

  // bucket_cols - computed: true, optional: true, required: false
  private _bucketCols?: string[]; 
  public get bucketCols() {
    return this.getListAttribute('bucket_cols');
  }
  public set bucketCols(value: string[]) {
    this._bucketCols = value;
  }
  public resetBucketCols() {
    this._bucketCols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketColsInput() {
    return this._bucketCols;
  }

  // compressed - computed: false, optional: true, required: false
  private _compressed?: boolean | cdktn.IResolvable; 
  public get compressed() {
    return this.getBooleanAttribute('compressed');
  }
  public set compressed(value: boolean | cdktn.IResolvable) {
    this._compressed = value;
  }
  public resetCompressed() {
    this._compressed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressedInput() {
    return this._compressed;
  }

  // input_format - computed: false, optional: true, required: false
  private _inputFormat?: string; 
  public get inputFormat() {
    return this.getStringAttribute('input_format');
  }
  public set inputFormat(value: string) {
    this._inputFormat = value;
  }
  public resetInputFormat() {
    this._inputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputFormatInput() {
    return this._inputFormat;
  }

  // location_uri - computed: true, optional: true, required: false
  private _locationUri?: string; 
  public get locationUri() {
    return this.getStringAttribute('location_uri');
  }
  public set locationUri(value: string) {
    this._locationUri = value;
  }
  public resetLocationUri() {
    this._locationUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationUriInput() {
    return this._locationUri;
  }

  // num_buckets - computed: false, optional: true, required: false
  private _numBuckets?: number; 
  public get numBuckets() {
    return this.getNumberAttribute('num_buckets');
  }
  public set numBuckets(value: number) {
    this._numBuckets = value;
  }
  public resetNumBuckets() {
    this._numBuckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numBucketsInput() {
    return this._numBuckets;
  }

  // output_format - computed: false, optional: true, required: false
  private _outputFormat?: string; 
  public get outputFormat() {
    return this.getStringAttribute('output_format');
  }
  public set outputFormat(value: string) {
    this._outputFormat = value;
  }
  public resetOutputFormat() {
    this._outputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFormatInput() {
    return this._outputFormat;
  }

  // parameters - computed: true, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // stored_as_sub_dirs - computed: false, optional: true, required: false
  private _storedAsSubDirs?: boolean | cdktn.IResolvable; 
  public get storedAsSubDirs() {
    return this.getBooleanAttribute('stored_as_sub_dirs');
  }
  public set storedAsSubDirs(value: boolean | cdktn.IResolvable) {
    this._storedAsSubDirs = value;
  }
  public resetStoredAsSubDirs() {
    this._storedAsSubDirs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storedAsSubDirsInput() {
    return this._storedAsSubDirs;
  }

  // columns - computed: false, optional: false, required: true
  private _columns = new BiglakeHiveTableStorageDescriptorColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: BiglakeHiveTableStorageDescriptorColumns[] | cdktn.IResolvable) {
    this._columns.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns.internalValue;
  }

  // serde_info - computed: false, optional: true, required: false
  private _serdeInfo = new BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference(this, "serde_info");
  public get serdeInfo() {
    return this._serdeInfo;
  }
  public putSerdeInfo(value: BiglakeHiveTableStorageDescriptorSerdeInfo) {
    this._serdeInfo.internalValue = value;
  }
  public resetSerdeInfo() {
    this._serdeInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serdeInfoInput() {
    return this._serdeInfo.internalValue;
  }

  // skewed_info - computed: false, optional: true, required: false
  private _skewedInfo = new BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference(this, "skewed_info");
  public get skewedInfo() {
    return this._skewedInfo;
  }
  public putSkewedInfo(value: BiglakeHiveTableStorageDescriptorSkewedInfo) {
    this._skewedInfo.internalValue = value;
  }
  public resetSkewedInfo() {
    this._skewedInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skewedInfoInput() {
    return this._skewedInfo.internalValue;
  }

  // sort_cols - computed: false, optional: true, required: false
  private _sortCols = new BiglakeHiveTableStorageDescriptorSortColsList(this, "sort_cols", false);
  public get sortCols() {
    return this._sortCols;
  }
  public putSortCols(value: BiglakeHiveTableStorageDescriptorSortCols[] | cdktn.IResolvable) {
    this._sortCols.internalValue = value;
  }
  public resetSortCols() {
    this._sortCols.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortColsInput() {
    return this._sortCols.internalValue;
  }
}
export interface BiglakeHiveTableTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#create BiglakeHiveTable#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#delete BiglakeHiveTable#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#update BiglakeHiveTable#update}
  */
  readonly update?: string;
}

export function biglakeHiveTableTimeoutsToTerraform(struct?: BiglakeHiveTableTimeouts | cdktn.IResolvable): any {
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


export function biglakeHiveTableTimeoutsToHclTerraform(struct?: BiglakeHiveTableTimeouts | cdktn.IResolvable): any {
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

export class BiglakeHiveTableTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BiglakeHiveTableTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BiglakeHiveTableTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table google_biglake_hive_table}
*/
export class BiglakeHiveTable extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_biglake_hive_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BiglakeHiveTable resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BiglakeHiveTable to import
  * @param importFromId The id of the existing BiglakeHiveTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BiglakeHiveTable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_biglake_hive_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table google_biglake_hive_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BiglakeHiveTableConfig
  */
  public constructor(scope: Construct, id: string, config: BiglakeHiveTableConfig) {
    super(scope, id, {
      terraformResourceType: 'google_biglake_hive_table',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '8.6.0',
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
    this._catalog = config.catalog;
    this._database = config.database;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._parameters = config.parameters;
    this._project = config.project;
    this._viewExpandedText = config.viewExpandedText;
    this._viewOriginalText = config.viewOriginalText;
    this._partitionKeys.internalValue = config.partitionKeys;
    this._storageDescriptor.internalValue = config.storageDescriptor;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // catalog - computed: false, optional: false, required: true
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
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

  // last_access_time - computed: true, optional: false, required: false
  public get lastAccessTime() {
    return this.getStringAttribute('last_access_time');
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

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
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

  // table_type - computed: true, optional: false, required: false
  public get tableType() {
    return this.getStringAttribute('table_type');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // view_expanded_text - computed: false, optional: true, required: false
  private _viewExpandedText?: string; 
  public get viewExpandedText() {
    return this.getStringAttribute('view_expanded_text');
  }
  public set viewExpandedText(value: string) {
    this._viewExpandedText = value;
  }
  public resetViewExpandedText() {
    this._viewExpandedText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewExpandedTextInput() {
    return this._viewExpandedText;
  }

  // view_original_text - computed: false, optional: true, required: false
  private _viewOriginalText?: string; 
  public get viewOriginalText() {
    return this.getStringAttribute('view_original_text');
  }
  public set viewOriginalText(value: string) {
    this._viewOriginalText = value;
  }
  public resetViewOriginalText() {
    this._viewOriginalText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewOriginalTextInput() {
    return this._viewOriginalText;
  }

  // partition_keys - computed: false, optional: true, required: false
  private _partitionKeys = new BiglakeHiveTablePartitionKeysList(this, "partition_keys", false);
  public get partitionKeys() {
    return this._partitionKeys;
  }
  public putPartitionKeys(value: BiglakeHiveTablePartitionKeys[] | cdktn.IResolvable) {
    this._partitionKeys.internalValue = value;
  }
  public resetPartitionKeys() {
    this._partitionKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionKeysInput() {
    return this._partitionKeys.internalValue;
  }

  // storage_descriptor - computed: false, optional: false, required: true
  private _storageDescriptor = new BiglakeHiveTableStorageDescriptorOutputReference(this, "storage_descriptor");
  public get storageDescriptor() {
    return this._storageDescriptor;
  }
  public putStorageDescriptor(value: BiglakeHiveTableStorageDescriptor) {
    this._storageDescriptor.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDescriptorInput() {
    return this._storageDescriptor.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BiglakeHiveTableTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BiglakeHiveTableTimeouts) {
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
      catalog: cdktn.stringToTerraform(this._catalog),
      database: cdktn.stringToTerraform(this._database),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      parameters: cdktn.hashMapper(cdktn.stringToTerraform)(this._parameters),
      project: cdktn.stringToTerraform(this._project),
      view_expanded_text: cdktn.stringToTerraform(this._viewExpandedText),
      view_original_text: cdktn.stringToTerraform(this._viewOriginalText),
      partition_keys: cdktn.listMapper(biglakeHiveTablePartitionKeysToTerraform, true)(this._partitionKeys.internalValue),
      storage_descriptor: biglakeHiveTableStorageDescriptorToTerraform(this._storageDescriptor.internalValue),
      timeouts: biglakeHiveTableTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      catalog: {
        value: cdktn.stringToHclTerraform(this._catalog),
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
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameters: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._parameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      view_expanded_text: {
        value: cdktn.stringToHclTerraform(this._viewExpandedText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      view_original_text: {
        value: cdktn.stringToHclTerraform(this._viewOriginalText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partition_keys: {
        value: cdktn.listMapperHcl(biglakeHiveTablePartitionKeysToHclTerraform, true)(this._partitionKeys.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BiglakeHiveTablePartitionKeysList",
      },
      storage_descriptor: {
        value: biglakeHiveTableStorageDescriptorToHclTerraform(this._storageDescriptor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BiglakeHiveTableStorageDescriptorList",
      },
      timeouts: {
        value: biglakeHiveTableTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BiglakeHiveTableTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
