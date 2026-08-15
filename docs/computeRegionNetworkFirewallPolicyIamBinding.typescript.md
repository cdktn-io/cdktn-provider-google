# `computeRegionNetworkFirewallPolicyIamBinding` Submodule <a name="`computeRegionNetworkFirewallPolicyIamBinding` Submodule" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionNetworkFirewallPolicyIamBinding <a name="ComputeRegionNetworkFirewallPolicyIamBinding" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_network_firewall_policy_iam_binding google_compute_region_network_firewall_policy_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.Initializer"></a>

```typescript
import { computeRegionNetworkFirewallPolicyIamBinding } from '@cdktn/provider-google'

new computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding(scope: Construct, id: string, config: ComputeRegionNetworkFirewallPolicyIamBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig">ComputeRegionNetworkFirewallPolicyIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig">ComputeRegionNetworkFirewallPolicyIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.putCondition"></a>

```typescript
public putCondition(value: ComputeRegionNetworkFirewallPolicyIamBindingCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingCondition">ComputeRegionNetworkFirewallPolicyIamBindingCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeRegionNetworkFirewallPolicyIamBinding resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.isConstruct"></a>

```typescript
import { computeRegionNetworkFirewallPolicyIamBinding } from '@cdktn/provider-google'

computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.isTerraformElement"></a>

```typescript
import { computeRegionNetworkFirewallPolicyIamBinding } from '@cdktn/provider-google'

computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.isTerraformResource"></a>

```typescript
import { computeRegionNetworkFirewallPolicyIamBinding } from '@cdktn/provider-google'

computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.generateConfigForImport"></a>

```typescript
import { computeRegionNetworkFirewallPolicyIamBinding } from '@cdktn/provider-google'

computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ComputeRegionNetworkFirewallPolicyIamBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeRegionNetworkFirewallPolicyIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeRegionNetworkFirewallPolicyIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_network_firewall_policy_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ComputeRegionNetworkFirewallPolicyIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference">ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingCondition">ComputeRegionNetworkFirewallPolicyIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.membersInput">membersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.members">members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.condition"></a>

```typescript
public readonly condition: ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference">ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.conditionInput"></a>

```typescript
public readonly conditionInput: ComputeRegionNetworkFirewallPolicyIamBindingCondition;
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingCondition">ComputeRegionNetworkFirewallPolicyIamBindingCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.membersInput"></a>

```typescript
public readonly membersInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionNetworkFirewallPolicyIamBindingCondition <a name="ComputeRegionNetworkFirewallPolicyIamBindingCondition" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingCondition.Initializer"></a>

```typescript
import { computeRegionNetworkFirewallPolicyIamBinding } from '@cdktn/provider-google'

const computeRegionNetworkFirewallPolicyIamBindingCondition: computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_network_firewall_policy_iam_binding#expression ComputeRegionNetworkFirewallPolicyIamBinding#expression}. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_network_firewall_policy_iam_binding#title ComputeRegionNetworkFirewallPolicyIamBinding#title}. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_network_firewall_policy_iam_binding#description ComputeRegionNetworkFirewallPolicyIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_network_firewall_policy_iam_binding#expression ComputeRegionNetworkFirewallPolicyIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_network_firewall_policy_iam_binding#title ComputeRegionNetworkFirewallPolicyIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_network_firewall_policy_iam_binding#description ComputeRegionNetworkFirewallPolicyIamBinding#description}.

---

### ComputeRegionNetworkFirewallPolicyIamBindingConfig <a name="ComputeRegionNetworkFirewallPolicyIamBindingConfig" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.Initializer"></a>

```typescript
import { computeRegionNetworkFirewallPolicyIamBinding } from '@cdktn/provider-google'

const computeRegionNetworkFirewallPolicyIamBindingConfig: computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.members">members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_network_firewall_policy_iam_binding#members ComputeRegionNetworkFirewallPolicyIamBinding#members}. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_network_firewall_policy_iam_binding#name ComputeRegionNetworkFirewallPolicyIamBinding#name}. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_network_firewall_policy_iam_binding#role ComputeRegionNetworkFirewallPolicyIamBinding#role}. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingCondition">ComputeRegionNetworkFirewallPolicyIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_network_firewall_policy_iam_binding#id ComputeRegionNetworkFirewallPolicyIamBinding#id}. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_network_firewall_policy_iam_binding#project ComputeRegionNetworkFirewallPolicyIamBinding#project}. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_network_firewall_policy_iam_binding#region ComputeRegionNetworkFirewallPolicyIamBinding#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_network_firewall_policy_iam_binding#members ComputeRegionNetworkFirewallPolicyIamBinding#members}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_network_firewall_policy_iam_binding#name ComputeRegionNetworkFirewallPolicyIamBinding#name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_network_firewall_policy_iam_binding#role ComputeRegionNetworkFirewallPolicyIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.condition"></a>

```typescript
public readonly condition: ComputeRegionNetworkFirewallPolicyIamBindingCondition;
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingCondition">ComputeRegionNetworkFirewallPolicyIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_network_firewall_policy_iam_binding#condition ComputeRegionNetworkFirewallPolicyIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_network_firewall_policy_iam_binding#id ComputeRegionNetworkFirewallPolicyIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_network_firewall_policy_iam_binding#project ComputeRegionNetworkFirewallPolicyIamBinding#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_network_firewall_policy_iam_binding#region ComputeRegionNetworkFirewallPolicyIamBinding#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference <a name="ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.Initializer"></a>

```typescript
import { computeRegionNetworkFirewallPolicyIamBinding } from '@cdktn/provider-google'

new computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingCondition">ComputeRegionNetworkFirewallPolicyIamBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeRegionNetworkFirewallPolicyIamBindingCondition;
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionNetworkFirewallPolicyIamBinding.ComputeRegionNetworkFirewallPolicyIamBindingCondition">ComputeRegionNetworkFirewallPolicyIamBindingCondition</a>

---



