# `computeInterconnectAttachment` Submodule <a name="`computeInterconnectAttachment` Submodule" id="@cdktn/provider-google.computeInterconnectAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeInterconnectAttachment <a name="ComputeInterconnectAttachment" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_interconnect_attachment google_compute_interconnect_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.Initializer"></a>

```typescript
import { computeInterconnectAttachment } from '@cdktn/provider-google'

new computeInterconnectAttachment.ComputeInterconnectAttachment(scope: Construct, id: string, config: ComputeInterconnectAttachmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig">ComputeInterconnectAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig">ComputeInterconnectAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.putL2Forwarding">putL2Forwarding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.putParams">putParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetAdminEnabled">resetAdminEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetBandwidth">resetBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetCandidateCloudRouterIpAddress">resetCandidateCloudRouterIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetCandidateCloudRouterIpv6Address">resetCandidateCloudRouterIpv6Address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetCandidateCustomerRouterIpAddress">resetCandidateCustomerRouterIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetCandidateCustomerRouterIpv6Address">resetCandidateCustomerRouterIpv6Address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetCandidateSubnets">resetCandidateSubnets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetEdgeAvailabilityDomain">resetEdgeAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetEncryption">resetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetInterconnect">resetInterconnect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetIpsecInternalAddresses">resetIpsecInternalAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetL2Forwarding">resetL2Forwarding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetMtu">resetMtu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetParams">resetParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetRouter">resetRouter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetStackType">resetStackType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetSubnetLength">resetSubnetLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetVlanTag8021Q">resetVlanTag8021Q</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putL2Forwarding` <a name="putL2Forwarding" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.putL2Forwarding"></a>

```typescript
public putL2Forwarding(value: ComputeInterconnectAttachmentL2Forwarding): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.putL2Forwarding.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2Forwarding">ComputeInterconnectAttachmentL2Forwarding</a>

---

##### `putParams` <a name="putParams" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.putParams"></a>

```typescript
public putParams(value: ComputeInterconnectAttachmentParams): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.putParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParams">ComputeInterconnectAttachmentParams</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeInterconnectAttachmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeouts">ComputeInterconnectAttachmentTimeouts</a>

---

##### `resetAdminEnabled` <a name="resetAdminEnabled" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetAdminEnabled"></a>

```typescript
public resetAdminEnabled(): void
```

##### `resetBandwidth` <a name="resetBandwidth" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetBandwidth"></a>

```typescript
public resetBandwidth(): void
```

##### `resetCandidateCloudRouterIpAddress` <a name="resetCandidateCloudRouterIpAddress" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetCandidateCloudRouterIpAddress"></a>

```typescript
public resetCandidateCloudRouterIpAddress(): void
```

##### `resetCandidateCloudRouterIpv6Address` <a name="resetCandidateCloudRouterIpv6Address" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetCandidateCloudRouterIpv6Address"></a>

```typescript
public resetCandidateCloudRouterIpv6Address(): void
```

##### `resetCandidateCustomerRouterIpAddress` <a name="resetCandidateCustomerRouterIpAddress" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetCandidateCustomerRouterIpAddress"></a>

```typescript
public resetCandidateCustomerRouterIpAddress(): void
```

##### `resetCandidateCustomerRouterIpv6Address` <a name="resetCandidateCustomerRouterIpv6Address" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetCandidateCustomerRouterIpv6Address"></a>

```typescript
public resetCandidateCustomerRouterIpv6Address(): void
```

##### `resetCandidateSubnets` <a name="resetCandidateSubnets" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetCandidateSubnets"></a>

```typescript
public resetCandidateSubnets(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEdgeAvailabilityDomain` <a name="resetEdgeAvailabilityDomain" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetEdgeAvailabilityDomain"></a>

```typescript
public resetEdgeAvailabilityDomain(): void
```

##### `resetEncryption` <a name="resetEncryption" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetEncryption"></a>

```typescript
public resetEncryption(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInterconnect` <a name="resetInterconnect" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetInterconnect"></a>

```typescript
public resetInterconnect(): void
```

##### `resetIpsecInternalAddresses` <a name="resetIpsecInternalAddresses" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetIpsecInternalAddresses"></a>

```typescript
public resetIpsecInternalAddresses(): void
```

##### `resetL2Forwarding` <a name="resetL2Forwarding" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetL2Forwarding"></a>

```typescript
public resetL2Forwarding(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMtu` <a name="resetMtu" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetMtu"></a>

```typescript
public resetMtu(): void
```

##### `resetParams` <a name="resetParams" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetParams"></a>

```typescript
public resetParams(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRouter` <a name="resetRouter" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetRouter"></a>

```typescript
public resetRouter(): void
```

##### `resetStackType` <a name="resetStackType" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetStackType"></a>

```typescript
public resetStackType(): void
```

##### `resetSubnetLength` <a name="resetSubnetLength" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetSubnetLength"></a>

```typescript
public resetSubnetLength(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetType"></a>

```typescript
public resetType(): void
```

##### `resetVlanTag8021Q` <a name="resetVlanTag8021Q" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.resetVlanTag8021Q"></a>

```typescript
public resetVlanTag8021Q(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeInterconnectAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.isConstruct"></a>

```typescript
import { computeInterconnectAttachment } from '@cdktn/provider-google'

computeInterconnectAttachment.ComputeInterconnectAttachment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.isTerraformElement"></a>

```typescript
import { computeInterconnectAttachment } from '@cdktn/provider-google'

computeInterconnectAttachment.ComputeInterconnectAttachment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.isTerraformResource"></a>

```typescript
import { computeInterconnectAttachment } from '@cdktn/provider-google'

computeInterconnectAttachment.ComputeInterconnectAttachment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.generateConfigForImport"></a>

```typescript
import { computeInterconnectAttachment } from '@cdktn/provider-google'

computeInterconnectAttachment.ComputeInterconnectAttachment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ComputeInterconnectAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeInterconnectAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeInterconnectAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_interconnect_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ComputeInterconnectAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.attachmentGroup">attachmentGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.cloudRouterIpAddress">cloudRouterIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.cloudRouterIpv6Address">cloudRouterIpv6Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.customerRouterIpAddress">customerRouterIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.customerRouterIpv6Address">customerRouterIpv6Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.googleReferenceId">googleReferenceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.l2Forwarding">l2Forwarding</a></code> | <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference">ComputeInterconnectAttachmentL2ForwardingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.labelFingerprint">labelFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.pairingKey">pairingKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.params">params</a></code> | <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference">ComputeInterconnectAttachmentParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.partnerAsn">partnerAsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.privateInterconnectInfo">privateInterconnectInfo</a></code> | <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList">ComputeInterconnectAttachmentPrivateInterconnectInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference">ComputeInterconnectAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.adminEnabledInput">adminEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.bandwidthInput">bandwidthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.candidateCloudRouterIpAddressInput">candidateCloudRouterIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.candidateCloudRouterIpv6AddressInput">candidateCloudRouterIpv6AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.candidateCustomerRouterIpAddressInput">candidateCustomerRouterIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.candidateCustomerRouterIpv6AddressInput">candidateCustomerRouterIpv6AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.candidateSubnetsInput">candidateSubnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.edgeAvailabilityDomainInput">edgeAvailabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.encryptionInput">encryptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.interconnectInput">interconnectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.ipsecInternalAddressesInput">ipsecInternalAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.l2ForwardingInput">l2ForwardingInput</a></code> | <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2Forwarding">ComputeInterconnectAttachmentL2Forwarding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.mtuInput">mtuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.paramsInput">paramsInput</a></code> | <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParams">ComputeInterconnectAttachmentParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.routerInput">routerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.stackTypeInput">stackTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.subnetLengthInput">subnetLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeouts">ComputeInterconnectAttachmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.vlanTag8021QInput">vlanTag8021QInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.adminEnabled">adminEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.bandwidth">bandwidth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.candidateCloudRouterIpAddress">candidateCloudRouterIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.candidateCloudRouterIpv6Address">candidateCloudRouterIpv6Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.candidateCustomerRouterIpAddress">candidateCustomerRouterIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.candidateCustomerRouterIpv6Address">candidateCustomerRouterIpv6Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.candidateSubnets">candidateSubnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.edgeAvailabilityDomain">edgeAvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.encryption">encryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.interconnect">interconnect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.ipsecInternalAddresses">ipsecInternalAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.mtu">mtu</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.router">router</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.stackType">stackType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.subnetLength">subnetLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.vlanTag8021Q">vlanTag8021Q</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `attachmentGroup`<sup>Required</sup> <a name="attachmentGroup" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.attachmentGroup"></a>

```typescript
public readonly attachmentGroup: string;
```

- *Type:* string

---

##### `cloudRouterIpAddress`<sup>Required</sup> <a name="cloudRouterIpAddress" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.cloudRouterIpAddress"></a>

```typescript
public readonly cloudRouterIpAddress: string;
```

- *Type:* string

---

##### `cloudRouterIpv6Address`<sup>Required</sup> <a name="cloudRouterIpv6Address" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.cloudRouterIpv6Address"></a>

```typescript
public readonly cloudRouterIpv6Address: string;
```

- *Type:* string

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `customerRouterIpAddress`<sup>Required</sup> <a name="customerRouterIpAddress" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.customerRouterIpAddress"></a>

```typescript
public readonly customerRouterIpAddress: string;
```

- *Type:* string

---

##### `customerRouterIpv6Address`<sup>Required</sup> <a name="customerRouterIpv6Address" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.customerRouterIpv6Address"></a>

```typescript
public readonly customerRouterIpv6Address: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `googleReferenceId`<sup>Required</sup> <a name="googleReferenceId" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.googleReferenceId"></a>

```typescript
public readonly googleReferenceId: string;
```

- *Type:* string

---

##### `l2Forwarding`<sup>Required</sup> <a name="l2Forwarding" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.l2Forwarding"></a>

```typescript
public readonly l2Forwarding: ComputeInterconnectAttachmentL2ForwardingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference">ComputeInterconnectAttachmentL2ForwardingOutputReference</a>

---

##### `labelFingerprint`<sup>Required</sup> <a name="labelFingerprint" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.labelFingerprint"></a>

```typescript
public readonly labelFingerprint: string;
```

- *Type:* string

---

##### `pairingKey`<sup>Required</sup> <a name="pairingKey" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.pairingKey"></a>

```typescript
public readonly pairingKey: string;
```

- *Type:* string

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.params"></a>

```typescript
public readonly params: ComputeInterconnectAttachmentParamsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference">ComputeInterconnectAttachmentParamsOutputReference</a>

---

##### `partnerAsn`<sup>Required</sup> <a name="partnerAsn" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.partnerAsn"></a>

```typescript
public readonly partnerAsn: string;
```

- *Type:* string

---

##### `privateInterconnectInfo`<sup>Required</sup> <a name="privateInterconnectInfo" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.privateInterconnectInfo"></a>

```typescript
public readonly privateInterconnectInfo: ComputeInterconnectAttachmentPrivateInterconnectInfoList;
```

- *Type:* <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList">ComputeInterconnectAttachmentPrivateInterconnectInfoList</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeInterconnectAttachmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference">ComputeInterconnectAttachmentTimeoutsOutputReference</a>

---

##### `adminEnabledInput`<sup>Optional</sup> <a name="adminEnabledInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.adminEnabledInput"></a>

```typescript
public readonly adminEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `bandwidthInput`<sup>Optional</sup> <a name="bandwidthInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.bandwidthInput"></a>

```typescript
public readonly bandwidthInput: string;
```

- *Type:* string

---

##### `candidateCloudRouterIpAddressInput`<sup>Optional</sup> <a name="candidateCloudRouterIpAddressInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.candidateCloudRouterIpAddressInput"></a>

```typescript
public readonly candidateCloudRouterIpAddressInput: string;
```

- *Type:* string

---

##### `candidateCloudRouterIpv6AddressInput`<sup>Optional</sup> <a name="candidateCloudRouterIpv6AddressInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.candidateCloudRouterIpv6AddressInput"></a>

```typescript
public readonly candidateCloudRouterIpv6AddressInput: string;
```

- *Type:* string

---

##### `candidateCustomerRouterIpAddressInput`<sup>Optional</sup> <a name="candidateCustomerRouterIpAddressInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.candidateCustomerRouterIpAddressInput"></a>

```typescript
public readonly candidateCustomerRouterIpAddressInput: string;
```

- *Type:* string

---

##### `candidateCustomerRouterIpv6AddressInput`<sup>Optional</sup> <a name="candidateCustomerRouterIpv6AddressInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.candidateCustomerRouterIpv6AddressInput"></a>

```typescript
public readonly candidateCustomerRouterIpv6AddressInput: string;
```

- *Type:* string

---

##### `candidateSubnetsInput`<sup>Optional</sup> <a name="candidateSubnetsInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.candidateSubnetsInput"></a>

```typescript
public readonly candidateSubnetsInput: string[];
```

- *Type:* string[]

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `edgeAvailabilityDomainInput`<sup>Optional</sup> <a name="edgeAvailabilityDomainInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.edgeAvailabilityDomainInput"></a>

```typescript
public readonly edgeAvailabilityDomainInput: string;
```

- *Type:* string

---

##### `encryptionInput`<sup>Optional</sup> <a name="encryptionInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.encryptionInput"></a>

```typescript
public readonly encryptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `interconnectInput`<sup>Optional</sup> <a name="interconnectInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.interconnectInput"></a>

```typescript
public readonly interconnectInput: string;
```

- *Type:* string

---

##### `ipsecInternalAddressesInput`<sup>Optional</sup> <a name="ipsecInternalAddressesInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.ipsecInternalAddressesInput"></a>

```typescript
public readonly ipsecInternalAddressesInput: string[];
```

- *Type:* string[]

---

##### `l2ForwardingInput`<sup>Optional</sup> <a name="l2ForwardingInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.l2ForwardingInput"></a>

```typescript
public readonly l2ForwardingInput: ComputeInterconnectAttachmentL2Forwarding;
```

- *Type:* <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2Forwarding">ComputeInterconnectAttachmentL2Forwarding</a>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `mtuInput`<sup>Optional</sup> <a name="mtuInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.mtuInput"></a>

```typescript
public readonly mtuInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `paramsInput`<sup>Optional</sup> <a name="paramsInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.paramsInput"></a>

```typescript
public readonly paramsInput: ComputeInterconnectAttachmentParams;
```

- *Type:* <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParams">ComputeInterconnectAttachmentParams</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `routerInput`<sup>Optional</sup> <a name="routerInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.routerInput"></a>

```typescript
public readonly routerInput: string;
```

- *Type:* string

---

##### `stackTypeInput`<sup>Optional</sup> <a name="stackTypeInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.stackTypeInput"></a>

```typescript
public readonly stackTypeInput: string;
```

- *Type:* string

---

##### `subnetLengthInput`<sup>Optional</sup> <a name="subnetLengthInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.subnetLengthInput"></a>

```typescript
public readonly subnetLengthInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeInterconnectAttachmentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeouts">ComputeInterconnectAttachmentTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `vlanTag8021QInput`<sup>Optional</sup> <a name="vlanTag8021QInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.vlanTag8021QInput"></a>

```typescript
public readonly vlanTag8021QInput: number;
```

- *Type:* number

---

##### `adminEnabled`<sup>Required</sup> <a name="adminEnabled" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.adminEnabled"></a>

```typescript
public readonly adminEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.bandwidth"></a>

```typescript
public readonly bandwidth: string;
```

- *Type:* string

---

##### `candidateCloudRouterIpAddress`<sup>Required</sup> <a name="candidateCloudRouterIpAddress" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.candidateCloudRouterIpAddress"></a>

```typescript
public readonly candidateCloudRouterIpAddress: string;
```

- *Type:* string

---

##### `candidateCloudRouterIpv6Address`<sup>Required</sup> <a name="candidateCloudRouterIpv6Address" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.candidateCloudRouterIpv6Address"></a>

```typescript
public readonly candidateCloudRouterIpv6Address: string;
```

- *Type:* string

---

##### `candidateCustomerRouterIpAddress`<sup>Required</sup> <a name="candidateCustomerRouterIpAddress" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.candidateCustomerRouterIpAddress"></a>

```typescript
public readonly candidateCustomerRouterIpAddress: string;
```

- *Type:* string

---

##### `candidateCustomerRouterIpv6Address`<sup>Required</sup> <a name="candidateCustomerRouterIpv6Address" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.candidateCustomerRouterIpv6Address"></a>

```typescript
public readonly candidateCustomerRouterIpv6Address: string;
```

- *Type:* string

---

##### `candidateSubnets`<sup>Required</sup> <a name="candidateSubnets" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.candidateSubnets"></a>

```typescript
public readonly candidateSubnets: string[];
```

- *Type:* string[]

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `edgeAvailabilityDomain`<sup>Required</sup> <a name="edgeAvailabilityDomain" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.edgeAvailabilityDomain"></a>

```typescript
public readonly edgeAvailabilityDomain: string;
```

- *Type:* string

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.encryption"></a>

```typescript
public readonly encryption: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `interconnect`<sup>Required</sup> <a name="interconnect" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.interconnect"></a>

```typescript
public readonly interconnect: string;
```

- *Type:* string

---

##### `ipsecInternalAddresses`<sup>Required</sup> <a name="ipsecInternalAddresses" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.ipsecInternalAddresses"></a>

```typescript
public readonly ipsecInternalAddresses: string[];
```

- *Type:* string[]

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.mtu"></a>

```typescript
public readonly mtu: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.router"></a>

```typescript
public readonly router: string;
```

- *Type:* string

---

##### `stackType`<sup>Required</sup> <a name="stackType" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.stackType"></a>

```typescript
public readonly stackType: string;
```

- *Type:* string

---

##### `subnetLength`<sup>Required</sup> <a name="subnetLength" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.subnetLength"></a>

```typescript
public readonly subnetLength: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `vlanTag8021Q`<sup>Required</sup> <a name="vlanTag8021Q" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.vlanTag8021Q"></a>

```typescript
public readonly vlanTag8021Q: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeInterconnectAttachmentConfig <a name="ComputeInterconnectAttachmentConfig" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.Initializer"></a>

```typescript
import { computeInterconnectAttachment } from '@cdktn/provider-google'

const computeInterconnectAttachmentConfig: computeInterconnectAttachment.ComputeInterconnectAttachmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.name">name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.adminEnabled">adminEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the VLAN attachment is enabled or disabled.  When using PARTNER type this will Pre-Activate the interconnect attachment. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.bandwidth">bandwidth</a></code> | <code>string</code> | Provisioned bandwidth capacity for the interconnect attachment. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.candidateCloudRouterIpAddress">candidateCloudRouterIpAddress</a></code> | <code>string</code> | Single IPv4 address + prefix length to be configured on the cloud router interface for this interconnect attachment. Example: 203.0.113.1/29. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.candidateCloudRouterIpv6Address">candidateCloudRouterIpv6Address</a></code> | <code>string</code> | Single IPv6 address + prefix length to be configured on the cloud router interface for this interconnect attachment. Example: 2001:db8::1/125. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.candidateCustomerRouterIpAddress">candidateCustomerRouterIpAddress</a></code> | <code>string</code> | Single IPv4 address + prefix length to be configured on the customer router interface for this interconnect attachment. Example: 203.0.113.2/29. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.candidateCustomerRouterIpv6Address">candidateCustomerRouterIpv6Address</a></code> | <code>string</code> | Single IPv6 address + prefix length to be configured on the customer router interface for this interconnect attachment. Example: 2001:db8::2/125. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.candidateSubnets">candidateSubnets</a></code> | <code>string[]</code> | Up to 16 candidate prefixes that can be used to restrict the allocation of cloudRouterIpAddress and customerRouterIpAddress for this attachment. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.edgeAvailabilityDomain">edgeAvailabilityDomain</a></code> | <code>string</code> | Desired availability domain for the attachment. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.encryption">encryption</a></code> | <code>string</code> | Indicates the user-supplied encryption option of this interconnect attachment. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_interconnect_attachment#id ComputeInterconnectAttachment#id}. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.interconnect">interconnect</a></code> | <code>string</code> | URL of the underlying Interconnect object that this attachment's traffic will traverse through. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.ipsecInternalAddresses">ipsecInternalAddresses</a></code> | <code>string[]</code> | URL of addresses that have been reserved for the interconnect attachment, Used only for interconnect attachment that has the encryption option as IPSEC. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.l2Forwarding">l2Forwarding</a></code> | <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2Forwarding">ComputeInterconnectAttachmentL2Forwarding</a></code> | l2_forwarding block. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels for this resource. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.mtu">mtu</a></code> | <code>string</code> | Maximum Transmission Unit (MTU), in bytes, of packets passing through this interconnect attachment. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.params">params</a></code> | <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParams">ComputeInterconnectAttachmentParams</a></code> | params block. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_interconnect_attachment#project ComputeInterconnectAttachment#project}. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.region">region</a></code> | <code>string</code> | Region where the regional interconnect attachment resides. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.router">router</a></code> | <code>string</code> | URL of the cloud router to be used for dynamic routing. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.stackType">stackType</a></code> | <code>string</code> | The stack type for this interconnect attachment to identify whether the IPv6 feature is enabled or not. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.subnetLength">subnetLength</a></code> | <code>number</code> | Length of the IPv4 subnet mask. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeouts">ComputeInterconnectAttachmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.type">type</a></code> | <code>string</code> | The type of InterconnectAttachment you wish to create. Defaults to DEDICATED. Possible values: ["DEDICATED", "PARTNER", "PARTNER_PROVIDER", "L2_DEDICATED"]. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.vlanTag8021Q">vlanTag8021Q</a></code> | <code>number</code> | The IEEE 802.1Q VLAN tag for this attachment, in the range 2-4094. When using PARTNER type this will be managed upstream. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is created. The
name must be 1-63 characters long, and comply with RFC1035. Specifically, the
name must be 1-63 characters long and match the regular expression
'[a-z]([-a-z0-9]*[a-z0-9])?' which means the first character must be a
lowercase letter, and all following characters must be a dash, lowercase
letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_interconnect_attachment#name ComputeInterconnectAttachment#name}

---

##### `adminEnabled`<sup>Optional</sup> <a name="adminEnabled" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.adminEnabled"></a>

```typescript
public readonly adminEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the VLAN attachment is enabled or disabled.  When using PARTNER type this will Pre-Activate the interconnect attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_interconnect_attachment#admin_enabled ComputeInterconnectAttachment#admin_enabled}

---

##### `bandwidth`<sup>Optional</sup> <a name="bandwidth" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.bandwidth"></a>

```typescript
public readonly bandwidth: string;
```

- *Type:* string

Provisioned bandwidth capacity for the interconnect attachment.

For attachments of type DEDICATED, the user can set the bandwidth.
For attachments of type PARTNER, the Google Partner that is operating the interconnect must set the bandwidth.
Output only for PARTNER type, mutable for PARTNER_PROVIDER and DEDICATED,
Defaults to BPS_10G Possible values: ["BPS_50M", "BPS_100M", "BPS_200M", "BPS_300M", "BPS_400M", "BPS_500M", "BPS_1G", "BPS_2G", "BPS_5G", "BPS_10G", "BPS_20G", "BPS_50G", "BPS_100G", "BPS_400G"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_interconnect_attachment#bandwidth ComputeInterconnectAttachment#bandwidth}

---

##### `candidateCloudRouterIpAddress`<sup>Optional</sup> <a name="candidateCloudRouterIpAddress" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.candidateCloudRouterIpAddress"></a>

```typescript
public readonly candidateCloudRouterIpAddress: string;
```

- *Type:* string

Single IPv4 address + prefix length to be configured on the cloud router interface for this interconnect attachment. Example: 203.0.113.1/29.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_interconnect_attachment#candidate_cloud_router_ip_address ComputeInterconnectAttachment#candidate_cloud_router_ip_address}

---

##### `candidateCloudRouterIpv6Address`<sup>Optional</sup> <a name="candidateCloudRouterIpv6Address" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.candidateCloudRouterIpv6Address"></a>

```typescript
public readonly candidateCloudRouterIpv6Address: string;
```

- *Type:* string

Single IPv6 address + prefix length to be configured on the cloud router interface for this interconnect attachment. Example: 2001:db8::1/125.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_interconnect_attachment#candidate_cloud_router_ipv6_address ComputeInterconnectAttachment#candidate_cloud_router_ipv6_address}

---

##### `candidateCustomerRouterIpAddress`<sup>Optional</sup> <a name="candidateCustomerRouterIpAddress" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.candidateCustomerRouterIpAddress"></a>

```typescript
public readonly candidateCustomerRouterIpAddress: string;
```

- *Type:* string

Single IPv4 address + prefix length to be configured on the customer router interface for this interconnect attachment. Example: 203.0.113.2/29.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_interconnect_attachment#candidate_customer_router_ip_address ComputeInterconnectAttachment#candidate_customer_router_ip_address}

---

##### `candidateCustomerRouterIpv6Address`<sup>Optional</sup> <a name="candidateCustomerRouterIpv6Address" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.candidateCustomerRouterIpv6Address"></a>

```typescript
public readonly candidateCustomerRouterIpv6Address: string;
```

- *Type:* string

Single IPv6 address + prefix length to be configured on the customer router interface for this interconnect attachment. Example: 2001:db8::2/125.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_interconnect_attachment#candidate_customer_router_ipv6_address ComputeInterconnectAttachment#candidate_customer_router_ipv6_address}

---

##### `candidateSubnets`<sup>Optional</sup> <a name="candidateSubnets" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.candidateSubnets"></a>

```typescript
public readonly candidateSubnets: string[];
```

- *Type:* string[]

Up to 16 candidate prefixes that can be used to restrict the allocation of cloudRouterIpAddress and customerRouterIpAddress for this attachment.

All prefixes must be within link-local address space (169.254.0.0/16)
and must be /29 or shorter (/28, /27, etc). Google will attempt to select
an unused /29 from the supplied candidate prefix(es). The request will
fail if all possible /29s are in use on Google's edge. If not supplied,
Google will randomly select an unused /29 from all of link-local space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_interconnect_attachment#candidate_subnets ComputeInterconnectAttachment#candidate_subnets}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_interconnect_attachment#deletion_policy ComputeInterconnectAttachment#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_interconnect_attachment#description ComputeInterconnectAttachment#description}

---

##### `edgeAvailabilityDomain`<sup>Optional</sup> <a name="edgeAvailabilityDomain" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.edgeAvailabilityDomain"></a>

```typescript
public readonly edgeAvailabilityDomain: string;
```

- *Type:* string

Desired availability domain for the attachment.

Only available for type
PARTNER, at creation time. For improved reliability, customers should
configure a pair of attachments with one per availability domain. The
selected availability domain will be provided to the Partner via the
pairing key so that the provisioned circuit will lie in the specified
domain. If not specified, the value will default to AVAILABILITY_DOMAIN_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_interconnect_attachment#edge_availability_domain ComputeInterconnectAttachment#edge_availability_domain}

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.encryption"></a>

```typescript
public readonly encryption: string;
```

- *Type:* string

Indicates the user-supplied encryption option of this interconnect attachment.

Can only be specified at attachment creation for PARTNER or
DEDICATED attachments.
* NONE - This is the default value, which means that the VLAN attachment
carries unencrypted traffic. VMs are able to send traffic to, or receive
traffic from, such a VLAN attachment.
* IPSEC - The VLAN attachment carries only encrypted traffic that is
encrypted by an IPsec device, such as an HA VPN gateway or third-party
IPsec VPN. VMs cannot directly send traffic to, or receive traffic from,
such a VLAN attachment. To use HA VPN over Cloud Interconnect, the VLAN
attachment must be created with this option. Default value: "NONE" Possible values: ["NONE", "IPSEC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_interconnect_attachment#encryption ComputeInterconnectAttachment#encryption}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_interconnect_attachment#id ComputeInterconnectAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interconnect`<sup>Optional</sup> <a name="interconnect" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.interconnect"></a>

```typescript
public readonly interconnect: string;
```

- *Type:* string

URL of the underlying Interconnect object that this attachment's traffic will traverse through.

Required if type is DEDICATED, must not
be set if type is PARTNER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_interconnect_attachment#interconnect ComputeInterconnectAttachment#interconnect}

---

##### `ipsecInternalAddresses`<sup>Optional</sup> <a name="ipsecInternalAddresses" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.ipsecInternalAddresses"></a>

```typescript
public readonly ipsecInternalAddresses: string[];
```

- *Type:* string[]

URL of addresses that have been reserved for the interconnect attachment, Used only for interconnect attachment that has the encryption option as IPSEC.

The addresses must be RFC 1918 IP address ranges. When creating HA VPN
gateway over the interconnect attachment, if the attachment is configured
to use an RFC 1918 IP address, then the VPN gateway's IP address will be
allocated from the IP address range specified here.
For example, if the HA VPN gateway's interface 0 is paired to this
interconnect attachment, then an RFC 1918 IP address for the VPN gateway
interface 0 will be allocated from the IP address specified for this
interconnect attachment.
If this field is not specified for interconnect attachment that has
encryption option as IPSEC, later on when creating HA VPN gateway on this
interconnect attachment, the HA VPN gateway's IP address will be
allocated from regional external IP address pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_interconnect_attachment#ipsec_internal_addresses ComputeInterconnectAttachment#ipsec_internal_addresses}

---

##### `l2Forwarding`<sup>Optional</sup> <a name="l2Forwarding" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.l2Forwarding"></a>

```typescript
public readonly l2Forwarding: ComputeInterconnectAttachmentL2Forwarding;
```

- *Type:* <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2Forwarding">ComputeInterconnectAttachmentL2Forwarding</a>

l2_forwarding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_interconnect_attachment#l2_forwarding ComputeInterconnectAttachment#l2_forwarding}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels for this resource.

These can only be added or modified by the setLabels
method. Each label key/value pair must comply with RFC1035. Label values may be empty.


**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_interconnect_attachment#labels ComputeInterconnectAttachment#labels}

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.mtu"></a>

```typescript
public readonly mtu: string;
```

- *Type:* string

Maximum Transmission Unit (MTU), in bytes, of packets passing through this interconnect attachment.

Valid values are 1440, 1460, 1500, and 8896. If not specified, the value will default to 1440.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_interconnect_attachment#mtu ComputeInterconnectAttachment#mtu}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.params"></a>

```typescript
public readonly params: ComputeInterconnectAttachmentParams;
```

- *Type:* <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParams">ComputeInterconnectAttachmentParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_interconnect_attachment#params ComputeInterconnectAttachment#params}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_interconnect_attachment#project ComputeInterconnectAttachment#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where the regional interconnect attachment resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_interconnect_attachment#region ComputeInterconnectAttachment#region}

---

##### `router`<sup>Optional</sup> <a name="router" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.router"></a>

```typescript
public readonly router: string;
```

- *Type:* string

URL of the cloud router to be used for dynamic routing.

This router must be in
the same region as this InterconnectAttachment. The InterconnectAttachment will
automatically connect the Interconnect to the network & region within which the
Cloud Router is configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_interconnect_attachment#router ComputeInterconnectAttachment#router}

---

##### `stackType`<sup>Optional</sup> <a name="stackType" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.stackType"></a>

```typescript
public readonly stackType: string;
```

- *Type:* string

The stack type for this interconnect attachment to identify whether the IPv6 feature is enabled or not.

If not specified, IPV4_ONLY will be used.
This field can be both set at interconnect attachments creation and update
interconnect attachment operations. Possible values: ["IPV4_IPV6", "IPV4_ONLY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_interconnect_attachment#stack_type ComputeInterconnectAttachment#stack_type}

---

##### `subnetLength`<sup>Optional</sup> <a name="subnetLength" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.subnetLength"></a>

```typescript
public readonly subnetLength: number;
```

- *Type:* number

Length of the IPv4 subnet mask.

Allowed values: 29 (default), 30. The default value is 29,
except for Cross-Cloud Interconnect connections that use an InterconnectRemoteLocation with a
constraints.subnetLengthRange.min equal to 30. For example, connections that use an Azure
remote location fall into this category. In these cases, the default value is 30, and
requesting 29 returns an error. Where both 29 and 30 are allowed, 29 is preferred, because it
gives Google Cloud Support more debugging visibility.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_interconnect_attachment#subnet_length ComputeInterconnectAttachment#subnet_length}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeInterconnectAttachmentTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeouts">ComputeInterconnectAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_interconnect_attachment#timeouts ComputeInterconnectAttachment#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of InterconnectAttachment you wish to create. Defaults to DEDICATED. Possible values: ["DEDICATED", "PARTNER", "PARTNER_PROVIDER", "L2_DEDICATED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_interconnect_attachment#type ComputeInterconnectAttachment#type}

---

##### `vlanTag8021Q`<sup>Optional</sup> <a name="vlanTag8021Q" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentConfig.property.vlanTag8021Q"></a>

```typescript
public readonly vlanTag8021Q: number;
```

- *Type:* number

The IEEE 802.1Q VLAN tag for this attachment, in the range 2-4094. When using PARTNER type this will be managed upstream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_interconnect_attachment#vlan_tag8021q ComputeInterconnectAttachment#vlan_tag8021q}

---

### ComputeInterconnectAttachmentL2Forwarding <a name="ComputeInterconnectAttachmentL2Forwarding" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2Forwarding"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2Forwarding.Initializer"></a>

```typescript
import { computeInterconnectAttachment } from '@cdktn/provider-google'

const computeInterconnectAttachmentL2Forwarding: computeInterconnectAttachment.ComputeInterconnectAttachmentL2Forwarding = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2Forwarding.property.applianceMappings">applianceMappings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappings">ComputeInterconnectAttachmentL2ForwardingApplianceMappings</a>[]</code> | appliance_mappings block. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2Forwarding.property.defaultApplianceIpAddress">defaultApplianceIpAddress</a></code> | <code>string</code> | The default appliance IP address. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2Forwarding.property.geneveHeader">geneveHeader</a></code> | <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeader">ComputeInterconnectAttachmentL2ForwardingGeneveHeader</a></code> | geneve_header block. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2Forwarding.property.network">network</a></code> | <code>string</code> | URL of the network to which this attachment belongs. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2Forwarding.property.tunnelEndpointIpAddress">tunnelEndpointIpAddress</a></code> | <code>string</code> | The tunnel endpoint IP address. |

---

##### `applianceMappings`<sup>Optional</sup> <a name="applianceMappings" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2Forwarding.property.applianceMappings"></a>

```typescript
public readonly applianceMappings: IResolvable | ComputeInterconnectAttachmentL2ForwardingApplianceMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappings">ComputeInterconnectAttachmentL2ForwardingApplianceMappings</a>[]

appliance_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_interconnect_attachment#appliance_mappings ComputeInterconnectAttachment#appliance_mappings}

---

##### `defaultApplianceIpAddress`<sup>Optional</sup> <a name="defaultApplianceIpAddress" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2Forwarding.property.defaultApplianceIpAddress"></a>

```typescript
public readonly defaultApplianceIpAddress: string;
```

- *Type:* string

The default appliance IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_interconnect_attachment#default_appliance_ip_address ComputeInterconnectAttachment#default_appliance_ip_address}

---

##### `geneveHeader`<sup>Optional</sup> <a name="geneveHeader" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2Forwarding.property.geneveHeader"></a>

```typescript
public readonly geneveHeader: ComputeInterconnectAttachmentL2ForwardingGeneveHeader;
```

- *Type:* <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeader">ComputeInterconnectAttachmentL2ForwardingGeneveHeader</a>

geneve_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_interconnect_attachment#geneve_header ComputeInterconnectAttachment#geneve_header}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2Forwarding.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

URL of the network to which this attachment belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_interconnect_attachment#network ComputeInterconnectAttachment#network}

---

##### `tunnelEndpointIpAddress`<sup>Optional</sup> <a name="tunnelEndpointIpAddress" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2Forwarding.property.tunnelEndpointIpAddress"></a>

```typescript
public readonly tunnelEndpointIpAddress: string;
```

- *Type:* string

The tunnel endpoint IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_interconnect_attachment#tunnel_endpoint_ip_address ComputeInterconnectAttachment#tunnel_endpoint_ip_address}

---

### ComputeInterconnectAttachmentL2ForwardingApplianceMappings <a name="ComputeInterconnectAttachmentL2ForwardingApplianceMappings" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappings.Initializer"></a>

```typescript
import { computeInterconnectAttachment } from '@cdktn/provider-google'

const computeInterconnectAttachmentL2ForwardingApplianceMappings: computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappings.property.applianceIpAddress">applianceIpAddress</a></code> | <code>string</code> | The appliance IP address. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappings.property.innerVlanToApplianceMappings">innerVlanToApplianceMappings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings">ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings</a>[]</code> | inner_vlan_to_appliance_mappings block. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappings.property.name">name</a></code> | <code>string</code> | The name of this appliance mapping rule. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappings.property.vlanId">vlanId</a></code> | <code>string</code> | The VLAN tag. |

---

##### `applianceIpAddress`<sup>Optional</sup> <a name="applianceIpAddress" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappings.property.applianceIpAddress"></a>

```typescript
public readonly applianceIpAddress: string;
```

- *Type:* string

The appliance IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_interconnect_attachment#appliance_ip_address ComputeInterconnectAttachment#appliance_ip_address}

---

##### `innerVlanToApplianceMappings`<sup>Optional</sup> <a name="innerVlanToApplianceMappings" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappings.property.innerVlanToApplianceMappings"></a>

```typescript
public readonly innerVlanToApplianceMappings: IResolvable | ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings">ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings</a>[]

inner_vlan_to_appliance_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_interconnect_attachment#inner_vlan_to_appliance_mappings ComputeInterconnectAttachment#inner_vlan_to_appliance_mappings}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappings.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of this appliance mapping rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_interconnect_attachment#name ComputeInterconnectAttachment#name}

---

##### `vlanId`<sup>Optional</sup> <a name="vlanId" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappings.property.vlanId"></a>

```typescript
public readonly vlanId: string;
```

- *Type:* string

The VLAN tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_interconnect_attachment#vlan_id ComputeInterconnectAttachment#vlan_id}

---

### ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings <a name="ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings.Initializer"></a>

```typescript
import { computeInterconnectAttachment } from '@cdktn/provider-google'

const computeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings: computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings.property.innerApplianceIpAddress">innerApplianceIpAddress</a></code> | <code>string</code> | The inner appliance IP address. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings.property.innerVlanTags">innerVlanTags</a></code> | <code>string[]</code> | List of inner VLAN tags. |

---

##### `innerApplianceIpAddress`<sup>Optional</sup> <a name="innerApplianceIpAddress" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings.property.innerApplianceIpAddress"></a>

```typescript
public readonly innerApplianceIpAddress: string;
```

- *Type:* string

The inner appliance IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_interconnect_attachment#inner_appliance_ip_address ComputeInterconnectAttachment#inner_appliance_ip_address}

---

##### `innerVlanTags`<sup>Optional</sup> <a name="innerVlanTags" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings.property.innerVlanTags"></a>

```typescript
public readonly innerVlanTags: string[];
```

- *Type:* string[]

List of inner VLAN tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_interconnect_attachment#inner_vlan_tags ComputeInterconnectAttachment#inner_vlan_tags}

---

### ComputeInterconnectAttachmentL2ForwardingGeneveHeader <a name="ComputeInterconnectAttachmentL2ForwardingGeneveHeader" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeader.Initializer"></a>

```typescript
import { computeInterconnectAttachment } from '@cdktn/provider-google'

const computeInterconnectAttachmentL2ForwardingGeneveHeader: computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeader.property.vni">vni</a></code> | <code>number</code> | VNI is a 24-bit unique virtual network identifier. |

---

##### `vni`<sup>Optional</sup> <a name="vni" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeader.property.vni"></a>

```typescript
public readonly vni: number;
```

- *Type:* number

VNI is a 24-bit unique virtual network identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_interconnect_attachment#vni ComputeInterconnectAttachment#vni}

---

### ComputeInterconnectAttachmentParams <a name="ComputeInterconnectAttachmentParams" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParams.Initializer"></a>

```typescript
import { computeInterconnectAttachment } from '@cdktn/provider-google'

const computeInterconnectAttachmentParams: computeInterconnectAttachment.ComputeInterconnectAttachmentParams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParams.property.resourceManagerTags">resourceManagerTags</a></code> | <code>{[ key: string ]: string}</code> | Resource manager tags to be bound to the interconnect attachment. |

---

##### `resourceManagerTags`<sup>Optional</sup> <a name="resourceManagerTags" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParams.property.resourceManagerTags"></a>

```typescript
public readonly resourceManagerTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Resource manager tags to be bound to the interconnect attachment.

Tag keys and values have the
same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id},
and values are in the format tagValues/456.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_interconnect_attachment#resource_manager_tags ComputeInterconnectAttachment#resource_manager_tags}

---

### ComputeInterconnectAttachmentPrivateInterconnectInfo <a name="ComputeInterconnectAttachmentPrivateInterconnectInfo" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfo.Initializer"></a>

```typescript
import { computeInterconnectAttachment } from '@cdktn/provider-google'

const computeInterconnectAttachmentPrivateInterconnectInfo: computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfo = { ... }
```


### ComputeInterconnectAttachmentTimeouts <a name="ComputeInterconnectAttachmentTimeouts" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeouts.Initializer"></a>

```typescript
import { computeInterconnectAttachment } from '@cdktn/provider-google'

const computeInterconnectAttachmentTimeouts: computeInterconnectAttachment.ComputeInterconnectAttachmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_interconnect_attachment#create ComputeInterconnectAttachment#create}. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_interconnect_attachment#delete ComputeInterconnectAttachment#delete}. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_interconnect_attachment#update ComputeInterconnectAttachment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_interconnect_attachment#create ComputeInterconnectAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_interconnect_attachment#delete ComputeInterconnectAttachment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_interconnect_attachment#update ComputeInterconnectAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList <a name="ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.Initializer"></a>

```typescript
import { computeInterconnectAttachment } from '@cdktn/provider-google'

new computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.get"></a>

```typescript
public get(index: number): ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings">ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings">ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings</a>[]

---


### ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference <a name="ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.Initializer"></a>

```typescript
import { computeInterconnectAttachment } from '@cdktn/provider-google'

new computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.resetInnerApplianceIpAddress">resetInnerApplianceIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.resetInnerVlanTags">resetInnerVlanTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInnerApplianceIpAddress` <a name="resetInnerApplianceIpAddress" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.resetInnerApplianceIpAddress"></a>

```typescript
public resetInnerApplianceIpAddress(): void
```

##### `resetInnerVlanTags` <a name="resetInnerVlanTags" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.resetInnerVlanTags"></a>

```typescript
public resetInnerVlanTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.innerApplianceIpAddressInput">innerApplianceIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.innerVlanTagsInput">innerVlanTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.innerApplianceIpAddress">innerApplianceIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.innerVlanTags">innerVlanTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings">ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `innerApplianceIpAddressInput`<sup>Optional</sup> <a name="innerApplianceIpAddressInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.innerApplianceIpAddressInput"></a>

```typescript
public readonly innerApplianceIpAddressInput: string;
```

- *Type:* string

---

##### `innerVlanTagsInput`<sup>Optional</sup> <a name="innerVlanTagsInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.innerVlanTagsInput"></a>

```typescript
public readonly innerVlanTagsInput: string[];
```

- *Type:* string[]

---

##### `innerApplianceIpAddress`<sup>Required</sup> <a name="innerApplianceIpAddress" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.innerApplianceIpAddress"></a>

```typescript
public readonly innerApplianceIpAddress: string;
```

- *Type:* string

---

##### `innerVlanTags`<sup>Required</sup> <a name="innerVlanTags" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.innerVlanTags"></a>

```typescript
public readonly innerVlanTags: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings">ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings</a>

---


### ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList <a name="ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.Initializer"></a>

```typescript
import { computeInterconnectAttachment } from '@cdktn/provider-google'

new computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.get"></a>

```typescript
public get(index: number): ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappings">ComputeInterconnectAttachmentL2ForwardingApplianceMappings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeInterconnectAttachmentL2ForwardingApplianceMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappings">ComputeInterconnectAttachmentL2ForwardingApplianceMappings</a>[]

---


### ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference <a name="ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.Initializer"></a>

```typescript
import { computeInterconnectAttachment } from '@cdktn/provider-google'

new computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.putInnerVlanToApplianceMappings">putInnerVlanToApplianceMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.resetApplianceIpAddress">resetApplianceIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.resetInnerVlanToApplianceMappings">resetInnerVlanToApplianceMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.resetVlanId">resetVlanId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInnerVlanToApplianceMappings` <a name="putInnerVlanToApplianceMappings" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.putInnerVlanToApplianceMappings"></a>

```typescript
public putInnerVlanToApplianceMappings(value: IResolvable | ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.putInnerVlanToApplianceMappings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings">ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings</a>[]

---

##### `resetApplianceIpAddress` <a name="resetApplianceIpAddress" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.resetApplianceIpAddress"></a>

```typescript
public resetApplianceIpAddress(): void
```

##### `resetInnerVlanToApplianceMappings` <a name="resetInnerVlanToApplianceMappings" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.resetInnerVlanToApplianceMappings"></a>

```typescript
public resetInnerVlanToApplianceMappings(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetVlanId` <a name="resetVlanId" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.resetVlanId"></a>

```typescript
public resetVlanId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.innerVlanToApplianceMappings">innerVlanToApplianceMappings</a></code> | <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList">ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.applianceIpAddressInput">applianceIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.innerVlanToApplianceMappingsInput">innerVlanToApplianceMappingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings">ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.vlanIdInput">vlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.applianceIpAddress">applianceIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.vlanId">vlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappings">ComputeInterconnectAttachmentL2ForwardingApplianceMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `innerVlanToApplianceMappings`<sup>Required</sup> <a name="innerVlanToApplianceMappings" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.innerVlanToApplianceMappings"></a>

```typescript
public readonly innerVlanToApplianceMappings: ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList;
```

- *Type:* <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList">ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList</a>

---

##### `applianceIpAddressInput`<sup>Optional</sup> <a name="applianceIpAddressInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.applianceIpAddressInput"></a>

```typescript
public readonly applianceIpAddressInput: string;
```

- *Type:* string

---

##### `innerVlanToApplianceMappingsInput`<sup>Optional</sup> <a name="innerVlanToApplianceMappingsInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.innerVlanToApplianceMappingsInput"></a>

```typescript
public readonly innerVlanToApplianceMappingsInput: IResolvable | ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings">ComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `vlanIdInput`<sup>Optional</sup> <a name="vlanIdInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.vlanIdInput"></a>

```typescript
public readonly vlanIdInput: string;
```

- *Type:* string

---

##### `applianceIpAddress`<sup>Required</sup> <a name="applianceIpAddress" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.applianceIpAddress"></a>

```typescript
public readonly applianceIpAddress: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `vlanId`<sup>Required</sup> <a name="vlanId" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.vlanId"></a>

```typescript
public readonly vlanId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeInterconnectAttachmentL2ForwardingApplianceMappings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappings">ComputeInterconnectAttachmentL2ForwardingApplianceMappings</a>

---


### ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference <a name="ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.Initializer"></a>

```typescript
import { computeInterconnectAttachment } from '@cdktn/provider-google'

new computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.resetVni">resetVni</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVni` <a name="resetVni" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.resetVni"></a>

```typescript
public resetVni(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.property.vniInput">vniInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.property.vni">vni</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeader">ComputeInterconnectAttachmentL2ForwardingGeneveHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vniInput`<sup>Optional</sup> <a name="vniInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.property.vniInput"></a>

```typescript
public readonly vniInput: number;
```

- *Type:* number

---

##### `vni`<sup>Required</sup> <a name="vni" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.property.vni"></a>

```typescript
public readonly vni: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeInterconnectAttachmentL2ForwardingGeneveHeader;
```

- *Type:* <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeader">ComputeInterconnectAttachmentL2ForwardingGeneveHeader</a>

---


### ComputeInterconnectAttachmentL2ForwardingOutputReference <a name="ComputeInterconnectAttachmentL2ForwardingOutputReference" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.Initializer"></a>

```typescript
import { computeInterconnectAttachment } from '@cdktn/provider-google'

new computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.putApplianceMappings">putApplianceMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.putGeneveHeader">putGeneveHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.resetApplianceMappings">resetApplianceMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.resetDefaultApplianceIpAddress">resetDefaultApplianceIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.resetGeneveHeader">resetGeneveHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.resetTunnelEndpointIpAddress">resetTunnelEndpointIpAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApplianceMappings` <a name="putApplianceMappings" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.putApplianceMappings"></a>

```typescript
public putApplianceMappings(value: IResolvable | ComputeInterconnectAttachmentL2ForwardingApplianceMappings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.putApplianceMappings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappings">ComputeInterconnectAttachmentL2ForwardingApplianceMappings</a>[]

---

##### `putGeneveHeader` <a name="putGeneveHeader" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.putGeneveHeader"></a>

```typescript
public putGeneveHeader(value: ComputeInterconnectAttachmentL2ForwardingGeneveHeader): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.putGeneveHeader.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeader">ComputeInterconnectAttachmentL2ForwardingGeneveHeader</a>

---

##### `resetApplianceMappings` <a name="resetApplianceMappings" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.resetApplianceMappings"></a>

```typescript
public resetApplianceMappings(): void
```

##### `resetDefaultApplianceIpAddress` <a name="resetDefaultApplianceIpAddress" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.resetDefaultApplianceIpAddress"></a>

```typescript
public resetDefaultApplianceIpAddress(): void
```

##### `resetGeneveHeader` <a name="resetGeneveHeader" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.resetGeneveHeader"></a>

```typescript
public resetGeneveHeader(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetTunnelEndpointIpAddress` <a name="resetTunnelEndpointIpAddress" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.resetTunnelEndpointIpAddress"></a>

```typescript
public resetTunnelEndpointIpAddress(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.property.applianceMappings">applianceMappings</a></code> | <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList">ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.property.geneveHeader">geneveHeader</a></code> | <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference">ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.property.applianceMappingsInput">applianceMappingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappings">ComputeInterconnectAttachmentL2ForwardingApplianceMappings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.property.defaultApplianceIpAddressInput">defaultApplianceIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.property.geneveHeaderInput">geneveHeaderInput</a></code> | <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeader">ComputeInterconnectAttachmentL2ForwardingGeneveHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.property.tunnelEndpointIpAddressInput">tunnelEndpointIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.property.defaultApplianceIpAddress">defaultApplianceIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.property.tunnelEndpointIpAddress">tunnelEndpointIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2Forwarding">ComputeInterconnectAttachmentL2Forwarding</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applianceMappings`<sup>Required</sup> <a name="applianceMappings" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.property.applianceMappings"></a>

```typescript
public readonly applianceMappings: ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList;
```

- *Type:* <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList">ComputeInterconnectAttachmentL2ForwardingApplianceMappingsList</a>

---

##### `geneveHeader`<sup>Required</sup> <a name="geneveHeader" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.property.geneveHeader"></a>

```typescript
public readonly geneveHeader: ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference">ComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference</a>

---

##### `applianceMappingsInput`<sup>Optional</sup> <a name="applianceMappingsInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.property.applianceMappingsInput"></a>

```typescript
public readonly applianceMappingsInput: IResolvable | ComputeInterconnectAttachmentL2ForwardingApplianceMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingApplianceMappings">ComputeInterconnectAttachmentL2ForwardingApplianceMappings</a>[]

---

##### `defaultApplianceIpAddressInput`<sup>Optional</sup> <a name="defaultApplianceIpAddressInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.property.defaultApplianceIpAddressInput"></a>

```typescript
public readonly defaultApplianceIpAddressInput: string;
```

- *Type:* string

---

##### `geneveHeaderInput`<sup>Optional</sup> <a name="geneveHeaderInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.property.geneveHeaderInput"></a>

```typescript
public readonly geneveHeaderInput: ComputeInterconnectAttachmentL2ForwardingGeneveHeader;
```

- *Type:* <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingGeneveHeader">ComputeInterconnectAttachmentL2ForwardingGeneveHeader</a>

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `tunnelEndpointIpAddressInput`<sup>Optional</sup> <a name="tunnelEndpointIpAddressInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.property.tunnelEndpointIpAddressInput"></a>

```typescript
public readonly tunnelEndpointIpAddressInput: string;
```

- *Type:* string

---

##### `defaultApplianceIpAddress`<sup>Required</sup> <a name="defaultApplianceIpAddress" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.property.defaultApplianceIpAddress"></a>

```typescript
public readonly defaultApplianceIpAddress: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `tunnelEndpointIpAddress`<sup>Required</sup> <a name="tunnelEndpointIpAddress" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.property.tunnelEndpointIpAddress"></a>

```typescript
public readonly tunnelEndpointIpAddress: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2ForwardingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeInterconnectAttachmentL2Forwarding;
```

- *Type:* <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentL2Forwarding">ComputeInterconnectAttachmentL2Forwarding</a>

---


### ComputeInterconnectAttachmentParamsOutputReference <a name="ComputeInterconnectAttachmentParamsOutputReference" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.Initializer"></a>

```typescript
import { computeInterconnectAttachment } from '@cdktn/provider-google'

new computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.resetResourceManagerTags">resetResourceManagerTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceManagerTags` <a name="resetResourceManagerTags" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.resetResourceManagerTags"></a>

```typescript
public resetResourceManagerTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.property.resourceManagerTagsInput">resourceManagerTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.property.resourceManagerTags">resourceManagerTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParams">ComputeInterconnectAttachmentParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceManagerTagsInput`<sup>Optional</sup> <a name="resourceManagerTagsInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.property.resourceManagerTagsInput"></a>

```typescript
public readonly resourceManagerTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `resourceManagerTags`<sup>Required</sup> <a name="resourceManagerTags" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.property.resourceManagerTags"></a>

```typescript
public readonly resourceManagerTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeInterconnectAttachmentParams;
```

- *Type:* <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentParams">ComputeInterconnectAttachmentParams</a>

---


### ComputeInterconnectAttachmentPrivateInterconnectInfoList <a name="ComputeInterconnectAttachmentPrivateInterconnectInfoList" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.Initializer"></a>

```typescript
import { computeInterconnectAttachment } from '@cdktn/provider-google'

new computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.get"></a>

```typescript
public get(index: number): ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference <a name="ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.Initializer"></a>

```typescript
import { computeInterconnectAttachment } from '@cdktn/provider-google'

new computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.property.tag8021Q">tag8021Q</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfo">ComputeInterconnectAttachmentPrivateInterconnectInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tag8021Q`<sup>Required</sup> <a name="tag8021Q" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.property.tag8021Q"></a>

```typescript
public readonly tag8021Q: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeInterconnectAttachmentPrivateInterconnectInfo;
```

- *Type:* <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentPrivateInterconnectInfo">ComputeInterconnectAttachmentPrivateInterconnectInfo</a>

---


### ComputeInterconnectAttachmentTimeoutsOutputReference <a name="ComputeInterconnectAttachmentTimeoutsOutputReference" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeInterconnectAttachment } from '@cdktn/provider-google'

new computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeouts">ComputeInterconnectAttachmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeInterconnectAttachmentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeInterconnectAttachment.ComputeInterconnectAttachmentTimeouts">ComputeInterconnectAttachmentTimeouts</a>

---



