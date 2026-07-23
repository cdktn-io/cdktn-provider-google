# `dataLineageConfig` Submodule <a name="`dataLineageConfig` Submodule" id="@cdktn/provider-google.dataLineageConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataLineageConfig <a name="DataLineageConfig" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/data_lineage_config google_data_lineage_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.Initializer"></a>

```typescript
import { dataLineageConfig } from '@cdktn/provider-google'

new dataLineageConfig.DataLineageConfig(scope: Construct, id: string, config: DataLineageConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig">DataLineageConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig">DataLineageConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.putIngestion">putIngestion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIngestion` <a name="putIngestion" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.putIngestion"></a>

```typescript
public putIngestion(value: DataLineageConfigIngestion): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.putIngestion.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestion">DataLineageConfigIngestion</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: DataLineageConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeouts">DataLineageConfigTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataLineageConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.isConstruct"></a>

```typescript
import { dataLineageConfig } from '@cdktn/provider-google'

dataLineageConfig.DataLineageConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.isTerraformElement"></a>

```typescript
import { dataLineageConfig } from '@cdktn/provider-google'

dataLineageConfig.DataLineageConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.isTerraformResource"></a>

```typescript
import { dataLineageConfig } from '@cdktn/provider-google'

dataLineageConfig.DataLineageConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.generateConfigForImport"></a>

```typescript
import { dataLineageConfig } from '@cdktn/provider-google'

dataLineageConfig.DataLineageConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataLineageConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataLineageConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataLineageConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/data_lineage_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataLineageConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.ingestion">ingestion</a></code> | <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference">DataLineageConfigIngestionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference">DataLineageConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.ingestionInput">ingestionInput</a></code> | <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestion">DataLineageConfigIngestion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeouts">DataLineageConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.parent">parent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `ingestion`<sup>Required</sup> <a name="ingestion" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.ingestion"></a>

```typescript
public readonly ingestion: DataLineageConfigIngestionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference">DataLineageConfigIngestionOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataLineageConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference">DataLineageConfigTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ingestionInput`<sup>Optional</sup> <a name="ingestionInput" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.ingestionInput"></a>

```typescript
public readonly ingestionInput: DataLineageConfigIngestion;
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestion">DataLineageConfigIngestion</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataLineageConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeouts">DataLineageConfigTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataLineageConfigConfig <a name="DataLineageConfigConfig" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig.Initializer"></a>

```typescript
import { dataLineageConfig } from '@cdktn/provider-google'

const dataLineageConfigConfig: dataLineageConfig.DataLineageConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig.property.ingestion">ingestion</a></code> | <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestion">DataLineageConfigIngestion</a></code> | ingestion block. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig.property.location">location</a></code> | <code>string</code> | The region of the data lineage configuration for integration. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig.property.parent">parent</a></code> | <code>string</code> | Parent scope for the config. Format: projects/{project-id\|project-number} or folders/{folder-number} or organizations/{organization-number}. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/data_lineage_config#id DataLineageConfig#id}. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeouts">DataLineageConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `ingestion`<sup>Required</sup> <a name="ingestion" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig.property.ingestion"></a>

```typescript
public readonly ingestion: DataLineageConfigIngestion;
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestion">DataLineageConfigIngestion</a>

ingestion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/data_lineage_config#ingestion DataLineageConfig#ingestion}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The region of the data lineage configuration for integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/data_lineage_config#location DataLineageConfig#location}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

Parent scope for the config. Format: projects/{project-id|project-number} or folders/{folder-number} or organizations/{organization-number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/data_lineage_config#parent DataLineageConfig#parent}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/data_lineage_config#deletion_policy DataLineageConfig#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/data_lineage_config#id DataLineageConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataLineageConfigTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeouts">DataLineageConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/data_lineage_config#timeouts DataLineageConfig#timeouts}

---

### DataLineageConfigIngestion <a name="DataLineageConfigIngestion" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestion.Initializer"></a>

```typescript
import { dataLineageConfig } from '@cdktn/provider-google'

const dataLineageConfigIngestion: dataLineageConfig.DataLineageConfigIngestion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestion.property.rule">rule</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRule">DataLineageConfigIngestionRule</a>[]</code> | rule block. |

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestion.property.rule"></a>

```typescript
public readonly rule: IResolvable | DataLineageConfigIngestionRule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRule">DataLineageConfigIngestionRule</a>[]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/data_lineage_config#rule DataLineageConfig#rule}

---

### DataLineageConfigIngestionRule <a name="DataLineageConfigIngestionRule" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRule.Initializer"></a>

```typescript
import { dataLineageConfig } from '@cdktn/provider-google'

const dataLineageConfigIngestionRule: dataLineageConfig.DataLineageConfigIngestionRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRule.property.integrationSelector">integrationSelector</a></code> | <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelector">DataLineageConfigIngestionRuleIntegrationSelector</a></code> | integration_selector block. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRule.property.lineageEnablement">lineageEnablement</a></code> | <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablement">DataLineageConfigIngestionRuleLineageEnablement</a></code> | lineage_enablement block. |

---

##### `integrationSelector`<sup>Required</sup> <a name="integrationSelector" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRule.property.integrationSelector"></a>

```typescript
public readonly integrationSelector: DataLineageConfigIngestionRuleIntegrationSelector;
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelector">DataLineageConfigIngestionRuleIntegrationSelector</a>

integration_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/data_lineage_config#integration_selector DataLineageConfig#integration_selector}

---

##### `lineageEnablement`<sup>Required</sup> <a name="lineageEnablement" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRule.property.lineageEnablement"></a>

```typescript
public readonly lineageEnablement: DataLineageConfigIngestionRuleLineageEnablement;
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablement">DataLineageConfigIngestionRuleLineageEnablement</a>

lineage_enablement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/data_lineage_config#lineage_enablement DataLineageConfig#lineage_enablement}

---

### DataLineageConfigIngestionRuleIntegrationSelector <a name="DataLineageConfigIngestionRuleIntegrationSelector" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelector.Initializer"></a>

```typescript
import { dataLineageConfig } from '@cdktn/provider-google'

const dataLineageConfigIngestionRuleIntegrationSelector: dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelector.property.integration">integration</a></code> | <code>string</code> | Integration to which the rule applies. Possible values: ["DATAPROC", "LOOKER_CORE"]. |

---

##### `integration`<sup>Required</sup> <a name="integration" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelector.property.integration"></a>

```typescript
public readonly integration: string;
```

- *Type:* string

Integration to which the rule applies. Possible values: ["DATAPROC", "LOOKER_CORE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/data_lineage_config#integration DataLineageConfig#integration}

---

### DataLineageConfigIngestionRuleLineageEnablement <a name="DataLineageConfigIngestionRuleLineageEnablement" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablement.Initializer"></a>

```typescript
import { dataLineageConfig } from '@cdktn/provider-google'

const dataLineageConfigIngestionRuleLineageEnablement: dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablement.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether ingestion of lineage should be enabled. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablement.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether ingestion of lineage should be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/data_lineage_config#enabled DataLineageConfig#enabled}

---

### DataLineageConfigTimeouts <a name="DataLineageConfigTimeouts" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeouts.Initializer"></a>

```typescript
import { dataLineageConfig } from '@cdktn/provider-google'

const dataLineageConfigTimeouts: dataLineageConfig.DataLineageConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/data_lineage_config#create DataLineageConfig#create}. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/data_lineage_config#delete DataLineageConfig#delete}. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/data_lineage_config#update DataLineageConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/data_lineage_config#create DataLineageConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/data_lineage_config#delete DataLineageConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/data_lineage_config#update DataLineageConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataLineageConfigIngestionOutputReference <a name="DataLineageConfigIngestionOutputReference" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.Initializer"></a>

```typescript
import { dataLineageConfig } from '@cdktn/provider-google'

new dataLineageConfig.DataLineageConfigIngestionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.putRule">putRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRule` <a name="putRule" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.putRule"></a>

```typescript
public putRule(value: IResolvable | DataLineageConfigIngestionRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.putRule.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRule">DataLineageConfigIngestionRule</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList">DataLineageConfigIngestionRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.property.ruleInput">ruleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRule">DataLineageConfigIngestionRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestion">DataLineageConfigIngestion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.property.rule"></a>

```typescript
public readonly rule: DataLineageConfigIngestionRuleList;
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList">DataLineageConfigIngestionRuleList</a>

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.property.ruleInput"></a>

```typescript
public readonly ruleInput: IResolvable | DataLineageConfigIngestionRule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRule">DataLineageConfigIngestionRule</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLineageConfigIngestion;
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestion">DataLineageConfigIngestion</a>

---


### DataLineageConfigIngestionRuleIntegrationSelectorOutputReference <a name="DataLineageConfigIngestionRuleIntegrationSelectorOutputReference" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.Initializer"></a>

```typescript
import { dataLineageConfig } from '@cdktn/provider-google'

new dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.property.integrationInput">integrationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.property.integration">integration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelector">DataLineageConfigIngestionRuleIntegrationSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `integrationInput`<sup>Optional</sup> <a name="integrationInput" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.property.integrationInput"></a>

```typescript
public readonly integrationInput: string;
```

- *Type:* string

---

##### `integration`<sup>Required</sup> <a name="integration" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.property.integration"></a>

```typescript
public readonly integration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLineageConfigIngestionRuleIntegrationSelector;
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelector">DataLineageConfigIngestionRuleIntegrationSelector</a>

---


### DataLineageConfigIngestionRuleLineageEnablementOutputReference <a name="DataLineageConfigIngestionRuleLineageEnablementOutputReference" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.Initializer"></a>

```typescript
import { dataLineageConfig } from '@cdktn/provider-google'

new dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablement">DataLineageConfigIngestionRuleLineageEnablement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLineageConfigIngestionRuleLineageEnablement;
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablement">DataLineageConfigIngestionRuleLineageEnablement</a>

---


### DataLineageConfigIngestionRuleList <a name="DataLineageConfigIngestionRuleList" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList.Initializer"></a>

```typescript
import { dataLineageConfig } from '@cdktn/provider-google'

new dataLineageConfig.DataLineageConfigIngestionRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList.get"></a>

```typescript
public get(index: number): DataLineageConfigIngestionRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRule">DataLineageConfigIngestionRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataLineageConfigIngestionRule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRule">DataLineageConfigIngestionRule</a>[]

---


### DataLineageConfigIngestionRuleOutputReference <a name="DataLineageConfigIngestionRuleOutputReference" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.Initializer"></a>

```typescript
import { dataLineageConfig } from '@cdktn/provider-google'

new dataLineageConfig.DataLineageConfigIngestionRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.putIntegrationSelector">putIntegrationSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.putLineageEnablement">putLineageEnablement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIntegrationSelector` <a name="putIntegrationSelector" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.putIntegrationSelector"></a>

```typescript
public putIntegrationSelector(value: DataLineageConfigIngestionRuleIntegrationSelector): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.putIntegrationSelector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelector">DataLineageConfigIngestionRuleIntegrationSelector</a>

---

##### `putLineageEnablement` <a name="putLineageEnablement" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.putLineageEnablement"></a>

```typescript
public putLineageEnablement(value: DataLineageConfigIngestionRuleLineageEnablement): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.putLineageEnablement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablement">DataLineageConfigIngestionRuleLineageEnablement</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.property.integrationSelector">integrationSelector</a></code> | <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference">DataLineageConfigIngestionRuleIntegrationSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.property.lineageEnablement">lineageEnablement</a></code> | <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference">DataLineageConfigIngestionRuleLineageEnablementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.property.integrationSelectorInput">integrationSelectorInput</a></code> | <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelector">DataLineageConfigIngestionRuleIntegrationSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.property.lineageEnablementInput">lineageEnablementInput</a></code> | <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablement">DataLineageConfigIngestionRuleLineageEnablement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRule">DataLineageConfigIngestionRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `integrationSelector`<sup>Required</sup> <a name="integrationSelector" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.property.integrationSelector"></a>

```typescript
public readonly integrationSelector: DataLineageConfigIngestionRuleIntegrationSelectorOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelectorOutputReference">DataLineageConfigIngestionRuleIntegrationSelectorOutputReference</a>

---

##### `lineageEnablement`<sup>Required</sup> <a name="lineageEnablement" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.property.lineageEnablement"></a>

```typescript
public readonly lineageEnablement: DataLineageConfigIngestionRuleLineageEnablementOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablementOutputReference">DataLineageConfigIngestionRuleLineageEnablementOutputReference</a>

---

##### `integrationSelectorInput`<sup>Optional</sup> <a name="integrationSelectorInput" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.property.integrationSelectorInput"></a>

```typescript
public readonly integrationSelectorInput: DataLineageConfigIngestionRuleIntegrationSelector;
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleIntegrationSelector">DataLineageConfigIngestionRuleIntegrationSelector</a>

---

##### `lineageEnablementInput`<sup>Optional</sup> <a name="lineageEnablementInput" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.property.lineageEnablementInput"></a>

```typescript
public readonly lineageEnablementInput: DataLineageConfigIngestionRuleLineageEnablement;
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleLineageEnablement">DataLineageConfigIngestionRuleLineageEnablement</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataLineageConfigIngestionRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigIngestionRule">DataLineageConfigIngestionRule</a>

---


### DataLineageConfigTimeoutsOutputReference <a name="DataLineageConfigTimeoutsOutputReference" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataLineageConfig } from '@cdktn/provider-google'

new dataLineageConfig.DataLineageConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeouts">DataLineageConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataLineageConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageConfig.DataLineageConfigTimeouts">DataLineageConfigTimeouts</a>

---



