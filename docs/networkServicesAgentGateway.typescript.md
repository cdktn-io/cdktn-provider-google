# `networkServicesAgentGateway` Submodule <a name="`networkServicesAgentGateway` Submodule" id="@cdktn/provider-google.networkServicesAgentGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesAgentGateway <a name="NetworkServicesAgentGateway" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_agent_gateway google_network_services_agent_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.Initializer"></a>

```typescript
import { networkServicesAgentGateway } from '@cdktn/provider-google'

new networkServicesAgentGateway.NetworkServicesAgentGateway(scope: Construct, id: string, config: NetworkServicesAgentGatewayConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig">NetworkServicesAgentGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig">NetworkServicesAgentGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.putGoogleManaged">putGoogleManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.putNetworkConfig">putNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.putSelfManaged">putSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.resetGoogleManaged">resetGoogleManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.resetNetworkConfig">resetNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.resetProtocols">resetProtocols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.resetRegistries">resetRegistries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.resetSelfManaged">resetSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGoogleManaged` <a name="putGoogleManaged" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.putGoogleManaged"></a>

```typescript
public putGoogleManaged(value: NetworkServicesAgentGatewayGoogleManaged): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.putGoogleManaged.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManaged">NetworkServicesAgentGatewayGoogleManaged</a>

---

##### `putNetworkConfig` <a name="putNetworkConfig" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.putNetworkConfig"></a>

```typescript
public putNetworkConfig(value: NetworkServicesAgentGatewayNetworkConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfig">NetworkServicesAgentGatewayNetworkConfig</a>

---

##### `putSelfManaged` <a name="putSelfManaged" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.putSelfManaged"></a>

```typescript
public putSelfManaged(value: NetworkServicesAgentGatewaySelfManaged): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.putSelfManaged.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManaged">NetworkServicesAgentGatewaySelfManaged</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkServicesAgentGatewayTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeouts">NetworkServicesAgentGatewayTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetGoogleManaged` <a name="resetGoogleManaged" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.resetGoogleManaged"></a>

```typescript
public resetGoogleManaged(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetNetworkConfig` <a name="resetNetworkConfig" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.resetNetworkConfig"></a>

```typescript
public resetNetworkConfig(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetProtocols` <a name="resetProtocols" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.resetProtocols"></a>

```typescript
public resetProtocols(): void
```

##### `resetRegistries` <a name="resetRegistries" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.resetRegistries"></a>

```typescript
public resetRegistries(): void
```

##### `resetSelfManaged` <a name="resetSelfManaged" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.resetSelfManaged"></a>

```typescript
public resetSelfManaged(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkServicesAgentGateway resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.isConstruct"></a>

```typescript
import { networkServicesAgentGateway } from '@cdktn/provider-google'

networkServicesAgentGateway.NetworkServicesAgentGateway.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.isTerraformElement"></a>

```typescript
import { networkServicesAgentGateway } from '@cdktn/provider-google'

networkServicesAgentGateway.NetworkServicesAgentGateway.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.isTerraformResource"></a>

```typescript
import { networkServicesAgentGateway } from '@cdktn/provider-google'

networkServicesAgentGateway.NetworkServicesAgentGateway.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.generateConfigForImport"></a>

```typescript
import { networkServicesAgentGateway } from '@cdktn/provider-google'

networkServicesAgentGateway.NetworkServicesAgentGateway.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a NetworkServicesAgentGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkServicesAgentGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkServicesAgentGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_agent_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkServicesAgentGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.agentGatewayCard">agentGatewayCard</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList">NetworkServicesAgentGatewayAgentGatewayCardList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.googleManaged">googleManaged</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference">NetworkServicesAgentGatewayGoogleManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference">NetworkServicesAgentGatewayNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.selfManaged">selfManaged</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference">NetworkServicesAgentGatewaySelfManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference">NetworkServicesAgentGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.googleManagedInput">googleManagedInput</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManaged">NetworkServicesAgentGatewayGoogleManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.networkConfigInput">networkConfigInput</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfig">NetworkServicesAgentGatewayNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.protocolsInput">protocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.registriesInput">registriesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.selfManagedInput">selfManagedInput</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManaged">NetworkServicesAgentGatewaySelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeouts">NetworkServicesAgentGatewayTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.protocols">protocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.registries">registries</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `agentGatewayCard`<sup>Required</sup> <a name="agentGatewayCard" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.agentGatewayCard"></a>

```typescript
public readonly agentGatewayCard: NetworkServicesAgentGatewayAgentGatewayCardList;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList">NetworkServicesAgentGatewayAgentGatewayCardList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `googleManaged`<sup>Required</sup> <a name="googleManaged" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.googleManaged"></a>

```typescript
public readonly googleManaged: NetworkServicesAgentGatewayGoogleManagedOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference">NetworkServicesAgentGatewayGoogleManagedOutputReference</a>

---

##### `networkConfig`<sup>Required</sup> <a name="networkConfig" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.networkConfig"></a>

```typescript
public readonly networkConfig: NetworkServicesAgentGatewayNetworkConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference">NetworkServicesAgentGatewayNetworkConfigOutputReference</a>

---

##### `selfManaged`<sup>Required</sup> <a name="selfManaged" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.selfManaged"></a>

```typescript
public readonly selfManaged: NetworkServicesAgentGatewaySelfManagedOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference">NetworkServicesAgentGatewaySelfManagedOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkServicesAgentGatewayTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference">NetworkServicesAgentGatewayTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `googleManagedInput`<sup>Optional</sup> <a name="googleManagedInput" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.googleManagedInput"></a>

```typescript
public readonly googleManagedInput: NetworkServicesAgentGatewayGoogleManaged;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManaged">NetworkServicesAgentGatewayGoogleManaged</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkConfigInput`<sup>Optional</sup> <a name="networkConfigInput" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.networkConfigInput"></a>

```typescript
public readonly networkConfigInput: NetworkServicesAgentGatewayNetworkConfig;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfig">NetworkServicesAgentGatewayNetworkConfig</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `protocolsInput`<sup>Optional</sup> <a name="protocolsInput" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.protocolsInput"></a>

```typescript
public readonly protocolsInput: string[];
```

- *Type:* string[]

---

##### `registriesInput`<sup>Optional</sup> <a name="registriesInput" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.registriesInput"></a>

```typescript
public readonly registriesInput: string[];
```

- *Type:* string[]

---

##### `selfManagedInput`<sup>Optional</sup> <a name="selfManagedInput" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.selfManagedInput"></a>

```typescript
public readonly selfManagedInput: NetworkServicesAgentGatewaySelfManaged;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManaged">NetworkServicesAgentGatewaySelfManaged</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkServicesAgentGatewayTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeouts">NetworkServicesAgentGatewayTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

---

##### `registries`<sup>Required</sup> <a name="registries" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.registries"></a>

```typescript
public readonly registries: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGateway.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesAgentGatewayAgentGatewayCard <a name="NetworkServicesAgentGatewayAgentGatewayCard" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCard"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCard.Initializer"></a>

```typescript
import { networkServicesAgentGateway } from '@cdktn/provider-google'

const networkServicesAgentGatewayAgentGatewayCard: networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCard = { ... }
```


### NetworkServicesAgentGatewayConfig <a name="NetworkServicesAgentGatewayConfig" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.Initializer"></a>

```typescript
import { networkServicesAgentGateway } from '@cdktn/provider-google'

const networkServicesAgentGatewayConfig: networkServicesAgentGateway.NetworkServicesAgentGatewayConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.location">location</a></code> | <code>string</code> | The location of the agent gateway. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.name">name</a></code> | <code>string</code> | Name of the AgentGateway resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.description">description</a></code> | <code>string</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.googleManaged">googleManaged</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManaged">NetworkServicesAgentGatewayGoogleManaged</a></code> | google_managed block. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_agent_gateway#id NetworkServicesAgentGateway#id}. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Set of label tags associated with the AgentGateway resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfig">NetworkServicesAgentGatewayNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_agent_gateway#project NetworkServicesAgentGateway#project}. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.protocols">protocols</a></code> | <code>string[]</code> | List of protocols supported by an Agent Gateway. Possible values: ["MCP"]. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.registries">registries</a></code> | <code>string[]</code> | A list of Agent registries containing the agents, MCP servers and tools governed by the Agent Gateway. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.selfManaged">selfManaged</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManaged">NetworkServicesAgentGatewaySelfManaged</a></code> | self_managed block. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeouts">NetworkServicesAgentGatewayTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the agent gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_agent_gateway#location NetworkServicesAgentGateway#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the AgentGateway resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_agent_gateway#name NetworkServicesAgentGateway#name}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_agent_gateway#deletion_policy NetworkServicesAgentGateway#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_agent_gateway#description NetworkServicesAgentGateway#description}

---

##### `googleManaged`<sup>Optional</sup> <a name="googleManaged" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.googleManaged"></a>

```typescript
public readonly googleManaged: NetworkServicesAgentGatewayGoogleManaged;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManaged">NetworkServicesAgentGatewayGoogleManaged</a>

google_managed block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_agent_gateway#google_managed NetworkServicesAgentGateway#google_managed}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_agent_gateway#id NetworkServicesAgentGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Set of label tags associated with the AgentGateway resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_agent_gateway#labels NetworkServicesAgentGateway#labels}

---

##### `networkConfig`<sup>Optional</sup> <a name="networkConfig" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.networkConfig"></a>

```typescript
public readonly networkConfig: NetworkServicesAgentGatewayNetworkConfig;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfig">NetworkServicesAgentGatewayNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_agent_gateway#network_config NetworkServicesAgentGateway#network_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_agent_gateway#project NetworkServicesAgentGateway#project}.

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

List of protocols supported by an Agent Gateway. Possible values: ["MCP"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_agent_gateway#protocols NetworkServicesAgentGateway#protocols}

---

##### `registries`<sup>Optional</sup> <a name="registries" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.registries"></a>

```typescript
public readonly registries: string[];
```

- *Type:* string[]

A list of Agent registries containing the agents, MCP servers and tools governed by the Agent Gateway.

Note: Currently limited to project-scoped registries Must be of format
'//agentregistry.googleapis.com/{version}/projects/{{project}}/locations/{{location}}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_agent_gateway#registries NetworkServicesAgentGateway#registries}

---

##### `selfManaged`<sup>Optional</sup> <a name="selfManaged" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.selfManaged"></a>

```typescript
public readonly selfManaged: NetworkServicesAgentGatewaySelfManaged;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManaged">NetworkServicesAgentGatewaySelfManaged</a>

self_managed block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_agent_gateway#self_managed NetworkServicesAgentGateway#self_managed}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkServicesAgentGatewayTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeouts">NetworkServicesAgentGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_agent_gateway#timeouts NetworkServicesAgentGateway#timeouts}

---

### NetworkServicesAgentGatewayGoogleManaged <a name="NetworkServicesAgentGatewayGoogleManaged" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManaged.Initializer"></a>

```typescript
import { networkServicesAgentGateway } from '@cdktn/provider-google'

const networkServicesAgentGatewayGoogleManaged: networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManaged = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManaged.property.governedAccessPath">governedAccessPath</a></code> | <code>string</code> | Operating Mode of Agent Gateway. Possible values: ["AGENT_TO_ANYWHERE", "CLIENT_TO_AGENT"]. |

---

##### `governedAccessPath`<sup>Required</sup> <a name="governedAccessPath" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManaged.property.governedAccessPath"></a>

```typescript
public readonly governedAccessPath: string;
```

- *Type:* string

Operating Mode of Agent Gateway. Possible values: ["AGENT_TO_ANYWHERE", "CLIENT_TO_AGENT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_agent_gateway#governed_access_path NetworkServicesAgentGateway#governed_access_path}

---

### NetworkServicesAgentGatewayNetworkConfig <a name="NetworkServicesAgentGatewayNetworkConfig" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfig.Initializer"></a>

```typescript
import { networkServicesAgentGateway } from '@cdktn/provider-google'

const networkServicesAgentGatewayNetworkConfig: networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfig.property.egress">egress</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgress">NetworkServicesAgentGatewayNetworkConfigEgress</a></code> | egress block. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfig.property.dnsPeeringConfig">dnsPeeringConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig">NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig</a></code> | dns_peering_config block. |

---

##### `egress`<sup>Required</sup> <a name="egress" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfig.property.egress"></a>

```typescript
public readonly egress: NetworkServicesAgentGatewayNetworkConfigEgress;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgress">NetworkServicesAgentGatewayNetworkConfigEgress</a>

egress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_agent_gateway#egress NetworkServicesAgentGateway#egress}

---

##### `dnsPeeringConfig`<sup>Optional</sup> <a name="dnsPeeringConfig" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfig.property.dnsPeeringConfig"></a>

```typescript
public readonly dnsPeeringConfig: NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig">NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig</a>

dns_peering_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_agent_gateway#dns_peering_config NetworkServicesAgentGateway#dns_peering_config}

---

### NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig <a name="NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig.Initializer"></a>

```typescript
import { networkServicesAgentGateway } from '@cdktn/provider-google'

const networkServicesAgentGatewayNetworkConfigDnsPeeringConfig: networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig.property.domains">domains</a></code> | <code>string[]</code> | The list of domain names to peer for DNS resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig.property.targetNetwork">targetNetwork</a></code> | <code>string</code> | The URI of the target VPC network for DNS peering. Must be of the form 'projects/{project}/global/networks/{network}'. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig.property.targetProject">targetProject</a></code> | <code>string</code> | The ID of the project that hosts the target VPC network for DNS peering. |

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig.property.domains"></a>

```typescript
public readonly domains: string[];
```

- *Type:* string[]

The list of domain names to peer for DNS resolution.

Each entry
must be a fully qualified domain name ending with a dot
(for example, 'example.com.').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_agent_gateway#domains NetworkServicesAgentGateway#domains}

---

##### `targetNetwork`<sup>Required</sup> <a name="targetNetwork" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig.property.targetNetwork"></a>

```typescript
public readonly targetNetwork: string;
```

- *Type:* string

The URI of the target VPC network for DNS peering. Must be of the form 'projects/{project}/global/networks/{network}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_agent_gateway#target_network NetworkServicesAgentGateway#target_network}

---

##### `targetProject`<sup>Required</sup> <a name="targetProject" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig.property.targetProject"></a>

```typescript
public readonly targetProject: string;
```

- *Type:* string

The ID of the project that hosts the target VPC network for DNS peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_agent_gateway#target_project NetworkServicesAgentGateway#target_project}

---

### NetworkServicesAgentGatewayNetworkConfigEgress <a name="NetworkServicesAgentGatewayNetworkConfigEgress" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgress.Initializer"></a>

```typescript
import { networkServicesAgentGateway } from '@cdktn/provider-google'

const networkServicesAgentGatewayNetworkConfigEgress: networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgress.property.networkAttachment">networkAttachment</a></code> | <code>string</code> | The URI of the Network Attachment resource. |

---

##### `networkAttachment`<sup>Required</sup> <a name="networkAttachment" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgress.property.networkAttachment"></a>

```typescript
public readonly networkAttachment: string;
```

- *Type:* string

The URI of the Network Attachment resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_agent_gateway#network_attachment NetworkServicesAgentGateway#network_attachment}

---

### NetworkServicesAgentGatewaySelfManaged <a name="NetworkServicesAgentGatewaySelfManaged" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManaged.Initializer"></a>

```typescript
import { networkServicesAgentGateway } from '@cdktn/provider-google'

const networkServicesAgentGatewaySelfManaged: networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManaged = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManaged.property.resourceUri">resourceUri</a></code> | <code>string</code> | A supported Google Cloud networking proxy in the Project and Location. |

---

##### `resourceUri`<sup>Required</sup> <a name="resourceUri" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManaged.property.resourceUri"></a>

```typescript
public readonly resourceUri: string;
```

- *Type:* string

A supported Google Cloud networking proxy in the Project and Location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_agent_gateway#resource_uri NetworkServicesAgentGateway#resource_uri}

---

### NetworkServicesAgentGatewayTimeouts <a name="NetworkServicesAgentGatewayTimeouts" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeouts.Initializer"></a>

```typescript
import { networkServicesAgentGateway } from '@cdktn/provider-google'

const networkServicesAgentGatewayTimeouts: networkServicesAgentGateway.NetworkServicesAgentGatewayTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_agent_gateway#create NetworkServicesAgentGateway#create}. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_agent_gateway#delete NetworkServicesAgentGateway#delete}. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_agent_gateway#update NetworkServicesAgentGateway#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_agent_gateway#create NetworkServicesAgentGateway#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_agent_gateway#delete NetworkServicesAgentGateway#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_agent_gateway#update NetworkServicesAgentGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesAgentGatewayAgentGatewayCardList <a name="NetworkServicesAgentGatewayAgentGatewayCardList" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList.Initializer"></a>

```typescript
import { networkServicesAgentGateway } from '@cdktn/provider-google'

new networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList.get"></a>

```typescript
public get(index: number): NetworkServicesAgentGatewayAgentGatewayCardOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### NetworkServicesAgentGatewayAgentGatewayCardOutputReference <a name="NetworkServicesAgentGatewayAgentGatewayCardOutputReference" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.Initializer"></a>

```typescript
import { networkServicesAgentGateway } from '@cdktn/provider-google'

new networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.mtlsEndpoint">mtlsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.rootCertificates">rootCertificates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.serviceExtensionsServiceAccount">serviceExtensionsServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCard">NetworkServicesAgentGatewayAgentGatewayCard</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mtlsEndpoint`<sup>Required</sup> <a name="mtlsEndpoint" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.mtlsEndpoint"></a>

```typescript
public readonly mtlsEndpoint: string;
```

- *Type:* string

---

##### `rootCertificates`<sup>Required</sup> <a name="rootCertificates" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.rootCertificates"></a>

```typescript
public readonly rootCertificates: string[];
```

- *Type:* string[]

---

##### `serviceExtensionsServiceAccount`<sup>Required</sup> <a name="serviceExtensionsServiceAccount" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.serviceExtensionsServiceAccount"></a>

```typescript
public readonly serviceExtensionsServiceAccount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCardOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkServicesAgentGatewayAgentGatewayCard;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayAgentGatewayCard">NetworkServicesAgentGatewayAgentGatewayCard</a>

---


### NetworkServicesAgentGatewayGoogleManagedOutputReference <a name="NetworkServicesAgentGatewayGoogleManagedOutputReference" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.Initializer"></a>

```typescript
import { networkServicesAgentGateway } from '@cdktn/provider-google'

new networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.property.governedAccessPathInput">governedAccessPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.property.governedAccessPath">governedAccessPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManaged">NetworkServicesAgentGatewayGoogleManaged</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `governedAccessPathInput`<sup>Optional</sup> <a name="governedAccessPathInput" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.property.governedAccessPathInput"></a>

```typescript
public readonly governedAccessPathInput: string;
```

- *Type:* string

---

##### `governedAccessPath`<sup>Required</sup> <a name="governedAccessPath" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.property.governedAccessPath"></a>

```typescript
public readonly governedAccessPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManagedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkServicesAgentGatewayGoogleManaged;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayGoogleManaged">NetworkServicesAgentGatewayGoogleManaged</a>

---


### NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference <a name="NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.Initializer"></a>

```typescript
import { networkServicesAgentGateway } from '@cdktn/provider-google'

new networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.property.domainsInput">domainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.property.targetNetworkInput">targetNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.property.targetProjectInput">targetProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.property.domains">domains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.property.targetNetwork">targetNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.property.targetProject">targetProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig">NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainsInput`<sup>Optional</sup> <a name="domainsInput" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.property.domainsInput"></a>

```typescript
public readonly domainsInput: string[];
```

- *Type:* string[]

---

##### `targetNetworkInput`<sup>Optional</sup> <a name="targetNetworkInput" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.property.targetNetworkInput"></a>

```typescript
public readonly targetNetworkInput: string;
```

- *Type:* string

---

##### `targetProjectInput`<sup>Optional</sup> <a name="targetProjectInput" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.property.targetProjectInput"></a>

```typescript
public readonly targetProjectInput: string;
```

- *Type:* string

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.property.domains"></a>

```typescript
public readonly domains: string[];
```

- *Type:* string[]

---

##### `targetNetwork`<sup>Required</sup> <a name="targetNetwork" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.property.targetNetwork"></a>

```typescript
public readonly targetNetwork: string;
```

- *Type:* string

---

##### `targetProject`<sup>Required</sup> <a name="targetProject" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.property.targetProject"></a>

```typescript
public readonly targetProject: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig">NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig</a>

---


### NetworkServicesAgentGatewayNetworkConfigEgressOutputReference <a name="NetworkServicesAgentGatewayNetworkConfigEgressOutputReference" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.Initializer"></a>

```typescript
import { networkServicesAgentGateway } from '@cdktn/provider-google'

new networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.networkAttachmentInput">networkAttachmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.networkAttachment">networkAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgress">NetworkServicesAgentGatewayNetworkConfigEgress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkAttachmentInput`<sup>Optional</sup> <a name="networkAttachmentInput" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.networkAttachmentInput"></a>

```typescript
public readonly networkAttachmentInput: string;
```

- *Type:* string

---

##### `networkAttachment`<sup>Required</sup> <a name="networkAttachment" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.networkAttachment"></a>

```typescript
public readonly networkAttachment: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkServicesAgentGatewayNetworkConfigEgress;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgress">NetworkServicesAgentGatewayNetworkConfigEgress</a>

---


### NetworkServicesAgentGatewayNetworkConfigOutputReference <a name="NetworkServicesAgentGatewayNetworkConfigOutputReference" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.Initializer"></a>

```typescript
import { networkServicesAgentGateway } from '@cdktn/provider-google'

new networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.putDnsPeeringConfig">putDnsPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.putEgress">putEgress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.resetDnsPeeringConfig">resetDnsPeeringConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDnsPeeringConfig` <a name="putDnsPeeringConfig" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.putDnsPeeringConfig"></a>

```typescript
public putDnsPeeringConfig(value: NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.putDnsPeeringConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig">NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig</a>

---

##### `putEgress` <a name="putEgress" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.putEgress"></a>

```typescript
public putEgress(value: NetworkServicesAgentGatewayNetworkConfigEgress): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.putEgress.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgress">NetworkServicesAgentGatewayNetworkConfigEgress</a>

---

##### `resetDnsPeeringConfig` <a name="resetDnsPeeringConfig" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.resetDnsPeeringConfig"></a>

```typescript
public resetDnsPeeringConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.property.dnsPeeringConfig">dnsPeeringConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference">NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.property.egress">egress</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference">NetworkServicesAgentGatewayNetworkConfigEgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.property.dnsPeeringConfigInput">dnsPeeringConfigInput</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig">NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.property.egressInput">egressInput</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgress">NetworkServicesAgentGatewayNetworkConfigEgress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfig">NetworkServicesAgentGatewayNetworkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dnsPeeringConfig`<sup>Required</sup> <a name="dnsPeeringConfig" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.property.dnsPeeringConfig"></a>

```typescript
public readonly dnsPeeringConfig: NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference">NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfigOutputReference</a>

---

##### `egress`<sup>Required</sup> <a name="egress" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.property.egress"></a>

```typescript
public readonly egress: NetworkServicesAgentGatewayNetworkConfigEgressOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgressOutputReference">NetworkServicesAgentGatewayNetworkConfigEgressOutputReference</a>

---

##### `dnsPeeringConfigInput`<sup>Optional</sup> <a name="dnsPeeringConfigInput" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.property.dnsPeeringConfigInput"></a>

```typescript
public readonly dnsPeeringConfigInput: NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig">NetworkServicesAgentGatewayNetworkConfigDnsPeeringConfig</a>

---

##### `egressInput`<sup>Optional</sup> <a name="egressInput" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.property.egressInput"></a>

```typescript
public readonly egressInput: NetworkServicesAgentGatewayNetworkConfigEgress;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigEgress">NetworkServicesAgentGatewayNetworkConfigEgress</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkServicesAgentGatewayNetworkConfig;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayNetworkConfig">NetworkServicesAgentGatewayNetworkConfig</a>

---


### NetworkServicesAgentGatewaySelfManagedOutputReference <a name="NetworkServicesAgentGatewaySelfManagedOutputReference" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.Initializer"></a>

```typescript
import { networkServicesAgentGateway } from '@cdktn/provider-google'

new networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.property.resourceUriInput">resourceUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.property.resourceUri">resourceUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManaged">NetworkServicesAgentGatewaySelfManaged</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceUriInput`<sup>Optional</sup> <a name="resourceUriInput" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.property.resourceUriInput"></a>

```typescript
public readonly resourceUriInput: string;
```

- *Type:* string

---

##### `resourceUri`<sup>Required</sup> <a name="resourceUri" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.property.resourceUri"></a>

```typescript
public readonly resourceUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManagedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkServicesAgentGatewaySelfManaged;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewaySelfManaged">NetworkServicesAgentGatewaySelfManaged</a>

---


### NetworkServicesAgentGatewayTimeoutsOutputReference <a name="NetworkServicesAgentGatewayTimeoutsOutputReference" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkServicesAgentGateway } from '@cdktn/provider-google'

new networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeouts">NetworkServicesAgentGatewayTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkServicesAgentGatewayTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesAgentGateway.NetworkServicesAgentGatewayTimeouts">NetworkServicesAgentGatewayTimeouts</a>

---



