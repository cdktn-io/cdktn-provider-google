# `computeFirewallPolicyIamBinding` Submodule <a name="`computeFirewallPolicyIamBinding` Submodule" id="@cdktn/provider-google.computeFirewallPolicyIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeFirewallPolicyIamBinding <a name="ComputeFirewallPolicyIamBinding" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_firewall_policy_iam_binding google_compute_firewall_policy_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.Initializer"></a>

```typescript
import { computeFirewallPolicyIamBinding } from '@cdktn/provider-google'

new computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding(scope: Construct, id: string, config: ComputeFirewallPolicyIamBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConfig">ComputeFirewallPolicyIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConfig">ComputeFirewallPolicyIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.putCondition"></a>

```typescript
public putCondition(value: ComputeFirewallPolicyIamBindingCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingCondition">ComputeFirewallPolicyIamBindingCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeFirewallPolicyIamBinding resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.isConstruct"></a>

```typescript
import { computeFirewallPolicyIamBinding } from '@cdktn/provider-google'

computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.isTerraformElement"></a>

```typescript
import { computeFirewallPolicyIamBinding } from '@cdktn/provider-google'

computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.isTerraformResource"></a>

```typescript
import { computeFirewallPolicyIamBinding } from '@cdktn/provider-google'

computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.generateConfigForImport"></a>

```typescript
import { computeFirewallPolicyIamBinding } from '@cdktn/provider-google'

computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ComputeFirewallPolicyIamBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeFirewallPolicyIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeFirewallPolicyIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_firewall_policy_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ComputeFirewallPolicyIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference">ComputeFirewallPolicyIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingCondition">ComputeFirewallPolicyIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.property.membersInput">membersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.property.members">members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.property.condition"></a>

```typescript
public readonly condition: ComputeFirewallPolicyIamBindingConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference">ComputeFirewallPolicyIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.property.conditionInput"></a>

```typescript
public readonly conditionInput: ComputeFirewallPolicyIamBindingCondition;
```

- *Type:* <a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingCondition">ComputeFirewallPolicyIamBindingCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.property.membersInput"></a>

```typescript
public readonly membersInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeFirewallPolicyIamBindingCondition <a name="ComputeFirewallPolicyIamBindingCondition" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingCondition.Initializer"></a>

```typescript
import { computeFirewallPolicyIamBinding } from '@cdktn/provider-google'

const computeFirewallPolicyIamBindingCondition: computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_firewall_policy_iam_binding#expression ComputeFirewallPolicyIamBinding#expression}. |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_firewall_policy_iam_binding#title ComputeFirewallPolicyIamBinding#title}. |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_firewall_policy_iam_binding#description ComputeFirewallPolicyIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_firewall_policy_iam_binding#expression ComputeFirewallPolicyIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_firewall_policy_iam_binding#title ComputeFirewallPolicyIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_firewall_policy_iam_binding#description ComputeFirewallPolicyIamBinding#description}.

---

### ComputeFirewallPolicyIamBindingConfig <a name="ComputeFirewallPolicyIamBindingConfig" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConfig.Initializer"></a>

```typescript
import { computeFirewallPolicyIamBinding } from '@cdktn/provider-google'

const computeFirewallPolicyIamBindingConfig: computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConfig.property.members">members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_firewall_policy_iam_binding#members ComputeFirewallPolicyIamBinding#members}. |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_firewall_policy_iam_binding#name ComputeFirewallPolicyIamBinding#name}. |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_firewall_policy_iam_binding#role ComputeFirewallPolicyIamBinding#role}. |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingCondition">ComputeFirewallPolicyIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_firewall_policy_iam_binding#id ComputeFirewallPolicyIamBinding#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConfig.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_firewall_policy_iam_binding#members ComputeFirewallPolicyIamBinding#members}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_firewall_policy_iam_binding#name ComputeFirewallPolicyIamBinding#name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_firewall_policy_iam_binding#role ComputeFirewallPolicyIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConfig.property.condition"></a>

```typescript
public readonly condition: ComputeFirewallPolicyIamBindingCondition;
```

- *Type:* <a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingCondition">ComputeFirewallPolicyIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_firewall_policy_iam_binding#condition ComputeFirewallPolicyIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_firewall_policy_iam_binding#id ComputeFirewallPolicyIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeFirewallPolicyIamBindingConditionOutputReference <a name="ComputeFirewallPolicyIamBindingConditionOutputReference" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.Initializer"></a>

```typescript
import { computeFirewallPolicyIamBinding } from '@cdktn/provider-google'

new computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingCondition">ComputeFirewallPolicyIamBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeFirewallPolicyIamBindingCondition;
```

- *Type:* <a href="#@cdktn/provider-google.computeFirewallPolicyIamBinding.ComputeFirewallPolicyIamBindingCondition">ComputeFirewallPolicyIamBindingCondition</a>

---



