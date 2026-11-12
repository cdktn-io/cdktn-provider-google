# `dataLineageOpenLineageJob` Submodule <a name="`dataLineageOpenLineageJob` Submodule" id="@cdktn/provider-google.dataLineageOpenLineageJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataLineageOpenLineageJob <a name="DataLineageOpenLineageJob" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job google_data_lineage_open_lineage_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer"></a>

```typescript
import { dataLineageOpenLineageJob } from '@cdktn/provider-google'

new dataLineageOpenLineageJob.DataLineageOpenLineageJob(scope: Construct, id: string, config: DataLineageOpenLineageJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig">DataLineageOpenLineageJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig">DataLineageOpenLineageJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.putInput">putInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.putOutput">putOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetInput">resetInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetOutput">resetOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInput` <a name="putInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.putInput"></a>

```typescript
public putInput(value: IResolvable | DataLineageOpenLineageJobInput[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.putInput.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput">DataLineageOpenLineageJobInput</a>[]

---

##### `putOutput` <a name="putOutput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.putOutput"></a>

```typescript
public putOutput(value: IResolvable | DataLineageOpenLineageJobOutput[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.putOutput.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput">DataLineageOpenLineageJobOutput</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.putTimeouts"></a>

```typescript
public putTimeouts(value: DataLineageOpenLineageJobTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts">DataLineageOpenLineageJobTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInput` <a name="resetInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetInput"></a>

```typescript
public resetInput(): void
```

##### `resetOutput` <a name="resetOutput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetOutput"></a>

```typescript
public resetOutput(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataLineageOpenLineageJob resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.isConstruct"></a>

```typescript
import { dataLineageOpenLineageJob } from '@cdktn/provider-google'

dataLineageOpenLineageJob.DataLineageOpenLineageJob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.isTerraformElement"></a>

```typescript
import { dataLineageOpenLineageJob } from '@cdktn/provider-google'

dataLineageOpenLineageJob.DataLineageOpenLineageJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.isTerraformResource"></a>

```typescript
import { dataLineageOpenLineageJob } from '@cdktn/provider-google'

dataLineageOpenLineageJob.DataLineageOpenLineageJob.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.generateConfigForImport"></a>

```typescript
import { dataLineageOpenLineageJob } from '@cdktn/provider-google'

dataLineageOpenLineageJob.DataLineageOpenLineageJob.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataLineageOpenLineageJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataLineageOpenLineageJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataLineageOpenLineageJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataLineageOpenLineageJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.input">input</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList">DataLineageOpenLineageJobInputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.output">output</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList">DataLineageOpenLineageJobOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.process">process</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.run">run</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference">DataLineageOpenLineageJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.inputInput">inputInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput">DataLineageOpenLineageJobInput</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.outputInput">outputInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput">DataLineageOpenLineageJobOutput</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts">DataLineageOpenLineageJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.input"></a>

```typescript
public readonly input: DataLineageOpenLineageJobInputList;
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList">DataLineageOpenLineageJobInputList</a>

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.output"></a>

```typescript
public readonly output: DataLineageOpenLineageJobOutputList;
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList">DataLineageOpenLineageJobOutputList</a>

---

##### `process`<sup>Required</sup> <a name="process" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.process"></a>

```typescript
public readonly process: string;
```

- *Type:* string

---

##### `run`<sup>Required</sup> <a name="run" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.run"></a>

```typescript
public readonly run: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.timeouts"></a>

```typescript
public readonly timeouts: DataLineageOpenLineageJobTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference">DataLineageOpenLineageJobTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.inputInput"></a>

```typescript
public readonly inputInput: IResolvable | DataLineageOpenLineageJobInput[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput">DataLineageOpenLineageJobInput</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `outputInput`<sup>Optional</sup> <a name="outputInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.outputInput"></a>

```typescript
public readonly outputInput: IResolvable | DataLineageOpenLineageJobOutput[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput">DataLineageOpenLineageJobOutput</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataLineageOpenLineageJobTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts">DataLineageOpenLineageJobTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataLineageOpenLineageJobConfig <a name="DataLineageOpenLineageJobConfig" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.Initializer"></a>

```typescript
import { dataLineageOpenLineageJob } from '@cdktn/provider-google'

const dataLineageOpenLineageJobConfig: dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.name">name</a></code> | <code>string</code> | Name of the OpenLineage job. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.namespace">namespace</a></code> | <code>string</code> | Namespace of the OpenLineage job. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.description">description</a></code> | <code>string</code> | Description of the OpenLineage job. Changes to description do not trigger updates. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#id DataLineageOpenLineageJob#id}. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.input">input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput">DataLineageOpenLineageJobInput</a>[]</code> | input block. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.output">output</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput">DataLineageOpenLineageJobOutput</a>[]</code> | output block. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts">DataLineageOpenLineageJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the OpenLineage job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#name DataLineageOpenLineageJob#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Namespace of the OpenLineage job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#namespace DataLineageOpenLineageJob#namespace}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#deletion_policy DataLineageOpenLineageJob#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the OpenLineage job. Changes to description do not trigger updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#description DataLineageOpenLineageJob#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#id DataLineageOpenLineageJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.input"></a>

```typescript
public readonly input: IResolvable | DataLineageOpenLineageJobInput[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput">DataLineageOpenLineageJobInput</a>[]

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#input DataLineageOpenLineageJob#input}

---

##### `output`<sup>Optional</sup> <a name="output" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.output"></a>

```typescript
public readonly output: IResolvable | DataLineageOpenLineageJobOutput[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput">DataLineageOpenLineageJobOutput</a>[]

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#output DataLineageOpenLineageJob#output}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataLineageOpenLineageJobTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts">DataLineageOpenLineageJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#timeouts DataLineageOpenLineageJob#timeouts}

---

### DataLineageOpenLineageJobInput <a name="DataLineageOpenLineageJobInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput.Initializer"></a>

```typescript
import { dataLineageOpenLineageJob } from '@cdktn/provider-google'

const dataLineageOpenLineageJobInput: dataLineageOpenLineageJob.DataLineageOpenLineageJobInput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput.property.name">name</a></code> | <code>string</code> | Name of the dataset. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput.property.namespace">namespace</a></code> | <code>string</code> | Namespace of the dataset. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput.property.catalog">catalog</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog">DataLineageOpenLineageJobInputCatalog</a></code> | catalog block. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput.property.symlink">symlink</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink">DataLineageOpenLineageJobInputSymlink</a>[]</code> | symlink block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#name DataLineageOpenLineageJob#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Namespace of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#namespace DataLineageOpenLineageJob#namespace}

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput.property.catalog"></a>

```typescript
public readonly catalog: DataLineageOpenLineageJobInputCatalog;
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog">DataLineageOpenLineageJobInputCatalog</a>

catalog block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#catalog DataLineageOpenLineageJob#catalog}

---

##### `symlink`<sup>Optional</sup> <a name="symlink" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput.property.symlink"></a>

```typescript
public readonly symlink: IResolvable | DataLineageOpenLineageJobInputSymlink[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink">DataLineageOpenLineageJobInputSymlink</a>[]

symlink block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#symlink DataLineageOpenLineageJob#symlink}

---

### DataLineageOpenLineageJobInputCatalog <a name="DataLineageOpenLineageJobInputCatalog" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog.Initializer"></a>

```typescript
import { dataLineageOpenLineageJob } from '@cdktn/provider-google'

const dataLineageOpenLineageJobInputCatalog: dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog.property.framework">framework</a></code> | <code>string</code> | Catalog framework. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog.property.name">name</a></code> | <code>string</code> | Catalog entity name. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog.property.type">type</a></code> | <code>string</code> | Catalog entity type. |

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog.property.framework"></a>

```typescript
public readonly framework: string;
```

- *Type:* string

Catalog framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#framework DataLineageOpenLineageJob#framework}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Catalog entity name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#name DataLineageOpenLineageJob#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Catalog entity type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#type DataLineageOpenLineageJob#type}

---

### DataLineageOpenLineageJobInputSymlink <a name="DataLineageOpenLineageJobInputSymlink" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink.Initializer"></a>

```typescript
import { dataLineageOpenLineageJob } from '@cdktn/provider-google'

const dataLineageOpenLineageJobInputSymlink: dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink.property.name">name</a></code> | <code>string</code> | Name of the symlink target. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink.property.namespace">namespace</a></code> | <code>string</code> | Namespace of the symlink target. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink.property.type">type</a></code> | <code>string</code> | Type of the symlink target. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#name DataLineageOpenLineageJob#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Namespace of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#namespace DataLineageOpenLineageJob#namespace}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#type DataLineageOpenLineageJob#type}

---

### DataLineageOpenLineageJobOutput <a name="DataLineageOpenLineageJobOutput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.Initializer"></a>

```typescript
import { dataLineageOpenLineageJob } from '@cdktn/provider-google'

const dataLineageOpenLineageJobOutput: dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.property.name">name</a></code> | <code>string</code> | Name of the dataset. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.property.namespace">namespace</a></code> | <code>string</code> | Namespace of the dataset. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.property.catalog">catalog</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog">DataLineageOpenLineageJobOutputCatalog</a></code> | catalog block. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.property.columnLineage">columnLineage</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage">DataLineageOpenLineageJobOutputColumnLineage</a></code> | column_lineage block. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.property.symlink">symlink</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink">DataLineageOpenLineageJobOutputSymlink</a>[]</code> | symlink block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#name DataLineageOpenLineageJob#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Namespace of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#namespace DataLineageOpenLineageJob#namespace}

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.property.catalog"></a>

```typescript
public readonly catalog: DataLineageOpenLineageJobOutputCatalog;
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog">DataLineageOpenLineageJobOutputCatalog</a>

catalog block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#catalog DataLineageOpenLineageJob#catalog}

---

##### `columnLineage`<sup>Optional</sup> <a name="columnLineage" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.property.columnLineage"></a>

```typescript
public readonly columnLineage: DataLineageOpenLineageJobOutputColumnLineage;
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage">DataLineageOpenLineageJobOutputColumnLineage</a>

column_lineage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#column_lineage DataLineageOpenLineageJob#column_lineage}

---

##### `symlink`<sup>Optional</sup> <a name="symlink" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput.property.symlink"></a>

```typescript
public readonly symlink: IResolvable | DataLineageOpenLineageJobOutputSymlink[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink">DataLineageOpenLineageJobOutputSymlink</a>[]

symlink block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#symlink DataLineageOpenLineageJob#symlink}

---

### DataLineageOpenLineageJobOutputCatalog <a name="DataLineageOpenLineageJobOutputCatalog" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog.Initializer"></a>

```typescript
import { dataLineageOpenLineageJob } from '@cdktn/provider-google'

const dataLineageOpenLineageJobOutputCatalog: dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog.property.framework">framework</a></code> | <code>string</code> | Catalog framework. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog.property.name">name</a></code> | <code>string</code> | Catalog entity name. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog.property.type">type</a></code> | <code>string</code> | Catalog entity type. |

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog.property.framework"></a>

```typescript
public readonly framework: string;
```

- *Type:* string

Catalog framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#framework DataLineageOpenLineageJob#framework}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Catalog entity name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#name DataLineageOpenLineageJob#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Catalog entity type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#type DataLineageOpenLineageJob#type}

---

### DataLineageOpenLineageJobOutputColumnLineage <a name="DataLineageOpenLineageJobOutputColumnLineage" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage.Initializer"></a>

```typescript
import { dataLineageOpenLineageJob } from '@cdktn/provider-google'

const dataLineageOpenLineageJobOutputColumnLineage: dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage.property.field">field</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField">DataLineageOpenLineageJobOutputColumnLineageField</a>[]</code> | field block. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage.property.datasetInput">datasetInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput">DataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>[]</code> | dataset_input block. |

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage.property.field"></a>

```typescript
public readonly field: IResolvable | DataLineageOpenLineageJobOutputColumnLineageField[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField">DataLineageOpenLineageJobOutputColumnLineageField</a>[]

field block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#field DataLineageOpenLineageJob#field}

---

##### `datasetInput`<sup>Optional</sup> <a name="datasetInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage.property.datasetInput"></a>

```typescript
public readonly datasetInput: IResolvable | DataLineageOpenLineageJobOutputColumnLineageDatasetInput[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput">DataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>[]

dataset_input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#dataset_input DataLineageOpenLineageJob#dataset_input}

---

### DataLineageOpenLineageJobOutputColumnLineageDatasetInput <a name="DataLineageOpenLineageJobOutputColumnLineageDatasetInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput.Initializer"></a>

```typescript
import { dataLineageOpenLineageJob } from '@cdktn/provider-google'

const dataLineageOpenLineageJobOutputColumnLineageDatasetInput: dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.field">field</a></code> | <code>string</code> | Source field name. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.name">name</a></code> | <code>string</code> | Name of the source dataset. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.namespace">namespace</a></code> | <code>string</code> | Namespace of the source dataset. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.transformation">transformation</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>[]</code> | transformation block. |

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

Source field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#field DataLineageOpenLineageJob#field}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the source dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#name DataLineageOpenLineageJob#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Namespace of the source dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#namespace DataLineageOpenLineageJob#namespace}

---

##### `transformation`<sup>Optional</sup> <a name="transformation" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.transformation"></a>

```typescript
public readonly transformation: IResolvable | DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>[]

transformation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#transformation DataLineageOpenLineageJob#transformation}

---

### DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation <a name="DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation.Initializer"></a>

```typescript
import { dataLineageOpenLineageJob } from '@cdktn/provider-google'

const dataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation: dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation.property.type">type</a></code> | <code>string</code> | Transformation type. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation.property.subtype">subtype</a></code> | <code>string</code> | Transformation subtype. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Transformation type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#type DataLineageOpenLineageJob#type}

---

##### `subtype`<sup>Optional</sup> <a name="subtype" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation.property.subtype"></a>

```typescript
public readonly subtype: string;
```

- *Type:* string

Transformation subtype.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#subtype DataLineageOpenLineageJob#subtype}

---

### DataLineageOpenLineageJobOutputColumnLineageField <a name="DataLineageOpenLineageJobOutputColumnLineageField" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField.Initializer"></a>

```typescript
import { dataLineageOpenLineageJob } from '@cdktn/provider-google'

const dataLineageOpenLineageJobOutputColumnLineageField: dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField.property.input">input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput">DataLineageOpenLineageJobOutputColumnLineageFieldInput</a>[]</code> | input block. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField.property.name">name</a></code> | <code>string</code> | Output field name. |

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField.property.input"></a>

```typescript
public readonly input: IResolvable | DataLineageOpenLineageJobOutputColumnLineageFieldInput[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput">DataLineageOpenLineageJobOutputColumnLineageFieldInput</a>[]

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#input DataLineageOpenLineageJob#input}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Output field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#name DataLineageOpenLineageJob#name}

---

### DataLineageOpenLineageJobOutputColumnLineageFieldInput <a name="DataLineageOpenLineageJobOutputColumnLineageFieldInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput.Initializer"></a>

```typescript
import { dataLineageOpenLineageJob } from '@cdktn/provider-google'

const dataLineageOpenLineageJobOutputColumnLineageFieldInput: dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput.property.field">field</a></code> | <code>string</code> | Source field name. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput.property.name">name</a></code> | <code>string</code> | Name of the source dataset. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput.property.namespace">namespace</a></code> | <code>string</code> | Namespace of the source dataset. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput.property.transformation">transformation</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>[]</code> | transformation block. |

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

Source field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#field DataLineageOpenLineageJob#field}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the source dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#name DataLineageOpenLineageJob#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Namespace of the source dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#namespace DataLineageOpenLineageJob#namespace}

---

##### `transformation`<sup>Optional</sup> <a name="transformation" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput.property.transformation"></a>

```typescript
public readonly transformation: IResolvable | DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>[]

transformation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#transformation DataLineageOpenLineageJob#transformation}

---

### DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation <a name="DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation.Initializer"></a>

```typescript
import { dataLineageOpenLineageJob } from '@cdktn/provider-google'

const dataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation: dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation.property.type">type</a></code> | <code>string</code> | Transformation type. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation.property.subtype">subtype</a></code> | <code>string</code> | Transformation subtype. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Transformation type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#type DataLineageOpenLineageJob#type}

---

##### `subtype`<sup>Optional</sup> <a name="subtype" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation.property.subtype"></a>

```typescript
public readonly subtype: string;
```

- *Type:* string

Transformation subtype.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#subtype DataLineageOpenLineageJob#subtype}

---

### DataLineageOpenLineageJobOutputSymlink <a name="DataLineageOpenLineageJobOutputSymlink" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink.Initializer"></a>

```typescript
import { dataLineageOpenLineageJob } from '@cdktn/provider-google'

const dataLineageOpenLineageJobOutputSymlink: dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink.property.name">name</a></code> | <code>string</code> | Name of the symlink target. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink.property.namespace">namespace</a></code> | <code>string</code> | Namespace of the symlink target. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink.property.type">type</a></code> | <code>string</code> | Type of the symlink target. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#name DataLineageOpenLineageJob#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Namespace of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#namespace DataLineageOpenLineageJob#namespace}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#type DataLineageOpenLineageJob#type}

---

### DataLineageOpenLineageJobTimeouts <a name="DataLineageOpenLineageJobTimeouts" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts.Initializer"></a>

```typescript
import { dataLineageOpenLineageJob } from '@cdktn/provider-google'

const dataLineageOpenLineageJobTimeouts: dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#create DataLineageOpenLineageJob#create}. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#delete DataLineageOpenLineageJob#delete}. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#update DataLineageOpenLineageJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#create DataLineageOpenLineageJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#delete DataLineageOpenLineageJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/data_lineage_open_lineage_job#update DataLineageOpenLineageJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataLineageOpenLineageJobInputCatalogOutputReference <a name="DataLineageOpenLineageJobInputCatalogOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.Initializer"></a>

```typescript
import { dataLineageOpenLineageJob } from '@cdktn/provider-google'

new dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.frameworkInput">frameworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.framework">framework</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog">DataLineageOpenLineageJobInputCatalog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `frameworkInput`<sup>Optional</sup> <a name="frameworkInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.frameworkInput"></a>

```typescript
public readonly frameworkInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.framework"></a>

```typescript
public readonly framework: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLineageOpenLineageJobInputCatalog;
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog">DataLineageOpenLineageJobInputCatalog</a>

---


### DataLineageOpenLineageJobInputList <a name="DataLineageOpenLineageJobInputList" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.Initializer"></a>

```typescript
import { dataLineageOpenLineageJob } from '@cdktn/provider-google'

new dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.get"></a>

```typescript
public get(index: number): DataLineageOpenLineageJobInputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput">DataLineageOpenLineageJobInput</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataLineageOpenLineageJobInput[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput">DataLineageOpenLineageJobInput</a>[]

---


### DataLineageOpenLineageJobInputOutputReference <a name="DataLineageOpenLineageJobInputOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.Initializer"></a>

```typescript
import { dataLineageOpenLineageJob } from '@cdktn/provider-google'

new dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.putCatalog">putCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.putSymlink">putSymlink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.resetCatalog">resetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.resetSymlink">resetSymlink</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCatalog` <a name="putCatalog" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.putCatalog"></a>

```typescript
public putCatalog(value: DataLineageOpenLineageJobInputCatalog): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.putCatalog.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog">DataLineageOpenLineageJobInputCatalog</a>

---

##### `putSymlink` <a name="putSymlink" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.putSymlink"></a>

```typescript
public putSymlink(value: IResolvable | DataLineageOpenLineageJobInputSymlink[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.putSymlink.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink">DataLineageOpenLineageJobInputSymlink</a>[]

---

##### `resetCatalog` <a name="resetCatalog" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.resetCatalog"></a>

```typescript
public resetCatalog(): void
```

##### `resetSymlink` <a name="resetSymlink" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.resetSymlink"></a>

```typescript
public resetSymlink(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.catalog">catalog</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference">DataLineageOpenLineageJobInputCatalogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.symlink">symlink</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList">DataLineageOpenLineageJobInputSymlinkList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.catalogInput">catalogInput</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog">DataLineageOpenLineageJobInputCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.symlinkInput">symlinkInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink">DataLineageOpenLineageJobInputSymlink</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput">DataLineageOpenLineageJobInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.catalog"></a>

```typescript
public readonly catalog: DataLineageOpenLineageJobInputCatalogOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalogOutputReference">DataLineageOpenLineageJobInputCatalogOutputReference</a>

---

##### `symlink`<sup>Required</sup> <a name="symlink" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.symlink"></a>

```typescript
public readonly symlink: DataLineageOpenLineageJobInputSymlinkList;
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList">DataLineageOpenLineageJobInputSymlinkList</a>

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.catalogInput"></a>

```typescript
public readonly catalogInput: DataLineageOpenLineageJobInputCatalog;
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputCatalog">DataLineageOpenLineageJobInputCatalog</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `symlinkInput`<sup>Optional</sup> <a name="symlinkInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.symlinkInput"></a>

```typescript
public readonly symlinkInput: IResolvable | DataLineageOpenLineageJobInputSymlink[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink">DataLineageOpenLineageJobInputSymlink</a>[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataLineageOpenLineageJobInput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInput">DataLineageOpenLineageJobInput</a>

---


### DataLineageOpenLineageJobInputSymlinkList <a name="DataLineageOpenLineageJobInputSymlinkList" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.Initializer"></a>

```typescript
import { dataLineageOpenLineageJob } from '@cdktn/provider-google'

new dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.get"></a>

```typescript
public get(index: number): DataLineageOpenLineageJobInputSymlinkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink">DataLineageOpenLineageJobInputSymlink</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataLineageOpenLineageJobInputSymlink[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink">DataLineageOpenLineageJobInputSymlink</a>[]

---


### DataLineageOpenLineageJobInputSymlinkOutputReference <a name="DataLineageOpenLineageJobInputSymlinkOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.Initializer"></a>

```typescript
import { dataLineageOpenLineageJob } from '@cdktn/provider-google'

new dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink">DataLineageOpenLineageJobInputSymlink</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlinkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataLineageOpenLineageJobInputSymlink;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobInputSymlink">DataLineageOpenLineageJobInputSymlink</a>

---


### DataLineageOpenLineageJobOutputCatalogOutputReference <a name="DataLineageOpenLineageJobOutputCatalogOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.Initializer"></a>

```typescript
import { dataLineageOpenLineageJob } from '@cdktn/provider-google'

new dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.frameworkInput">frameworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.framework">framework</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog">DataLineageOpenLineageJobOutputCatalog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `frameworkInput`<sup>Optional</sup> <a name="frameworkInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.frameworkInput"></a>

```typescript
public readonly frameworkInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.framework"></a>

```typescript
public readonly framework: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLineageOpenLineageJobOutputCatalog;
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog">DataLineageOpenLineageJobOutputCatalog</a>

---


### DataLineageOpenLineageJobOutputColumnLineageDatasetInputList <a name="DataLineageOpenLineageJobOutputColumnLineageDatasetInputList" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer"></a>

```typescript
import { dataLineageOpenLineageJob } from '@cdktn/provider-google'

new dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.get"></a>

```typescript
public get(index: number): DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput">DataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataLineageOpenLineageJobOutputColumnLineageDatasetInput[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput">DataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>[]

---


### DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference <a name="DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer"></a>

```typescript
import { dataLineageOpenLineageJob } from '@cdktn/provider-google'

new dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.putTransformation">putTransformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.resetTransformation">resetTransformation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTransformation` <a name="putTransformation" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.putTransformation"></a>

```typescript
public putTransformation(value: IResolvable | DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.putTransformation.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>[]

---

##### `resetTransformation` <a name="resetTransformation" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.resetTransformation"></a>

```typescript
public resetTransformation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.transformation">transformation</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList">DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.fieldInput">fieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.transformationInput">transformationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.field">field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput">DataLineageOpenLineageJobOutputColumnLineageDatasetInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `transformation`<sup>Required</sup> <a name="transformation" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.transformation"></a>

```typescript
public readonly transformation: DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList;
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList">DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList</a>

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.fieldInput"></a>

```typescript
public readonly fieldInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `transformationInput`<sup>Optional</sup> <a name="transformationInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.transformationInput"></a>

```typescript
public readonly transformationInput: IResolvable | DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>[]

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataLineageOpenLineageJobOutputColumnLineageDatasetInput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput">DataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>

---


### DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList <a name="DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer"></a>

```typescript
import { dataLineageOpenLineageJob } from '@cdktn/provider-google'

new dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.get"></a>

```typescript
public get(index: number): DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>[]

---


### DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference <a name="DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer"></a>

```typescript
import { dataLineageOpenLineageJob } from '@cdktn/provider-google'

new dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.resetSubtype">resetSubtype</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSubtype` <a name="resetSubtype" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.resetSubtype"></a>

```typescript
public resetSubtype(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.subtypeInput">subtypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.subtype">subtype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `subtypeInput`<sup>Optional</sup> <a name="subtypeInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.subtypeInput"></a>

```typescript
public readonly subtypeInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `subtype`<sup>Required</sup> <a name="subtype" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.subtype"></a>

```typescript
public readonly subtype: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">DataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>

---


### DataLineageOpenLineageJobOutputColumnLineageFieldInputList <a name="DataLineageOpenLineageJobOutputColumnLineageFieldInputList" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer"></a>

```typescript
import { dataLineageOpenLineageJob } from '@cdktn/provider-google'

new dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.get"></a>

```typescript
public get(index: number): DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput">DataLineageOpenLineageJobOutputColumnLineageFieldInput</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataLineageOpenLineageJobOutputColumnLineageFieldInput[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput">DataLineageOpenLineageJobOutputColumnLineageFieldInput</a>[]

---


### DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference <a name="DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer"></a>

```typescript
import { dataLineageOpenLineageJob } from '@cdktn/provider-google'

new dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.putTransformation">putTransformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.resetTransformation">resetTransformation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTransformation` <a name="putTransformation" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.putTransformation"></a>

```typescript
public putTransformation(value: IResolvable | DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.putTransformation.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>[]

---

##### `resetTransformation` <a name="resetTransformation" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.resetTransformation"></a>

```typescript
public resetTransformation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.transformation">transformation</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList">DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.fieldInput">fieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.transformationInput">transformationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.field">field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput">DataLineageOpenLineageJobOutputColumnLineageFieldInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `transformation`<sup>Required</sup> <a name="transformation" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.transformation"></a>

```typescript
public readonly transformation: DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList;
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList">DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList</a>

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.fieldInput"></a>

```typescript
public readonly fieldInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `transformationInput`<sup>Optional</sup> <a name="transformationInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.transformationInput"></a>

```typescript
public readonly transformationInput: IResolvable | DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>[]

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataLineageOpenLineageJobOutputColumnLineageFieldInput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput">DataLineageOpenLineageJobOutputColumnLineageFieldInput</a>

---


### DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList <a name="DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer"></a>

```typescript
import { dataLineageOpenLineageJob } from '@cdktn/provider-google'

new dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.get"></a>

```typescript
public get(index: number): DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>[]

---


### DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference <a name="DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer"></a>

```typescript
import { dataLineageOpenLineageJob } from '@cdktn/provider-google'

new dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.resetSubtype">resetSubtype</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSubtype` <a name="resetSubtype" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.resetSubtype"></a>

```typescript
public resetSubtype(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.subtypeInput">subtypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.subtype">subtype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `subtypeInput`<sup>Optional</sup> <a name="subtypeInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.subtypeInput"></a>

```typescript
public readonly subtypeInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `subtype`<sup>Required</sup> <a name="subtype" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.subtype"></a>

```typescript
public readonly subtype: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">DataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>

---


### DataLineageOpenLineageJobOutputColumnLineageFieldList <a name="DataLineageOpenLineageJobOutputColumnLineageFieldList" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer"></a>

```typescript
import { dataLineageOpenLineageJob } from '@cdktn/provider-google'

new dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.get"></a>

```typescript
public get(index: number): DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField">DataLineageOpenLineageJobOutputColumnLineageField</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataLineageOpenLineageJobOutputColumnLineageField[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField">DataLineageOpenLineageJobOutputColumnLineageField</a>[]

---


### DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference <a name="DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer"></a>

```typescript
import { dataLineageOpenLineageJob } from '@cdktn/provider-google'

new dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.putInput">putInput</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInput` <a name="putInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.putInput"></a>

```typescript
public putInput(value: IResolvable | DataLineageOpenLineageJobOutputColumnLineageFieldInput[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.putInput.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput">DataLineageOpenLineageJobOutputColumnLineageFieldInput</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.input">input</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList">DataLineageOpenLineageJobOutputColumnLineageFieldInputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.inputInput">inputInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput">DataLineageOpenLineageJobOutputColumnLineageFieldInput</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField">DataLineageOpenLineageJobOutputColumnLineageField</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.input"></a>

```typescript
public readonly input: DataLineageOpenLineageJobOutputColumnLineageFieldInputList;
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInputList">DataLineageOpenLineageJobOutputColumnLineageFieldInputList</a>

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.inputInput"></a>

```typescript
public readonly inputInput: IResolvable | DataLineageOpenLineageJobOutputColumnLineageFieldInput[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldInput">DataLineageOpenLineageJobOutputColumnLineageFieldInput</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataLineageOpenLineageJobOutputColumnLineageField;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField">DataLineageOpenLineageJobOutputColumnLineageField</a>

---


### DataLineageOpenLineageJobOutputColumnLineageOutputReference <a name="DataLineageOpenLineageJobOutputColumnLineageOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.Initializer"></a>

```typescript
import { dataLineageOpenLineageJob } from '@cdktn/provider-google'

new dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.putDatasetInput">putDatasetInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.putField">putField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.resetDatasetInput">resetDatasetInput</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDatasetInput` <a name="putDatasetInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.putDatasetInput"></a>

```typescript
public putDatasetInput(value: IResolvable | DataLineageOpenLineageJobOutputColumnLineageDatasetInput[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.putDatasetInput.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput">DataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>[]

---

##### `putField` <a name="putField" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.putField"></a>

```typescript
public putField(value: IResolvable | DataLineageOpenLineageJobOutputColumnLineageField[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.putField.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField">DataLineageOpenLineageJobOutputColumnLineageField</a>[]

---

##### `resetDatasetInput` <a name="resetDatasetInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.resetDatasetInput"></a>

```typescript
public resetDatasetInput(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.datasetInput">datasetInput</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList">DataLineageOpenLineageJobOutputColumnLineageDatasetInputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.field">field</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList">DataLineageOpenLineageJobOutputColumnLineageFieldList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.datasetInputInput">datasetInputInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput">DataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.fieldInput">fieldInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField">DataLineageOpenLineageJobOutputColumnLineageField</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage">DataLineageOpenLineageJobOutputColumnLineage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datasetInput`<sup>Required</sup> <a name="datasetInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.datasetInput"></a>

```typescript
public readonly datasetInput: DataLineageOpenLineageJobOutputColumnLineageDatasetInputList;
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInputList">DataLineageOpenLineageJobOutputColumnLineageDatasetInputList</a>

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.field"></a>

```typescript
public readonly field: DataLineageOpenLineageJobOutputColumnLineageFieldList;
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageFieldList">DataLineageOpenLineageJobOutputColumnLineageFieldList</a>

---

##### `datasetInputInput`<sup>Optional</sup> <a name="datasetInputInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.datasetInputInput"></a>

```typescript
public readonly datasetInputInput: IResolvable | DataLineageOpenLineageJobOutputColumnLineageDatasetInput[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageDatasetInput">DataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>[]

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.fieldInput"></a>

```typescript
public readonly fieldInput: IResolvable | DataLineageOpenLineageJobOutputColumnLineageField[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageField">DataLineageOpenLineageJobOutputColumnLineageField</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLineageOpenLineageJobOutputColumnLineage;
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage">DataLineageOpenLineageJobOutputColumnLineage</a>

---


### DataLineageOpenLineageJobOutputList <a name="DataLineageOpenLineageJobOutputList" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.Initializer"></a>

```typescript
import { dataLineageOpenLineageJob } from '@cdktn/provider-google'

new dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.get"></a>

```typescript
public get(index: number): DataLineageOpenLineageJobOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput">DataLineageOpenLineageJobOutput</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataLineageOpenLineageJobOutput[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput">DataLineageOpenLineageJobOutput</a>[]

---


### DataLineageOpenLineageJobOutputOutputReference <a name="DataLineageOpenLineageJobOutputOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.Initializer"></a>

```typescript
import { dataLineageOpenLineageJob } from '@cdktn/provider-google'

new dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.putCatalog">putCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.putColumnLineage">putColumnLineage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.putSymlink">putSymlink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.resetCatalog">resetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.resetColumnLineage">resetColumnLineage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.resetSymlink">resetSymlink</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCatalog` <a name="putCatalog" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.putCatalog"></a>

```typescript
public putCatalog(value: DataLineageOpenLineageJobOutputCatalog): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.putCatalog.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog">DataLineageOpenLineageJobOutputCatalog</a>

---

##### `putColumnLineage` <a name="putColumnLineage" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.putColumnLineage"></a>

```typescript
public putColumnLineage(value: DataLineageOpenLineageJobOutputColumnLineage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.putColumnLineage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage">DataLineageOpenLineageJobOutputColumnLineage</a>

---

##### `putSymlink` <a name="putSymlink" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.putSymlink"></a>

```typescript
public putSymlink(value: IResolvable | DataLineageOpenLineageJobOutputSymlink[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.putSymlink.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink">DataLineageOpenLineageJobOutputSymlink</a>[]

---

##### `resetCatalog` <a name="resetCatalog" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.resetCatalog"></a>

```typescript
public resetCatalog(): void
```

##### `resetColumnLineage` <a name="resetColumnLineage" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.resetColumnLineage"></a>

```typescript
public resetColumnLineage(): void
```

##### `resetSymlink` <a name="resetSymlink" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.resetSymlink"></a>

```typescript
public resetSymlink(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.catalog">catalog</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference">DataLineageOpenLineageJobOutputCatalogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.columnLineage">columnLineage</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference">DataLineageOpenLineageJobOutputColumnLineageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.symlink">symlink</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList">DataLineageOpenLineageJobOutputSymlinkList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.catalogInput">catalogInput</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog">DataLineageOpenLineageJobOutputCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.columnLineageInput">columnLineageInput</a></code> | <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage">DataLineageOpenLineageJobOutputColumnLineage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.symlinkInput">symlinkInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink">DataLineageOpenLineageJobOutputSymlink</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput">DataLineageOpenLineageJobOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.catalog"></a>

```typescript
public readonly catalog: DataLineageOpenLineageJobOutputCatalogOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalogOutputReference">DataLineageOpenLineageJobOutputCatalogOutputReference</a>

---

##### `columnLineage`<sup>Required</sup> <a name="columnLineage" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.columnLineage"></a>

```typescript
public readonly columnLineage: DataLineageOpenLineageJobOutputColumnLineageOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineageOutputReference">DataLineageOpenLineageJobOutputColumnLineageOutputReference</a>

---

##### `symlink`<sup>Required</sup> <a name="symlink" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.symlink"></a>

```typescript
public readonly symlink: DataLineageOpenLineageJobOutputSymlinkList;
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList">DataLineageOpenLineageJobOutputSymlinkList</a>

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.catalogInput"></a>

```typescript
public readonly catalogInput: DataLineageOpenLineageJobOutputCatalog;
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputCatalog">DataLineageOpenLineageJobOutputCatalog</a>

---

##### `columnLineageInput`<sup>Optional</sup> <a name="columnLineageInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.columnLineageInput"></a>

```typescript
public readonly columnLineageInput: DataLineageOpenLineageJobOutputColumnLineage;
```

- *Type:* <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputColumnLineage">DataLineageOpenLineageJobOutputColumnLineage</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `symlinkInput`<sup>Optional</sup> <a name="symlinkInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.symlinkInput"></a>

```typescript
public readonly symlinkInput: IResolvable | DataLineageOpenLineageJobOutputSymlink[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink">DataLineageOpenLineageJobOutputSymlink</a>[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataLineageOpenLineageJobOutput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutput">DataLineageOpenLineageJobOutput</a>

---


### DataLineageOpenLineageJobOutputSymlinkList <a name="DataLineageOpenLineageJobOutputSymlinkList" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.Initializer"></a>

```typescript
import { dataLineageOpenLineageJob } from '@cdktn/provider-google'

new dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.get"></a>

```typescript
public get(index: number): DataLineageOpenLineageJobOutputSymlinkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink">DataLineageOpenLineageJobOutputSymlink</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataLineageOpenLineageJobOutputSymlink[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink">DataLineageOpenLineageJobOutputSymlink</a>[]

---


### DataLineageOpenLineageJobOutputSymlinkOutputReference <a name="DataLineageOpenLineageJobOutputSymlinkOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer"></a>

```typescript
import { dataLineageOpenLineageJob } from '@cdktn/provider-google'

new dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink">DataLineageOpenLineageJobOutputSymlink</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlinkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataLineageOpenLineageJobOutputSymlink;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobOutputSymlink">DataLineageOpenLineageJobOutputSymlink</a>

---


### DataLineageOpenLineageJobTimeoutsOutputReference <a name="DataLineageOpenLineageJobTimeoutsOutputReference" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataLineageOpenLineageJob } from '@cdktn/provider-google'

new dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts">DataLineageOpenLineageJobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataLineageOpenLineageJobTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataLineageOpenLineageJob.DataLineageOpenLineageJobTimeouts">DataLineageOpenLineageJobTimeouts</a>

---



