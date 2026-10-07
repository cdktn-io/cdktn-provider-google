# `biglakeHiveTable` Submodule <a name="`biglakeHiveTable` Submodule" id="@cdktn/provider-google.biglakeHiveTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BiglakeHiveTable <a name="BiglakeHiveTable" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table google_biglake_hive_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer"></a>

```typescript
import { biglakeHiveTable } from '@cdktn/provider-google'

new biglakeHiveTable.BiglakeHiveTable(scope: Construct, id: string, config: BiglakeHiveTableConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig">BiglakeHiveTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig">BiglakeHiveTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putPartitionKeys">putPartitionKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putStorageDescriptor">putStorageDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetPartitionKeys">resetPartitionKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetViewExpandedText">resetViewExpandedText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetViewOriginalText">resetViewOriginalText</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPartitionKeys` <a name="putPartitionKeys" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putPartitionKeys"></a>

```typescript
public putPartitionKeys(value: IResolvable | BiglakeHiveTablePartitionKeys[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putPartitionKeys.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys">BiglakeHiveTablePartitionKeys</a>[]

---

##### `putStorageDescriptor` <a name="putStorageDescriptor" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putStorageDescriptor"></a>

```typescript
public putStorageDescriptor(value: BiglakeHiveTableStorageDescriptor): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putStorageDescriptor.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor">BiglakeHiveTableStorageDescriptor</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putTimeouts"></a>

```typescript
public putTimeouts(value: BiglakeHiveTableTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts">BiglakeHiveTableTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetId"></a>

```typescript
public resetId(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetPartitionKeys` <a name="resetPartitionKeys" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetPartitionKeys"></a>

```typescript
public resetPartitionKeys(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetViewExpandedText` <a name="resetViewExpandedText" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetViewExpandedText"></a>

```typescript
public resetViewExpandedText(): void
```

##### `resetViewOriginalText` <a name="resetViewOriginalText" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetViewOriginalText"></a>

```typescript
public resetViewOriginalText(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BiglakeHiveTable resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.isConstruct"></a>

```typescript
import { biglakeHiveTable } from '@cdktn/provider-google'

biglakeHiveTable.BiglakeHiveTable.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.isTerraformElement"></a>

```typescript
import { biglakeHiveTable } from '@cdktn/provider-google'

biglakeHiveTable.BiglakeHiveTable.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.isTerraformResource"></a>

```typescript
import { biglakeHiveTable } from '@cdktn/provider-google'

biglakeHiveTable.BiglakeHiveTable.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.generateConfigForImport"></a>

```typescript
import { biglakeHiveTable } from '@cdktn/provider-google'

biglakeHiveTable.BiglakeHiveTable.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BiglakeHiveTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BiglakeHiveTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BiglakeHiveTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BiglakeHiveTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.lastAccessTime">lastAccessTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.partitionKeys">partitionKeys</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList">BiglakeHiveTablePartitionKeysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.storageDescriptor">storageDescriptor</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference">BiglakeHiveTableStorageDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.tableType">tableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference">BiglakeHiveTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.catalogInput">catalogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.partitionKeysInput">partitionKeysInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys">BiglakeHiveTablePartitionKeys</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.storageDescriptorInput">storageDescriptorInput</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor">BiglakeHiveTableStorageDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts">BiglakeHiveTableTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.viewExpandedTextInput">viewExpandedTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.viewOriginalTextInput">viewOriginalTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.catalog">catalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.viewExpandedText">viewExpandedText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.viewOriginalText">viewOriginalText</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `lastAccessTime`<sup>Required</sup> <a name="lastAccessTime" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.lastAccessTime"></a>

```typescript
public readonly lastAccessTime: string;
```

- *Type:* string

---

##### `partitionKeys`<sup>Required</sup> <a name="partitionKeys" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.partitionKeys"></a>

```typescript
public readonly partitionKeys: BiglakeHiveTablePartitionKeysList;
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList">BiglakeHiveTablePartitionKeysList</a>

---

##### `storageDescriptor`<sup>Required</sup> <a name="storageDescriptor" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.storageDescriptor"></a>

```typescript
public readonly storageDescriptor: BiglakeHiveTableStorageDescriptorOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference">BiglakeHiveTableStorageDescriptorOutputReference</a>

---

##### `tableType`<sup>Required</sup> <a name="tableType" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.tableType"></a>

```typescript
public readonly tableType: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.timeouts"></a>

```typescript
public readonly timeouts: BiglakeHiveTableTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference">BiglakeHiveTableTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.catalogInput"></a>

```typescript
public readonly catalogInput: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `partitionKeysInput`<sup>Optional</sup> <a name="partitionKeysInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.partitionKeysInput"></a>

```typescript
public readonly partitionKeysInput: IResolvable | BiglakeHiveTablePartitionKeys[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys">BiglakeHiveTablePartitionKeys</a>[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `storageDescriptorInput`<sup>Optional</sup> <a name="storageDescriptorInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.storageDescriptorInput"></a>

```typescript
public readonly storageDescriptorInput: BiglakeHiveTableStorageDescriptor;
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor">BiglakeHiveTableStorageDescriptor</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BiglakeHiveTableTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts">BiglakeHiveTableTimeouts</a>

---

##### `viewExpandedTextInput`<sup>Optional</sup> <a name="viewExpandedTextInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.viewExpandedTextInput"></a>

```typescript
public readonly viewExpandedTextInput: string;
```

- *Type:* string

---

##### `viewOriginalTextInput`<sup>Optional</sup> <a name="viewOriginalTextInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.viewOriginalTextInput"></a>

```typescript
public readonly viewOriginalTextInput: string;
```

- *Type:* string

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `viewExpandedText`<sup>Required</sup> <a name="viewExpandedText" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.viewExpandedText"></a>

```typescript
public readonly viewExpandedText: string;
```

- *Type:* string

---

##### `viewOriginalText`<sup>Required</sup> <a name="viewOriginalText" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.viewOriginalText"></a>

```typescript
public readonly viewOriginalText: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BiglakeHiveTableConfig <a name="BiglakeHiveTableConfig" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.Initializer"></a>

```typescript
import { biglakeHiveTable } from '@cdktn/provider-google'

const biglakeHiveTableConfig: biglakeHiveTable.BiglakeHiveTableConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.catalog">catalog</a></code> | <code>string</code> | The Hive catalog where the table is located. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.database">database</a></code> | <code>string</code> | The Hive database where the table is located. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.name">name</a></code> | <code>string</code> | The name of the table. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.storageDescriptor">storageDescriptor</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor">BiglakeHiveTableStorageDescriptor</a></code> | storage_descriptor block. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.description">description</a></code> | <code>string</code> | Description of the table. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#id BiglakeHiveTable#id}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Additional parameters associated with the table. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.partitionKeys">partitionKeys</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys">BiglakeHiveTablePartitionKeys</a>[]</code> | partition_keys block. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#project BiglakeHiveTable#project}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts">BiglakeHiveTableTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.viewExpandedText">viewExpandedText</a></code> | <code>string</code> | Expanded view text for Hive views. Empty for non-view. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.viewOriginalText">viewOriginalText</a></code> | <code>string</code> | Original view text for Hive views. Empty for non-view. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Hive catalog where the table is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#catalog BiglakeHiveTable#catalog}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

The Hive database where the table is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#database BiglakeHiveTable#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#name BiglakeHiveTable#name}

---

##### `storageDescriptor`<sup>Required</sup> <a name="storageDescriptor" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.storageDescriptor"></a>

```typescript
public readonly storageDescriptor: BiglakeHiveTableStorageDescriptor;
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor">BiglakeHiveTableStorageDescriptor</a>

storage_descriptor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#storage_descriptor BiglakeHiveTable#storage_descriptor}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#deletion_policy BiglakeHiveTable#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#description BiglakeHiveTable#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#id BiglakeHiveTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Additional parameters associated with the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#parameters BiglakeHiveTable#parameters}

---

##### `partitionKeys`<sup>Optional</sup> <a name="partitionKeys" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.partitionKeys"></a>

```typescript
public readonly partitionKeys: IResolvable | BiglakeHiveTablePartitionKeys[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys">BiglakeHiveTablePartitionKeys</a>[]

partition_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#partition_keys BiglakeHiveTable#partition_keys}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#project BiglakeHiveTable#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BiglakeHiveTableTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts">BiglakeHiveTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#timeouts BiglakeHiveTable#timeouts}

---

##### `viewExpandedText`<sup>Optional</sup> <a name="viewExpandedText" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.viewExpandedText"></a>

```typescript
public readonly viewExpandedText: string;
```

- *Type:* string

Expanded view text for Hive views. Empty for non-view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#view_expanded_text BiglakeHiveTable#view_expanded_text}

---

##### `viewOriginalText`<sup>Optional</sup> <a name="viewOriginalText" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.viewOriginalText"></a>

```typescript
public readonly viewOriginalText: string;
```

- *Type:* string

Original view text for Hive views. Empty for non-view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#view_original_text BiglakeHiveTable#view_original_text}

---

### BiglakeHiveTablePartitionKeys <a name="BiglakeHiveTablePartitionKeys" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys.Initializer"></a>

```typescript
import { biglakeHiveTable } from '@cdktn/provider-google'

const biglakeHiveTablePartitionKeys: biglakeHiveTable.BiglakeHiveTablePartitionKeys = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys.property.name">name</a></code> | <code>string</code> | Name of the field. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys.property.type">type</a></code> | <code>string</code> | Type of the field. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys.property.comment">comment</a></code> | <code>string</code> | Comment of the field. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#name BiglakeHiveTable#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#type BiglakeHiveTable#type}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Comment of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#comment BiglakeHiveTable#comment}

---

### BiglakeHiveTableStorageDescriptor <a name="BiglakeHiveTableStorageDescriptor" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.Initializer"></a>

```typescript
import { biglakeHiveTable } from '@cdktn/provider-google'

const biglakeHiveTableStorageDescriptor: biglakeHiveTable.BiglakeHiveTableStorageDescriptor = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.columns">columns</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns">BiglakeHiveTableStorageDescriptorColumns</a>[]</code> | columns block. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.bucketCols">bucketCols</a></code> | <code>string[]</code> | Reducer grouping columns, clustering columns, and bucketing columns. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.compressed">compressed</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the table data is compressed. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.inputFormat">inputFormat</a></code> | <code>string</code> | The fully qualified Java class name of the input format. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.locationUri">locationUri</a></code> | <code>string</code> | The Cloud Storage URI where the table data is located. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.numBuckets">numBuckets</a></code> | <code>number</code> | The number of buckets in the table. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.outputFormat">outputFormat</a></code> | <code>string</code> | The fully qualified Java class name of the output format. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Key-value pairs for the storage descriptor. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.serdeInfo">serdeInfo</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo">BiglakeHiveTableStorageDescriptorSerdeInfo</a></code> | serde_info block. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.skewedInfo">skewedInfo</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo">BiglakeHiveTableStorageDescriptorSkewedInfo</a></code> | skewed_info block. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.sortCols">sortCols</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols">BiglakeHiveTableStorageDescriptorSortCols</a>[]</code> | sort_cols block. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.storedAsSubDirs">storedAsSubDirs</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the table is stored as sub directories. |

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.columns"></a>

```typescript
public readonly columns: IResolvable | BiglakeHiveTableStorageDescriptorColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns">BiglakeHiveTableStorageDescriptorColumns</a>[]

columns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#columns BiglakeHiveTable#columns}

---

##### `bucketCols`<sup>Optional</sup> <a name="bucketCols" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.bucketCols"></a>

```typescript
public readonly bucketCols: string[];
```

- *Type:* string[]

Reducer grouping columns, clustering columns, and bucketing columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#bucket_cols BiglakeHiveTable#bucket_cols}

---

##### `compressed`<sup>Optional</sup> <a name="compressed" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.compressed"></a>

```typescript
public readonly compressed: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the table data is compressed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#compressed BiglakeHiveTable#compressed}

---

##### `inputFormat`<sup>Optional</sup> <a name="inputFormat" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.inputFormat"></a>

```typescript
public readonly inputFormat: string;
```

- *Type:* string

The fully qualified Java class name of the input format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#input_format BiglakeHiveTable#input_format}

---

##### `locationUri`<sup>Optional</sup> <a name="locationUri" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.locationUri"></a>

```typescript
public readonly locationUri: string;
```

- *Type:* string

The Cloud Storage URI where the table data is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#location_uri BiglakeHiveTable#location_uri}

---

##### `numBuckets`<sup>Optional</sup> <a name="numBuckets" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.numBuckets"></a>

```typescript
public readonly numBuckets: number;
```

- *Type:* number

The number of buckets in the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#num_buckets BiglakeHiveTable#num_buckets}

---

##### `outputFormat`<sup>Optional</sup> <a name="outputFormat" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.outputFormat"></a>

```typescript
public readonly outputFormat: string;
```

- *Type:* string

The fully qualified Java class name of the output format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#output_format BiglakeHiveTable#output_format}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Key-value pairs for the storage descriptor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#parameters BiglakeHiveTable#parameters}

---

##### `serdeInfo`<sup>Optional</sup> <a name="serdeInfo" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.serdeInfo"></a>

```typescript
public readonly serdeInfo: BiglakeHiveTableStorageDescriptorSerdeInfo;
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo">BiglakeHiveTableStorageDescriptorSerdeInfo</a>

serde_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#serde_info BiglakeHiveTable#serde_info}

---

##### `skewedInfo`<sup>Optional</sup> <a name="skewedInfo" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.skewedInfo"></a>

```typescript
public readonly skewedInfo: BiglakeHiveTableStorageDescriptorSkewedInfo;
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo">BiglakeHiveTableStorageDescriptorSkewedInfo</a>

skewed_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#skewed_info BiglakeHiveTable#skewed_info}

---

##### `sortCols`<sup>Optional</sup> <a name="sortCols" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.sortCols"></a>

```typescript
public readonly sortCols: IResolvable | BiglakeHiveTableStorageDescriptorSortCols[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols">BiglakeHiveTableStorageDescriptorSortCols</a>[]

sort_cols block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#sort_cols BiglakeHiveTable#sort_cols}

---

##### `storedAsSubDirs`<sup>Optional</sup> <a name="storedAsSubDirs" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.storedAsSubDirs"></a>

```typescript
public readonly storedAsSubDirs: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the table is stored as sub directories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#stored_as_sub_dirs BiglakeHiveTable#stored_as_sub_dirs}

---

### BiglakeHiveTableStorageDescriptorColumns <a name="BiglakeHiveTableStorageDescriptorColumns" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns.Initializer"></a>

```typescript
import { biglakeHiveTable } from '@cdktn/provider-google'

const biglakeHiveTableStorageDescriptorColumns: biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns.property.name">name</a></code> | <code>string</code> | Name of the field. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns.property.type">type</a></code> | <code>string</code> | Type of the field. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns.property.comment">comment</a></code> | <code>string</code> | Comment of the field. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#name BiglakeHiveTable#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#type BiglakeHiveTable#type}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Comment of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#comment BiglakeHiveTable#comment}

---

### BiglakeHiveTableStorageDescriptorSerdeInfo <a name="BiglakeHiveTableStorageDescriptorSerdeInfo" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.Initializer"></a>

```typescript
import { biglakeHiveTable } from '@cdktn/provider-google'

const biglakeHiveTableStorageDescriptorSerdeInfo: biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.name">name</a></code> | <code>string</code> | Name of the SerDe, table name by default. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.serializationLib">serializationLib</a></code> | <code>string</code> | The fully qualified Java class name of the serialization library. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.description">description</a></code> | <code>string</code> | Description of the SerDe. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.deserializerClass">deserializerClass</a></code> | <code>string</code> | The fully qualified Java class name of the deserializer. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Parameters of the SerDe. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.serdeType">serdeType</a></code> | <code>string</code> | The SerDe type. Possible values: ["SERDE_TYPE_UNSPECIFIED", "HIVE", "SCHEMA_REGISTRY"]. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.serializerClass">serializerClass</a></code> | <code>string</code> | The fully qualified Java class name of the serializer. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the SerDe, table name by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#name BiglakeHiveTable#name}

---

##### `serializationLib`<sup>Required</sup> <a name="serializationLib" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.serializationLib"></a>

```typescript
public readonly serializationLib: string;
```

- *Type:* string

The fully qualified Java class name of the serialization library.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#serialization_lib BiglakeHiveTable#serialization_lib}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the SerDe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#description BiglakeHiveTable#description}

---

##### `deserializerClass`<sup>Optional</sup> <a name="deserializerClass" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.deserializerClass"></a>

```typescript
public readonly deserializerClass: string;
```

- *Type:* string

The fully qualified Java class name of the deserializer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#deserializer_class BiglakeHiveTable#deserializer_class}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Parameters of the SerDe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#parameters BiglakeHiveTable#parameters}

---

##### `serdeType`<sup>Optional</sup> <a name="serdeType" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.serdeType"></a>

```typescript
public readonly serdeType: string;
```

- *Type:* string

The SerDe type. Possible values: ["SERDE_TYPE_UNSPECIFIED", "HIVE", "SCHEMA_REGISTRY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#serde_type BiglakeHiveTable#serde_type}

---

##### `serializerClass`<sup>Optional</sup> <a name="serializerClass" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.serializerClass"></a>

```typescript
public readonly serializerClass: string;
```

- *Type:* string

The fully qualified Java class name of the serializer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#serializer_class BiglakeHiveTable#serializer_class}

---

### BiglakeHiveTableStorageDescriptorSkewedInfo <a name="BiglakeHiveTableStorageDescriptorSkewedInfo" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo.Initializer"></a>

```typescript
import { biglakeHiveTable } from '@cdktn/provider-google'

const biglakeHiveTableStorageDescriptorSkewedInfo: biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo.property.skewedColNames">skewedColNames</a></code> | <code>string[]</code> | The column names that are skewed. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo.property.skewedColValues">skewedColValues</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues</a>[]</code> | skewed_col_values block. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo.property.skewedKeyValuesLocations">skewedKeyValuesLocations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations</a>[]</code> | skewed_key_values_locations block. |

---

##### `skewedColNames`<sup>Required</sup> <a name="skewedColNames" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo.property.skewedColNames"></a>

```typescript
public readonly skewedColNames: string[];
```

- *Type:* string[]

The column names that are skewed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#skewed_col_names BiglakeHiveTable#skewed_col_names}

---

##### `skewedColValues`<sup>Required</sup> <a name="skewedColValues" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo.property.skewedColValues"></a>

```typescript
public readonly skewedColValues: IResolvable | BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues</a>[]

skewed_col_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#skewed_col_values BiglakeHiveTable#skewed_col_values}

---

##### `skewedKeyValuesLocations`<sup>Required</sup> <a name="skewedKeyValuesLocations" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo.property.skewedKeyValuesLocations"></a>

```typescript
public readonly skewedKeyValuesLocations: IResolvable | BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations</a>[]

skewed_key_values_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#skewed_key_values_locations BiglakeHiveTable#skewed_key_values_locations}

---

### BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues <a name="BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues.Initializer"></a>

```typescript
import { biglakeHiveTable } from '@cdktn/provider-google'

const biglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues: biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#values BiglakeHiveTable#values}. |

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#values BiglakeHiveTable#values}.

---

### BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations <a name="BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations.Initializer"></a>

```typescript
import { biglakeHiveTable } from '@cdktn/provider-google'

const biglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations: biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#location BiglakeHiveTable#location}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#values BiglakeHiveTable#values}. |

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#location BiglakeHiveTable#location}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#values BiglakeHiveTable#values}.

---

### BiglakeHiveTableStorageDescriptorSortCols <a name="BiglakeHiveTableStorageDescriptorSortCols" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols.Initializer"></a>

```typescript
import { biglakeHiveTable } from '@cdktn/provider-google'

const biglakeHiveTableStorageDescriptorSortCols: biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols.property.col">col</a></code> | <code>string</code> | The column name. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols.property.order">order</a></code> | <code>number</code> | Sort order: 1 for Ascending, 0 for Descending. |

---

##### `col`<sup>Required</sup> <a name="col" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols.property.col"></a>

```typescript
public readonly col: string;
```

- *Type:* string

The column name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#col BiglakeHiveTable#col}

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols.property.order"></a>

```typescript
public readonly order: number;
```

- *Type:* number

Sort order: 1 for Ascending, 0 for Descending.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#order BiglakeHiveTable#order}

---

### BiglakeHiveTableTimeouts <a name="BiglakeHiveTableTimeouts" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts.Initializer"></a>

```typescript
import { biglakeHiveTable } from '@cdktn/provider-google'

const biglakeHiveTableTimeouts: biglakeHiveTable.BiglakeHiveTableTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#create BiglakeHiveTable#create}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#delete BiglakeHiveTable#delete}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#update BiglakeHiveTable#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#create BiglakeHiveTable#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#delete BiglakeHiveTable#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#update BiglakeHiveTable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BiglakeHiveTablePartitionKeysList <a name="BiglakeHiveTablePartitionKeysList" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.Initializer"></a>

```typescript
import { biglakeHiveTable } from '@cdktn/provider-google'

new biglakeHiveTable.BiglakeHiveTablePartitionKeysList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.get"></a>

```typescript
public get(index: number): BiglakeHiveTablePartitionKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys">BiglakeHiveTablePartitionKeys</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BiglakeHiveTablePartitionKeys[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys">BiglakeHiveTablePartitionKeys</a>[]

---


### BiglakeHiveTablePartitionKeysOutputReference <a name="BiglakeHiveTablePartitionKeysOutputReference" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.Initializer"></a>

```typescript
import { biglakeHiveTable } from '@cdktn/provider-google'

new biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.resetComment">resetComment</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComment` <a name="resetComment" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.resetComment"></a>

```typescript
public resetComment(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys">BiglakeHiveTablePartitionKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BiglakeHiveTablePartitionKeys;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys">BiglakeHiveTablePartitionKeys</a>

---


### BiglakeHiveTableStorageDescriptorColumnsList <a name="BiglakeHiveTableStorageDescriptorColumnsList" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.Initializer"></a>

```typescript
import { biglakeHiveTable } from '@cdktn/provider-google'

new biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.get"></a>

```typescript
public get(index: number): BiglakeHiveTableStorageDescriptorColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns">BiglakeHiveTableStorageDescriptorColumns</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BiglakeHiveTableStorageDescriptorColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns">BiglakeHiveTableStorageDescriptorColumns</a>[]

---


### BiglakeHiveTableStorageDescriptorColumnsOutputReference <a name="BiglakeHiveTableStorageDescriptorColumnsOutputReference" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.Initializer"></a>

```typescript
import { biglakeHiveTable } from '@cdktn/provider-google'

new biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.resetComment">resetComment</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComment` <a name="resetComment" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.resetComment"></a>

```typescript
public resetComment(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns">BiglakeHiveTableStorageDescriptorColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BiglakeHiveTableStorageDescriptorColumns;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns">BiglakeHiveTableStorageDescriptorColumns</a>

---


### BiglakeHiveTableStorageDescriptorOutputReference <a name="BiglakeHiveTableStorageDescriptorOutputReference" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.Initializer"></a>

```typescript
import { biglakeHiveTable } from '@cdktn/provider-google'

new biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putColumns">putColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putSerdeInfo">putSerdeInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putSkewedInfo">putSkewedInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putSortCols">putSortCols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetBucketCols">resetBucketCols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetCompressed">resetCompressed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetInputFormat">resetInputFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetLocationUri">resetLocationUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetNumBuckets">resetNumBuckets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetOutputFormat">resetOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetSerdeInfo">resetSerdeInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetSkewedInfo">resetSkewedInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetSortCols">resetSortCols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetStoredAsSubDirs">resetStoredAsSubDirs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putColumns` <a name="putColumns" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putColumns"></a>

```typescript
public putColumns(value: IResolvable | BiglakeHiveTableStorageDescriptorColumns[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putColumns.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns">BiglakeHiveTableStorageDescriptorColumns</a>[]

---

##### `putSerdeInfo` <a name="putSerdeInfo" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putSerdeInfo"></a>

```typescript
public putSerdeInfo(value: BiglakeHiveTableStorageDescriptorSerdeInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putSerdeInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo">BiglakeHiveTableStorageDescriptorSerdeInfo</a>

---

##### `putSkewedInfo` <a name="putSkewedInfo" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putSkewedInfo"></a>

```typescript
public putSkewedInfo(value: BiglakeHiveTableStorageDescriptorSkewedInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putSkewedInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo">BiglakeHiveTableStorageDescriptorSkewedInfo</a>

---

##### `putSortCols` <a name="putSortCols" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putSortCols"></a>

```typescript
public putSortCols(value: IResolvable | BiglakeHiveTableStorageDescriptorSortCols[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putSortCols.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols">BiglakeHiveTableStorageDescriptorSortCols</a>[]

---

##### `resetBucketCols` <a name="resetBucketCols" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetBucketCols"></a>

```typescript
public resetBucketCols(): void
```

##### `resetCompressed` <a name="resetCompressed" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetCompressed"></a>

```typescript
public resetCompressed(): void
```

##### `resetInputFormat` <a name="resetInputFormat" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetInputFormat"></a>

```typescript
public resetInputFormat(): void
```

##### `resetLocationUri` <a name="resetLocationUri" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetLocationUri"></a>

```typescript
public resetLocationUri(): void
```

##### `resetNumBuckets` <a name="resetNumBuckets" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetNumBuckets"></a>

```typescript
public resetNumBuckets(): void
```

##### `resetOutputFormat` <a name="resetOutputFormat" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetOutputFormat"></a>

```typescript
public resetOutputFormat(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetSerdeInfo` <a name="resetSerdeInfo" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetSerdeInfo"></a>

```typescript
public resetSerdeInfo(): void
```

##### `resetSkewedInfo` <a name="resetSkewedInfo" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetSkewedInfo"></a>

```typescript
public resetSkewedInfo(): void
```

##### `resetSortCols` <a name="resetSortCols" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetSortCols"></a>

```typescript
public resetSortCols(): void
```

##### `resetStoredAsSubDirs` <a name="resetStoredAsSubDirs" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetStoredAsSubDirs"></a>

```typescript
public resetStoredAsSubDirs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.columns">columns</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList">BiglakeHiveTableStorageDescriptorColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.serdeInfo">serdeInfo</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference">BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.skewedInfo">skewedInfo</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference">BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.sortCols">sortCols</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList">BiglakeHiveTableStorageDescriptorSortColsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.bucketColsInput">bucketColsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.columnsInput">columnsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns">BiglakeHiveTableStorageDescriptorColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.compressedInput">compressedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.inputFormatInput">inputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.locationUriInput">locationUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.numBucketsInput">numBucketsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.outputFormatInput">outputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.serdeInfoInput">serdeInfoInput</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo">BiglakeHiveTableStorageDescriptorSerdeInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.skewedInfoInput">skewedInfoInput</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo">BiglakeHiveTableStorageDescriptorSkewedInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.sortColsInput">sortColsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols">BiglakeHiveTableStorageDescriptorSortCols</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.storedAsSubDirsInput">storedAsSubDirsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.bucketCols">bucketCols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.compressed">compressed</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.inputFormat">inputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.locationUri">locationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.numBuckets">numBuckets</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.outputFormat">outputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.storedAsSubDirs">storedAsSubDirs</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor">BiglakeHiveTableStorageDescriptor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.columns"></a>

```typescript
public readonly columns: BiglakeHiveTableStorageDescriptorColumnsList;
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList">BiglakeHiveTableStorageDescriptorColumnsList</a>

---

##### `serdeInfo`<sup>Required</sup> <a name="serdeInfo" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.serdeInfo"></a>

```typescript
public readonly serdeInfo: BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference">BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference</a>

---

##### `skewedInfo`<sup>Required</sup> <a name="skewedInfo" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.skewedInfo"></a>

```typescript
public readonly skewedInfo: BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference">BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference</a>

---

##### `sortCols`<sup>Required</sup> <a name="sortCols" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.sortCols"></a>

```typescript
public readonly sortCols: BiglakeHiveTableStorageDescriptorSortColsList;
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList">BiglakeHiveTableStorageDescriptorSortColsList</a>

---

##### `bucketColsInput`<sup>Optional</sup> <a name="bucketColsInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.bucketColsInput"></a>

```typescript
public readonly bucketColsInput: string[];
```

- *Type:* string[]

---

##### `columnsInput`<sup>Optional</sup> <a name="columnsInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.columnsInput"></a>

```typescript
public readonly columnsInput: IResolvable | BiglakeHiveTableStorageDescriptorColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns">BiglakeHiveTableStorageDescriptorColumns</a>[]

---

##### `compressedInput`<sup>Optional</sup> <a name="compressedInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.compressedInput"></a>

```typescript
public readonly compressedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `inputFormatInput`<sup>Optional</sup> <a name="inputFormatInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.inputFormatInput"></a>

```typescript
public readonly inputFormatInput: string;
```

- *Type:* string

---

##### `locationUriInput`<sup>Optional</sup> <a name="locationUriInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.locationUriInput"></a>

```typescript
public readonly locationUriInput: string;
```

- *Type:* string

---

##### `numBucketsInput`<sup>Optional</sup> <a name="numBucketsInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.numBucketsInput"></a>

```typescript
public readonly numBucketsInput: number;
```

- *Type:* number

---

##### `outputFormatInput`<sup>Optional</sup> <a name="outputFormatInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.outputFormatInput"></a>

```typescript
public readonly outputFormatInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `serdeInfoInput`<sup>Optional</sup> <a name="serdeInfoInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.serdeInfoInput"></a>

```typescript
public readonly serdeInfoInput: BiglakeHiveTableStorageDescriptorSerdeInfo;
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo">BiglakeHiveTableStorageDescriptorSerdeInfo</a>

---

##### `skewedInfoInput`<sup>Optional</sup> <a name="skewedInfoInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.skewedInfoInput"></a>

```typescript
public readonly skewedInfoInput: BiglakeHiveTableStorageDescriptorSkewedInfo;
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo">BiglakeHiveTableStorageDescriptorSkewedInfo</a>

---

##### `sortColsInput`<sup>Optional</sup> <a name="sortColsInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.sortColsInput"></a>

```typescript
public readonly sortColsInput: IResolvable | BiglakeHiveTableStorageDescriptorSortCols[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols">BiglakeHiveTableStorageDescriptorSortCols</a>[]

---

##### `storedAsSubDirsInput`<sup>Optional</sup> <a name="storedAsSubDirsInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.storedAsSubDirsInput"></a>

```typescript
public readonly storedAsSubDirsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `bucketCols`<sup>Required</sup> <a name="bucketCols" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.bucketCols"></a>

```typescript
public readonly bucketCols: string[];
```

- *Type:* string[]

---

##### `compressed`<sup>Required</sup> <a name="compressed" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.compressed"></a>

```typescript
public readonly compressed: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `inputFormat`<sup>Required</sup> <a name="inputFormat" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.inputFormat"></a>

```typescript
public readonly inputFormat: string;
```

- *Type:* string

---

##### `locationUri`<sup>Required</sup> <a name="locationUri" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.locationUri"></a>

```typescript
public readonly locationUri: string;
```

- *Type:* string

---

##### `numBuckets`<sup>Required</sup> <a name="numBuckets" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.numBuckets"></a>

```typescript
public readonly numBuckets: number;
```

- *Type:* number

---

##### `outputFormat`<sup>Required</sup> <a name="outputFormat" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.outputFormat"></a>

```typescript
public readonly outputFormat: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `storedAsSubDirs`<sup>Required</sup> <a name="storedAsSubDirs" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.storedAsSubDirs"></a>

```typescript
public readonly storedAsSubDirs: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BiglakeHiveTableStorageDescriptor;
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor">BiglakeHiveTableStorageDescriptor</a>

---


### BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference <a name="BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.Initializer"></a>

```typescript
import { biglakeHiveTable } from '@cdktn/provider-google'

new biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetDeserializerClass">resetDeserializerClass</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetSerdeType">resetSerdeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetSerializerClass">resetSerializerClass</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDeserializerClass` <a name="resetDeserializerClass" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetDeserializerClass"></a>

```typescript
public resetDeserializerClass(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetSerdeType` <a name="resetSerdeType" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetSerdeType"></a>

```typescript
public resetSerdeType(): void
```

##### `resetSerializerClass` <a name="resetSerializerClass" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetSerializerClass"></a>

```typescript
public resetSerializerClass(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.deserializerClassInput">deserializerClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serdeTypeInput">serdeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serializationLibInput">serializationLibInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serializerClassInput">serializerClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.deserializerClass">deserializerClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serdeType">serdeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serializationLib">serializationLib</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serializerClass">serializerClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo">BiglakeHiveTableStorageDescriptorSerdeInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `deserializerClassInput`<sup>Optional</sup> <a name="deserializerClassInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.deserializerClassInput"></a>

```typescript
public readonly deserializerClassInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `serdeTypeInput`<sup>Optional</sup> <a name="serdeTypeInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serdeTypeInput"></a>

```typescript
public readonly serdeTypeInput: string;
```

- *Type:* string

---

##### `serializationLibInput`<sup>Optional</sup> <a name="serializationLibInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serializationLibInput"></a>

```typescript
public readonly serializationLibInput: string;
```

- *Type:* string

---

##### `serializerClassInput`<sup>Optional</sup> <a name="serializerClassInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serializerClassInput"></a>

```typescript
public readonly serializerClassInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `deserializerClass`<sup>Required</sup> <a name="deserializerClass" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.deserializerClass"></a>

```typescript
public readonly deserializerClass: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `serdeType`<sup>Required</sup> <a name="serdeType" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serdeType"></a>

```typescript
public readonly serdeType: string;
```

- *Type:* string

---

##### `serializationLib`<sup>Required</sup> <a name="serializationLib" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serializationLib"></a>

```typescript
public readonly serializationLib: string;
```

- *Type:* string

---

##### `serializerClass`<sup>Required</sup> <a name="serializerClass" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serializerClass"></a>

```typescript
public readonly serializerClass: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BiglakeHiveTableStorageDescriptorSerdeInfo;
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo">BiglakeHiveTableStorageDescriptorSerdeInfo</a>

---


### BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference <a name="BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.Initializer"></a>

```typescript
import { biglakeHiveTable } from '@cdktn/provider-google'

new biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.putSkewedColValues">putSkewedColValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.putSkewedKeyValuesLocations">putSkewedKeyValuesLocations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSkewedColValues` <a name="putSkewedColValues" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.putSkewedColValues"></a>

```typescript
public putSkewedColValues(value: IResolvable | BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.putSkewedColValues.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues</a>[]

---

##### `putSkewedKeyValuesLocations` <a name="putSkewedKeyValuesLocations" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.putSkewedKeyValuesLocations"></a>

```typescript
public putSkewedKeyValuesLocations(value: IResolvable | BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.putSkewedKeyValuesLocations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedColValues">skewedColValues</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedKeyValuesLocations">skewedKeyValuesLocations</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedColNamesInput">skewedColNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedColValuesInput">skewedColValuesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedKeyValuesLocationsInput">skewedKeyValuesLocationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedColNames">skewedColNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo">BiglakeHiveTableStorageDescriptorSkewedInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `skewedColValues`<sup>Required</sup> <a name="skewedColValues" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedColValues"></a>

```typescript
public readonly skewedColValues: BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList;
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList</a>

---

##### `skewedKeyValuesLocations`<sup>Required</sup> <a name="skewedKeyValuesLocations" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedKeyValuesLocations"></a>

```typescript
public readonly skewedKeyValuesLocations: BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList;
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList</a>

---

##### `skewedColNamesInput`<sup>Optional</sup> <a name="skewedColNamesInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedColNamesInput"></a>

```typescript
public readonly skewedColNamesInput: string[];
```

- *Type:* string[]

---

##### `skewedColValuesInput`<sup>Optional</sup> <a name="skewedColValuesInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedColValuesInput"></a>

```typescript
public readonly skewedColValuesInput: IResolvable | BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues</a>[]

---

##### `skewedKeyValuesLocationsInput`<sup>Optional</sup> <a name="skewedKeyValuesLocationsInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedKeyValuesLocationsInput"></a>

```typescript
public readonly skewedKeyValuesLocationsInput: IResolvable | BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations</a>[]

---

##### `skewedColNames`<sup>Required</sup> <a name="skewedColNames" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedColNames"></a>

```typescript
public readonly skewedColNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BiglakeHiveTableStorageDescriptorSkewedInfo;
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo">BiglakeHiveTableStorageDescriptorSkewedInfo</a>

---


### BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList <a name="BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.Initializer"></a>

```typescript
import { biglakeHiveTable } from '@cdktn/provider-google'

new biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.get"></a>

```typescript
public get(index: number): BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues</a>[]

---


### BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference <a name="BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.Initializer"></a>

```typescript
import { biglakeHiveTable } from '@cdktn/provider-google'

new biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues</a>

---


### BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList <a name="BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.Initializer"></a>

```typescript
import { biglakeHiveTable } from '@cdktn/provider-google'

new biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.get"></a>

```typescript
public get(index: number): BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations</a>[]

---


### BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference <a name="BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.Initializer"></a>

```typescript
import { biglakeHiveTable } from '@cdktn/provider-google'

new biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations</a>

---


### BiglakeHiveTableStorageDescriptorSortColsList <a name="BiglakeHiveTableStorageDescriptorSortColsList" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.Initializer"></a>

```typescript
import { biglakeHiveTable } from '@cdktn/provider-google'

new biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.get"></a>

```typescript
public get(index: number): BiglakeHiveTableStorageDescriptorSortColsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols">BiglakeHiveTableStorageDescriptorSortCols</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BiglakeHiveTableStorageDescriptorSortCols[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols">BiglakeHiveTableStorageDescriptorSortCols</a>[]

---


### BiglakeHiveTableStorageDescriptorSortColsOutputReference <a name="BiglakeHiveTableStorageDescriptorSortColsOutputReference" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.Initializer"></a>

```typescript
import { biglakeHiveTable } from '@cdktn/provider-google'

new biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.colInput">colInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.orderInput">orderInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.col">col</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.order">order</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols">BiglakeHiveTableStorageDescriptorSortCols</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `colInput`<sup>Optional</sup> <a name="colInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.colInput"></a>

```typescript
public readonly colInput: string;
```

- *Type:* string

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.orderInput"></a>

```typescript
public readonly orderInput: number;
```

- *Type:* number

---

##### `col`<sup>Required</sup> <a name="col" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.col"></a>

```typescript
public readonly col: string;
```

- *Type:* string

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.order"></a>

```typescript
public readonly order: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BiglakeHiveTableStorageDescriptorSortCols;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols">BiglakeHiveTableStorageDescriptorSortCols</a>

---


### BiglakeHiveTableTimeoutsOutputReference <a name="BiglakeHiveTableTimeoutsOutputReference" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.Initializer"></a>

```typescript
import { biglakeHiveTable } from '@cdktn/provider-google'

new biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts">BiglakeHiveTableTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BiglakeHiveTableTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts">BiglakeHiveTableTimeouts</a>

---



