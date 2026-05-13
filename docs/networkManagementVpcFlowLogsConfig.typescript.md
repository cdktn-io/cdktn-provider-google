# `networkManagementVpcFlowLogsConfig` Submodule <a name="`networkManagementVpcFlowLogsConfig` Submodule" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkManagementVpcFlowLogsConfig <a name="NetworkManagementVpcFlowLogsConfig" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_management_vpc_flow_logs_config google_network_management_vpc_flow_logs_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.Initializer"></a>

```typescript
import { networkManagementVpcFlowLogsConfig } from '@cdktn/provider-google'

new networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig(scope: Construct, id: string, config: NetworkManagementVpcFlowLogsConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig">NetworkManagementVpcFlowLogsConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig">NetworkManagementVpcFlowLogsConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetAggregationInterval">resetAggregationInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetFilterExpr">resetFilterExpr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetFlowSampling">resetFlowSampling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetInterconnectAttachment">resetInterconnectAttachment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetMetadataFields">resetMetadataFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetSubnet">resetSubnet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetVpnTunnel">resetVpnTunnel</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkManagementVpcFlowLogsConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeouts">NetworkManagementVpcFlowLogsConfigTimeouts</a>

---

##### `resetAggregationInterval` <a name="resetAggregationInterval" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetAggregationInterval"></a>

```typescript
public resetAggregationInterval(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFilterExpr` <a name="resetFilterExpr" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetFilterExpr"></a>

```typescript
public resetFilterExpr(): void
```

##### `resetFlowSampling` <a name="resetFlowSampling" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetFlowSampling"></a>

```typescript
public resetFlowSampling(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInterconnectAttachment` <a name="resetInterconnectAttachment" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetInterconnectAttachment"></a>

```typescript
public resetInterconnectAttachment(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetMetadataFields` <a name="resetMetadataFields" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetMetadataFields"></a>

```typescript
public resetMetadataFields(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetState` <a name="resetState" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetState"></a>

```typescript
public resetState(): void
```

##### `resetSubnet` <a name="resetSubnet" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetSubnet"></a>

```typescript
public resetSubnet(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVpnTunnel` <a name="resetVpnTunnel" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.resetVpnTunnel"></a>

```typescript
public resetVpnTunnel(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkManagementVpcFlowLogsConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.isConstruct"></a>

```typescript
import { networkManagementVpcFlowLogsConfig } from '@cdktn/provider-google'

networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.isTerraformElement"></a>

```typescript
import { networkManagementVpcFlowLogsConfig } from '@cdktn/provider-google'

networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.isTerraformResource"></a>

```typescript
import { networkManagementVpcFlowLogsConfig } from '@cdktn/provider-google'

networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.generateConfigForImport"></a>

```typescript
import { networkManagementVpcFlowLogsConfig } from '@cdktn/provider-google'

networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a NetworkManagementVpcFlowLogsConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkManagementVpcFlowLogsConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkManagementVpcFlowLogsConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_management_vpc_flow_logs_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkManagementVpcFlowLogsConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.targetResourceState">targetResourceState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference">NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.aggregationIntervalInput">aggregationIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.filterExprInput">filterExprInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.flowSamplingInput">flowSamplingInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.interconnectAttachmentInput">interconnectAttachmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.metadataFieldsInput">metadataFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.metadataInput">metadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.subnetInput">subnetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeouts">NetworkManagementVpcFlowLogsConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.vpcFlowLogsConfigIdInput">vpcFlowLogsConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.vpnTunnelInput">vpnTunnelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.aggregationInterval">aggregationInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.filterExpr">filterExpr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.flowSampling">flowSampling</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.interconnectAttachment">interconnectAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.metadata">metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.metadataFields">metadataFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.subnet">subnet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.vpcFlowLogsConfigId">vpcFlowLogsConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.vpnTunnel">vpnTunnel</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `targetResourceState`<sup>Required</sup> <a name="targetResourceState" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.targetResourceState"></a>

```typescript
public readonly targetResourceState: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference">NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `aggregationIntervalInput`<sup>Optional</sup> <a name="aggregationIntervalInput" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.aggregationIntervalInput"></a>

```typescript
public readonly aggregationIntervalInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `filterExprInput`<sup>Optional</sup> <a name="filterExprInput" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.filterExprInput"></a>

```typescript
public readonly filterExprInput: string;
```

- *Type:* string

---

##### `flowSamplingInput`<sup>Optional</sup> <a name="flowSamplingInput" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.flowSamplingInput"></a>

```typescript
public readonly flowSamplingInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `interconnectAttachmentInput`<sup>Optional</sup> <a name="interconnectAttachmentInput" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.interconnectAttachmentInput"></a>

```typescript
public readonly interconnectAttachmentInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `metadataFieldsInput`<sup>Optional</sup> <a name="metadataFieldsInput" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.metadataFieldsInput"></a>

```typescript
public readonly metadataFieldsInput: string[];
```

- *Type:* string[]

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.metadataInput"></a>

```typescript
public readonly metadataInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `subnetInput`<sup>Optional</sup> <a name="subnetInput" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.subnetInput"></a>

```typescript
public readonly subnetInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkManagementVpcFlowLogsConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeouts">NetworkManagementVpcFlowLogsConfigTimeouts</a>

---

##### `vpcFlowLogsConfigIdInput`<sup>Optional</sup> <a name="vpcFlowLogsConfigIdInput" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.vpcFlowLogsConfigIdInput"></a>

```typescript
public readonly vpcFlowLogsConfigIdInput: string;
```

- *Type:* string

---

##### `vpnTunnelInput`<sup>Optional</sup> <a name="vpnTunnelInput" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.vpnTunnelInput"></a>

```typescript
public readonly vpnTunnelInput: string;
```

- *Type:* string

---

##### `aggregationInterval`<sup>Required</sup> <a name="aggregationInterval" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.aggregationInterval"></a>

```typescript
public readonly aggregationInterval: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `filterExpr`<sup>Required</sup> <a name="filterExpr" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.filterExpr"></a>

```typescript
public readonly filterExpr: string;
```

- *Type:* string

---

##### `flowSampling`<sup>Required</sup> <a name="flowSampling" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.flowSampling"></a>

```typescript
public readonly flowSampling: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `interconnectAttachment`<sup>Required</sup> <a name="interconnectAttachment" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.interconnectAttachment"></a>

```typescript
public readonly interconnectAttachment: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

---

##### `metadataFields`<sup>Required</sup> <a name="metadataFields" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.metadataFields"></a>

```typescript
public readonly metadataFields: string[];
```

- *Type:* string[]

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.subnet"></a>

```typescript
public readonly subnet: string;
```

- *Type:* string

---

##### `vpcFlowLogsConfigId`<sup>Required</sup> <a name="vpcFlowLogsConfigId" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.vpcFlowLogsConfigId"></a>

```typescript
public readonly vpcFlowLogsConfigId: string;
```

- *Type:* string

---

##### `vpnTunnel`<sup>Required</sup> <a name="vpnTunnel" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.vpnTunnel"></a>

```typescript
public readonly vpnTunnel: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkManagementVpcFlowLogsConfigConfig <a name="NetworkManagementVpcFlowLogsConfigConfig" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.Initializer"></a>

```typescript
import { networkManagementVpcFlowLogsConfig } from '@cdktn/provider-google'

const networkManagementVpcFlowLogsConfigConfig: networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.vpcFlowLogsConfigId">vpcFlowLogsConfigId</a></code> | <code>string</code> | Required. ID of the 'VpcFlowLogsConfig'. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.aggregationInterval">aggregationInterval</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.description">description</a></code> | <code>string</code> | Optional. The user-supplied description of the VPC Flow Logs configuration. Maximum of 512 characters. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.filterExpr">filterExpr</a></code> | <code>string</code> | Optional. Export filter used to define which VPC Flow Logs should be logged. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.flowSampling">flowSampling</a></code> | <code>number</code> | Optional. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_management_vpc_flow_logs_config#id NetworkManagementVpcFlowLogsConfig#id}. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.interconnectAttachment">interconnectAttachment</a></code> | <code>string</code> | Traffic will be logged from the Interconnect Attachment. Format: projects/{project_id}/regions/{region}/interconnectAttachments/{name}. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Optional. Resource labels to represent user-provided metadata. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.metadata">metadata</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.metadataFields">metadataFields</a></code> | <code>string[]</code> | Optional. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.network">network</a></code> | <code>string</code> | Traffic will be logged from VMs, VPN tunnels and Interconnect Attachments within the network. Format: projects/{project_id}/global/networks/{name}. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_management_vpc_flow_logs_config#project NetworkManagementVpcFlowLogsConfig#project}. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.state">state</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.subnet">subnet</a></code> | <code>string</code> | Traffic will be logged from VMs within the subnetwork. Format: projects/{project_id}/regions/{region}/subnetworks/{name}. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeouts">NetworkManagementVpcFlowLogsConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.vpnTunnel">vpnTunnel</a></code> | <code>string</code> | Traffic will be logged from the VPN Tunnel. Format: projects/{project_id}/regions/{region}/vpnTunnels/{name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'.

It identifies the resource
within its parent collection as described in https://google.aip.dev/122. See documentation
for resource type 'networkmanagement.googleapis.com/VpcFlowLogsConfig'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_management_vpc_flow_logs_config#location NetworkManagementVpcFlowLogsConfig#location}

---

##### `vpcFlowLogsConfigId`<sup>Required</sup> <a name="vpcFlowLogsConfigId" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.vpcFlowLogsConfigId"></a>

```typescript
public readonly vpcFlowLogsConfigId: string;
```

- *Type:* string

Required. ID of the 'VpcFlowLogsConfig'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_management_vpc_flow_logs_config#vpc_flow_logs_config_id NetworkManagementVpcFlowLogsConfig#vpc_flow_logs_config_id}

---

##### `aggregationInterval`<sup>Optional</sup> <a name="aggregationInterval" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.aggregationInterval"></a>

```typescript
public readonly aggregationInterval: string;
```

- *Type:* string

Optional.

The aggregation interval for the logs. Default value is
INTERVAL_5_SEC.   Possible values:  AGGREGATION_INTERVAL_UNSPECIFIED INTERVAL_5_SEC INTERVAL_30_SEC INTERVAL_1_MIN INTERVAL_5_MIN INTERVAL_10_MIN INTERVAL_15_MIN

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_management_vpc_flow_logs_config#aggregation_interval NetworkManagementVpcFlowLogsConfig#aggregation_interval}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional. The user-supplied description of the VPC Flow Logs configuration. Maximum of 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_management_vpc_flow_logs_config#description NetworkManagementVpcFlowLogsConfig#description}

---

##### `filterExpr`<sup>Optional</sup> <a name="filterExpr" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.filterExpr"></a>

```typescript
public readonly filterExpr: string;
```

- *Type:* string

Optional. Export filter used to define which VPC Flow Logs should be logged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_management_vpc_flow_logs_config#filter_expr NetworkManagementVpcFlowLogsConfig#filter_expr}

---

##### `flowSampling`<sup>Optional</sup> <a name="flowSampling" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.flowSampling"></a>

```typescript
public readonly flowSampling: number;
```

- *Type:* number

Optional.

The value of the field must be in (0, 1]. The sampling rate
of VPC Flow Logs where 1.0 means all collected logs are reported. Setting the
sampling rate to 0.0 is not allowed. If you want to disable VPC Flow Logs, use
the state field instead. Default value is 1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_management_vpc_flow_logs_config#flow_sampling NetworkManagementVpcFlowLogsConfig#flow_sampling}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_management_vpc_flow_logs_config#id NetworkManagementVpcFlowLogsConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interconnectAttachment`<sup>Optional</sup> <a name="interconnectAttachment" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.interconnectAttachment"></a>

```typescript
public readonly interconnectAttachment: string;
```

- *Type:* string

Traffic will be logged from the Interconnect Attachment. Format: projects/{project_id}/regions/{region}/interconnectAttachments/{name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_management_vpc_flow_logs_config#interconnect_attachment NetworkManagementVpcFlowLogsConfig#interconnect_attachment}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional. Resource labels to represent user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_management_vpc_flow_logs_config#labels NetworkManagementVpcFlowLogsConfig#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

Optional.

Configures whether all, none or a subset of metadata fields
should be added to the reported VPC flow logs. Default value is INCLUDE_ALL_METADATA.
  Possible values:  METADATA_UNSPECIFIED INCLUDE_ALL_METADATA EXCLUDE_ALL_METADATA CUSTOM_METADATA

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_management_vpc_flow_logs_config#metadata NetworkManagementVpcFlowLogsConfig#metadata}

---

##### `metadataFields`<sup>Optional</sup> <a name="metadataFields" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.metadataFields"></a>

```typescript
public readonly metadataFields: string[];
```

- *Type:* string[]

Optional.

Custom metadata fields to include in the reported VPC flow
logs. Can only be specified if \"metadata\" was set to CUSTOM_METADATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_management_vpc_flow_logs_config#metadata_fields NetworkManagementVpcFlowLogsConfig#metadata_fields}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

Traffic will be logged from VMs, VPN tunnels and Interconnect Attachments within the network. Format: projects/{project_id}/global/networks/{name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_management_vpc_flow_logs_config#network NetworkManagementVpcFlowLogsConfig#network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_management_vpc_flow_logs_config#project NetworkManagementVpcFlowLogsConfig#project}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Optional.

The state of the VPC Flow Log configuration. Default value
is ENABLED. When creating a new configuration, it must be enabled.
Possible values: STATE_UNSPECIFIED ENABLED DISABLED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_management_vpc_flow_logs_config#state NetworkManagementVpcFlowLogsConfig#state}

---

##### `subnet`<sup>Optional</sup> <a name="subnet" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.subnet"></a>

```typescript
public readonly subnet: string;
```

- *Type:* string

Traffic will be logged from VMs within the subnetwork. Format: projects/{project_id}/regions/{region}/subnetworks/{name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_management_vpc_flow_logs_config#subnet NetworkManagementVpcFlowLogsConfig#subnet}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkManagementVpcFlowLogsConfigTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeouts">NetworkManagementVpcFlowLogsConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_management_vpc_flow_logs_config#timeouts NetworkManagementVpcFlowLogsConfig#timeouts}

---

##### `vpnTunnel`<sup>Optional</sup> <a name="vpnTunnel" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigConfig.property.vpnTunnel"></a>

```typescript
public readonly vpnTunnel: string;
```

- *Type:* string

Traffic will be logged from the VPN Tunnel. Format: projects/{project_id}/regions/{region}/vpnTunnels/{name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_management_vpc_flow_logs_config#vpn_tunnel NetworkManagementVpcFlowLogsConfig#vpn_tunnel}

---

### NetworkManagementVpcFlowLogsConfigTimeouts <a name="NetworkManagementVpcFlowLogsConfigTimeouts" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeouts.Initializer"></a>

```typescript
import { networkManagementVpcFlowLogsConfig } from '@cdktn/provider-google'

const networkManagementVpcFlowLogsConfigTimeouts: networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_management_vpc_flow_logs_config#create NetworkManagementVpcFlowLogsConfig#create}. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_management_vpc_flow_logs_config#delete NetworkManagementVpcFlowLogsConfig#delete}. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_management_vpc_flow_logs_config#update NetworkManagementVpcFlowLogsConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_management_vpc_flow_logs_config#create NetworkManagementVpcFlowLogsConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_management_vpc_flow_logs_config#delete NetworkManagementVpcFlowLogsConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_management_vpc_flow_logs_config#update NetworkManagementVpcFlowLogsConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference <a name="NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkManagementVpcFlowLogsConfig } from '@cdktn/provider-google'

new networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeouts">NetworkManagementVpcFlowLogsConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkManagementVpcFlowLogsConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkManagementVpcFlowLogsConfig.NetworkManagementVpcFlowLogsConfigTimeouts">NetworkManagementVpcFlowLogsConfigTimeouts</a>

---



