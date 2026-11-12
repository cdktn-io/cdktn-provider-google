# `dataformRepositoryWorkflowConfig` Submodule <a name="`dataformRepositoryWorkflowConfig` Submodule" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataformRepositoryWorkflowConfig <a name="DataformRepositoryWorkflowConfig" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config google_dataform_repository_workflow_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer"></a>

```typescript
import { dataformRepositoryWorkflowConfig } from '@cdktn/provider-google'

new dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig(scope: Construct, id: string, config: DataformRepositoryWorkflowConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig">DataformRepositoryWorkflowConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig">DataformRepositoryWorkflowConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.putInvocationConfig">putInvocationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetCronSchedule">resetCronSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetInvocationConfig">resetInvocationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetRepository">resetRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInvocationConfig` <a name="putInvocationConfig" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.putInvocationConfig"></a>

```typescript
public putInvocationConfig(value: DataformRepositoryWorkflowConfigInvocationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.putInvocationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig">DataformRepositoryWorkflowConfigInvocationConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: DataformRepositoryWorkflowConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts">DataformRepositoryWorkflowConfigTimeouts</a>

---

##### `resetCronSchedule` <a name="resetCronSchedule" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetCronSchedule"></a>

```typescript
public resetCronSchedule(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInvocationConfig` <a name="resetInvocationConfig" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetInvocationConfig"></a>

```typescript
public resetInvocationConfig(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRepository` <a name="resetRepository" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetRepository"></a>

```typescript
public resetRepository(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetTimeZone"></a>

```typescript
public resetTimeZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataformRepositoryWorkflowConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.isConstruct"></a>

```typescript
import { dataformRepositoryWorkflowConfig } from '@cdktn/provider-google'

dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.isTerraformElement"></a>

```typescript
import { dataformRepositoryWorkflowConfig } from '@cdktn/provider-google'

dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.isTerraformResource"></a>

```typescript
import { dataformRepositoryWorkflowConfig } from '@cdktn/provider-google'

dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.generateConfigForImport"></a>

```typescript
import { dataformRepositoryWorkflowConfig } from '@cdktn/provider-google'

dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataformRepositoryWorkflowConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataformRepositoryWorkflowConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataformRepositoryWorkflowConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataformRepositoryWorkflowConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.invocationConfig">invocationConfig</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference">DataformRepositoryWorkflowConfigInvocationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.recentScheduledExecutionRecords">recentScheduledExecutionRecords</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList">DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference">DataformRepositoryWorkflowConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.cronScheduleInput">cronScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.invocationConfigInput">invocationConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig">DataformRepositoryWorkflowConfigInvocationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.releaseConfigInput">releaseConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.repositoryInput">repositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts">DataformRepositoryWorkflowConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.cronSchedule">cronSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.releaseConfig">releaseConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.repository">repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `invocationConfig`<sup>Required</sup> <a name="invocationConfig" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.invocationConfig"></a>

```typescript
public readonly invocationConfig: DataformRepositoryWorkflowConfigInvocationConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference">DataformRepositoryWorkflowConfigInvocationConfigOutputReference</a>

---

##### `recentScheduledExecutionRecords`<sup>Required</sup> <a name="recentScheduledExecutionRecords" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.recentScheduledExecutionRecords"></a>

```typescript
public readonly recentScheduledExecutionRecords: DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList;
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList">DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataformRepositoryWorkflowConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference">DataformRepositoryWorkflowConfigTimeoutsOutputReference</a>

---

##### `cronScheduleInput`<sup>Optional</sup> <a name="cronScheduleInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.cronScheduleInput"></a>

```typescript
public readonly cronScheduleInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `invocationConfigInput`<sup>Optional</sup> <a name="invocationConfigInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.invocationConfigInput"></a>

```typescript
public readonly invocationConfigInput: DataformRepositoryWorkflowConfigInvocationConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig">DataformRepositoryWorkflowConfigInvocationConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `releaseConfigInput`<sup>Optional</sup> <a name="releaseConfigInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.releaseConfigInput"></a>

```typescript
public readonly releaseConfigInput: string;
```

- *Type:* string

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.repositoryInput"></a>

```typescript
public readonly repositoryInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataformRepositoryWorkflowConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts">DataformRepositoryWorkflowConfigTimeouts</a>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `cronSchedule`<sup>Required</sup> <a name="cronSchedule" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.cronSchedule"></a>

```typescript
public readonly cronSchedule: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `releaseConfig`<sup>Required</sup> <a name="releaseConfig" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.releaseConfig"></a>

```typescript
public readonly releaseConfig: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataformRepositoryWorkflowConfigConfig <a name="DataformRepositoryWorkflowConfigConfig" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.Initializer"></a>

```typescript
import { dataformRepositoryWorkflowConfig } from '@cdktn/provider-google'

const dataformRepositoryWorkflowConfigConfig: dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.name">name</a></code> | <code>string</code> | The workflow's name. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.releaseConfig">releaseConfig</a></code> | <code>string</code> | The name of the release config whose releaseCompilationResult should be executed. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.cronSchedule">cronSchedule</a></code> | <code>string</code> | Optional. Optional schedule (in cron format) for automatic creation of compilation results. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Disables automatic creation of workflow invocations. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#id DataformRepositoryWorkflowConfig#id}. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.invocationConfig">invocationConfig</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig">DataformRepositoryWorkflowConfigInvocationConfig</a></code> | invocation_config block. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#project DataformRepositoryWorkflowConfig#project}. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.region">region</a></code> | <code>string</code> | A reference to the region. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.repository">repository</a></code> | <code>string</code> | A reference to the Dataform repository. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts">DataformRepositoryWorkflowConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.timeZone">timeZone</a></code> | <code>string</code> | Optional. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The workflow's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#name DataformRepositoryWorkflowConfig#name}

---

##### `releaseConfig`<sup>Required</sup> <a name="releaseConfig" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.releaseConfig"></a>

```typescript
public readonly releaseConfig: string;
```

- *Type:* string

The name of the release config whose releaseCompilationResult should be executed.

Must be in the format projects/* /locations/* /repositories/* /releaseConfigs/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#release_config DataformRepositoryWorkflowConfig#release_config}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `cronSchedule`<sup>Optional</sup> <a name="cronSchedule" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.cronSchedule"></a>

```typescript
public readonly cronSchedule: string;
```

- *Type:* string

Optional. Optional schedule (in cron format) for automatic creation of compilation results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#cron_schedule DataformRepositoryWorkflowConfig#cron_schedule}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#deletion_policy DataformRepositoryWorkflowConfig#deletion_policy}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Disables automatic creation of workflow invocations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#disabled DataformRepositoryWorkflowConfig#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#id DataformRepositoryWorkflowConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `invocationConfig`<sup>Optional</sup> <a name="invocationConfig" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.invocationConfig"></a>

```typescript
public readonly invocationConfig: DataformRepositoryWorkflowConfigInvocationConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig">DataformRepositoryWorkflowConfigInvocationConfig</a>

invocation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#invocation_config DataformRepositoryWorkflowConfig#invocation_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#project DataformRepositoryWorkflowConfig#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

A reference to the region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#region DataformRepositoryWorkflowConfig#region}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

A reference to the Dataform repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#repository DataformRepositoryWorkflowConfig#repository}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataformRepositoryWorkflowConfigTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts">DataformRepositoryWorkflowConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#timeouts DataformRepositoryWorkflowConfig#timeouts}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

Optional.

Specifies the time zone to be used when interpreting cronSchedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#time_zone DataformRepositoryWorkflowConfig#time_zone}

---

### DataformRepositoryWorkflowConfigInvocationConfig <a name="DataformRepositoryWorkflowConfigInvocationConfig" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig.Initializer"></a>

```typescript
import { dataformRepositoryWorkflowConfig } from '@cdktn/provider-google'

const dataformRepositoryWorkflowConfigInvocationConfig: dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig.property.fullyRefreshIncrementalTablesEnabled">fullyRefreshIncrementalTablesEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Optional. When set to true, any incremental tables will be fully refreshed. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig.property.includedTags">includedTags</a></code> | <code>string[]</code> | Optional. The set of tags to include. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig.property.includedTargets">includedTargets</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets">DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets</a>[]</code> | included_targets block. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | Optional. The service account to run workflow invocations under. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig.property.transitiveDependenciesIncluded">transitiveDependenciesIncluded</a></code> | <code>boolean \| cdktn.IResolvable</code> | Optional. When set to true, transitive dependencies of included actions will be executed. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig.property.transitiveDependentsIncluded">transitiveDependentsIncluded</a></code> | <code>boolean \| cdktn.IResolvable</code> | Optional. When set to true, transitive dependents of included actions will be executed. |

---

##### `fullyRefreshIncrementalTablesEnabled`<sup>Optional</sup> <a name="fullyRefreshIncrementalTablesEnabled" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig.property.fullyRefreshIncrementalTablesEnabled"></a>

```typescript
public readonly fullyRefreshIncrementalTablesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Optional. When set to true, any incremental tables will be fully refreshed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#fully_refresh_incremental_tables_enabled DataformRepositoryWorkflowConfig#fully_refresh_incremental_tables_enabled}

---

##### `includedTags`<sup>Optional</sup> <a name="includedTags" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig.property.includedTags"></a>

```typescript
public readonly includedTags: string[];
```

- *Type:* string[]

Optional. The set of tags to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#included_tags DataformRepositoryWorkflowConfig#included_tags}

---

##### `includedTargets`<sup>Optional</sup> <a name="includedTargets" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig.property.includedTargets"></a>

```typescript
public readonly includedTargets: IResolvable | DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets">DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets</a>[]

included_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#included_targets DataformRepositoryWorkflowConfig#included_targets}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

Optional. The service account to run workflow invocations under.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#service_account DataformRepositoryWorkflowConfig#service_account}

---

##### `transitiveDependenciesIncluded`<sup>Optional</sup> <a name="transitiveDependenciesIncluded" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig.property.transitiveDependenciesIncluded"></a>

```typescript
public readonly transitiveDependenciesIncluded: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Optional. When set to true, transitive dependencies of included actions will be executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#transitive_dependencies_included DataformRepositoryWorkflowConfig#transitive_dependencies_included}

---

##### `transitiveDependentsIncluded`<sup>Optional</sup> <a name="transitiveDependentsIncluded" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig.property.transitiveDependentsIncluded"></a>

```typescript
public readonly transitiveDependentsIncluded: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Optional. When set to true, transitive dependents of included actions will be executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#transitive_dependents_included DataformRepositoryWorkflowConfig#transitive_dependents_included}

---

### DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets <a name="DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets.Initializer"></a>

```typescript
import { dataformRepositoryWorkflowConfig } from '@cdktn/provider-google'

const dataformRepositoryWorkflowConfigInvocationConfigIncludedTargets: dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets.property.database">database</a></code> | <code>string</code> | The action's database (Google Cloud project ID). |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets.property.name">name</a></code> | <code>string</code> | The action's name, within database and schema. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets.property.schema">schema</a></code> | <code>string</code> | The action's schema (BigQuery dataset ID), within database. |

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

The action's database (Google Cloud project ID).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#database DataformRepositoryWorkflowConfig#database}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The action's name, within database and schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#name DataformRepositoryWorkflowConfig#name}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

The action's schema (BigQuery dataset ID), within database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#schema DataformRepositoryWorkflowConfig#schema}

---

### DataformRepositoryWorkflowConfigRecentScheduledExecutionRecords <a name="DataformRepositoryWorkflowConfigRecentScheduledExecutionRecords" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecords"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecords.Initializer"></a>

```typescript
import { dataformRepositoryWorkflowConfig } from '@cdktn/provider-google'

const dataformRepositoryWorkflowConfigRecentScheduledExecutionRecords: dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecords = { ... }
```


### DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus <a name="DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus.Initializer"></a>

```typescript
import { dataformRepositoryWorkflowConfig } from '@cdktn/provider-google'

const dataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus: dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus = { ... }
```


### DataformRepositoryWorkflowConfigTimeouts <a name="DataformRepositoryWorkflowConfigTimeouts" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts.Initializer"></a>

```typescript
import { dataformRepositoryWorkflowConfig } from '@cdktn/provider-google'

const dataformRepositoryWorkflowConfigTimeouts: dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#create DataformRepositoryWorkflowConfig#create}. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#delete DataformRepositoryWorkflowConfig#delete}. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#update DataformRepositoryWorkflowConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#create DataformRepositoryWorkflowConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#delete DataformRepositoryWorkflowConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#update DataformRepositoryWorkflowConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList <a name="DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.Initializer"></a>

```typescript
import { dataformRepositoryWorkflowConfig } from '@cdktn/provider-google'

new dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.get"></a>

```typescript
public get(index: number): DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets">DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets">DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets</a>[]

---


### DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference <a name="DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.Initializer"></a>

```typescript
import { dataformRepositoryWorkflowConfig } from '@cdktn/provider-google'

new dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.resetSchema">resetSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatabase` <a name="resetDatabase" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.resetDatabase"></a>

```typescript
public resetDatabase(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetSchema` <a name="resetSchema" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.resetSchema"></a>

```typescript
public resetSchema(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets">DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets">DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets</a>

---


### DataformRepositoryWorkflowConfigInvocationConfigOutputReference <a name="DataformRepositoryWorkflowConfigInvocationConfigOutputReference" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.Initializer"></a>

```typescript
import { dataformRepositoryWorkflowConfig } from '@cdktn/provider-google'

new dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.putIncludedTargets">putIncludedTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetFullyRefreshIncrementalTablesEnabled">resetFullyRefreshIncrementalTablesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetIncludedTags">resetIncludedTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetIncludedTargets">resetIncludedTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetTransitiveDependenciesIncluded">resetTransitiveDependenciesIncluded</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetTransitiveDependentsIncluded">resetTransitiveDependentsIncluded</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIncludedTargets` <a name="putIncludedTargets" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.putIncludedTargets"></a>

```typescript
public putIncludedTargets(value: IResolvable | DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.putIncludedTargets.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets">DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets</a>[]

---

##### `resetFullyRefreshIncrementalTablesEnabled` <a name="resetFullyRefreshIncrementalTablesEnabled" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetFullyRefreshIncrementalTablesEnabled"></a>

```typescript
public resetFullyRefreshIncrementalTablesEnabled(): void
```

##### `resetIncludedTags` <a name="resetIncludedTags" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetIncludedTags"></a>

```typescript
public resetIncludedTags(): void
```

##### `resetIncludedTargets` <a name="resetIncludedTargets" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetIncludedTargets"></a>

```typescript
public resetIncludedTargets(): void
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetServiceAccount"></a>

```typescript
public resetServiceAccount(): void
```

##### `resetTransitiveDependenciesIncluded` <a name="resetTransitiveDependenciesIncluded" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetTransitiveDependenciesIncluded"></a>

```typescript
public resetTransitiveDependenciesIncluded(): void
```

##### `resetTransitiveDependentsIncluded` <a name="resetTransitiveDependentsIncluded" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetTransitiveDependentsIncluded"></a>

```typescript
public resetTransitiveDependentsIncluded(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.includedTargets">includedTargets</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList">DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.fullyRefreshIncrementalTablesEnabledInput">fullyRefreshIncrementalTablesEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.includedTagsInput">includedTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.includedTargetsInput">includedTargetsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets">DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.transitiveDependenciesIncludedInput">transitiveDependenciesIncludedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.transitiveDependentsIncludedInput">transitiveDependentsIncludedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.fullyRefreshIncrementalTablesEnabled">fullyRefreshIncrementalTablesEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.includedTags">includedTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.transitiveDependenciesIncluded">transitiveDependenciesIncluded</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.transitiveDependentsIncluded">transitiveDependentsIncluded</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig">DataformRepositoryWorkflowConfigInvocationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includedTargets`<sup>Required</sup> <a name="includedTargets" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.includedTargets"></a>

```typescript
public readonly includedTargets: DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList;
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList">DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList</a>

---

##### `fullyRefreshIncrementalTablesEnabledInput`<sup>Optional</sup> <a name="fullyRefreshIncrementalTablesEnabledInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.fullyRefreshIncrementalTablesEnabledInput"></a>

```typescript
public readonly fullyRefreshIncrementalTablesEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `includedTagsInput`<sup>Optional</sup> <a name="includedTagsInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.includedTagsInput"></a>

```typescript
public readonly includedTagsInput: string[];
```

- *Type:* string[]

---

##### `includedTargetsInput`<sup>Optional</sup> <a name="includedTargetsInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.includedTargetsInput"></a>

```typescript
public readonly includedTargetsInput: IResolvable | DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets">DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets</a>[]

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `transitiveDependenciesIncludedInput`<sup>Optional</sup> <a name="transitiveDependenciesIncludedInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.transitiveDependenciesIncludedInput"></a>

```typescript
public readonly transitiveDependenciesIncludedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `transitiveDependentsIncludedInput`<sup>Optional</sup> <a name="transitiveDependentsIncludedInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.transitiveDependentsIncludedInput"></a>

```typescript
public readonly transitiveDependentsIncludedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `fullyRefreshIncrementalTablesEnabled`<sup>Required</sup> <a name="fullyRefreshIncrementalTablesEnabled" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.fullyRefreshIncrementalTablesEnabled"></a>

```typescript
public readonly fullyRefreshIncrementalTablesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `includedTags`<sup>Required</sup> <a name="includedTags" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.includedTags"></a>

```typescript
public readonly includedTags: string[];
```

- *Type:* string[]

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `transitiveDependenciesIncluded`<sup>Required</sup> <a name="transitiveDependenciesIncluded" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.transitiveDependenciesIncluded"></a>

```typescript
public readonly transitiveDependenciesIncluded: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `transitiveDependentsIncluded`<sup>Required</sup> <a name="transitiveDependentsIncluded" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.transitiveDependentsIncluded"></a>

```typescript
public readonly transitiveDependentsIncluded: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataformRepositoryWorkflowConfigInvocationConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig">DataformRepositoryWorkflowConfigInvocationConfig</a>

---


### DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList <a name="DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.Initializer"></a>

```typescript
import { dataformRepositoryWorkflowConfig } from '@cdktn/provider-google'

new dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.get"></a>

```typescript
public get(index: number): DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference <a name="DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.Initializer"></a>

```typescript
import { dataformRepositoryWorkflowConfig } from '@cdktn/provider-google'

new dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus">DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus;
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus">DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus</a>

---


### DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList <a name="DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.Initializer"></a>

```typescript
import { dataformRepositoryWorkflowConfig } from '@cdktn/provider-google'

new dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.get"></a>

```typescript
public get(index: number): DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference <a name="DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.Initializer"></a>

```typescript
import { dataformRepositoryWorkflowConfig } from '@cdktn/provider-google'

new dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.errorStatus">errorStatus</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList">DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.executionTime">executionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.workflowInvocation">workflowInvocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecords">DataformRepositoryWorkflowConfigRecentScheduledExecutionRecords</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `errorStatus`<sup>Required</sup> <a name="errorStatus" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.errorStatus"></a>

```typescript
public readonly errorStatus: DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList;
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList">DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList</a>

---

##### `executionTime`<sup>Required</sup> <a name="executionTime" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.executionTime"></a>

```typescript
public readonly executionTime: string;
```

- *Type:* string

---

##### `workflowInvocation`<sup>Required</sup> <a name="workflowInvocation" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.workflowInvocation"></a>

```typescript
public readonly workflowInvocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataformRepositoryWorkflowConfigRecentScheduledExecutionRecords;
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecords">DataformRepositoryWorkflowConfigRecentScheduledExecutionRecords</a>

---


### DataformRepositoryWorkflowConfigTimeoutsOutputReference <a name="DataformRepositoryWorkflowConfigTimeoutsOutputReference" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataformRepositoryWorkflowConfig } from '@cdktn/provider-google'

new dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts">DataformRepositoryWorkflowConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataformRepositoryWorkflowConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts">DataformRepositoryWorkflowConfigTimeouts</a>

---



