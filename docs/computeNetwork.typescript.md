# `computeNetwork` Submodule <a name="`computeNetwork` Submodule" id="@cdktn/provider-google.computeNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeNetwork <a name="ComputeNetwork" id="@cdktn/provider-google.computeNetwork.ComputeNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_network google_compute_network}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.Initializer"></a>

```typescript
import { computeNetwork } from '@cdktn/provider-google'

new computeNetwork.ComputeNetwork(scope: Construct, id: string, config: ComputeNetworkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkConfig">ComputeNetworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkConfig">ComputeNetworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.putParams">putParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.resetAutoCreateSubnetworks">resetAutoCreateSubnetworks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.resetBgpAlwaysCompareMed">resetBgpAlwaysCompareMed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.resetBgpBestPathSelectionMode">resetBgpBestPathSelectionMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.resetBgpInterRegionCost">resetBgpInterRegionCost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.resetDeleteBgpAlwaysCompareMed">resetDeleteBgpAlwaysCompareMed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.resetDeleteDefaultRoutesOnCreate">resetDeleteDefaultRoutesOnCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.resetEnableUlaInternalIpv6">resetEnableUlaInternalIpv6</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.resetInternalIpv6Range">resetInternalIpv6Range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.resetMtu">resetMtu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.resetNetworkFirewallPolicyEnforcementOrder">resetNetworkFirewallPolicyEnforcementOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.resetNetworkProfile">resetNetworkProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.resetParams">resetParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.resetRoutingMode">resetRoutingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putParams` <a name="putParams" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.putParams"></a>

```typescript
public putParams(value: ComputeNetworkParams): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.putParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkParams">ComputeNetworkParams</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeNetworkTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkTimeouts">ComputeNetworkTimeouts</a>

---

##### `resetAutoCreateSubnetworks` <a name="resetAutoCreateSubnetworks" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.resetAutoCreateSubnetworks"></a>

```typescript
public resetAutoCreateSubnetworks(): void
```

##### `resetBgpAlwaysCompareMed` <a name="resetBgpAlwaysCompareMed" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.resetBgpAlwaysCompareMed"></a>

```typescript
public resetBgpAlwaysCompareMed(): void
```

##### `resetBgpBestPathSelectionMode` <a name="resetBgpBestPathSelectionMode" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.resetBgpBestPathSelectionMode"></a>

```typescript
public resetBgpBestPathSelectionMode(): void
```

##### `resetBgpInterRegionCost` <a name="resetBgpInterRegionCost" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.resetBgpInterRegionCost"></a>

```typescript
public resetBgpInterRegionCost(): void
```

##### `resetDeleteBgpAlwaysCompareMed` <a name="resetDeleteBgpAlwaysCompareMed" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.resetDeleteBgpAlwaysCompareMed"></a>

```typescript
public resetDeleteBgpAlwaysCompareMed(): void
```

##### `resetDeleteDefaultRoutesOnCreate` <a name="resetDeleteDefaultRoutesOnCreate" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.resetDeleteDefaultRoutesOnCreate"></a>

```typescript
public resetDeleteDefaultRoutesOnCreate(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnableUlaInternalIpv6` <a name="resetEnableUlaInternalIpv6" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.resetEnableUlaInternalIpv6"></a>

```typescript
public resetEnableUlaInternalIpv6(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInternalIpv6Range` <a name="resetInternalIpv6Range" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.resetInternalIpv6Range"></a>

```typescript
public resetInternalIpv6Range(): void
```

##### `resetMtu` <a name="resetMtu" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.resetMtu"></a>

```typescript
public resetMtu(): void
```

##### `resetNetworkFirewallPolicyEnforcementOrder` <a name="resetNetworkFirewallPolicyEnforcementOrder" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.resetNetworkFirewallPolicyEnforcementOrder"></a>

```typescript
public resetNetworkFirewallPolicyEnforcementOrder(): void
```

##### `resetNetworkProfile` <a name="resetNetworkProfile" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.resetNetworkProfile"></a>

```typescript
public resetNetworkProfile(): void
```

##### `resetParams` <a name="resetParams" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.resetParams"></a>

```typescript
public resetParams(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRoutingMode` <a name="resetRoutingMode" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.resetRoutingMode"></a>

```typescript
public resetRoutingMode(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeNetwork resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.isConstruct"></a>

```typescript
import { computeNetwork } from '@cdktn/provider-google'

computeNetwork.ComputeNetwork.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.isTerraformElement"></a>

```typescript
import { computeNetwork } from '@cdktn/provider-google'

computeNetwork.ComputeNetwork.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.isTerraformResource"></a>

```typescript
import { computeNetwork } from '@cdktn/provider-google'

computeNetwork.ComputeNetwork.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.generateConfigForImport"></a>

```typescript
import { computeNetwork } from '@cdktn/provider-google'

computeNetwork.ComputeNetwork.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ComputeNetwork resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeNetwork to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ComputeNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.gatewayIpv4">gatewayIpv4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.networkId">networkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.numericId">numericId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.params">params</a></code> | <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference">ComputeNetworkParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference">ComputeNetworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.autoCreateSubnetworksInput">autoCreateSubnetworksInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.bgpAlwaysCompareMedInput">bgpAlwaysCompareMedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.bgpBestPathSelectionModeInput">bgpBestPathSelectionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.bgpInterRegionCostInput">bgpInterRegionCostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.deleteBgpAlwaysCompareMedInput">deleteBgpAlwaysCompareMedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.deleteDefaultRoutesOnCreateInput">deleteDefaultRoutesOnCreateInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.enableUlaInternalIpv6Input">enableUlaInternalIpv6Input</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.internalIpv6RangeInput">internalIpv6RangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.mtuInput">mtuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.networkFirewallPolicyEnforcementOrderInput">networkFirewallPolicyEnforcementOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.networkProfileInput">networkProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.paramsInput">paramsInput</a></code> | <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkParams">ComputeNetworkParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.routingModeInput">routingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkTimeouts">ComputeNetworkTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.autoCreateSubnetworks">autoCreateSubnetworks</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.bgpAlwaysCompareMed">bgpAlwaysCompareMed</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.bgpBestPathSelectionMode">bgpBestPathSelectionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.bgpInterRegionCost">bgpInterRegionCost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.deleteBgpAlwaysCompareMed">deleteBgpAlwaysCompareMed</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.deleteDefaultRoutesOnCreate">deleteDefaultRoutesOnCreate</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.enableUlaInternalIpv6">enableUlaInternalIpv6</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.internalIpv6Range">internalIpv6Range</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.mtu">mtu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.networkFirewallPolicyEnforcementOrder">networkFirewallPolicyEnforcementOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.networkProfile">networkProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.routingMode">routingMode</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `gatewayIpv4`<sup>Required</sup> <a name="gatewayIpv4" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.gatewayIpv4"></a>

```typescript
public readonly gatewayIpv4: string;
```

- *Type:* string

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.networkId"></a>

```typescript
public readonly networkId: string;
```

- *Type:* string

---

##### `numericId`<sup>Required</sup> <a name="numericId" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.numericId"></a>

```typescript
public readonly numericId: string;
```

- *Type:* string

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.params"></a>

```typescript
public readonly params: ComputeNetworkParamsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference">ComputeNetworkParamsOutputReference</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeNetworkTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference">ComputeNetworkTimeoutsOutputReference</a>

---

##### `autoCreateSubnetworksInput`<sup>Optional</sup> <a name="autoCreateSubnetworksInput" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.autoCreateSubnetworksInput"></a>

```typescript
public readonly autoCreateSubnetworksInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `bgpAlwaysCompareMedInput`<sup>Optional</sup> <a name="bgpAlwaysCompareMedInput" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.bgpAlwaysCompareMedInput"></a>

```typescript
public readonly bgpAlwaysCompareMedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `bgpBestPathSelectionModeInput`<sup>Optional</sup> <a name="bgpBestPathSelectionModeInput" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.bgpBestPathSelectionModeInput"></a>

```typescript
public readonly bgpBestPathSelectionModeInput: string;
```

- *Type:* string

---

##### `bgpInterRegionCostInput`<sup>Optional</sup> <a name="bgpInterRegionCostInput" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.bgpInterRegionCostInput"></a>

```typescript
public readonly bgpInterRegionCostInput: string;
```

- *Type:* string

---

##### `deleteBgpAlwaysCompareMedInput`<sup>Optional</sup> <a name="deleteBgpAlwaysCompareMedInput" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.deleteBgpAlwaysCompareMedInput"></a>

```typescript
public readonly deleteBgpAlwaysCompareMedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deleteDefaultRoutesOnCreateInput`<sup>Optional</sup> <a name="deleteDefaultRoutesOnCreateInput" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.deleteDefaultRoutesOnCreateInput"></a>

```typescript
public readonly deleteDefaultRoutesOnCreateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enableUlaInternalIpv6Input`<sup>Optional</sup> <a name="enableUlaInternalIpv6Input" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.enableUlaInternalIpv6Input"></a>

```typescript
public readonly enableUlaInternalIpv6Input: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `internalIpv6RangeInput`<sup>Optional</sup> <a name="internalIpv6RangeInput" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.internalIpv6RangeInput"></a>

```typescript
public readonly internalIpv6RangeInput: string;
```

- *Type:* string

---

##### `mtuInput`<sup>Optional</sup> <a name="mtuInput" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.mtuInput"></a>

```typescript
public readonly mtuInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkFirewallPolicyEnforcementOrderInput`<sup>Optional</sup> <a name="networkFirewallPolicyEnforcementOrderInput" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.networkFirewallPolicyEnforcementOrderInput"></a>

```typescript
public readonly networkFirewallPolicyEnforcementOrderInput: string;
```

- *Type:* string

---

##### `networkProfileInput`<sup>Optional</sup> <a name="networkProfileInput" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.networkProfileInput"></a>

```typescript
public readonly networkProfileInput: string;
```

- *Type:* string

---

##### `paramsInput`<sup>Optional</sup> <a name="paramsInput" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.paramsInput"></a>

```typescript
public readonly paramsInput: ComputeNetworkParams;
```

- *Type:* <a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkParams">ComputeNetworkParams</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `routingModeInput`<sup>Optional</sup> <a name="routingModeInput" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.routingModeInput"></a>

```typescript
public readonly routingModeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeNetworkTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkTimeouts">ComputeNetworkTimeouts</a>

---

##### `autoCreateSubnetworks`<sup>Required</sup> <a name="autoCreateSubnetworks" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.autoCreateSubnetworks"></a>

```typescript
public readonly autoCreateSubnetworks: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `bgpAlwaysCompareMed`<sup>Required</sup> <a name="bgpAlwaysCompareMed" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.bgpAlwaysCompareMed"></a>

```typescript
public readonly bgpAlwaysCompareMed: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `bgpBestPathSelectionMode`<sup>Required</sup> <a name="bgpBestPathSelectionMode" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.bgpBestPathSelectionMode"></a>

```typescript
public readonly bgpBestPathSelectionMode: string;
```

- *Type:* string

---

##### `bgpInterRegionCost`<sup>Required</sup> <a name="bgpInterRegionCost" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.bgpInterRegionCost"></a>

```typescript
public readonly bgpInterRegionCost: string;
```

- *Type:* string

---

##### `deleteBgpAlwaysCompareMed`<sup>Required</sup> <a name="deleteBgpAlwaysCompareMed" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.deleteBgpAlwaysCompareMed"></a>

```typescript
public readonly deleteBgpAlwaysCompareMed: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deleteDefaultRoutesOnCreate`<sup>Required</sup> <a name="deleteDefaultRoutesOnCreate" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.deleteDefaultRoutesOnCreate"></a>

```typescript
public readonly deleteDefaultRoutesOnCreate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enableUlaInternalIpv6`<sup>Required</sup> <a name="enableUlaInternalIpv6" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.enableUlaInternalIpv6"></a>

```typescript
public readonly enableUlaInternalIpv6: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalIpv6Range`<sup>Required</sup> <a name="internalIpv6Range" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.internalIpv6Range"></a>

```typescript
public readonly internalIpv6Range: string;
```

- *Type:* string

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.mtu"></a>

```typescript
public readonly mtu: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkFirewallPolicyEnforcementOrder`<sup>Required</sup> <a name="networkFirewallPolicyEnforcementOrder" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.networkFirewallPolicyEnforcementOrder"></a>

```typescript
public readonly networkFirewallPolicyEnforcementOrder: string;
```

- *Type:* string

---

##### `networkProfile`<sup>Required</sup> <a name="networkProfile" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.networkProfile"></a>

```typescript
public readonly networkProfile: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `routingMode`<sup>Required</sup> <a name="routingMode" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.routingMode"></a>

```typescript
public readonly routingMode: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetwork.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.computeNetwork.ComputeNetwork.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeNetworkConfig <a name="ComputeNetworkConfig" id="@cdktn/provider-google.computeNetwork.ComputeNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeNetwork.ComputeNetworkConfig.Initializer"></a>

```typescript
import { computeNetwork } from '@cdktn/provider-google'

const computeNetworkConfig: computeNetwork.ComputeNetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkConfig.property.name">name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkConfig.property.autoCreateSubnetworks">autoCreateSubnetworks</a></code> | <code>boolean \| cdktn.IResolvable</code> | When set to 'true', the network is created in "auto subnet mode" and it will create a subnet for each region automatically across the '10.128.0.0/9' address range. |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkConfig.property.bgpAlwaysCompareMed">bgpAlwaysCompareMed</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enables/disables the comparison of MED across routes with different Neighbor ASNs. |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkConfig.property.bgpBestPathSelectionMode">bgpBestPathSelectionMode</a></code> | <code>string</code> | The BGP best selection algorithm to be employed. MODE can be LEGACY or STANDARD. Possible values: ["LEGACY", "STANDARD"]. |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkConfig.property.bgpInterRegionCost">bgpInterRegionCost</a></code> | <code>string</code> | Choice of the behavior of inter-regional cost and MED in the BPS algorithm. Possible values: ["DEFAULT", "ADD_COST_TO_MED"]. |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkConfig.property.deleteBgpAlwaysCompareMed">deleteBgpAlwaysCompareMed</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set to 'true', the 'bgp_always_compare_med' field will be cleared. |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkConfig.property.deleteDefaultRoutesOnCreate">deleteDefaultRoutesOnCreate</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set to 'true', default routes ('0.0.0.0/0') will be deleted immediately after network creation. Defaults to 'false'. |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. The resource must be recreated to modify this field. |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkConfig.property.enableUlaInternalIpv6">enableUlaInternalIpv6</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enable ULA internal ipv6 on this network. Enabling this feature will assign a /48 from google defined ULA prefix fd20::/20. |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_network#id ComputeNetwork#id}. |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkConfig.property.internalIpv6Range">internalIpv6Range</a></code> | <code>string</code> | When enabling ula internal ipv6, caller optionally can specify the /48 range they want from the google defined ULA prefix fd20::/20. |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkConfig.property.mtu">mtu</a></code> | <code>number</code> | Maximum Transmission Unit in bytes. |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkConfig.property.networkFirewallPolicyEnforcementOrder">networkFirewallPolicyEnforcementOrder</a></code> | <code>string</code> | Set the order that Firewall Rules and Firewall Policies are evaluated. Default value: "AFTER_CLASSIC_FIREWALL" Possible values: ["BEFORE_CLASSIC_FIREWALL", "AFTER_CLASSIC_FIREWALL"]. |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkConfig.property.networkProfile">networkProfile</a></code> | <code>string</code> | A full or partial URL of the network profile to apply to this network. |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkConfig.property.params">params</a></code> | <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkParams">ComputeNetworkParams</a></code> | params block. |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_network#project ComputeNetwork#project}. |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkConfig.property.routingMode">routingMode</a></code> | <code>string</code> | The network-wide routing mode to use. |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkTimeouts">ComputeNetworkTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeNetwork.ComputeNetworkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeNetwork.ComputeNetworkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeNetwork.ComputeNetworkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeNetwork.ComputeNetworkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeNetwork.ComputeNetworkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeNetwork.ComputeNetworkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeNetwork.ComputeNetworkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeNetwork.ComputeNetworkConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_network#name ComputeNetwork#name}

---

##### `autoCreateSubnetworks`<sup>Optional</sup> <a name="autoCreateSubnetworks" id="@cdktn/provider-google.computeNetwork.ComputeNetworkConfig.property.autoCreateSubnetworks"></a>

```typescript
public readonly autoCreateSubnetworks: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When set to 'true', the network is created in "auto subnet mode" and it will create a subnet for each region automatically across the '10.128.0.0/9' address range.

When set to 'false', the network is created in "custom subnet mode" so
the user can explicitly connect subnetwork resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_network#auto_create_subnetworks ComputeNetwork#auto_create_subnetworks}

---

##### `bgpAlwaysCompareMed`<sup>Optional</sup> <a name="bgpAlwaysCompareMed" id="@cdktn/provider-google.computeNetwork.ComputeNetworkConfig.property.bgpAlwaysCompareMed"></a>

```typescript
public readonly bgpAlwaysCompareMed: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enables/disables the comparison of MED across routes with different Neighbor ASNs.

This value can only be set if the --bgp-best-path-selection-mode is STANDARD

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_network#bgp_always_compare_med ComputeNetwork#bgp_always_compare_med}

---

##### `bgpBestPathSelectionMode`<sup>Optional</sup> <a name="bgpBestPathSelectionMode" id="@cdktn/provider-google.computeNetwork.ComputeNetworkConfig.property.bgpBestPathSelectionMode"></a>

```typescript
public readonly bgpBestPathSelectionMode: string;
```

- *Type:* string

The BGP best selection algorithm to be employed. MODE can be LEGACY or STANDARD. Possible values: ["LEGACY", "STANDARD"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_network#bgp_best_path_selection_mode ComputeNetwork#bgp_best_path_selection_mode}

---

##### `bgpInterRegionCost`<sup>Optional</sup> <a name="bgpInterRegionCost" id="@cdktn/provider-google.computeNetwork.ComputeNetworkConfig.property.bgpInterRegionCost"></a>

```typescript
public readonly bgpInterRegionCost: string;
```

- *Type:* string

Choice of the behavior of inter-regional cost and MED in the BPS algorithm. Possible values: ["DEFAULT", "ADD_COST_TO_MED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_network#bgp_inter_region_cost ComputeNetwork#bgp_inter_region_cost}

---

##### `deleteBgpAlwaysCompareMed`<sup>Optional</sup> <a name="deleteBgpAlwaysCompareMed" id="@cdktn/provider-google.computeNetwork.ComputeNetworkConfig.property.deleteBgpAlwaysCompareMed"></a>

```typescript
public readonly deleteBgpAlwaysCompareMed: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set to 'true', the 'bgp_always_compare_med' field will be cleared.

If set to 'false' (the default), 'bgp_always_compare_med' will be set to the value specified in the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_network#delete_bgp_always_compare_med ComputeNetwork#delete_bgp_always_compare_med}

---

##### `deleteDefaultRoutesOnCreate`<sup>Optional</sup> <a name="deleteDefaultRoutesOnCreate" id="@cdktn/provider-google.computeNetwork.ComputeNetworkConfig.property.deleteDefaultRoutesOnCreate"></a>

```typescript
public readonly deleteDefaultRoutesOnCreate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set to 'true', default routes ('0.0.0.0/0') will be deleted immediately after network creation. Defaults to 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_network#delete_default_routes_on_create ComputeNetwork#delete_default_routes_on_create}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeNetwork.ComputeNetworkConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_network#deletion_policy ComputeNetwork#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeNetwork.ComputeNetworkConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource. The resource must be recreated to modify this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_network#description ComputeNetwork#description}

---

##### `enableUlaInternalIpv6`<sup>Optional</sup> <a name="enableUlaInternalIpv6" id="@cdktn/provider-google.computeNetwork.ComputeNetworkConfig.property.enableUlaInternalIpv6"></a>

```typescript
public readonly enableUlaInternalIpv6: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enable ULA internal ipv6 on this network. Enabling this feature will assign a /48 from google defined ULA prefix fd20::/20.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_network#enable_ula_internal_ipv6 ComputeNetwork#enable_ula_internal_ipv6}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeNetwork.ComputeNetworkConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_network#id ComputeNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internalIpv6Range`<sup>Optional</sup> <a name="internalIpv6Range" id="@cdktn/provider-google.computeNetwork.ComputeNetworkConfig.property.internalIpv6Range"></a>

```typescript
public readonly internalIpv6Range: string;
```

- *Type:* string

When enabling ula internal ipv6, caller optionally can specify the /48 range they want from the google defined ULA prefix fd20::/20.

The input must be a
valid /48 ULA IPv6 address and must be within the fd20::/20. Operation will
fail if the speficied /48 is already in used by another resource.
If the field is not speficied, then a /48 range will be randomly allocated from fd20::/20 and returned via this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_network#internal_ipv6_range ComputeNetwork#internal_ipv6_range}

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktn/provider-google.computeNetwork.ComputeNetworkConfig.property.mtu"></a>

```typescript
public readonly mtu: number;
```

- *Type:* number

Maximum Transmission Unit in bytes.

The default value is 1460 bytes.
The minimum value for this field is 1300 and the maximum value is 8896 bytes (jumbo frames).
Note that packets larger than 1500 bytes (standard Ethernet) can be subject to TCP-MSS clamping or dropped
with an ICMP 'Fragmentation-Needed' message if the packets are routed to the Internet or other VPCs
with varying MTUs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_network#mtu ComputeNetwork#mtu}

---

##### `networkFirewallPolicyEnforcementOrder`<sup>Optional</sup> <a name="networkFirewallPolicyEnforcementOrder" id="@cdktn/provider-google.computeNetwork.ComputeNetworkConfig.property.networkFirewallPolicyEnforcementOrder"></a>

```typescript
public readonly networkFirewallPolicyEnforcementOrder: string;
```

- *Type:* string

Set the order that Firewall Rules and Firewall Policies are evaluated. Default value: "AFTER_CLASSIC_FIREWALL" Possible values: ["BEFORE_CLASSIC_FIREWALL", "AFTER_CLASSIC_FIREWALL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_network#network_firewall_policy_enforcement_order ComputeNetwork#network_firewall_policy_enforcement_order}

---

##### `networkProfile`<sup>Optional</sup> <a name="networkProfile" id="@cdktn/provider-google.computeNetwork.ComputeNetworkConfig.property.networkProfile"></a>

```typescript
public readonly networkProfile: string;
```

- *Type:* string

A full or partial URL of the network profile to apply to this network.

This field can be set only at resource creation time. For example, the
following are valid URLs:
* https://www.googleapis.com/compute/v1/projects/{projectId}/global/networkProfiles/{network_profile_name}
* projects/{projectId}/global/networkProfiles/{network_profile_name}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_network#network_profile ComputeNetwork#network_profile}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktn/provider-google.computeNetwork.ComputeNetworkConfig.property.params"></a>

```typescript
public readonly params: ComputeNetworkParams;
```

- *Type:* <a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkParams">ComputeNetworkParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_network#params ComputeNetwork#params}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeNetwork.ComputeNetworkConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_network#project ComputeNetwork#project}.

---

##### `routingMode`<sup>Optional</sup> <a name="routingMode" id="@cdktn/provider-google.computeNetwork.ComputeNetworkConfig.property.routingMode"></a>

```typescript
public readonly routingMode: string;
```

- *Type:* string

The network-wide routing mode to use.

If set to 'REGIONAL', this
network's cloud routers will only advertise routes with subnetworks
of this network in the same region as the router. If set to 'GLOBAL',
this network's cloud routers will advertise routes with all
subnetworks of this network, across regions. Possible values: ["REGIONAL", "GLOBAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_network#routing_mode ComputeNetwork#routing_mode}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeNetwork.ComputeNetworkConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeNetworkTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkTimeouts">ComputeNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_network#timeouts ComputeNetwork#timeouts}

---

### ComputeNetworkParams <a name="ComputeNetworkParams" id="@cdktn/provider-google.computeNetwork.ComputeNetworkParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeNetwork.ComputeNetworkParams.Initializer"></a>

```typescript
import { computeNetwork } from '@cdktn/provider-google'

const computeNetworkParams: computeNetwork.ComputeNetworkParams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkParams.property.resourceManagerTags">resourceManagerTags</a></code> | <code>{[ key: string ]: string}</code> | Resource manager tags to be bound to the network. |

---

##### `resourceManagerTags`<sup>Optional</sup> <a name="resourceManagerTags" id="@cdktn/provider-google.computeNetwork.ComputeNetworkParams.property.resourceManagerTags"></a>

```typescript
public readonly resourceManagerTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Resource manager tags to be bound to the network.

Tag keys and values have the
same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id},
and values are in the format tagValues/456.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_network#resource_manager_tags ComputeNetwork#resource_manager_tags}

---

### ComputeNetworkTimeouts <a name="ComputeNetworkTimeouts" id="@cdktn/provider-google.computeNetwork.ComputeNetworkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeNetwork.ComputeNetworkTimeouts.Initializer"></a>

```typescript
import { computeNetwork } from '@cdktn/provider-google'

const computeNetworkTimeouts: computeNetwork.ComputeNetworkTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_network#create ComputeNetwork#create}. |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_network#delete ComputeNetwork#delete}. |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_network#update ComputeNetwork#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computeNetwork.ComputeNetworkTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_network#create ComputeNetwork#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computeNetwork.ComputeNetworkTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_network#delete ComputeNetwork#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.computeNetwork.ComputeNetworkTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_network#update ComputeNetwork#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeNetworkParamsOutputReference <a name="ComputeNetworkParamsOutputReference" id="@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference.Initializer"></a>

```typescript
import { computeNetwork } from '@cdktn/provider-google'

new computeNetwork.ComputeNetworkParamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference.resetResourceManagerTags">resetResourceManagerTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceManagerTags` <a name="resetResourceManagerTags" id="@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference.resetResourceManagerTags"></a>

```typescript
public resetResourceManagerTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference.property.resourceManagerTagsInput">resourceManagerTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference.property.resourceManagerTags">resourceManagerTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkParams">ComputeNetworkParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceManagerTagsInput`<sup>Optional</sup> <a name="resourceManagerTagsInput" id="@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference.property.resourceManagerTagsInput"></a>

```typescript
public readonly resourceManagerTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `resourceManagerTags`<sup>Required</sup> <a name="resourceManagerTags" id="@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference.property.resourceManagerTags"></a>

```typescript
public readonly resourceManagerTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeNetwork.ComputeNetworkParamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeNetworkParams;
```

- *Type:* <a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkParams">ComputeNetworkParams</a>

---


### ComputeNetworkTimeoutsOutputReference <a name="ComputeNetworkTimeoutsOutputReference" id="@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeNetwork } from '@cdktn/provider-google'

new computeNetwork.ComputeNetworkTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkTimeouts">ComputeNetworkTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeNetworkTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeNetwork.ComputeNetworkTimeouts">ComputeNetworkTimeouts</a>

---



