# `computeNetworkFirewallPolicyIamBinding` Submodule <a name="`computeNetworkFirewallPolicyIamBinding` Submodule" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeNetworkFirewallPolicyIamBinding <a name="ComputeNetworkFirewallPolicyIamBinding" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_network_firewall_policy_iam_binding google_compute_network_firewall_policy_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.Initializer"></a>

```typescript
import { computeNetworkFirewallPolicyIamBinding } from '@cdktn/provider-google'

new computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding(scope: Construct, id: string, config: ComputeNetworkFirewallPolicyIamBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig">ComputeNetworkFirewallPolicyIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig">ComputeNetworkFirewallPolicyIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.putCondition"></a>

```typescript
public putCondition(value: ComputeNetworkFirewallPolicyIamBindingCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingCondition">ComputeNetworkFirewallPolicyIamBindingCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeNetworkFirewallPolicyIamBinding resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.isConstruct"></a>

```typescript
import { computeNetworkFirewallPolicyIamBinding } from '@cdktn/provider-google'

computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.isTerraformElement"></a>

```typescript
import { computeNetworkFirewallPolicyIamBinding } from '@cdktn/provider-google'

computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.isTerraformResource"></a>

```typescript
import { computeNetworkFirewallPolicyIamBinding } from '@cdktn/provider-google'

computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.generateConfigForImport"></a>

```typescript
import { computeNetworkFirewallPolicyIamBinding } from '@cdktn/provider-google'

computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ComputeNetworkFirewallPolicyIamBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeNetworkFirewallPolicyIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeNetworkFirewallPolicyIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_network_firewall_policy_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ComputeNetworkFirewallPolicyIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference">ComputeNetworkFirewallPolicyIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingCondition">ComputeNetworkFirewallPolicyIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.membersInput">membersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.members">members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.condition"></a>

```typescript
public readonly condition: ComputeNetworkFirewallPolicyIamBindingConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference">ComputeNetworkFirewallPolicyIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.conditionInput"></a>

```typescript
public readonly conditionInput: ComputeNetworkFirewallPolicyIamBindingCondition;
```

- *Type:* <a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingCondition">ComputeNetworkFirewallPolicyIamBindingCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.membersInput"></a>

```typescript
public readonly membersInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeNetworkFirewallPolicyIamBindingCondition <a name="ComputeNetworkFirewallPolicyIamBindingCondition" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingCondition.Initializer"></a>

```typescript
import { computeNetworkFirewallPolicyIamBinding } from '@cdktn/provider-google'

const computeNetworkFirewallPolicyIamBindingCondition: computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_network_firewall_policy_iam_binding#expression ComputeNetworkFirewallPolicyIamBinding#expression}. |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_network_firewall_policy_iam_binding#title ComputeNetworkFirewallPolicyIamBinding#title}. |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_network_firewall_policy_iam_binding#description ComputeNetworkFirewallPolicyIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_network_firewall_policy_iam_binding#expression ComputeNetworkFirewallPolicyIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_network_firewall_policy_iam_binding#title ComputeNetworkFirewallPolicyIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_network_firewall_policy_iam_binding#description ComputeNetworkFirewallPolicyIamBinding#description}.

---

### ComputeNetworkFirewallPolicyIamBindingConfig <a name="ComputeNetworkFirewallPolicyIamBindingConfig" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig.Initializer"></a>

```typescript
import { computeNetworkFirewallPolicyIamBinding } from '@cdktn/provider-google'

const computeNetworkFirewallPolicyIamBindingConfig: computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig.property.members">members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_network_firewall_policy_iam_binding#members ComputeNetworkFirewallPolicyIamBinding#members}. |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_network_firewall_policy_iam_binding#name ComputeNetworkFirewallPolicyIamBinding#name}. |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_network_firewall_policy_iam_binding#role ComputeNetworkFirewallPolicyIamBinding#role}. |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingCondition">ComputeNetworkFirewallPolicyIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_network_firewall_policy_iam_binding#id ComputeNetworkFirewallPolicyIamBinding#id}. |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_network_firewall_policy_iam_binding#project ComputeNetworkFirewallPolicyIamBinding#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_network_firewall_policy_iam_binding#members ComputeNetworkFirewallPolicyIamBinding#members}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_network_firewall_policy_iam_binding#name ComputeNetworkFirewallPolicyIamBinding#name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_network_firewall_policy_iam_binding#role ComputeNetworkFirewallPolicyIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig.property.condition"></a>

```typescript
public readonly condition: ComputeNetworkFirewallPolicyIamBindingCondition;
```

- *Type:* <a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingCondition">ComputeNetworkFirewallPolicyIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_network_firewall_policy_iam_binding#condition ComputeNetworkFirewallPolicyIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_network_firewall_policy_iam_binding#id ComputeNetworkFirewallPolicyIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_network_firewall_policy_iam_binding#project ComputeNetworkFirewallPolicyIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeNetworkFirewallPolicyIamBindingConditionOutputReference <a name="ComputeNetworkFirewallPolicyIamBindingConditionOutputReference" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.Initializer"></a>

```typescript
import { computeNetworkFirewallPolicyIamBinding } from '@cdktn/provider-google'

new computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingCondition">ComputeNetworkFirewallPolicyIamBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeNetworkFirewallPolicyIamBindingCondition;
```

- *Type:* <a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingCondition">ComputeNetworkFirewallPolicyIamBindingCondition</a>

---



