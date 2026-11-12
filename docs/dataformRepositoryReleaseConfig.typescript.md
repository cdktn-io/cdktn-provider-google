# `dataformRepositoryReleaseConfig` Submodule <a name="`dataformRepositoryReleaseConfig` Submodule" id="@cdktn/provider-google.dataformRepositoryReleaseConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataformRepositoryReleaseConfig <a name="DataformRepositoryReleaseConfig" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config google_dataform_repository_release_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer"></a>

```typescript
import { dataformRepositoryReleaseConfig } from '@cdktn/provider-google'

new dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig(scope: Construct, id: string, config: DataformRepositoryReleaseConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig">DataformRepositoryReleaseConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig">DataformRepositoryReleaseConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.putCodeCompilationConfig">putCodeCompilationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetCodeCompilationConfig">resetCodeCompilationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetCronSchedule">resetCronSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetRepository">resetRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCodeCompilationConfig` <a name="putCodeCompilationConfig" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.putCodeCompilationConfig"></a>

```typescript
public putCodeCompilationConfig(value: DataformRepositoryReleaseConfigCodeCompilationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.putCodeCompilationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig">DataformRepositoryReleaseConfigCodeCompilationConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: DataformRepositoryReleaseConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts">DataformRepositoryReleaseConfigTimeouts</a>

---

##### `resetCodeCompilationConfig` <a name="resetCodeCompilationConfig" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetCodeCompilationConfig"></a>

```typescript
public resetCodeCompilationConfig(): void
```

##### `resetCronSchedule` <a name="resetCronSchedule" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetCronSchedule"></a>

```typescript
public resetCronSchedule(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRepository` <a name="resetRepository" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetRepository"></a>

```typescript
public resetRepository(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.resetTimeZone"></a>

```typescript
public resetTimeZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataformRepositoryReleaseConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.isConstruct"></a>

```typescript
import { dataformRepositoryReleaseConfig } from '@cdktn/provider-google'

dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.isTerraformElement"></a>

```typescript
import { dataformRepositoryReleaseConfig } from '@cdktn/provider-google'

dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.isTerraformResource"></a>

```typescript
import { dataformRepositoryReleaseConfig } from '@cdktn/provider-google'

dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.generateConfigForImport"></a>

```typescript
import { dataformRepositoryReleaseConfig } from '@cdktn/provider-google'

dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataformRepositoryReleaseConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataformRepositoryReleaseConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataformRepositoryReleaseConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataformRepositoryReleaseConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.codeCompilationConfig">codeCompilationConfig</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference">DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.recentScheduledReleaseRecords">recentScheduledReleaseRecords</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList">DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference">DataformRepositoryReleaseConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.codeCompilationConfigInput">codeCompilationConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig">DataformRepositoryReleaseConfigCodeCompilationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.cronScheduleInput">cronScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.gitCommitishInput">gitCommitishInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.repositoryInput">repositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts">DataformRepositoryReleaseConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.cronSchedule">cronSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.gitCommitish">gitCommitish</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.repository">repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `codeCompilationConfig`<sup>Required</sup> <a name="codeCompilationConfig" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.codeCompilationConfig"></a>

```typescript
public readonly codeCompilationConfig: DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference">DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference</a>

---

##### `recentScheduledReleaseRecords`<sup>Required</sup> <a name="recentScheduledReleaseRecords" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.recentScheduledReleaseRecords"></a>

```typescript
public readonly recentScheduledReleaseRecords: DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList;
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList">DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataformRepositoryReleaseConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference">DataformRepositoryReleaseConfigTimeoutsOutputReference</a>

---

##### `codeCompilationConfigInput`<sup>Optional</sup> <a name="codeCompilationConfigInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.codeCompilationConfigInput"></a>

```typescript
public readonly codeCompilationConfigInput: DataformRepositoryReleaseConfigCodeCompilationConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig">DataformRepositoryReleaseConfigCodeCompilationConfig</a>

---

##### `cronScheduleInput`<sup>Optional</sup> <a name="cronScheduleInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.cronScheduleInput"></a>

```typescript
public readonly cronScheduleInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `gitCommitishInput`<sup>Optional</sup> <a name="gitCommitishInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.gitCommitishInput"></a>

```typescript
public readonly gitCommitishInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.repositoryInput"></a>

```typescript
public readonly repositoryInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataformRepositoryReleaseConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts">DataformRepositoryReleaseConfigTimeouts</a>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `cronSchedule`<sup>Required</sup> <a name="cronSchedule" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.cronSchedule"></a>

```typescript
public readonly cronSchedule: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `gitCommitish`<sup>Required</sup> <a name="gitCommitish" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.gitCommitish"></a>

```typescript
public readonly gitCommitish: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataformRepositoryReleaseConfigCodeCompilationConfig <a name="DataformRepositoryReleaseConfigCodeCompilationConfig" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.Initializer"></a>

```typescript
import { dataformRepositoryReleaseConfig } from '@cdktn/provider-google'

const dataformRepositoryReleaseConfigCodeCompilationConfig: dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.assertionSchema">assertionSchema</a></code> | <code>string</code> | Optional. The default schema (BigQuery dataset ID) for assertions. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.databaseSuffix">databaseSuffix</a></code> | <code>string</code> | Optional. The suffix that should be appended to all database (Google Cloud project ID) names. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.defaultDatabase">defaultDatabase</a></code> | <code>string</code> | Optional. The default database (Google Cloud project ID). |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.defaultLocation">defaultLocation</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.defaultSchema">defaultSchema</a></code> | <code>string</code> | Optional. The default schema (BigQuery dataset ID). |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.schemaSuffix">schemaSuffix</a></code> | <code>string</code> | Optional. The suffix that should be appended to all schema (BigQuery dataset ID) names. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.tablePrefix">tablePrefix</a></code> | <code>string</code> | Optional. The prefix that should be prepended to all table names. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.vars">vars</a></code> | <code>{[ key: string ]: string}</code> | Optional. |

---

##### `assertionSchema`<sup>Optional</sup> <a name="assertionSchema" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.assertionSchema"></a>

```typescript
public readonly assertionSchema: string;
```

- *Type:* string

Optional. The default schema (BigQuery dataset ID) for assertions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#assertion_schema DataformRepositoryReleaseConfig#assertion_schema}

---

##### `databaseSuffix`<sup>Optional</sup> <a name="databaseSuffix" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.databaseSuffix"></a>

```typescript
public readonly databaseSuffix: string;
```

- *Type:* string

Optional. The suffix that should be appended to all database (Google Cloud project ID) names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#database_suffix DataformRepositoryReleaseConfig#database_suffix}

---

##### `defaultDatabase`<sup>Optional</sup> <a name="defaultDatabase" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.defaultDatabase"></a>

```typescript
public readonly defaultDatabase: string;
```

- *Type:* string

Optional. The default database (Google Cloud project ID).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#default_database DataformRepositoryReleaseConfig#default_database}

---

##### `defaultLocation`<sup>Optional</sup> <a name="defaultLocation" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.defaultLocation"></a>

```typescript
public readonly defaultLocation: string;
```

- *Type:* string

Optional.

The default BigQuery location to use. Defaults to "US".
See the BigQuery docs for a full list of locations: https://cloud.google.com/bigquery/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#default_location DataformRepositoryReleaseConfig#default_location}

---

##### `defaultSchema`<sup>Optional</sup> <a name="defaultSchema" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.defaultSchema"></a>

```typescript
public readonly defaultSchema: string;
```

- *Type:* string

Optional. The default schema (BigQuery dataset ID).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#default_schema DataformRepositoryReleaseConfig#default_schema}

---

##### `schemaSuffix`<sup>Optional</sup> <a name="schemaSuffix" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.schemaSuffix"></a>

```typescript
public readonly schemaSuffix: string;
```

- *Type:* string

Optional. The suffix that should be appended to all schema (BigQuery dataset ID) names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#schema_suffix DataformRepositoryReleaseConfig#schema_suffix}

---

##### `tablePrefix`<sup>Optional</sup> <a name="tablePrefix" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.tablePrefix"></a>

```typescript
public readonly tablePrefix: string;
```

- *Type:* string

Optional. The prefix that should be prepended to all table names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#table_prefix DataformRepositoryReleaseConfig#table_prefix}

---

##### `vars`<sup>Optional</sup> <a name="vars" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig.property.vars"></a>

```typescript
public readonly vars: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional.

User-defined variables that are made available to project code during compilation.
An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#vars DataformRepositoryReleaseConfig#vars}

---

### DataformRepositoryReleaseConfigConfig <a name="DataformRepositoryReleaseConfigConfig" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.Initializer"></a>

```typescript
import { dataformRepositoryReleaseConfig } from '@cdktn/provider-google'

const dataformRepositoryReleaseConfigConfig: dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.gitCommitish">gitCommitish</a></code> | <code>string</code> | Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.name">name</a></code> | <code>string</code> | The release's name. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.codeCompilationConfig">codeCompilationConfig</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig">DataformRepositoryReleaseConfigCodeCompilationConfig</a></code> | code_compilation_config block. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.cronSchedule">cronSchedule</a></code> | <code>string</code> | Optional. Optional schedule (in cron format) for automatic creation of compilation results. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Disables automatic creation of compilation results. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#id DataformRepositoryReleaseConfig#id}. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#project DataformRepositoryReleaseConfig#project}. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.region">region</a></code> | <code>string</code> | A reference to the region. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.repository">repository</a></code> | <code>string</code> | A reference to the Dataform repository. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts">DataformRepositoryReleaseConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.timeZone">timeZone</a></code> | <code>string</code> | Optional. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `gitCommitish`<sup>Required</sup> <a name="gitCommitish" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.gitCommitish"></a>

```typescript
public readonly gitCommitish: string;
```

- *Type:* string

Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#git_commitish DataformRepositoryReleaseConfig#git_commitish}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The release's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#name DataformRepositoryReleaseConfig#name}

---

##### `codeCompilationConfig`<sup>Optional</sup> <a name="codeCompilationConfig" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.codeCompilationConfig"></a>

```typescript
public readonly codeCompilationConfig: DataformRepositoryReleaseConfigCodeCompilationConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig">DataformRepositoryReleaseConfigCodeCompilationConfig</a>

code_compilation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#code_compilation_config DataformRepositoryReleaseConfig#code_compilation_config}

---

##### `cronSchedule`<sup>Optional</sup> <a name="cronSchedule" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.cronSchedule"></a>

```typescript
public readonly cronSchedule: string;
```

- *Type:* string

Optional. Optional schedule (in cron format) for automatic creation of compilation results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#cron_schedule DataformRepositoryReleaseConfig#cron_schedule}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#deletion_policy DataformRepositoryReleaseConfig#deletion_policy}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Disables automatic creation of compilation results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#disabled DataformRepositoryReleaseConfig#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#id DataformRepositoryReleaseConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#project DataformRepositoryReleaseConfig#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

A reference to the region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#region DataformRepositoryReleaseConfig#region}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

A reference to the Dataform repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#repository DataformRepositoryReleaseConfig#repository}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataformRepositoryReleaseConfigTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts">DataformRepositoryReleaseConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#timeouts DataformRepositoryReleaseConfig#timeouts}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigConfig.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

Optional.

Specifies the time zone to be used when interpreting cronSchedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#time_zone DataformRepositoryReleaseConfig#time_zone}

---

### DataformRepositoryReleaseConfigRecentScheduledReleaseRecords <a name="DataformRepositoryReleaseConfigRecentScheduledReleaseRecords" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecords"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecords.Initializer"></a>

```typescript
import { dataformRepositoryReleaseConfig } from '@cdktn/provider-google'

const dataformRepositoryReleaseConfigRecentScheduledReleaseRecords: dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecords = { ... }
```


### DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus <a name="DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus.Initializer"></a>

```typescript
import { dataformRepositoryReleaseConfig } from '@cdktn/provider-google'

const dataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus: dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus = { ... }
```


### DataformRepositoryReleaseConfigTimeouts <a name="DataformRepositoryReleaseConfigTimeouts" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts.Initializer"></a>

```typescript
import { dataformRepositoryReleaseConfig } from '@cdktn/provider-google'

const dataformRepositoryReleaseConfigTimeouts: dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#create DataformRepositoryReleaseConfig#create}. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#delete DataformRepositoryReleaseConfig#delete}. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#update DataformRepositoryReleaseConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#create DataformRepositoryReleaseConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#delete DataformRepositoryReleaseConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#update DataformRepositoryReleaseConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference <a name="DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.Initializer"></a>

```typescript
import { dataformRepositoryReleaseConfig } from '@cdktn/provider-google'

new dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetAssertionSchema">resetAssertionSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetDatabaseSuffix">resetDatabaseSuffix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetDefaultDatabase">resetDefaultDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetDefaultLocation">resetDefaultLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetDefaultSchema">resetDefaultSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetSchemaSuffix">resetSchemaSuffix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetTablePrefix">resetTablePrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetVars">resetVars</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAssertionSchema` <a name="resetAssertionSchema" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetAssertionSchema"></a>

```typescript
public resetAssertionSchema(): void
```

##### `resetDatabaseSuffix` <a name="resetDatabaseSuffix" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetDatabaseSuffix"></a>

```typescript
public resetDatabaseSuffix(): void
```

##### `resetDefaultDatabase` <a name="resetDefaultDatabase" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetDefaultDatabase"></a>

```typescript
public resetDefaultDatabase(): void
```

##### `resetDefaultLocation` <a name="resetDefaultLocation" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetDefaultLocation"></a>

```typescript
public resetDefaultLocation(): void
```

##### `resetDefaultSchema` <a name="resetDefaultSchema" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetDefaultSchema"></a>

```typescript
public resetDefaultSchema(): void
```

##### `resetSchemaSuffix` <a name="resetSchemaSuffix" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetSchemaSuffix"></a>

```typescript
public resetSchemaSuffix(): void
```

##### `resetTablePrefix` <a name="resetTablePrefix" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetTablePrefix"></a>

```typescript
public resetTablePrefix(): void
```

##### `resetVars` <a name="resetVars" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetVars"></a>

```typescript
public resetVars(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.assertionSchemaInput">assertionSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.databaseSuffixInput">databaseSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultDatabaseInput">defaultDatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultLocationInput">defaultLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultSchemaInput">defaultSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.schemaSuffixInput">schemaSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.tablePrefixInput">tablePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.varsInput">varsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.assertionSchema">assertionSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.databaseSuffix">databaseSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultDatabase">defaultDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultLocation">defaultLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultSchema">defaultSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.schemaSuffix">schemaSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.tablePrefix">tablePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.vars">vars</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig">DataformRepositoryReleaseConfigCodeCompilationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `assertionSchemaInput`<sup>Optional</sup> <a name="assertionSchemaInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.assertionSchemaInput"></a>

```typescript
public readonly assertionSchemaInput: string;
```

- *Type:* string

---

##### `databaseSuffixInput`<sup>Optional</sup> <a name="databaseSuffixInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.databaseSuffixInput"></a>

```typescript
public readonly databaseSuffixInput: string;
```

- *Type:* string

---

##### `defaultDatabaseInput`<sup>Optional</sup> <a name="defaultDatabaseInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultDatabaseInput"></a>

```typescript
public readonly defaultDatabaseInput: string;
```

- *Type:* string

---

##### `defaultLocationInput`<sup>Optional</sup> <a name="defaultLocationInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultLocationInput"></a>

```typescript
public readonly defaultLocationInput: string;
```

- *Type:* string

---

##### `defaultSchemaInput`<sup>Optional</sup> <a name="defaultSchemaInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultSchemaInput"></a>

```typescript
public readonly defaultSchemaInput: string;
```

- *Type:* string

---

##### `schemaSuffixInput`<sup>Optional</sup> <a name="schemaSuffixInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.schemaSuffixInput"></a>

```typescript
public readonly schemaSuffixInput: string;
```

- *Type:* string

---

##### `tablePrefixInput`<sup>Optional</sup> <a name="tablePrefixInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.tablePrefixInput"></a>

```typescript
public readonly tablePrefixInput: string;
```

- *Type:* string

---

##### `varsInput`<sup>Optional</sup> <a name="varsInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.varsInput"></a>

```typescript
public readonly varsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `assertionSchema`<sup>Required</sup> <a name="assertionSchema" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.assertionSchema"></a>

```typescript
public readonly assertionSchema: string;
```

- *Type:* string

---

##### `databaseSuffix`<sup>Required</sup> <a name="databaseSuffix" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.databaseSuffix"></a>

```typescript
public readonly databaseSuffix: string;
```

- *Type:* string

---

##### `defaultDatabase`<sup>Required</sup> <a name="defaultDatabase" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultDatabase"></a>

```typescript
public readonly defaultDatabase: string;
```

- *Type:* string

---

##### `defaultLocation`<sup>Required</sup> <a name="defaultLocation" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultLocation"></a>

```typescript
public readonly defaultLocation: string;
```

- *Type:* string

---

##### `defaultSchema`<sup>Required</sup> <a name="defaultSchema" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultSchema"></a>

```typescript
public readonly defaultSchema: string;
```

- *Type:* string

---

##### `schemaSuffix`<sup>Required</sup> <a name="schemaSuffix" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.schemaSuffix"></a>

```typescript
public readonly schemaSuffix: string;
```

- *Type:* string

---

##### `tablePrefix`<sup>Required</sup> <a name="tablePrefix" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.tablePrefix"></a>

```typescript
public readonly tablePrefix: string;
```

- *Type:* string

---

##### `vars`<sup>Required</sup> <a name="vars" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.vars"></a>

```typescript
public readonly vars: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataformRepositoryReleaseConfigCodeCompilationConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigCodeCompilationConfig">DataformRepositoryReleaseConfigCodeCompilationConfig</a>

---


### DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList <a name="DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.Initializer"></a>

```typescript
import { dataformRepositoryReleaseConfig } from '@cdktn/provider-google'

new dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.get"></a>

```typescript
public get(index: number): DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference <a name="DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.Initializer"></a>

```typescript
import { dataformRepositoryReleaseConfig } from '@cdktn/provider-google'

new dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus">DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus;
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus">DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus</a>

---


### DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList <a name="DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.Initializer"></a>

```typescript
import { dataformRepositoryReleaseConfig } from '@cdktn/provider-google'

new dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.get"></a>

```typescript
public get(index: number): DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference <a name="DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.Initializer"></a>

```typescript
import { dataformRepositoryReleaseConfig } from '@cdktn/provider-google'

new dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.compilationResult">compilationResult</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.errorStatus">errorStatus</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList">DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.releaseTime">releaseTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecords">DataformRepositoryReleaseConfigRecentScheduledReleaseRecords</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compilationResult`<sup>Required</sup> <a name="compilationResult" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.compilationResult"></a>

```typescript
public readonly compilationResult: string;
```

- *Type:* string

---

##### `errorStatus`<sup>Required</sup> <a name="errorStatus" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.errorStatus"></a>

```typescript
public readonly errorStatus: DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList;
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList">DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList</a>

---

##### `releaseTime`<sup>Required</sup> <a name="releaseTime" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.releaseTime"></a>

```typescript
public readonly releaseTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataformRepositoryReleaseConfigRecentScheduledReleaseRecords;
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigRecentScheduledReleaseRecords">DataformRepositoryReleaseConfigRecentScheduledReleaseRecords</a>

---


### DataformRepositoryReleaseConfigTimeoutsOutputReference <a name="DataformRepositoryReleaseConfigTimeoutsOutputReference" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataformRepositoryReleaseConfig } from '@cdktn/provider-google'

new dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts">DataformRepositoryReleaseConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataformRepositoryReleaseConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataformRepositoryReleaseConfig.DataformRepositoryReleaseConfigTimeouts">DataformRepositoryReleaseConfigTimeouts</a>

---



