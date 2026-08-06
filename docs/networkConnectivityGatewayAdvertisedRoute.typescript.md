# `networkConnectivityGatewayAdvertisedRoute` Submodule <a name="`networkConnectivityGatewayAdvertisedRoute` Submodule" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkConnectivityGatewayAdvertisedRoute <a name="NetworkConnectivityGatewayAdvertisedRoute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route google_network_connectivity_gateway_advertised_route}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer"></a>

```typescript
import { networkConnectivityGatewayAdvertisedRoute } from '@cdktn/provider-google'

new networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute(scope: Construct, id: string, config: NetworkConnectivityGatewayAdvertisedRouteConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig">NetworkConnectivityGatewayAdvertisedRouteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig">NetworkConnectivityGatewayAdvertisedRouteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetIpRange">resetIpRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetRecipient">resetRecipient</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkConnectivityGatewayAdvertisedRouteTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeouts">NetworkConnectivityGatewayAdvertisedRouteTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpRange` <a name="resetIpRange" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetIpRange"></a>

```typescript
public resetIpRange(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRecipient` <a name="resetRecipient" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetRecipient"></a>

```typescript
public resetRecipient(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkConnectivityGatewayAdvertisedRoute resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.isConstruct"></a>

```typescript
import { networkConnectivityGatewayAdvertisedRoute } from '@cdktn/provider-google'

networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.isTerraformElement"></a>

```typescript
import { networkConnectivityGatewayAdvertisedRoute } from '@cdktn/provider-google'

networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.isTerraformResource"></a>

```typescript
import { networkConnectivityGatewayAdvertisedRoute } from '@cdktn/provider-google'

networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.generateConfigForImport"></a>

```typescript
import { networkConnectivityGatewayAdvertisedRoute } from '@cdktn/provider-google'

networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a NetworkConnectivityGatewayAdvertisedRoute resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkConnectivityGatewayAdvertisedRoute to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkConnectivityGatewayAdvertisedRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkConnectivityGatewayAdvertisedRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference">NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.uniqueId">uniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.ipRangeInput">ipRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.recipientInput">recipientInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.spokeInput">spokeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeouts">NetworkConnectivityGatewayAdvertisedRouteTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.ipRange">ipRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.recipient">recipient</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.spoke">spoke</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference">NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference</a>

---

##### `uniqueId`<sup>Required</sup> <a name="uniqueId" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.uniqueId"></a>

```typescript
public readonly uniqueId: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipRangeInput`<sup>Optional</sup> <a name="ipRangeInput" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.ipRangeInput"></a>

```typescript
public readonly ipRangeInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `recipientInput`<sup>Optional</sup> <a name="recipientInput" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.recipientInput"></a>

```typescript
public readonly recipientInput: string;
```

- *Type:* string

---

##### `spokeInput`<sup>Optional</sup> <a name="spokeInput" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.spokeInput"></a>

```typescript
public readonly spokeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkConnectivityGatewayAdvertisedRouteTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeouts">NetworkConnectivityGatewayAdvertisedRouteTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipRange`<sup>Required</sup> <a name="ipRange" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.ipRange"></a>

```typescript
public readonly ipRange: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `recipient`<sup>Required</sup> <a name="recipient" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.recipient"></a>

```typescript
public readonly recipient: string;
```

- *Type:* string

---

##### `spoke`<sup>Required</sup> <a name="spoke" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.spoke"></a>

```typescript
public readonly spoke: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRoute.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkConnectivityGatewayAdvertisedRouteConfig <a name="NetworkConnectivityGatewayAdvertisedRouteConfig" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.Initializer"></a>

```typescript
import { networkConnectivityGatewayAdvertisedRoute } from '@cdktn/provider-google'

const networkConnectivityGatewayAdvertisedRouteConfig: networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.location">location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.name">name</a></code> | <code>string</code> | The name of the gateway advertised route. Route names must be unique. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.spoke">spoke</a></code> | <code>string</code> | The name of the spoke. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.description">description</a></code> | <code>string</code> | An optional description of the gateway advertised route. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#id NetworkConnectivityGatewayAdvertisedRoute#id}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.ipRange">ipRange</a></code> | <code>string</code> | This route's advertised IP address range. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://docs.cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.priority">priority</a></code> | <code>number</code> | The priority of this advertised route. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#project NetworkConnectivityGatewayAdvertisedRoute#project}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.recipient">recipient</a></code> | <code>string</code> | the recipient of this advertised route Possible values: ["RECIPIENT_UNSPECIFIED", "ADVERTISE_TO_HUB"]. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeouts">NetworkConnectivityGatewayAdvertisedRouteTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#location NetworkConnectivityGatewayAdvertisedRoute#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the gateway advertised route. Route names must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#name NetworkConnectivityGatewayAdvertisedRoute#name}

---

##### `spoke`<sup>Required</sup> <a name="spoke" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.spoke"></a>

```typescript
public readonly spoke: string;
```

- *Type:* string

The name of the spoke.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#spoke NetworkConnectivityGatewayAdvertisedRoute#spoke}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#deletion_policy NetworkConnectivityGatewayAdvertisedRoute#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of the gateway advertised route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#description NetworkConnectivityGatewayAdvertisedRoute#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#id NetworkConnectivityGatewayAdvertisedRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipRange`<sup>Optional</sup> <a name="ipRange" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.ipRange"></a>

```typescript
public readonly ipRange: string;
```

- *Type:* string

This route's advertised IP address range.

Must be a valid CIDR-formatted prefix.
If an IP address is provided without a subnet mask, it is interpreted as, for IPv4, a /32 singular IP address range, and, for IPv6, /128

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#ip_range NetworkConnectivityGatewayAdvertisedRoute#ip_range}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://docs.cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#labels NetworkConnectivityGatewayAdvertisedRoute#labels}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

The priority of this advertised route.

You can choose a value from 0 to 65335.
If you don't provide a value, Google Cloud assigns a priority of 100 to the ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#priority NetworkConnectivityGatewayAdvertisedRoute#priority}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#project NetworkConnectivityGatewayAdvertisedRoute#project}.

---

##### `recipient`<sup>Optional</sup> <a name="recipient" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.recipient"></a>

```typescript
public readonly recipient: string;
```

- *Type:* string

the recipient of this advertised route Possible values: ["RECIPIENT_UNSPECIFIED", "ADVERTISE_TO_HUB"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#recipient NetworkConnectivityGatewayAdvertisedRoute#recipient}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkConnectivityGatewayAdvertisedRouteTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeouts">NetworkConnectivityGatewayAdvertisedRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#timeouts NetworkConnectivityGatewayAdvertisedRoute#timeouts}

---

### NetworkConnectivityGatewayAdvertisedRouteTimeouts <a name="NetworkConnectivityGatewayAdvertisedRouteTimeouts" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeouts.Initializer"></a>

```typescript
import { networkConnectivityGatewayAdvertisedRoute } from '@cdktn/provider-google'

const networkConnectivityGatewayAdvertisedRouteTimeouts: networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#create NetworkConnectivityGatewayAdvertisedRoute#create}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#delete NetworkConnectivityGatewayAdvertisedRoute#delete}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#update NetworkConnectivityGatewayAdvertisedRoute#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#create NetworkConnectivityGatewayAdvertisedRoute#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#delete NetworkConnectivityGatewayAdvertisedRoute#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_connectivity_gateway_advertised_route#update NetworkConnectivityGatewayAdvertisedRoute#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference <a name="NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkConnectivityGatewayAdvertisedRoute } from '@cdktn/provider-google'

new networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeouts">NetworkConnectivityGatewayAdvertisedRouteTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkConnectivityGatewayAdvertisedRouteTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkConnectivityGatewayAdvertisedRoute.NetworkConnectivityGatewayAdvertisedRouteTimeouts">NetworkConnectivityGatewayAdvertisedRouteTimeouts</a>

---



