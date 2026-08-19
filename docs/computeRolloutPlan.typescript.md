# `computeRolloutPlan` Submodule <a name="`computeRolloutPlan` Submodule" id="@cdktn/provider-google.computeRolloutPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRolloutPlan <a name="ComputeRolloutPlan" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/compute_rollout_plan google_compute_rollout_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.Initializer"></a>

```typescript
import { computeRolloutPlan } from '@cdktn/provider-google'

new computeRolloutPlan.ComputeRolloutPlan(scope: Construct, id: string, config: ComputeRolloutPlanConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig">ComputeRolloutPlanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig">ComputeRolloutPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.putWaves">putWaves</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.resetLocationScope">resetLocationScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeRolloutPlanTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeouts">ComputeRolloutPlanTimeouts</a>

---

##### `putWaves` <a name="putWaves" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.putWaves"></a>

```typescript
public putWaves(value: IResolvable | ComputeRolloutPlanWaves[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.putWaves.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWaves">ComputeRolloutPlanWaves</a>[]

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocationScope` <a name="resetLocationScope" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.resetLocationScope"></a>

```typescript
public resetLocationScope(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeRolloutPlan resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.isConstruct"></a>

```typescript
import { computeRolloutPlan } from '@cdktn/provider-google'

computeRolloutPlan.ComputeRolloutPlan.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.isTerraformElement"></a>

```typescript
import { computeRolloutPlan } from '@cdktn/provider-google'

computeRolloutPlan.ComputeRolloutPlan.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.isTerraformResource"></a>

```typescript
import { computeRolloutPlan } from '@cdktn/provider-google'

computeRolloutPlan.ComputeRolloutPlan.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.generateConfigForImport"></a>

```typescript
import { computeRolloutPlan } from '@cdktn/provider-google'

computeRolloutPlan.ComputeRolloutPlan.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ComputeRolloutPlan resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeRolloutPlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeRolloutPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/compute_rollout_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ComputeRolloutPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference">ComputeRolloutPlanTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.waves">waves</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList">ComputeRolloutPlanWavesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.locationScopeInput">locationScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeouts">ComputeRolloutPlanTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.wavesInput">wavesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWaves">ComputeRolloutPlanWaves</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.locationScope">locationScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeRolloutPlanTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference">ComputeRolloutPlanTimeoutsOutputReference</a>

---

##### `waves`<sup>Required</sup> <a name="waves" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.waves"></a>

```typescript
public readonly waves: ComputeRolloutPlanWavesList;
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList">ComputeRolloutPlanWavesList</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationScopeInput`<sup>Optional</sup> <a name="locationScopeInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.locationScopeInput"></a>

```typescript
public readonly locationScopeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeRolloutPlanTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeouts">ComputeRolloutPlanTimeouts</a>

---

##### `wavesInput`<sup>Optional</sup> <a name="wavesInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.wavesInput"></a>

```typescript
public readonly wavesInput: IResolvable | ComputeRolloutPlanWaves[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWaves">ComputeRolloutPlanWaves</a>[]

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `locationScope`<sup>Required</sup> <a name="locationScope" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.locationScope"></a>

```typescript
public readonly locationScope: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRolloutPlanConfig <a name="ComputeRolloutPlanConfig" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.Initializer"></a>

```typescript
import { computeRolloutPlan } from '@cdktn/provider-google'

const computeRolloutPlanConfig: computeRolloutPlan.ComputeRolloutPlanConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.name">name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.waves">waves</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWaves">ComputeRolloutPlanWaves</a>[]</code> | waves block. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/compute_rollout_plan#id ComputeRolloutPlan#id}. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.locationScope">locationScope</a></code> | <code>string</code> | The location scope of the rollout plan. Possible values: ["LOCATION_SCOPE_UNSPECIFIED", "ZONAL", "REGIONAL"]. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/compute_rollout_plan#project ComputeRolloutPlan#project}. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeouts">ComputeRolloutPlanTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is created.
The name must be 1-63 characters long, and comply with RFC1035.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/compute_rollout_plan#name ComputeRolloutPlan#name}

---

##### `waves`<sup>Required</sup> <a name="waves" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.waves"></a>

```typescript
public readonly waves: IResolvable | ComputeRolloutPlanWaves[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWaves">ComputeRolloutPlanWaves</a>[]

waves block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/compute_rollout_plan#waves ComputeRolloutPlan#waves}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/compute_rollout_plan#deletion_policy ComputeRolloutPlan#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/compute_rollout_plan#description ComputeRolloutPlan#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/compute_rollout_plan#id ComputeRolloutPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locationScope`<sup>Optional</sup> <a name="locationScope" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.locationScope"></a>

```typescript
public readonly locationScope: string;
```

- *Type:* string

The location scope of the rollout plan. Possible values: ["LOCATION_SCOPE_UNSPECIFIED", "ZONAL", "REGIONAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/compute_rollout_plan#location_scope ComputeRolloutPlan#location_scope}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/compute_rollout_plan#project ComputeRolloutPlan#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeRolloutPlanTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeouts">ComputeRolloutPlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/compute_rollout_plan#timeouts ComputeRolloutPlan#timeouts}

---

### ComputeRolloutPlanTimeouts <a name="ComputeRolloutPlanTimeouts" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeouts.Initializer"></a>

```typescript
import { computeRolloutPlan } from '@cdktn/provider-google'

const computeRolloutPlanTimeouts: computeRolloutPlan.ComputeRolloutPlanTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/compute_rollout_plan#create ComputeRolloutPlan#create}. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/compute_rollout_plan#delete ComputeRolloutPlan#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/compute_rollout_plan#create ComputeRolloutPlan#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/compute_rollout_plan#delete ComputeRolloutPlan#delete}.

---

### ComputeRolloutPlanWaves <a name="ComputeRolloutPlanWaves" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWaves"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWaves.Initializer"></a>

```typescript
import { computeRolloutPlan } from '@cdktn/provider-google'

const computeRolloutPlanWaves: computeRolloutPlan.ComputeRolloutPlanWaves = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWaves.property.selectors">selectors</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectors">ComputeRolloutPlanWavesSelectors</a>[]</code> | selectors block. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWaves.property.validation">validation</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidation">ComputeRolloutPlanWavesValidation</a></code> | validation block. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWaves.property.displayName">displayName</a></code> | <code>string</code> | The display name of this wave of the rollout plan. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWaves.property.orchestrationOptions">orchestrationOptions</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptions">ComputeRolloutPlanWavesOrchestrationOptions</a></code> | orchestration_options block. |

---

##### `selectors`<sup>Required</sup> <a name="selectors" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWaves.property.selectors"></a>

```typescript
public readonly selectors: IResolvable | ComputeRolloutPlanWavesSelectors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectors">ComputeRolloutPlanWavesSelectors</a>[]

selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/compute_rollout_plan#selectors ComputeRolloutPlan#selectors}

---

##### `validation`<sup>Required</sup> <a name="validation" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWaves.property.validation"></a>

```typescript
public readonly validation: ComputeRolloutPlanWavesValidation;
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidation">ComputeRolloutPlanWavesValidation</a>

validation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/compute_rollout_plan#validation ComputeRolloutPlan#validation}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWaves.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name of this wave of the rollout plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/compute_rollout_plan#display_name ComputeRolloutPlan#display_name}

---

##### `orchestrationOptions`<sup>Optional</sup> <a name="orchestrationOptions" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWaves.property.orchestrationOptions"></a>

```typescript
public readonly orchestrationOptions: ComputeRolloutPlanWavesOrchestrationOptions;
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptions">ComputeRolloutPlanWavesOrchestrationOptions</a>

orchestration_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/compute_rollout_plan#orchestration_options ComputeRolloutPlan#orchestration_options}

---

### ComputeRolloutPlanWavesOrchestrationOptions <a name="ComputeRolloutPlanWavesOrchestrationOptions" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptions.Initializer"></a>

```typescript
import { computeRolloutPlan } from '@cdktn/provider-google'

const computeRolloutPlanWavesOrchestrationOptions: computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptions.property.delays">delays</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelays">ComputeRolloutPlanWavesOrchestrationOptionsDelays</a>[]</code> | delays block. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptions.property.maxConcurrentLocations">maxConcurrentLocations</a></code> | <code>number</code> | Maximum number of locations to be orchestrated in parallel. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptions.property.maxConcurrentResourcesPerLocation">maxConcurrentResourcesPerLocation</a></code> | <code>number</code> | Maximum number of resources to be orchestrated per location in parallel. |

---

##### `delays`<sup>Optional</sup> <a name="delays" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptions.property.delays"></a>

```typescript
public readonly delays: IResolvable | ComputeRolloutPlanWavesOrchestrationOptionsDelays[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelays">ComputeRolloutPlanWavesOrchestrationOptionsDelays</a>[]

delays block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/compute_rollout_plan#delays ComputeRolloutPlan#delays}

---

##### `maxConcurrentLocations`<sup>Optional</sup> <a name="maxConcurrentLocations" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptions.property.maxConcurrentLocations"></a>

```typescript
public readonly maxConcurrentLocations: number;
```

- *Type:* number

Maximum number of locations to be orchestrated in parallel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/compute_rollout_plan#max_concurrent_locations ComputeRolloutPlan#max_concurrent_locations}

---

##### `maxConcurrentResourcesPerLocation`<sup>Optional</sup> <a name="maxConcurrentResourcesPerLocation" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptions.property.maxConcurrentResourcesPerLocation"></a>

```typescript
public readonly maxConcurrentResourcesPerLocation: number;
```

- *Type:* number

Maximum number of resources to be orchestrated per location in parallel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/compute_rollout_plan#max_concurrent_resources_per_location ComputeRolloutPlan#max_concurrent_resources_per_location}

---

### ComputeRolloutPlanWavesOrchestrationOptionsDelays <a name="ComputeRolloutPlanWavesOrchestrationOptionsDelays" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelays"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelays.Initializer"></a>

```typescript
import { computeRolloutPlan } from '@cdktn/provider-google'

const computeRolloutPlanWavesOrchestrationOptionsDelays: computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelays = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelays.property.delimiter">delimiter</a></code> | <code>string</code> | Controls whether the delay should only be added between batches of projects corresponding to different locations, or also between batches of projects corresponding to the same location. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelays.property.duration">duration</a></code> | <code>string</code> | The duration of the delay, if any, to be added between batches of projects. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelays.property.type">type</a></code> | <code>string</code> | Controls whether the specified duration is to be added at the end of each batch, or if the total processing time for each batch will be padded if needed to meet the specified duration. |

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelays.property.delimiter"></a>

```typescript
public readonly delimiter: string;
```

- *Type:* string

Controls whether the delay should only be added between batches of projects corresponding to different locations, or also between batches of projects corresponding to the same location.

Possible values: ["DELIMITER_UNSPECIFIED", "DELIMITER_LOCATION", "DELIMITER_BATCH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/compute_rollout_plan#delimiter ComputeRolloutPlan#delimiter}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelays.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

The duration of the delay, if any, to be added between batches of projects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/compute_rollout_plan#duration ComputeRolloutPlan#duration}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelays.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Controls whether the specified duration is to be added at the end of each batch, or if the total processing time for each batch will be padded if needed to meet the specified duration.

Possible values: ["TYPE_UNSPECIFIED", "TYPE_OFFSET", "TYPE_MINIMUM"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/compute_rollout_plan#type ComputeRolloutPlan#type}

---

### ComputeRolloutPlanWavesSelectors <a name="ComputeRolloutPlanWavesSelectors" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectors.Initializer"></a>

```typescript
import { computeRolloutPlan } from '@cdktn/provider-google'

const computeRolloutPlanWavesSelectors: computeRolloutPlan.ComputeRolloutPlanWavesSelectors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectors.property.locationSelector">locationSelector</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelector">ComputeRolloutPlanWavesSelectorsLocationSelector</a></code> | location_selector block. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectors.property.resourceHierarchySelector">resourceHierarchySelector</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelector">ComputeRolloutPlanWavesSelectorsResourceHierarchySelector</a></code> | resource_hierarchy_selector block. |

---

##### `locationSelector`<sup>Optional</sup> <a name="locationSelector" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectors.property.locationSelector"></a>

```typescript
public readonly locationSelector: ComputeRolloutPlanWavesSelectorsLocationSelector;
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelector">ComputeRolloutPlanWavesSelectorsLocationSelector</a>

location_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/compute_rollout_plan#location_selector ComputeRolloutPlan#location_selector}

---

##### `resourceHierarchySelector`<sup>Optional</sup> <a name="resourceHierarchySelector" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectors.property.resourceHierarchySelector"></a>

```typescript
public readonly resourceHierarchySelector: ComputeRolloutPlanWavesSelectorsResourceHierarchySelector;
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelector">ComputeRolloutPlanWavesSelectorsResourceHierarchySelector</a>

resource_hierarchy_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/compute_rollout_plan#resource_hierarchy_selector ComputeRolloutPlan#resource_hierarchy_selector}

---

### ComputeRolloutPlanWavesSelectorsLocationSelector <a name="ComputeRolloutPlanWavesSelectorsLocationSelector" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelector.Initializer"></a>

```typescript
import { computeRolloutPlan } from '@cdktn/provider-google'

const computeRolloutPlanWavesSelectorsLocationSelector: computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelector.property.includedLocations">includedLocations</a></code> | <code>string[]</code> | Example: "us-central1-a". |

---

##### `includedLocations`<sup>Optional</sup> <a name="includedLocations" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelector.property.includedLocations"></a>

```typescript
public readonly includedLocations: string[];
```

- *Type:* string[]

Example: "us-central1-a".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/compute_rollout_plan#included_locations ComputeRolloutPlan#included_locations}

---

### ComputeRolloutPlanWavesSelectorsResourceHierarchySelector <a name="ComputeRolloutPlanWavesSelectorsResourceHierarchySelector" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelector.Initializer"></a>

```typescript
import { computeRolloutPlan } from '@cdktn/provider-google'

const computeRolloutPlanWavesSelectorsResourceHierarchySelector: computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelector.property.includedFolders">includedFolders</a></code> | <code>string[]</code> | Format: "folders/{folder_id}". |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelector.property.includedOrganizations">includedOrganizations</a></code> | <code>string[]</code> | Format: "organizations/{organization_id}". |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelector.property.includedProjects">includedProjects</a></code> | <code>string[]</code> | Format: "projects/{project_id}". |

---

##### `includedFolders`<sup>Optional</sup> <a name="includedFolders" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelector.property.includedFolders"></a>

```typescript
public readonly includedFolders: string[];
```

- *Type:* string[]

Format: "folders/{folder_id}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/compute_rollout_plan#included_folders ComputeRolloutPlan#included_folders}

---

##### `includedOrganizations`<sup>Optional</sup> <a name="includedOrganizations" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelector.property.includedOrganizations"></a>

```typescript
public readonly includedOrganizations: string[];
```

- *Type:* string[]

Format: "organizations/{organization_id}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/compute_rollout_plan#included_organizations ComputeRolloutPlan#included_organizations}

---

##### `includedProjects`<sup>Optional</sup> <a name="includedProjects" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelector.property.includedProjects"></a>

```typescript
public readonly includedProjects: string[];
```

- *Type:* string[]

Format: "projects/{project_id}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/compute_rollout_plan#included_projects ComputeRolloutPlan#included_projects}

---

### ComputeRolloutPlanWavesValidation <a name="ComputeRolloutPlanWavesValidation" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidation.Initializer"></a>

```typescript
import { computeRolloutPlan } from '@cdktn/provider-google'

const computeRolloutPlanWavesValidation: computeRolloutPlan.ComputeRolloutPlanWavesValidation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidation.property.type">type</a></code> | <code>string</code> | The type of the validation. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidation.property.timeBasedValidationMetadata">timeBasedValidationMetadata</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata">ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata</a></code> | time_based_validation_metadata block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidation.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the validation.

Possible values:
"manual": The system waits for an end-user approval API before progressing to the next wave.
"time": The system waits for a user specified duration before progressing to the next wave.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/compute_rollout_plan#type ComputeRolloutPlan#type}

---

##### `timeBasedValidationMetadata`<sup>Optional</sup> <a name="timeBasedValidationMetadata" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidation.property.timeBasedValidationMetadata"></a>

```typescript
public readonly timeBasedValidationMetadata: ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata;
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata">ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata</a>

time_based_validation_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/compute_rollout_plan#time_based_validation_metadata ComputeRolloutPlan#time_based_validation_metadata}

---

### ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata <a name="ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata.Initializer"></a>

```typescript
import { computeRolloutPlan } from '@cdktn/provider-google'

const computeRolloutPlanWavesValidationTimeBasedValidationMetadata: computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata.property.waitDuration">waitDuration</a></code> | <code>string</code> | The duration that the system waits in between waves. |

---

##### `waitDuration`<sup>Optional</sup> <a name="waitDuration" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata.property.waitDuration"></a>

```typescript
public readonly waitDuration: string;
```

- *Type:* string

The duration that the system waits in between waves.

This wait starts
after all changes in the wave are rolled out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/compute_rollout_plan#wait_duration ComputeRolloutPlan#wait_duration}

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRolloutPlanTimeoutsOutputReference <a name="ComputeRolloutPlanTimeoutsOutputReference" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeRolloutPlan } from '@cdktn/provider-google'

new computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeouts">ComputeRolloutPlanTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeRolloutPlanTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeouts">ComputeRolloutPlanTimeouts</a>

---


### ComputeRolloutPlanWavesList <a name="ComputeRolloutPlanWavesList" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.Initializer"></a>

```typescript
import { computeRolloutPlan } from '@cdktn/provider-google'

new computeRolloutPlan.ComputeRolloutPlanWavesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.get"></a>

```typescript
public get(index: number): ComputeRolloutPlanWavesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWaves">ComputeRolloutPlanWaves</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeRolloutPlanWaves[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWaves">ComputeRolloutPlanWaves</a>[]

---


### ComputeRolloutPlanWavesOrchestrationOptionsDelaysList <a name="ComputeRolloutPlanWavesOrchestrationOptionsDelaysList" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.Initializer"></a>

```typescript
import { computeRolloutPlan } from '@cdktn/provider-google'

new computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.get"></a>

```typescript
public get(index: number): ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelays">ComputeRolloutPlanWavesOrchestrationOptionsDelays</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeRolloutPlanWavesOrchestrationOptionsDelays[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelays">ComputeRolloutPlanWavesOrchestrationOptionsDelays</a>[]

---


### ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference <a name="ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer"></a>

```typescript
import { computeRolloutPlan } from '@cdktn/provider-google'

new computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resetDelimiter">resetDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resetDuration">resetDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDelimiter` <a name="resetDelimiter" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resetDelimiter"></a>

```typescript
public resetDelimiter(): void
```

##### `resetDuration` <a name="resetDuration" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resetDuration"></a>

```typescript
public resetDuration(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.delimiterInput">delimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.durationInput">durationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.delimiter">delimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.duration">duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelays">ComputeRolloutPlanWavesOrchestrationOptionsDelays</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `delimiterInput`<sup>Optional</sup> <a name="delimiterInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.delimiterInput"></a>

```typescript
public readonly delimiterInput: string;
```

- *Type:* string

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.delimiter"></a>

```typescript
public readonly delimiter: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeRolloutPlanWavesOrchestrationOptionsDelays;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelays">ComputeRolloutPlanWavesOrchestrationOptionsDelays</a>

---


### ComputeRolloutPlanWavesOrchestrationOptionsOutputReference <a name="ComputeRolloutPlanWavesOrchestrationOptionsOutputReference" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.Initializer"></a>

```typescript
import { computeRolloutPlan } from '@cdktn/provider-google'

new computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.putDelays">putDelays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resetDelays">resetDelays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resetMaxConcurrentLocations">resetMaxConcurrentLocations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resetMaxConcurrentResourcesPerLocation">resetMaxConcurrentResourcesPerLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDelays` <a name="putDelays" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.putDelays"></a>

```typescript
public putDelays(value: IResolvable | ComputeRolloutPlanWavesOrchestrationOptionsDelays[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.putDelays.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelays">ComputeRolloutPlanWavesOrchestrationOptionsDelays</a>[]

---

##### `resetDelays` <a name="resetDelays" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resetDelays"></a>

```typescript
public resetDelays(): void
```

##### `resetMaxConcurrentLocations` <a name="resetMaxConcurrentLocations" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resetMaxConcurrentLocations"></a>

```typescript
public resetMaxConcurrentLocations(): void
```

##### `resetMaxConcurrentResourcesPerLocation` <a name="resetMaxConcurrentResourcesPerLocation" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resetMaxConcurrentResourcesPerLocation"></a>

```typescript
public resetMaxConcurrentResourcesPerLocation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.delays">delays</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList">ComputeRolloutPlanWavesOrchestrationOptionsDelaysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.delaysInput">delaysInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelays">ComputeRolloutPlanWavesOrchestrationOptionsDelays</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentLocationsInput">maxConcurrentLocationsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentResourcesPerLocationInput">maxConcurrentResourcesPerLocationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentLocations">maxConcurrentLocations</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentResourcesPerLocation">maxConcurrentResourcesPerLocation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptions">ComputeRolloutPlanWavesOrchestrationOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `delays`<sup>Required</sup> <a name="delays" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.delays"></a>

```typescript
public readonly delays: ComputeRolloutPlanWavesOrchestrationOptionsDelaysList;
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList">ComputeRolloutPlanWavesOrchestrationOptionsDelaysList</a>

---

##### `delaysInput`<sup>Optional</sup> <a name="delaysInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.delaysInput"></a>

```typescript
public readonly delaysInput: IResolvable | ComputeRolloutPlanWavesOrchestrationOptionsDelays[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelays">ComputeRolloutPlanWavesOrchestrationOptionsDelays</a>[]

---

##### `maxConcurrentLocationsInput`<sup>Optional</sup> <a name="maxConcurrentLocationsInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentLocationsInput"></a>

```typescript
public readonly maxConcurrentLocationsInput: number;
```

- *Type:* number

---

##### `maxConcurrentResourcesPerLocationInput`<sup>Optional</sup> <a name="maxConcurrentResourcesPerLocationInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentResourcesPerLocationInput"></a>

```typescript
public readonly maxConcurrentResourcesPerLocationInput: number;
```

- *Type:* number

---

##### `maxConcurrentLocations`<sup>Required</sup> <a name="maxConcurrentLocations" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentLocations"></a>

```typescript
public readonly maxConcurrentLocations: number;
```

- *Type:* number

---

##### `maxConcurrentResourcesPerLocation`<sup>Required</sup> <a name="maxConcurrentResourcesPerLocation" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentResourcesPerLocation"></a>

```typescript
public readonly maxConcurrentResourcesPerLocation: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeRolloutPlanWavesOrchestrationOptions;
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptions">ComputeRolloutPlanWavesOrchestrationOptions</a>

---


### ComputeRolloutPlanWavesOutputReference <a name="ComputeRolloutPlanWavesOutputReference" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.Initializer"></a>

```typescript
import { computeRolloutPlan } from '@cdktn/provider-google'

new computeRolloutPlan.ComputeRolloutPlanWavesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.putOrchestrationOptions">putOrchestrationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.putSelectors">putSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.putValidation">putValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.resetOrchestrationOptions">resetOrchestrationOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOrchestrationOptions` <a name="putOrchestrationOptions" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.putOrchestrationOptions"></a>

```typescript
public putOrchestrationOptions(value: ComputeRolloutPlanWavesOrchestrationOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.putOrchestrationOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptions">ComputeRolloutPlanWavesOrchestrationOptions</a>

---

##### `putSelectors` <a name="putSelectors" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.putSelectors"></a>

```typescript
public putSelectors(value: IResolvable | ComputeRolloutPlanWavesSelectors[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.putSelectors.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectors">ComputeRolloutPlanWavesSelectors</a>[]

---

##### `putValidation` <a name="putValidation" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.putValidation"></a>

```typescript
public putValidation(value: ComputeRolloutPlanWavesValidation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.putValidation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidation">ComputeRolloutPlanWavesValidation</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetOrchestrationOptions` <a name="resetOrchestrationOptions" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.resetOrchestrationOptions"></a>

```typescript
public resetOrchestrationOptions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.number">number</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.orchestrationOptions">orchestrationOptions</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference">ComputeRolloutPlanWavesOrchestrationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.selectors">selectors</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList">ComputeRolloutPlanWavesSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.validation">validation</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference">ComputeRolloutPlanWavesValidationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.orchestrationOptionsInput">orchestrationOptionsInput</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptions">ComputeRolloutPlanWavesOrchestrationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.selectorsInput">selectorsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectors">ComputeRolloutPlanWavesSelectors</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.validationInput">validationInput</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidation">ComputeRolloutPlanWavesValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWaves">ComputeRolloutPlanWaves</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.number"></a>

```typescript
public readonly number: number;
```

- *Type:* number

---

##### `orchestrationOptions`<sup>Required</sup> <a name="orchestrationOptions" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.orchestrationOptions"></a>

```typescript
public readonly orchestrationOptions: ComputeRolloutPlanWavesOrchestrationOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference">ComputeRolloutPlanWavesOrchestrationOptionsOutputReference</a>

---

##### `selectors`<sup>Required</sup> <a name="selectors" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.selectors"></a>

```typescript
public readonly selectors: ComputeRolloutPlanWavesSelectorsList;
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList">ComputeRolloutPlanWavesSelectorsList</a>

---

##### `validation`<sup>Required</sup> <a name="validation" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.validation"></a>

```typescript
public readonly validation: ComputeRolloutPlanWavesValidationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference">ComputeRolloutPlanWavesValidationOutputReference</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `orchestrationOptionsInput`<sup>Optional</sup> <a name="orchestrationOptionsInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.orchestrationOptionsInput"></a>

```typescript
public readonly orchestrationOptionsInput: ComputeRolloutPlanWavesOrchestrationOptions;
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptions">ComputeRolloutPlanWavesOrchestrationOptions</a>

---

##### `selectorsInput`<sup>Optional</sup> <a name="selectorsInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.selectorsInput"></a>

```typescript
public readonly selectorsInput: IResolvable | ComputeRolloutPlanWavesSelectors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectors">ComputeRolloutPlanWavesSelectors</a>[]

---

##### `validationInput`<sup>Optional</sup> <a name="validationInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.validationInput"></a>

```typescript
public readonly validationInput: ComputeRolloutPlanWavesValidation;
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidation">ComputeRolloutPlanWavesValidation</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeRolloutPlanWaves;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWaves">ComputeRolloutPlanWaves</a>

---


### ComputeRolloutPlanWavesSelectorsList <a name="ComputeRolloutPlanWavesSelectorsList" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.Initializer"></a>

```typescript
import { computeRolloutPlan } from '@cdktn/provider-google'

new computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.get"></a>

```typescript
public get(index: number): ComputeRolloutPlanWavesSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectors">ComputeRolloutPlanWavesSelectors</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeRolloutPlanWavesSelectors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectors">ComputeRolloutPlanWavesSelectors</a>[]

---


### ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference <a name="ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.Initializer"></a>

```typescript
import { computeRolloutPlan } from '@cdktn/provider-google'

new computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.resetIncludedLocations">resetIncludedLocations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludedLocations` <a name="resetIncludedLocations" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.resetIncludedLocations"></a>

```typescript
public resetIncludedLocations(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.includedLocationsInput">includedLocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.includedLocations">includedLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelector">ComputeRolloutPlanWavesSelectorsLocationSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includedLocationsInput`<sup>Optional</sup> <a name="includedLocationsInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.includedLocationsInput"></a>

```typescript
public readonly includedLocationsInput: string[];
```

- *Type:* string[]

---

##### `includedLocations`<sup>Required</sup> <a name="includedLocations" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.includedLocations"></a>

```typescript
public readonly includedLocations: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeRolloutPlanWavesSelectorsLocationSelector;
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelector">ComputeRolloutPlanWavesSelectorsLocationSelector</a>

---


### ComputeRolloutPlanWavesSelectorsOutputReference <a name="ComputeRolloutPlanWavesSelectorsOutputReference" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.Initializer"></a>

```typescript
import { computeRolloutPlan } from '@cdktn/provider-google'

new computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.putLocationSelector">putLocationSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.putResourceHierarchySelector">putResourceHierarchySelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.resetLocationSelector">resetLocationSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.resetResourceHierarchySelector">resetResourceHierarchySelector</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLocationSelector` <a name="putLocationSelector" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.putLocationSelector"></a>

```typescript
public putLocationSelector(value: ComputeRolloutPlanWavesSelectorsLocationSelector): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.putLocationSelector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelector">ComputeRolloutPlanWavesSelectorsLocationSelector</a>

---

##### `putResourceHierarchySelector` <a name="putResourceHierarchySelector" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.putResourceHierarchySelector"></a>

```typescript
public putResourceHierarchySelector(value: ComputeRolloutPlanWavesSelectorsResourceHierarchySelector): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.putResourceHierarchySelector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelector">ComputeRolloutPlanWavesSelectorsResourceHierarchySelector</a>

---

##### `resetLocationSelector` <a name="resetLocationSelector" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.resetLocationSelector"></a>

```typescript
public resetLocationSelector(): void
```

##### `resetResourceHierarchySelector` <a name="resetResourceHierarchySelector" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.resetResourceHierarchySelector"></a>

```typescript
public resetResourceHierarchySelector(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.property.locationSelector">locationSelector</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference">ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.property.resourceHierarchySelector">resourceHierarchySelector</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference">ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.property.locationSelectorInput">locationSelectorInput</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelector">ComputeRolloutPlanWavesSelectorsLocationSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.property.resourceHierarchySelectorInput">resourceHierarchySelectorInput</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelector">ComputeRolloutPlanWavesSelectorsResourceHierarchySelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectors">ComputeRolloutPlanWavesSelectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `locationSelector`<sup>Required</sup> <a name="locationSelector" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.property.locationSelector"></a>

```typescript
public readonly locationSelector: ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference">ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference</a>

---

##### `resourceHierarchySelector`<sup>Required</sup> <a name="resourceHierarchySelector" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.property.resourceHierarchySelector"></a>

```typescript
public readonly resourceHierarchySelector: ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference">ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference</a>

---

##### `locationSelectorInput`<sup>Optional</sup> <a name="locationSelectorInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.property.locationSelectorInput"></a>

```typescript
public readonly locationSelectorInput: ComputeRolloutPlanWavesSelectorsLocationSelector;
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelector">ComputeRolloutPlanWavesSelectorsLocationSelector</a>

---

##### `resourceHierarchySelectorInput`<sup>Optional</sup> <a name="resourceHierarchySelectorInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.property.resourceHierarchySelectorInput"></a>

```typescript
public readonly resourceHierarchySelectorInput: ComputeRolloutPlanWavesSelectorsResourceHierarchySelector;
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelector">ComputeRolloutPlanWavesSelectorsResourceHierarchySelector</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeRolloutPlanWavesSelectors;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectors">ComputeRolloutPlanWavesSelectors</a>

---


### ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference <a name="ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.Initializer"></a>

```typescript
import { computeRolloutPlan } from '@cdktn/provider-google'

new computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resetIncludedFolders">resetIncludedFolders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resetIncludedOrganizations">resetIncludedOrganizations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resetIncludedProjects">resetIncludedProjects</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludedFolders` <a name="resetIncludedFolders" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resetIncludedFolders"></a>

```typescript
public resetIncludedFolders(): void
```

##### `resetIncludedOrganizations` <a name="resetIncludedOrganizations" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resetIncludedOrganizations"></a>

```typescript
public resetIncludedOrganizations(): void
```

##### `resetIncludedProjects` <a name="resetIncludedProjects" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resetIncludedProjects"></a>

```typescript
public resetIncludedProjects(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedFoldersInput">includedFoldersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedOrganizationsInput">includedOrganizationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedProjectsInput">includedProjectsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedFolders">includedFolders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedOrganizations">includedOrganizations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedProjects">includedProjects</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelector">ComputeRolloutPlanWavesSelectorsResourceHierarchySelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includedFoldersInput`<sup>Optional</sup> <a name="includedFoldersInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedFoldersInput"></a>

```typescript
public readonly includedFoldersInput: string[];
```

- *Type:* string[]

---

##### `includedOrganizationsInput`<sup>Optional</sup> <a name="includedOrganizationsInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedOrganizationsInput"></a>

```typescript
public readonly includedOrganizationsInput: string[];
```

- *Type:* string[]

---

##### `includedProjectsInput`<sup>Optional</sup> <a name="includedProjectsInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedProjectsInput"></a>

```typescript
public readonly includedProjectsInput: string[];
```

- *Type:* string[]

---

##### `includedFolders`<sup>Required</sup> <a name="includedFolders" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedFolders"></a>

```typescript
public readonly includedFolders: string[];
```

- *Type:* string[]

---

##### `includedOrganizations`<sup>Required</sup> <a name="includedOrganizations" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedOrganizations"></a>

```typescript
public readonly includedOrganizations: string[];
```

- *Type:* string[]

---

##### `includedProjects`<sup>Required</sup> <a name="includedProjects" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedProjects"></a>

```typescript
public readonly includedProjects: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeRolloutPlanWavesSelectorsResourceHierarchySelector;
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelector">ComputeRolloutPlanWavesSelectorsResourceHierarchySelector</a>

---


### ComputeRolloutPlanWavesValidationOutputReference <a name="ComputeRolloutPlanWavesValidationOutputReference" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.Initializer"></a>

```typescript
import { computeRolloutPlan } from '@cdktn/provider-google'

new computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.putTimeBasedValidationMetadata">putTimeBasedValidationMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.resetTimeBasedValidationMetadata">resetTimeBasedValidationMetadata</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTimeBasedValidationMetadata` <a name="putTimeBasedValidationMetadata" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.putTimeBasedValidationMetadata"></a>

```typescript
public putTimeBasedValidationMetadata(value: ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.putTimeBasedValidationMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata">ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata</a>

---

##### `resetTimeBasedValidationMetadata` <a name="resetTimeBasedValidationMetadata" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.resetTimeBasedValidationMetadata"></a>

```typescript
public resetTimeBasedValidationMetadata(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.property.timeBasedValidationMetadata">timeBasedValidationMetadata</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference">ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.property.timeBasedValidationMetadataInput">timeBasedValidationMetadataInput</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata">ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidation">ComputeRolloutPlanWavesValidation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timeBasedValidationMetadata`<sup>Required</sup> <a name="timeBasedValidationMetadata" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.property.timeBasedValidationMetadata"></a>

```typescript
public readonly timeBasedValidationMetadata: ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference">ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference</a>

---

##### `timeBasedValidationMetadataInput`<sup>Optional</sup> <a name="timeBasedValidationMetadataInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.property.timeBasedValidationMetadataInput"></a>

```typescript
public readonly timeBasedValidationMetadataInput: ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata;
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata">ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeRolloutPlanWavesValidation;
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidation">ComputeRolloutPlanWavesValidation</a>

---


### ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference <a name="ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.Initializer"></a>

```typescript
import { computeRolloutPlan } from '@cdktn/provider-google'

new computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.resetWaitDuration">resetWaitDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWaitDuration` <a name="resetWaitDuration" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.resetWaitDuration"></a>

```typescript
public resetWaitDuration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.waitDurationInput">waitDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.waitDuration">waitDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata">ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `waitDurationInput`<sup>Optional</sup> <a name="waitDurationInput" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.waitDurationInput"></a>

```typescript
public readonly waitDurationInput: string;
```

- *Type:* string

---

##### `waitDuration`<sup>Required</sup> <a name="waitDuration" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.waitDuration"></a>

```typescript
public readonly waitDuration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata;
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata">ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata</a>

---



