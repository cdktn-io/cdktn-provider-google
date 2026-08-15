# `computeRegionHealthAggregationPolicy` Submodule <a name="`computeRegionHealthAggregationPolicy` Submodule" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionHealthAggregationPolicy <a name="ComputeRegionHealthAggregationPolicy" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_health_aggregation_policy google_compute_region_health_aggregation_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer"></a>

```typescript
import { computeRegionHealthAggregationPolicy } from '@cdktn/provider-google'

new computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy(scope: Construct, id: string, config: ComputeRegionHealthAggregationPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig">ComputeRegionHealthAggregationPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig">ComputeRegionHealthAggregationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetHealthyPercentThreshold">resetHealthyPercentThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetMinHealthyThreshold">resetMinHealthyThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetPolicyType">resetPolicyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeRegionHealthAggregationPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts">ComputeRegionHealthAggregationPolicyTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetHealthyPercentThreshold` <a name="resetHealthyPercentThreshold" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetHealthyPercentThreshold"></a>

```typescript
public resetHealthyPercentThreshold(): void
```

##### `resetMinHealthyThreshold` <a name="resetMinHealthyThreshold" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetMinHealthyThreshold"></a>

```typescript
public resetMinHealthyThreshold(): void
```

##### `resetPolicyType` <a name="resetPolicyType" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetPolicyType"></a>

```typescript
public resetPolicyType(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeRegionHealthAggregationPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.isConstruct"></a>

```typescript
import { computeRegionHealthAggregationPolicy } from '@cdktn/provider-google'

computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.isTerraformElement"></a>

```typescript
import { computeRegionHealthAggregationPolicy } from '@cdktn/provider-google'

computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.isTerraformResource"></a>

```typescript
import { computeRegionHealthAggregationPolicy } from '@cdktn/provider-google'

computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.generateConfigForImport"></a>

```typescript
import { computeRegionHealthAggregationPolicy } from '@cdktn/provider-google'

computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ComputeRegionHealthAggregationPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeRegionHealthAggregationPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeRegionHealthAggregationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_health_aggregation_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ComputeRegionHealthAggregationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.fingerprint">fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.selfLinkWithId">selfLinkWithId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference">ComputeRegionHealthAggregationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.healthyPercentThresholdInput">healthyPercentThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.minHealthyThresholdInput">minHealthyThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.policyTypeInput">policyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts">ComputeRegionHealthAggregationPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.healthyPercentThreshold">healthyPercentThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.minHealthyThreshold">minHealthyThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.policyType">policyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.fingerprint"></a>

```typescript
public readonly fingerprint: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `selfLinkWithId`<sup>Required</sup> <a name="selfLinkWithId" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.selfLinkWithId"></a>

```typescript
public readonly selfLinkWithId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeRegionHealthAggregationPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference">ComputeRegionHealthAggregationPolicyTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `healthyPercentThresholdInput`<sup>Optional</sup> <a name="healthyPercentThresholdInput" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.healthyPercentThresholdInput"></a>

```typescript
public readonly healthyPercentThresholdInput: number;
```

- *Type:* number

---

##### `minHealthyThresholdInput`<sup>Optional</sup> <a name="minHealthyThresholdInput" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.minHealthyThresholdInput"></a>

```typescript
public readonly minHealthyThresholdInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `policyTypeInput`<sup>Optional</sup> <a name="policyTypeInput" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.policyTypeInput"></a>

```typescript
public readonly policyTypeInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeRegionHealthAggregationPolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts">ComputeRegionHealthAggregationPolicyTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `healthyPercentThreshold`<sup>Required</sup> <a name="healthyPercentThreshold" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.healthyPercentThreshold"></a>

```typescript
public readonly healthyPercentThreshold: number;
```

- *Type:* number

---

##### `minHealthyThreshold`<sup>Required</sup> <a name="minHealthyThreshold" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.minHealthyThreshold"></a>

```typescript
public readonly minHealthyThreshold: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionHealthAggregationPolicyConfig <a name="ComputeRegionHealthAggregationPolicyConfig" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.Initializer"></a>

```typescript
import { computeRegionHealthAggregationPolicy } from '@cdktn/provider-google'

const computeRegionHealthAggregationPolicyConfig: computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.name">name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.region">region</a></code> | <code>string</code> | URL of the region where the health aggregation policy resides. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.healthyPercentThreshold">healthyPercentThreshold</a></code> | <code>number</code> | Can only be set if the 'policyType' field is 'BACKEND_SERVICE_POLICY'. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.minHealthyThreshold">minHealthyThreshold</a></code> | <code>number</code> | Can only be set if the 'policyType' field is 'BACKEND_SERVICE_POLICY'. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.policyType">policyType</a></code> | <code>string</code> | Specifies the type of the healthAggregationPolicy. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_health_aggregation_policy#project ComputeRegionHealthAggregationPolicy#project}. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts">ComputeRegionHealthAggregationPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is created.
The name must be 1-63 characters long, and comply with RFC1035.
Specifically, the name must be 1-63 characters long and match the regular
expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the first
character must be a lowercase letter, and all following characters must
be a dash, lowercase letter, or digit, except the last character, which
cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_health_aggregation_policy#name ComputeRegionHealthAggregationPolicy#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

URL of the region where the health aggregation policy resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_health_aggregation_policy#region ComputeRegionHealthAggregationPolicy#region}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_health_aggregation_policy#deletion_policy ComputeRegionHealthAggregationPolicy#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_health_aggregation_policy#description ComputeRegionHealthAggregationPolicy#description}

---

##### `healthyPercentThreshold`<sup>Optional</sup> <a name="healthyPercentThreshold" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.healthyPercentThreshold"></a>

```typescript
public readonly healthyPercentThreshold: number;
```

- *Type:* number

Can only be set if the 'policyType' field is 'BACKEND_SERVICE_POLICY'.

Specifies the threshold (as a
percentage) of healthy endpoints required in order to consider the
aggregated health result HEALTHY. Defaults to '60'. Must be in
range [0, 100]. Not applicable if the 'policyType' field is
'DNB_PUBLIC_IP_POLICY'. Can be mutated. This field is optional,
and will be set to the default if unspecified. Note that both this
threshold and 'minHealthyThreshold' must be satisfied in order
for HEALTHY to be the aggregated result. "Endpoints" refers to network
endpoints within a Network Endpoint Group or instances within an Instance
Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_health_aggregation_policy#healthy_percent_threshold ComputeRegionHealthAggregationPolicy#healthy_percent_threshold}

---

##### `minHealthyThreshold`<sup>Optional</sup> <a name="minHealthyThreshold" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.minHealthyThreshold"></a>

```typescript
public readonly minHealthyThreshold: number;
```

- *Type:* number

Can only be set if the 'policyType' field is 'BACKEND_SERVICE_POLICY'.

Specifies the minimum number of
healthy endpoints required in order to consider the aggregated health
result HEALTHY. Defaults to '1'. Must be positive. Not
applicable if the 'policyType' field is
'DNB_PUBLIC_IP_POLICY'. Can be mutated. This field is optional,
and will be set to the default if unspecified. Note that both this
threshold and 'healthyPercentThreshold' must be satisfied in
order for HEALTHY to be the aggregated result. "Endpoints" refers to
network endpoints within a Network Endpoint Group or instances within an
Instance Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_health_aggregation_policy#min_healthy_threshold ComputeRegionHealthAggregationPolicy#min_healthy_threshold}

---

##### `policyType`<sup>Optional</sup> <a name="policyType" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

Specifies the type of the healthAggregationPolicy.

The only allowed value
for global resources is 'DNS_PUBLIC_IP_POLICY'. The only allowed
value for regional resources is 'BACKEND_SERVICE_POLICY'. Must
be specified when the healthAggregationPolicy is created, and cannot be
mutated. Default value: "BACKEND_SERVICE_POLICY" Possible values: ["DNS_PUBLIC_IP_POLICY", "BACKEND_SERVICE_POLICY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_health_aggregation_policy#policy_type ComputeRegionHealthAggregationPolicy#policy_type}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_health_aggregation_policy#project ComputeRegionHealthAggregationPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeRegionHealthAggregationPolicyTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts">ComputeRegionHealthAggregationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_health_aggregation_policy#timeouts ComputeRegionHealthAggregationPolicy#timeouts}

---

### ComputeRegionHealthAggregationPolicyTimeouts <a name="ComputeRegionHealthAggregationPolicyTimeouts" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts.Initializer"></a>

```typescript
import { computeRegionHealthAggregationPolicy } from '@cdktn/provider-google'

const computeRegionHealthAggregationPolicyTimeouts: computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_health_aggregation_policy#create ComputeRegionHealthAggregationPolicy#create}. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_health_aggregation_policy#delete ComputeRegionHealthAggregationPolicy#delete}. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_health_aggregation_policy#update ComputeRegionHealthAggregationPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_health_aggregation_policy#create ComputeRegionHealthAggregationPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_health_aggregation_policy#delete ComputeRegionHealthAggregationPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_health_aggregation_policy#update ComputeRegionHealthAggregationPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionHealthAggregationPolicyTimeoutsOutputReference <a name="ComputeRegionHealthAggregationPolicyTimeoutsOutputReference" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeRegionHealthAggregationPolicy } from '@cdktn/provider-google'

new computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts">ComputeRegionHealthAggregationPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeRegionHealthAggregationPolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeRegionHealthAggregationPolicy.ComputeRegionHealthAggregationPolicyTimeouts">ComputeRegionHealthAggregationPolicyTimeouts</a>

---



