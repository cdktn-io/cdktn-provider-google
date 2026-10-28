# `networkServicesServiceLbPolicies` Submodule <a name="`networkServicesServiceLbPolicies` Submodule" id="@cdktn/provider-google.networkServicesServiceLbPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesServiceLbPolicies <a name="NetworkServicesServiceLbPolicies" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies google_network_services_service_lb_policies}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer"></a>

```typescript
import { networkServicesServiceLbPolicies } from '@cdktn/provider-google'

new networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies(scope: Construct, id: string, config: NetworkServicesServiceLbPoliciesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig">NetworkServicesServiceLbPoliciesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig">NetworkServicesServiceLbPoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.putAutoCapacityDrain">putAutoCapacityDrain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.putFailoverConfig">putFailoverConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetAutoCapacityDrain">resetAutoCapacityDrain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetFailoverConfig">resetFailoverConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetLoadBalancingAlgorithm">resetLoadBalancingAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoCapacityDrain` <a name="putAutoCapacityDrain" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.putAutoCapacityDrain"></a>

```typescript
public putAutoCapacityDrain(value: NetworkServicesServiceLbPoliciesAutoCapacityDrain): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.putAutoCapacityDrain.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain">NetworkServicesServiceLbPoliciesAutoCapacityDrain</a>

---

##### `putFailoverConfig` <a name="putFailoverConfig" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.putFailoverConfig"></a>

```typescript
public putFailoverConfig(value: NetworkServicesServiceLbPoliciesFailoverConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.putFailoverConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig">NetworkServicesServiceLbPoliciesFailoverConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkServicesServiceLbPoliciesTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts">NetworkServicesServiceLbPoliciesTimeouts</a>

---

##### `resetAutoCapacityDrain` <a name="resetAutoCapacityDrain" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetAutoCapacityDrain"></a>

```typescript
public resetAutoCapacityDrain(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFailoverConfig` <a name="resetFailoverConfig" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetFailoverConfig"></a>

```typescript
public resetFailoverConfig(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLoadBalancingAlgorithm` <a name="resetLoadBalancingAlgorithm" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetLoadBalancingAlgorithm"></a>

```typescript
public resetLoadBalancingAlgorithm(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkServicesServiceLbPolicies resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.isConstruct"></a>

```typescript
import { networkServicesServiceLbPolicies } from '@cdktn/provider-google'

networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.isTerraformElement"></a>

```typescript
import { networkServicesServiceLbPolicies } from '@cdktn/provider-google'

networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.isTerraformResource"></a>

```typescript
import { networkServicesServiceLbPolicies } from '@cdktn/provider-google'

networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.generateConfigForImport"></a>

```typescript
import { networkServicesServiceLbPolicies } from '@cdktn/provider-google'

networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a NetworkServicesServiceLbPolicies resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkServicesServiceLbPolicies to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkServicesServiceLbPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkServicesServiceLbPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.autoCapacityDrain">autoCapacityDrain</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference">NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.failoverConfig">failoverConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference">NetworkServicesServiceLbPoliciesFailoverConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference">NetworkServicesServiceLbPoliciesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.autoCapacityDrainInput">autoCapacityDrainInput</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain">NetworkServicesServiceLbPoliciesAutoCapacityDrain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.failoverConfigInput">failoverConfigInput</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig">NetworkServicesServiceLbPoliciesFailoverConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.loadBalancingAlgorithmInput">loadBalancingAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts">NetworkServicesServiceLbPoliciesTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.loadBalancingAlgorithm">loadBalancingAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `autoCapacityDrain`<sup>Required</sup> <a name="autoCapacityDrain" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.autoCapacityDrain"></a>

```typescript
public readonly autoCapacityDrain: NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference">NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `failoverConfig`<sup>Required</sup> <a name="failoverConfig" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.failoverConfig"></a>

```typescript
public readonly failoverConfig: NetworkServicesServiceLbPoliciesFailoverConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference">NetworkServicesServiceLbPoliciesFailoverConfigOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkServicesServiceLbPoliciesTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference">NetworkServicesServiceLbPoliciesTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `autoCapacityDrainInput`<sup>Optional</sup> <a name="autoCapacityDrainInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.autoCapacityDrainInput"></a>

```typescript
public readonly autoCapacityDrainInput: NetworkServicesServiceLbPoliciesAutoCapacityDrain;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain">NetworkServicesServiceLbPoliciesAutoCapacityDrain</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `failoverConfigInput`<sup>Optional</sup> <a name="failoverConfigInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.failoverConfigInput"></a>

```typescript
public readonly failoverConfigInput: NetworkServicesServiceLbPoliciesFailoverConfig;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig">NetworkServicesServiceLbPoliciesFailoverConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `loadBalancingAlgorithmInput`<sup>Optional</sup> <a name="loadBalancingAlgorithmInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.loadBalancingAlgorithmInput"></a>

```typescript
public readonly loadBalancingAlgorithmInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkServicesServiceLbPoliciesTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts">NetworkServicesServiceLbPoliciesTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `loadBalancingAlgorithm`<sup>Required</sup> <a name="loadBalancingAlgorithm" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.loadBalancingAlgorithm"></a>

```typescript
public readonly loadBalancingAlgorithm: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesServiceLbPoliciesAutoCapacityDrain <a name="NetworkServicesServiceLbPoliciesAutoCapacityDrain" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain.Initializer"></a>

```typescript
import { networkServicesServiceLbPolicies } from '@cdktn/provider-google'

const networkServicesServiceLbPoliciesAutoCapacityDrain: networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain.property.enable">enable</a></code> | <code>boolean \| cdktn.IResolvable</code> | Optional. |

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Optional.

If set to 'True', an unhealthy MIG/NEG will be set as drained. - An MIG/NEG is considered unhealthy if less than 25% of the instances/endpoints in the MIG/NEG are healthy. - This option will never result in draining more than 50% of the configured IGs/NEGs for the Backend Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#enable NetworkServicesServiceLbPolicies#enable}

---

### NetworkServicesServiceLbPoliciesConfig <a name="NetworkServicesServiceLbPoliciesConfig" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.Initializer"></a>

```typescript
import { networkServicesServiceLbPolicies } from '@cdktn/provider-google'

const networkServicesServiceLbPoliciesConfig: networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.location">location</a></code> | <code>string</code> | The location of the service lb policy. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.name">name</a></code> | <code>string</code> | Name of the ServiceLbPolicy resource. It matches pattern 'projects/{project}/locations/{location}/serviceLbPolicies/{service_lb_policy_name}'. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.autoCapacityDrain">autoCapacityDrain</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain">NetworkServicesServiceLbPoliciesAutoCapacityDrain</a></code> | auto_capacity_drain block. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.description">description</a></code> | <code>string</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.failoverConfig">failoverConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig">NetworkServicesServiceLbPoliciesFailoverConfig</a></code> | failover_config block. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#id NetworkServicesServiceLbPolicies#id}. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Set of label tags associated with the ServiceLbPolicy resource. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.loadBalancingAlgorithm">loadBalancingAlgorithm</a></code> | <code>string</code> | The type of load balancing algorithm to be used. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#project NetworkServicesServiceLbPolicies#project}. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts">NetworkServicesServiceLbPoliciesTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the service lb policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#location NetworkServicesServiceLbPolicies#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the ServiceLbPolicy resource. It matches pattern 'projects/{project}/locations/{location}/serviceLbPolicies/{service_lb_policy_name}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#name NetworkServicesServiceLbPolicies#name}

---

##### `autoCapacityDrain`<sup>Optional</sup> <a name="autoCapacityDrain" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.autoCapacityDrain"></a>

```typescript
public readonly autoCapacityDrain: NetworkServicesServiceLbPoliciesAutoCapacityDrain;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain">NetworkServicesServiceLbPoliciesAutoCapacityDrain</a>

auto_capacity_drain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#auto_capacity_drain NetworkServicesServiceLbPolicies#auto_capacity_drain}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#deletion_policy NetworkServicesServiceLbPolicies#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#description NetworkServicesServiceLbPolicies#description}

---

##### `failoverConfig`<sup>Optional</sup> <a name="failoverConfig" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.failoverConfig"></a>

```typescript
public readonly failoverConfig: NetworkServicesServiceLbPoliciesFailoverConfig;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig">NetworkServicesServiceLbPoliciesFailoverConfig</a>

failover_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#failover_config NetworkServicesServiceLbPolicies#failover_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#id NetworkServicesServiceLbPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Set of label tags associated with the ServiceLbPolicy resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#labels NetworkServicesServiceLbPolicies#labels}

---

##### `loadBalancingAlgorithm`<sup>Optional</sup> <a name="loadBalancingAlgorithm" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.loadBalancingAlgorithm"></a>

```typescript
public readonly loadBalancingAlgorithm: string;
```

- *Type:* string

The type of load balancing algorithm to be used.

The default behavior is WATERFALL_BY_REGION. Possible values: ["SPRAY_TO_REGION", "SPRAY_TO_WORLD", "WATERFALL_BY_REGION", "WATERFALL_BY_ZONE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#load_balancing_algorithm NetworkServicesServiceLbPolicies#load_balancing_algorithm}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#project NetworkServicesServiceLbPolicies#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkServicesServiceLbPoliciesTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts">NetworkServicesServiceLbPoliciesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#timeouts NetworkServicesServiceLbPolicies#timeouts}

---

### NetworkServicesServiceLbPoliciesFailoverConfig <a name="NetworkServicesServiceLbPoliciesFailoverConfig" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig.Initializer"></a>

```typescript
import { networkServicesServiceLbPolicies } from '@cdktn/provider-google'

const networkServicesServiceLbPoliciesFailoverConfig: networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig.property.failoverHealthThreshold">failoverHealthThreshold</a></code> | <code>number</code> | Optional. |

---

##### `failoverHealthThreshold`<sup>Required</sup> <a name="failoverHealthThreshold" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig.property.failoverHealthThreshold"></a>

```typescript
public readonly failoverHealthThreshold: number;
```

- *Type:* number

Optional.

The percentage threshold that a load balancer will begin to send traffic to failover backends. If the percentage of endpoints in a MIG/NEG is smaller than this value, traffic would be sent to failover backends if possible. This field should be set to a value between 1 and 99. The default value is 50 for Global external HTTP(S) load balancer (classic) and Proxyless service mesh, and 70 for others.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#failover_health_threshold NetworkServicesServiceLbPolicies#failover_health_threshold}

---

### NetworkServicesServiceLbPoliciesTimeouts <a name="NetworkServicesServiceLbPoliciesTimeouts" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts.Initializer"></a>

```typescript
import { networkServicesServiceLbPolicies } from '@cdktn/provider-google'

const networkServicesServiceLbPoliciesTimeouts: networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#create NetworkServicesServiceLbPolicies#create}. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#delete NetworkServicesServiceLbPolicies#delete}. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#update NetworkServicesServiceLbPolicies#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#create NetworkServicesServiceLbPolicies#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#delete NetworkServicesServiceLbPolicies#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#update NetworkServicesServiceLbPolicies#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference <a name="NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.Initializer"></a>

```typescript
import { networkServicesServiceLbPolicies } from '@cdktn/provider-google'

new networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.resetEnable">resetEnable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnable` <a name="resetEnable" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.resetEnable"></a>

```typescript
public resetEnable(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.enableInput">enableInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.enable">enable</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain">NetworkServicesServiceLbPoliciesAutoCapacityDrain</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.enableInput"></a>

```typescript
public readonly enableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkServicesServiceLbPoliciesAutoCapacityDrain;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain">NetworkServicesServiceLbPoliciesAutoCapacityDrain</a>

---


### NetworkServicesServiceLbPoliciesFailoverConfigOutputReference <a name="NetworkServicesServiceLbPoliciesFailoverConfigOutputReference" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.Initializer"></a>

```typescript
import { networkServicesServiceLbPolicies } from '@cdktn/provider-google'

new networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.failoverHealthThresholdInput">failoverHealthThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.failoverHealthThreshold">failoverHealthThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig">NetworkServicesServiceLbPoliciesFailoverConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `failoverHealthThresholdInput`<sup>Optional</sup> <a name="failoverHealthThresholdInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.failoverHealthThresholdInput"></a>

```typescript
public readonly failoverHealthThresholdInput: number;
```

- *Type:* number

---

##### `failoverHealthThreshold`<sup>Required</sup> <a name="failoverHealthThreshold" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.failoverHealthThreshold"></a>

```typescript
public readonly failoverHealthThreshold: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkServicesServiceLbPoliciesFailoverConfig;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig">NetworkServicesServiceLbPoliciesFailoverConfig</a>

---


### NetworkServicesServiceLbPoliciesTimeoutsOutputReference <a name="NetworkServicesServiceLbPoliciesTimeoutsOutputReference" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkServicesServiceLbPolicies } from '@cdktn/provider-google'

new networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts">NetworkServicesServiceLbPoliciesTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkServicesServiceLbPoliciesTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts">NetworkServicesServiceLbPoliciesTimeouts</a>

---



