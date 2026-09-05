# `biglakeIcebergTable` Submodule <a name="`biglakeIcebergTable` Submodule" id="@cdktn/provider-google.biglakeIcebergTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BiglakeIcebergTable <a name="BiglakeIcebergTable" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_table google_biglake_iceberg_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.Initializer"></a>

```typescript
import { biglakeIcebergTable } from '@cdktn/provider-google'

new biglakeIcebergTable.BiglakeIcebergTable(scope: Construct, id: string, config: BiglakeIcebergTableConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig">BiglakeIcebergTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig">BiglakeIcebergTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.putPartitionSpec">putPartitionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.putSchema">putSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.putSortOrder">putSortOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.resetPartitionSpec">resetPartitionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.resetSortOrder">resetSortOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPartitionSpec` <a name="putPartitionSpec" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.putPartitionSpec"></a>

```typescript
public putPartitionSpec(value: BiglakeIcebergTablePartitionSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.putPartitionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpec">BiglakeIcebergTablePartitionSpec</a>

---

##### `putSchema` <a name="putSchema" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.putSchema"></a>

```typescript
public putSchema(value: BiglakeIcebergTableSchema): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.putSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchema">BiglakeIcebergTableSchema</a>

---

##### `putSortOrder` <a name="putSortOrder" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.putSortOrder"></a>

```typescript
public putSortOrder(value: BiglakeIcebergTableSortOrder): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.putSortOrder.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrder">BiglakeIcebergTableSortOrder</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.putTimeouts"></a>

```typescript
public putTimeouts(value: BiglakeIcebergTableTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeouts">BiglakeIcebergTableTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetPartitionSpec` <a name="resetPartitionSpec" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.resetPartitionSpec"></a>

```typescript
public resetPartitionSpec(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetProperties` <a name="resetProperties" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.resetProperties"></a>

```typescript
public resetProperties(): void
```

##### `resetSortOrder` <a name="resetSortOrder" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.resetSortOrder"></a>

```typescript
public resetSortOrder(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BiglakeIcebergTable resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.isConstruct"></a>

```typescript
import { biglakeIcebergTable } from '@cdktn/provider-google'

biglakeIcebergTable.BiglakeIcebergTable.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.isTerraformElement"></a>

```typescript
import { biglakeIcebergTable } from '@cdktn/provider-google'

biglakeIcebergTable.BiglakeIcebergTable.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.isTerraformResource"></a>

```typescript
import { biglakeIcebergTable } from '@cdktn/provider-google'

biglakeIcebergTable.BiglakeIcebergTable.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.generateConfigForImport"></a>

```typescript
import { biglakeIcebergTable } from '@cdktn/provider-google'

biglakeIcebergTable.BiglakeIcebergTable.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BiglakeIcebergTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BiglakeIcebergTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BiglakeIcebergTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BiglakeIcebergTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.partitionSpec">partitionSpec</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference">BiglakeIcebergTablePartitionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference">BiglakeIcebergTableSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.sortOrder">sortOrder</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference">BiglakeIcebergTableSortOrderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference">BiglakeIcebergTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.catalogInput">catalogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.partitionSpecInput">partitionSpecInput</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpec">BiglakeIcebergTablePartitionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.propertiesInput">propertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.schemaInput">schemaInput</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchema">BiglakeIcebergTableSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.sortOrderInput">sortOrderInput</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrder">BiglakeIcebergTableSortOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeouts">BiglakeIcebergTableTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.catalog">catalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `partitionSpec`<sup>Required</sup> <a name="partitionSpec" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.partitionSpec"></a>

```typescript
public readonly partitionSpec: BiglakeIcebergTablePartitionSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference">BiglakeIcebergTablePartitionSpecOutputReference</a>

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.schema"></a>

```typescript
public readonly schema: BiglakeIcebergTableSchemaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference">BiglakeIcebergTableSchemaOutputReference</a>

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.sortOrder"></a>

```typescript
public readonly sortOrder: BiglakeIcebergTableSortOrderOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference">BiglakeIcebergTableSortOrderOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.timeouts"></a>

```typescript
public readonly timeouts: BiglakeIcebergTableTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference">BiglakeIcebergTableTimeoutsOutputReference</a>

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.catalogInput"></a>

```typescript
public readonly catalogInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `partitionSpecInput`<sup>Optional</sup> <a name="partitionSpecInput" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.partitionSpecInput"></a>

```typescript
public readonly partitionSpecInput: BiglakeIcebergTablePartitionSpec;
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpec">BiglakeIcebergTablePartitionSpec</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.schemaInput"></a>

```typescript
public readonly schemaInput: BiglakeIcebergTableSchema;
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchema">BiglakeIcebergTableSchema</a>

---

##### `sortOrderInput`<sup>Optional</sup> <a name="sortOrderInput" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.sortOrderInput"></a>

```typescript
public readonly sortOrderInput: BiglakeIcebergTableSortOrder;
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrder">BiglakeIcebergTableSortOrder</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BiglakeIcebergTableTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeouts">BiglakeIcebergTableTimeouts</a>

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTable.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BiglakeIcebergTableConfig <a name="BiglakeIcebergTableConfig" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.Initializer"></a>

```typescript
import { biglakeIcebergTable } from '@cdktn/provider-google'

const biglakeIcebergTableConfig: biglakeIcebergTable.BiglakeIcebergTableConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.catalog">catalog</a></code> | <code>string</code> | The name of the IcebergCatalog. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.name">name</a></code> | <code>string</code> | The name of the table. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.namespace">namespace</a></code> | <code>string</code> | The parent namespace of the table. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchema">BiglakeIcebergTableSchema</a></code> | schema block. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_table#id BiglakeIcebergTable#id}. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.location">location</a></code> | <code>string</code> | The location of the table. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.partitionSpec">partitionSpec</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpec">BiglakeIcebergTablePartitionSpec</a></code> | partition_spec block. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_table#project BiglakeIcebergTable#project}. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | User-defined properties for the table. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.sortOrder">sortOrder</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrder">BiglakeIcebergTableSortOrder</a></code> | sort_order block. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeouts">BiglakeIcebergTableTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The name of the IcebergCatalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_table#catalog BiglakeIcebergTable#catalog}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_table#name BiglakeIcebergTable#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The parent namespace of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_table#namespace BiglakeIcebergTable#namespace}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.schema"></a>

```typescript
public readonly schema: BiglakeIcebergTableSchema;
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchema">BiglakeIcebergTableSchema</a>

schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_table#schema BiglakeIcebergTable#schema}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_table#deletion_policy BiglakeIcebergTable#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_table#id BiglakeIcebergTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_table#location BiglakeIcebergTable#location}

---

##### `partitionSpec`<sup>Optional</sup> <a name="partitionSpec" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.partitionSpec"></a>

```typescript
public readonly partitionSpec: BiglakeIcebergTablePartitionSpec;
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpec">BiglakeIcebergTablePartitionSpec</a>

partition_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_table#partition_spec BiglakeIcebergTable#partition_spec}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_table#project BiglakeIcebergTable#project}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User-defined properties for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_table#properties BiglakeIcebergTable#properties}

---

##### `sortOrder`<sup>Optional</sup> <a name="sortOrder" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.sortOrder"></a>

```typescript
public readonly sortOrder: BiglakeIcebergTableSortOrder;
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrder">BiglakeIcebergTableSortOrder</a>

sort_order block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_table#sort_order BiglakeIcebergTable#sort_order}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BiglakeIcebergTableTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeouts">BiglakeIcebergTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_table#timeouts BiglakeIcebergTable#timeouts}

---

### BiglakeIcebergTablePartitionSpec <a name="BiglakeIcebergTablePartitionSpec" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpec.Initializer"></a>

```typescript
import { biglakeIcebergTable } from '@cdktn/provider-google'

const biglakeIcebergTablePartitionSpec: biglakeIcebergTable.BiglakeIcebergTablePartitionSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpec.property.fields">fields</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFields">BiglakeIcebergTablePartitionSpecFields</a>[]</code> | fields block. |

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpec.property.fields"></a>

```typescript
public readonly fields: IResolvable | BiglakeIcebergTablePartitionSpecFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFields">BiglakeIcebergTablePartitionSpecFields</a>[]

fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_table#fields BiglakeIcebergTable#fields}

---

### BiglakeIcebergTablePartitionSpecFields <a name="BiglakeIcebergTablePartitionSpecFields" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFields.Initializer"></a>

```typescript
import { biglakeIcebergTable } from '@cdktn/provider-google'

const biglakeIcebergTablePartitionSpecFields: biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFields = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFields.property.name">name</a></code> | <code>string</code> | The name of the partition field. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFields.property.sourceId">sourceId</a></code> | <code>number</code> | The source field ID for the partition field. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFields.property.transform">transform</a></code> | <code>string</code> | The transform to apply to the source field. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFields.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the partition field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_table#name BiglakeIcebergTable#name}

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFields.property.sourceId"></a>

```typescript
public readonly sourceId: number;
```

- *Type:* number

The source field ID for the partition field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_table#source_id BiglakeIcebergTable#source_id}

---

##### `transform`<sup>Required</sup> <a name="transform" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFields.property.transform"></a>

```typescript
public readonly transform: string;
```

- *Type:* string

The transform to apply to the source field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_table#transform BiglakeIcebergTable#transform}

---

### BiglakeIcebergTableSchema <a name="BiglakeIcebergTableSchema" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchema.Initializer"></a>

```typescript
import { biglakeIcebergTable } from '@cdktn/provider-google'

const biglakeIcebergTableSchema: biglakeIcebergTable.BiglakeIcebergTableSchema = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchema.property.fields">fields</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFields">BiglakeIcebergTableSchemaFields</a>[]</code> | fields block. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchema.property.identifierFieldIds">identifierFieldIds</a></code> | <code>number[]</code> | The field IDs that make up the identifier for the table. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchema.property.type">type</a></code> | <code>string</code> | The type of the schema. |

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchema.property.fields"></a>

```typescript
public readonly fields: IResolvable | BiglakeIcebergTableSchemaFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFields">BiglakeIcebergTableSchemaFields</a>[]

fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_table#fields BiglakeIcebergTable#fields}

---

##### `identifierFieldIds`<sup>Optional</sup> <a name="identifierFieldIds" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchema.property.identifierFieldIds"></a>

```typescript
public readonly identifierFieldIds: number[];
```

- *Type:* number[]

The field IDs that make up the identifier for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_table#identifier_field_ids BiglakeIcebergTable#identifier_field_ids}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchema.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_table#type BiglakeIcebergTable#type}

---

### BiglakeIcebergTableSchemaFields <a name="BiglakeIcebergTableSchemaFields" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFields.Initializer"></a>

```typescript
import { biglakeIcebergTable } from '@cdktn/provider-google'

const biglakeIcebergTableSchemaFields: biglakeIcebergTable.BiglakeIcebergTableSchemaFields = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFields.property.id">id</a></code> | <code>number</code> | The unique identifier of the field. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFields.property.name">name</a></code> | <code>string</code> | The name of the field. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFields.property.required">required</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the field is required. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFields.property.type">type</a></code> | <code>string</code> | The type of the field. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFields.property.doc">doc</a></code> | <code>string</code> | A description of the field. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFields.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

The unique identifier of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_table#id BiglakeIcebergTable#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFields.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_table#name BiglakeIcebergTable#name}

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFields.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the field is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_table#required BiglakeIcebergTable#required}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFields.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_table#type BiglakeIcebergTable#type}

---

##### `doc`<sup>Optional</sup> <a name="doc" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFields.property.doc"></a>

```typescript
public readonly doc: string;
```

- *Type:* string

A description of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_table#doc BiglakeIcebergTable#doc}

---

### BiglakeIcebergTableSortOrder <a name="BiglakeIcebergTableSortOrder" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrder"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrder.Initializer"></a>

```typescript
import { biglakeIcebergTable } from '@cdktn/provider-google'

const biglakeIcebergTableSortOrder: biglakeIcebergTable.BiglakeIcebergTableSortOrder = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrder.property.fields">fields</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFields">BiglakeIcebergTableSortOrderFields</a>[]</code> | fields block. |

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrder.property.fields"></a>

```typescript
public readonly fields: IResolvable | BiglakeIcebergTableSortOrderFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFields">BiglakeIcebergTableSortOrderFields</a>[]

fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_table#fields BiglakeIcebergTable#fields}

---

### BiglakeIcebergTableSortOrderFields <a name="BiglakeIcebergTableSortOrderFields" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFields.Initializer"></a>

```typescript
import { biglakeIcebergTable } from '@cdktn/provider-google'

const biglakeIcebergTableSortOrderFields: biglakeIcebergTable.BiglakeIcebergTableSortOrderFields = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFields.property.direction">direction</a></code> | <code>string</code> | The sort direction for the sort field. Possible values: "asc", "desc". |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFields.property.nullOrder">nullOrder</a></code> | <code>string</code> | The null ordering for the sort field. Possible values: "nulls-first", "nulls-last". |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFields.property.sourceId">sourceId</a></code> | <code>number</code> | The source field ID for the sort field. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFields.property.transform">transform</a></code> | <code>string</code> | The transform to apply to the source field. |

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFields.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

The sort direction for the sort field. Possible values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_table#direction BiglakeIcebergTable#direction}

---

##### `nullOrder`<sup>Required</sup> <a name="nullOrder" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFields.property.nullOrder"></a>

```typescript
public readonly nullOrder: string;
```

- *Type:* string

The null ordering for the sort field. Possible values: "nulls-first", "nulls-last".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_table#null_order BiglakeIcebergTable#null_order}

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFields.property.sourceId"></a>

```typescript
public readonly sourceId: number;
```

- *Type:* number

The source field ID for the sort field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_table#source_id BiglakeIcebergTable#source_id}

---

##### `transform`<sup>Required</sup> <a name="transform" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFields.property.transform"></a>

```typescript
public readonly transform: string;
```

- *Type:* string

The transform to apply to the source field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_table#transform BiglakeIcebergTable#transform}

---

### BiglakeIcebergTableTimeouts <a name="BiglakeIcebergTableTimeouts" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeouts.Initializer"></a>

```typescript
import { biglakeIcebergTable } from '@cdktn/provider-google'

const biglakeIcebergTableTimeouts: biglakeIcebergTable.BiglakeIcebergTableTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_table#create BiglakeIcebergTable#create}. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_table#delete BiglakeIcebergTable#delete}. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_table#update BiglakeIcebergTable#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_table#create BiglakeIcebergTable#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_table#delete BiglakeIcebergTable#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/biglake_iceberg_table#update BiglakeIcebergTable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BiglakeIcebergTablePartitionSpecFieldsList <a name="BiglakeIcebergTablePartitionSpecFieldsList" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList.Initializer"></a>

```typescript
import { biglakeIcebergTable } from '@cdktn/provider-google'

new biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList.get"></a>

```typescript
public get(index: number): BiglakeIcebergTablePartitionSpecFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFields">BiglakeIcebergTablePartitionSpecFields</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BiglakeIcebergTablePartitionSpecFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFields">BiglakeIcebergTablePartitionSpecFields</a>[]

---


### BiglakeIcebergTablePartitionSpecFieldsOutputReference <a name="BiglakeIcebergTablePartitionSpecFieldsOutputReference" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.Initializer"></a>

```typescript
import { biglakeIcebergTable } from '@cdktn/provider-google'

new biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.property.fieldId">fieldId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.property.sourceIdInput">sourceIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.property.transformInput">transformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.property.sourceId">sourceId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.property.transform">transform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFields">BiglakeIcebergTablePartitionSpecFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldId`<sup>Required</sup> <a name="fieldId" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.property.fieldId"></a>

```typescript
public readonly fieldId: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sourceIdInput`<sup>Optional</sup> <a name="sourceIdInput" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.property.sourceIdInput"></a>

```typescript
public readonly sourceIdInput: number;
```

- *Type:* number

---

##### `transformInput`<sup>Optional</sup> <a name="transformInput" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.property.transformInput"></a>

```typescript
public readonly transformInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.property.sourceId"></a>

```typescript
public readonly sourceId: number;
```

- *Type:* number

---

##### `transform`<sup>Required</sup> <a name="transform" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.property.transform"></a>

```typescript
public readonly transform: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BiglakeIcebergTablePartitionSpecFields;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFields">BiglakeIcebergTablePartitionSpecFields</a>

---


### BiglakeIcebergTablePartitionSpecOutputReference <a name="BiglakeIcebergTablePartitionSpecOutputReference" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.Initializer"></a>

```typescript
import { biglakeIcebergTable } from '@cdktn/provider-google'

new biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.putFields">putFields</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFields` <a name="putFields" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.putFields"></a>

```typescript
public putFields(value: IResolvable | BiglakeIcebergTablePartitionSpecFields[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.putFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFields">BiglakeIcebergTablePartitionSpecFields</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList">BiglakeIcebergTablePartitionSpecFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.property.specId">specId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.property.fieldsInput">fieldsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFields">BiglakeIcebergTablePartitionSpecFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpec">BiglakeIcebergTablePartitionSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.property.fields"></a>

```typescript
public readonly fields: BiglakeIcebergTablePartitionSpecFieldsList;
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFieldsList">BiglakeIcebergTablePartitionSpecFieldsList</a>

---

##### `specId`<sup>Required</sup> <a name="specId" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.property.specId"></a>

```typescript
public readonly specId: number;
```

- *Type:* number

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.property.fieldsInput"></a>

```typescript
public readonly fieldsInput: IResolvable | BiglakeIcebergTablePartitionSpecFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecFields">BiglakeIcebergTablePartitionSpecFields</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BiglakeIcebergTablePartitionSpec;
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTablePartitionSpec">BiglakeIcebergTablePartitionSpec</a>

---


### BiglakeIcebergTableSchemaFieldsList <a name="BiglakeIcebergTableSchemaFieldsList" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList.Initializer"></a>

```typescript
import { biglakeIcebergTable } from '@cdktn/provider-google'

new biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList.get"></a>

```typescript
public get(index: number): BiglakeIcebergTableSchemaFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFields">BiglakeIcebergTableSchemaFields</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BiglakeIcebergTableSchemaFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFields">BiglakeIcebergTableSchemaFields</a>[]

---


### BiglakeIcebergTableSchemaFieldsOutputReference <a name="BiglakeIcebergTableSchemaFieldsOutputReference" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.Initializer"></a>

```typescript
import { biglakeIcebergTable } from '@cdktn/provider-google'

new biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.resetDoc">resetDoc</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDoc` <a name="resetDoc" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.resetDoc"></a>

```typescript
public resetDoc(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.property.docInput">docInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.property.idInput">idInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.property.requiredInput">requiredInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.property.doc">doc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.property.required">required</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFields">BiglakeIcebergTableSchemaFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `docInput`<sup>Optional</sup> <a name="docInput" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.property.docInput"></a>

```typescript
public readonly docInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.property.requiredInput"></a>

```typescript
public readonly requiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `doc`<sup>Required</sup> <a name="doc" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.property.doc"></a>

```typescript
public readonly doc: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BiglakeIcebergTableSchemaFields;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFields">BiglakeIcebergTableSchemaFields</a>

---


### BiglakeIcebergTableSchemaOutputReference <a name="BiglakeIcebergTableSchemaOutputReference" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.Initializer"></a>

```typescript
import { biglakeIcebergTable } from '@cdktn/provider-google'

new biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.putFields">putFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.resetIdentifierFieldIds">resetIdentifierFieldIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFields` <a name="putFields" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.putFields"></a>

```typescript
public putFields(value: IResolvable | BiglakeIcebergTableSchemaFields[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.putFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFields">BiglakeIcebergTableSchemaFields</a>[]

---

##### `resetIdentifierFieldIds` <a name="resetIdentifierFieldIds" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.resetIdentifierFieldIds"></a>

```typescript
public resetIdentifierFieldIds(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList">BiglakeIcebergTableSchemaFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.property.schemaId">schemaId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.property.fieldsInput">fieldsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFields">BiglakeIcebergTableSchemaFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.property.identifierFieldIdsInput">identifierFieldIdsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.property.identifierFieldIds">identifierFieldIds</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchema">BiglakeIcebergTableSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.property.fields"></a>

```typescript
public readonly fields: BiglakeIcebergTableSchemaFieldsList;
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFieldsList">BiglakeIcebergTableSchemaFieldsList</a>

---

##### `schemaId`<sup>Required</sup> <a name="schemaId" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.property.schemaId"></a>

```typescript
public readonly schemaId: number;
```

- *Type:* number

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.property.fieldsInput"></a>

```typescript
public readonly fieldsInput: IResolvable | BiglakeIcebergTableSchemaFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaFields">BiglakeIcebergTableSchemaFields</a>[]

---

##### `identifierFieldIdsInput`<sup>Optional</sup> <a name="identifierFieldIdsInput" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.property.identifierFieldIdsInput"></a>

```typescript
public readonly identifierFieldIdsInput: number[];
```

- *Type:* number[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identifierFieldIds`<sup>Required</sup> <a name="identifierFieldIds" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.property.identifierFieldIds"></a>

```typescript
public readonly identifierFieldIds: number[];
```

- *Type:* number[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchemaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BiglakeIcebergTableSchema;
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSchema">BiglakeIcebergTableSchema</a>

---


### BiglakeIcebergTableSortOrderFieldsList <a name="BiglakeIcebergTableSortOrderFieldsList" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList.Initializer"></a>

```typescript
import { biglakeIcebergTable } from '@cdktn/provider-google'

new biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList.get"></a>

```typescript
public get(index: number): BiglakeIcebergTableSortOrderFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFields">BiglakeIcebergTableSortOrderFields</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BiglakeIcebergTableSortOrderFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFields">BiglakeIcebergTableSortOrderFields</a>[]

---


### BiglakeIcebergTableSortOrderFieldsOutputReference <a name="BiglakeIcebergTableSortOrderFieldsOutputReference" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.Initializer"></a>

```typescript
import { biglakeIcebergTable } from '@cdktn/provider-google'

new biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.property.nullOrderInput">nullOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.property.sourceIdInput">sourceIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.property.transformInput">transformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.property.nullOrder">nullOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.property.sourceId">sourceId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.property.transform">transform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFields">BiglakeIcebergTableSortOrderFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `nullOrderInput`<sup>Optional</sup> <a name="nullOrderInput" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.property.nullOrderInput"></a>

```typescript
public readonly nullOrderInput: string;
```

- *Type:* string

---

##### `sourceIdInput`<sup>Optional</sup> <a name="sourceIdInput" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.property.sourceIdInput"></a>

```typescript
public readonly sourceIdInput: number;
```

- *Type:* number

---

##### `transformInput`<sup>Optional</sup> <a name="transformInput" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.property.transformInput"></a>

```typescript
public readonly transformInput: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `nullOrder`<sup>Required</sup> <a name="nullOrder" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.property.nullOrder"></a>

```typescript
public readonly nullOrder: string;
```

- *Type:* string

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.property.sourceId"></a>

```typescript
public readonly sourceId: number;
```

- *Type:* number

---

##### `transform`<sup>Required</sup> <a name="transform" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.property.transform"></a>

```typescript
public readonly transform: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BiglakeIcebergTableSortOrderFields;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFields">BiglakeIcebergTableSortOrderFields</a>

---


### BiglakeIcebergTableSortOrderOutputReference <a name="BiglakeIcebergTableSortOrderOutputReference" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.Initializer"></a>

```typescript
import { biglakeIcebergTable } from '@cdktn/provider-google'

new biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.putFields">putFields</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFields` <a name="putFields" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.putFields"></a>

```typescript
public putFields(value: IResolvable | BiglakeIcebergTableSortOrderFields[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.putFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFields">BiglakeIcebergTableSortOrderFields</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList">BiglakeIcebergTableSortOrderFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.property.orderId">orderId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.property.fieldsInput">fieldsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFields">BiglakeIcebergTableSortOrderFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrder">BiglakeIcebergTableSortOrder</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.property.fields"></a>

```typescript
public readonly fields: BiglakeIcebergTableSortOrderFieldsList;
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFieldsList">BiglakeIcebergTableSortOrderFieldsList</a>

---

##### `orderId`<sup>Required</sup> <a name="orderId" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.property.orderId"></a>

```typescript
public readonly orderId: number;
```

- *Type:* number

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.property.fieldsInput"></a>

```typescript
public readonly fieldsInput: IResolvable | BiglakeIcebergTableSortOrderFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderFields">BiglakeIcebergTableSortOrderFields</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BiglakeIcebergTableSortOrder;
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableSortOrder">BiglakeIcebergTableSortOrder</a>

---


### BiglakeIcebergTableTimeoutsOutputReference <a name="BiglakeIcebergTableTimeoutsOutputReference" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.Initializer"></a>

```typescript
import { biglakeIcebergTable } from '@cdktn/provider-google'

new biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeouts">BiglakeIcebergTableTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BiglakeIcebergTableTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.biglakeIcebergTable.BiglakeIcebergTableTimeouts">BiglakeIcebergTableTimeouts</a>

---



