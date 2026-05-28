# `discoveryEngineDataConnector` Submodule <a name="`discoveryEngineDataConnector` Submodule" id="@cdktn/provider-google.discoveryEngineDataConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiscoveryEngineDataConnector <a name="DiscoveryEngineDataConnector" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_data_connector google_discovery_engine_data_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer"></a>

```typescript
import { discoveryEngineDataConnector } from '@cdktn/provider-google'

new discoveryEngineDataConnector.DiscoveryEngineDataConnector(scope: Construct, id: string, config: DiscoveryEngineDataConnectorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig">DiscoveryEngineDataConnectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig">DiscoveryEngineDataConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putActionConfig">putActionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putBapConfig">putBapConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putDestinationConfigs">putDestinationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putEntities">putEntities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetActionConfig">resetActionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetAutoRunDisabled">resetAutoRunDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetBapConfig">resetBapConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetConnectorModes">resetConnectorModes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetDataSourceVersion">resetDataSourceVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetDestinationConfigs">resetDestinationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetEntities">resetEntities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetIncrementalRefreshInterval">resetIncrementalRefreshInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetIncrementalSyncDisabled">resetIncrementalSyncDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetJsonParams">resetJsonParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetParams">resetParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetStaticIpEnabled">resetStaticIpEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetSyncMode">resetSyncMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putActionConfig` <a name="putActionConfig" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putActionConfig"></a>

```typescript
public putActionConfig(value: DiscoveryEngineDataConnectorActionConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putActionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig">DiscoveryEngineDataConnectorActionConfig</a>

---

##### `putBapConfig` <a name="putBapConfig" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putBapConfig"></a>

```typescript
public putBapConfig(value: DiscoveryEngineDataConnectorBapConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putBapConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig">DiscoveryEngineDataConnectorBapConfig</a>

---

##### `putDestinationConfigs` <a name="putDestinationConfigs" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putDestinationConfigs"></a>

```typescript
public putDestinationConfigs(value: IResolvable | DiscoveryEngineDataConnectorDestinationConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putDestinationConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs">DiscoveryEngineDataConnectorDestinationConfigs</a>[]

---

##### `putEntities` <a name="putEntities" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putEntities"></a>

```typescript
public putEntities(value: IResolvable | DiscoveryEngineDataConnectorEntities[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putEntities.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities">DiscoveryEngineDataConnectorEntities</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putTimeouts"></a>

```typescript
public putTimeouts(value: DiscoveryEngineDataConnectorTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts">DiscoveryEngineDataConnectorTimeouts</a>

---

##### `resetActionConfig` <a name="resetActionConfig" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetActionConfig"></a>

```typescript
public resetActionConfig(): void
```

##### `resetAutoRunDisabled` <a name="resetAutoRunDisabled" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetAutoRunDisabled"></a>

```typescript
public resetAutoRunDisabled(): void
```

##### `resetBapConfig` <a name="resetBapConfig" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetBapConfig"></a>

```typescript
public resetBapConfig(): void
```

##### `resetConnectorModes` <a name="resetConnectorModes" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetConnectorModes"></a>

```typescript
public resetConnectorModes(): void
```

##### `resetDataSourceVersion` <a name="resetDataSourceVersion" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetDataSourceVersion"></a>

```typescript
public resetDataSourceVersion(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDestinationConfigs` <a name="resetDestinationConfigs" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetDestinationConfigs"></a>

```typescript
public resetDestinationConfigs(): void
```

##### `resetEntities` <a name="resetEntities" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetEntities"></a>

```typescript
public resetEntities(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIncrementalRefreshInterval` <a name="resetIncrementalRefreshInterval" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetIncrementalRefreshInterval"></a>

```typescript
public resetIncrementalRefreshInterval(): void
```

##### `resetIncrementalSyncDisabled` <a name="resetIncrementalSyncDisabled" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetIncrementalSyncDisabled"></a>

```typescript
public resetIncrementalSyncDisabled(): void
```

##### `resetJsonParams` <a name="resetJsonParams" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetJsonParams"></a>

```typescript
public resetJsonParams(): void
```

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetKmsKeyName"></a>

```typescript
public resetKmsKeyName(): void
```

##### `resetParams` <a name="resetParams" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetParams"></a>

```typescript
public resetParams(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetStaticIpEnabled` <a name="resetStaticIpEnabled" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetStaticIpEnabled"></a>

```typescript
public resetStaticIpEnabled(): void
```

##### `resetSyncMode` <a name="resetSyncMode" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetSyncMode"></a>

```typescript
public resetSyncMode(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DiscoveryEngineDataConnector resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.isConstruct"></a>

```typescript
import { discoveryEngineDataConnector } from '@cdktn/provider-google'

discoveryEngineDataConnector.DiscoveryEngineDataConnector.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.isTerraformElement"></a>

```typescript
import { discoveryEngineDataConnector } from '@cdktn/provider-google'

discoveryEngineDataConnector.DiscoveryEngineDataConnector.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.isTerraformResource"></a>

```typescript
import { discoveryEngineDataConnector } from '@cdktn/provider-google'

discoveryEngineDataConnector.DiscoveryEngineDataConnector.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.generateConfigForImport"></a>

```typescript
import { discoveryEngineDataConnector } from '@cdktn/provider-google'

discoveryEngineDataConnector.DiscoveryEngineDataConnector.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DiscoveryEngineDataConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DiscoveryEngineDataConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DiscoveryEngineDataConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_data_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DiscoveryEngineDataConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.actionConfig">actionConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference">DiscoveryEngineDataConnectorActionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.actionState">actionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.bapConfig">bapConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference">DiscoveryEngineDataConnectorBapConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.blockingReasons">blockingReasons</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.connectorType">connectorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.destinationConfigs">destinationConfigs</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList">DiscoveryEngineDataConnectorDestinationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.entities">entities</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList">DiscoveryEngineDataConnectorEntitiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.errors">errors</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList">DiscoveryEngineDataConnectorErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.lastSyncTime">lastSyncTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.latestPauseTime">latestPauseTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.privateConnectivityProjectId">privateConnectivityProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.realtimeState">realtimeState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.staticIpAddresses">staticIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference">DiscoveryEngineDataConnectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.actionConfigInput">actionConfigInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig">DiscoveryEngineDataConnectorActionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.autoRunDisabledInput">autoRunDisabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.bapConfigInput">bapConfigInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig">DiscoveryEngineDataConnectorBapConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.collectionDisplayNameInput">collectionDisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.collectionIdInput">collectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.connectorModesInput">connectorModesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.dataSourceInput">dataSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.dataSourceVersionInput">dataSourceVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.destinationConfigsInput">destinationConfigsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs">DiscoveryEngineDataConnectorDestinationConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.entitiesInput">entitiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities">DiscoveryEngineDataConnectorEntities</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.incrementalRefreshIntervalInput">incrementalRefreshIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.incrementalSyncDisabledInput">incrementalSyncDisabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.jsonParamsInput">jsonParamsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.paramsInput">paramsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.refreshIntervalInput">refreshIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.staticIpEnabledInput">staticIpEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.syncModeInput">syncModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts">DiscoveryEngineDataConnectorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.autoRunDisabled">autoRunDisabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.collectionDisplayName">collectionDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.collectionId">collectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.connectorModes">connectorModes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.dataSource">dataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.dataSourceVersion">dataSourceVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.incrementalRefreshInterval">incrementalRefreshInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.incrementalSyncDisabled">incrementalSyncDisabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.jsonParams">jsonParams</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.params">params</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.refreshInterval">refreshInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.staticIpEnabled">staticIpEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.syncMode">syncMode</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `actionConfig`<sup>Required</sup> <a name="actionConfig" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.actionConfig"></a>

```typescript
public readonly actionConfig: DiscoveryEngineDataConnectorActionConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference">DiscoveryEngineDataConnectorActionConfigOutputReference</a>

---

##### `actionState`<sup>Required</sup> <a name="actionState" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.actionState"></a>

```typescript
public readonly actionState: string;
```

- *Type:* string

---

##### `bapConfig`<sup>Required</sup> <a name="bapConfig" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.bapConfig"></a>

```typescript
public readonly bapConfig: DiscoveryEngineDataConnectorBapConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference">DiscoveryEngineDataConnectorBapConfigOutputReference</a>

---

##### `blockingReasons`<sup>Required</sup> <a name="blockingReasons" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.blockingReasons"></a>

```typescript
public readonly blockingReasons: string[];
```

- *Type:* string[]

---

##### `connectorType`<sup>Required</sup> <a name="connectorType" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.connectorType"></a>

```typescript
public readonly connectorType: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `destinationConfigs`<sup>Required</sup> <a name="destinationConfigs" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.destinationConfigs"></a>

```typescript
public readonly destinationConfigs: DiscoveryEngineDataConnectorDestinationConfigsList;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList">DiscoveryEngineDataConnectorDestinationConfigsList</a>

---

##### `entities`<sup>Required</sup> <a name="entities" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.entities"></a>

```typescript
public readonly entities: DiscoveryEngineDataConnectorEntitiesList;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList">DiscoveryEngineDataConnectorEntitiesList</a>

---

##### `errors`<sup>Required</sup> <a name="errors" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.errors"></a>

```typescript
public readonly errors: DiscoveryEngineDataConnectorErrorsList;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList">DiscoveryEngineDataConnectorErrorsList</a>

---

##### `lastSyncTime`<sup>Required</sup> <a name="lastSyncTime" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.lastSyncTime"></a>

```typescript
public readonly lastSyncTime: string;
```

- *Type:* string

---

##### `latestPauseTime`<sup>Required</sup> <a name="latestPauseTime" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.latestPauseTime"></a>

```typescript
public readonly latestPauseTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `privateConnectivityProjectId`<sup>Required</sup> <a name="privateConnectivityProjectId" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.privateConnectivityProjectId"></a>

```typescript
public readonly privateConnectivityProjectId: string;
```

- *Type:* string

---

##### `realtimeState`<sup>Required</sup> <a name="realtimeState" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.realtimeState"></a>

```typescript
public readonly realtimeState: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `staticIpAddresses`<sup>Required</sup> <a name="staticIpAddresses" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.staticIpAddresses"></a>

```typescript
public readonly staticIpAddresses: string[];
```

- *Type:* string[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.timeouts"></a>

```typescript
public readonly timeouts: DiscoveryEngineDataConnectorTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference">DiscoveryEngineDataConnectorTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `actionConfigInput`<sup>Optional</sup> <a name="actionConfigInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.actionConfigInput"></a>

```typescript
public readonly actionConfigInput: DiscoveryEngineDataConnectorActionConfig;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig">DiscoveryEngineDataConnectorActionConfig</a>

---

##### `autoRunDisabledInput`<sup>Optional</sup> <a name="autoRunDisabledInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.autoRunDisabledInput"></a>

```typescript
public readonly autoRunDisabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `bapConfigInput`<sup>Optional</sup> <a name="bapConfigInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.bapConfigInput"></a>

```typescript
public readonly bapConfigInput: DiscoveryEngineDataConnectorBapConfig;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig">DiscoveryEngineDataConnectorBapConfig</a>

---

##### `collectionDisplayNameInput`<sup>Optional</sup> <a name="collectionDisplayNameInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.collectionDisplayNameInput"></a>

```typescript
public readonly collectionDisplayNameInput: string;
```

- *Type:* string

---

##### `collectionIdInput`<sup>Optional</sup> <a name="collectionIdInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.collectionIdInput"></a>

```typescript
public readonly collectionIdInput: string;
```

- *Type:* string

---

##### `connectorModesInput`<sup>Optional</sup> <a name="connectorModesInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.connectorModesInput"></a>

```typescript
public readonly connectorModesInput: string[];
```

- *Type:* string[]

---

##### `dataSourceInput`<sup>Optional</sup> <a name="dataSourceInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.dataSourceInput"></a>

```typescript
public readonly dataSourceInput: string;
```

- *Type:* string

---

##### `dataSourceVersionInput`<sup>Optional</sup> <a name="dataSourceVersionInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.dataSourceVersionInput"></a>

```typescript
public readonly dataSourceVersionInput: number;
```

- *Type:* number

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `destinationConfigsInput`<sup>Optional</sup> <a name="destinationConfigsInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.destinationConfigsInput"></a>

```typescript
public readonly destinationConfigsInput: IResolvable | DiscoveryEngineDataConnectorDestinationConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs">DiscoveryEngineDataConnectorDestinationConfigs</a>[]

---

##### `entitiesInput`<sup>Optional</sup> <a name="entitiesInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.entitiesInput"></a>

```typescript
public readonly entitiesInput: IResolvable | DiscoveryEngineDataConnectorEntities[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities">DiscoveryEngineDataConnectorEntities</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `incrementalRefreshIntervalInput`<sup>Optional</sup> <a name="incrementalRefreshIntervalInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.incrementalRefreshIntervalInput"></a>

```typescript
public readonly incrementalRefreshIntervalInput: string;
```

- *Type:* string

---

##### `incrementalSyncDisabledInput`<sup>Optional</sup> <a name="incrementalSyncDisabledInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.incrementalSyncDisabledInput"></a>

```typescript
public readonly incrementalSyncDisabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `jsonParamsInput`<sup>Optional</sup> <a name="jsonParamsInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.jsonParamsInput"></a>

```typescript
public readonly jsonParamsInput: string;
```

- *Type:* string

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `paramsInput`<sup>Optional</sup> <a name="paramsInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.paramsInput"></a>

```typescript
public readonly paramsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `refreshIntervalInput`<sup>Optional</sup> <a name="refreshIntervalInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.refreshIntervalInput"></a>

```typescript
public readonly refreshIntervalInput: string;
```

- *Type:* string

---

##### `staticIpEnabledInput`<sup>Optional</sup> <a name="staticIpEnabledInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.staticIpEnabledInput"></a>

```typescript
public readonly staticIpEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `syncModeInput`<sup>Optional</sup> <a name="syncModeInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.syncModeInput"></a>

```typescript
public readonly syncModeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DiscoveryEngineDataConnectorTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts">DiscoveryEngineDataConnectorTimeouts</a>

---

##### `autoRunDisabled`<sup>Required</sup> <a name="autoRunDisabled" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.autoRunDisabled"></a>

```typescript
public readonly autoRunDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `collectionDisplayName`<sup>Required</sup> <a name="collectionDisplayName" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.collectionDisplayName"></a>

```typescript
public readonly collectionDisplayName: string;
```

- *Type:* string

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.collectionId"></a>

```typescript
public readonly collectionId: string;
```

- *Type:* string

---

##### `connectorModes`<sup>Required</sup> <a name="connectorModes" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.connectorModes"></a>

```typescript
public readonly connectorModes: string[];
```

- *Type:* string[]

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.dataSource"></a>

```typescript
public readonly dataSource: string;
```

- *Type:* string

---

##### `dataSourceVersion`<sup>Required</sup> <a name="dataSourceVersion" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.dataSourceVersion"></a>

```typescript
public readonly dataSourceVersion: number;
```

- *Type:* number

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `incrementalRefreshInterval`<sup>Required</sup> <a name="incrementalRefreshInterval" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.incrementalRefreshInterval"></a>

```typescript
public readonly incrementalRefreshInterval: string;
```

- *Type:* string

---

##### `incrementalSyncDisabled`<sup>Required</sup> <a name="incrementalSyncDisabled" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.incrementalSyncDisabled"></a>

```typescript
public readonly incrementalSyncDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `jsonParams`<sup>Required</sup> <a name="jsonParams" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.jsonParams"></a>

```typescript
public readonly jsonParams: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.params"></a>

```typescript
public readonly params: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `refreshInterval`<sup>Required</sup> <a name="refreshInterval" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.refreshInterval"></a>

```typescript
public readonly refreshInterval: string;
```

- *Type:* string

---

##### `staticIpEnabled`<sup>Required</sup> <a name="staticIpEnabled" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.staticIpEnabled"></a>

```typescript
public readonly staticIpEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `syncMode`<sup>Required</sup> <a name="syncMode" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.syncMode"></a>

```typescript
public readonly syncMode: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DiscoveryEngineDataConnectorActionConfig <a name="DiscoveryEngineDataConnectorActionConfig" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig.Initializer"></a>

```typescript
import { discoveryEngineDataConnector } from '@cdktn/provider-google'

const discoveryEngineDataConnectorActionConfig: discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig.property.actionParams">actionParams</a></code> | <code>{[ key: string ]: string}</code> | Params needed to configure the actions in the format of String-to-String (Key, Value) pairs. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig.property.createBapConnection">createBapConnection</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to create a BAP (Business Application Platform) connection for this action connector. |

---

##### `actionParams`<sup>Optional</sup> <a name="actionParams" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig.property.actionParams"></a>

```typescript
public readonly actionParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Params needed to configure the actions in the format of String-to-String (Key, Value) pairs.

Contains connection
credentials and configuration for the action connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_data_connector#action_params DiscoveryEngineDataConnector#action_params}

---

##### `createBapConnection`<sup>Optional</sup> <a name="createBapConnection" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig.property.createBapConnection"></a>

```typescript
public readonly createBapConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to create a BAP (Business Application Platform) connection for this action connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_data_connector#create_bap_connection DiscoveryEngineDataConnector#create_bap_connection}

---

### DiscoveryEngineDataConnectorBapConfig <a name="DiscoveryEngineDataConnectorBapConfig" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig.Initializer"></a>

```typescript
import { discoveryEngineDataConnector } from '@cdktn/provider-google'

const discoveryEngineDataConnectorBapConfig: discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig.property.enabledActions">enabledActions</a></code> | <code>string[]</code> | The list of enabled actions for this connector. Supported values include: 'create_issue', 'update_issue', 'change_issue_status', 'create_comment', 'update_comment', 'upload_attachment'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig.property.supportedConnectorModes">supportedConnectorModes</a></code> | <code>string[]</code> | The connector modes supported by the BAP configuration. The possible values include: 'ACTIONS'. |

---

##### `enabledActions`<sup>Optional</sup> <a name="enabledActions" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig.property.enabledActions"></a>

```typescript
public readonly enabledActions: string[];
```

- *Type:* string[]

The list of enabled actions for this connector. Supported values include: 'create_issue', 'update_issue', 'change_issue_status', 'create_comment', 'update_comment', 'upload_attachment'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_data_connector#enabled_actions DiscoveryEngineDataConnector#enabled_actions}

---

##### `supportedConnectorModes`<sup>Optional</sup> <a name="supportedConnectorModes" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig.property.supportedConnectorModes"></a>

```typescript
public readonly supportedConnectorModes: string[];
```

- *Type:* string[]

The connector modes supported by the BAP configuration. The possible values include: 'ACTIONS'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_data_connector#supported_connector_modes DiscoveryEngineDataConnector#supported_connector_modes}

---

### DiscoveryEngineDataConnectorConfig <a name="DiscoveryEngineDataConnectorConfig" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.Initializer"></a>

```typescript
import { discoveryEngineDataConnector } from '@cdktn/provider-google'

const discoveryEngineDataConnectorConfig: discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.collectionDisplayName">collectionDisplayName</a></code> | <code>string</code> | The display name of the Collection. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.collectionId">collectionId</a></code> | <code>string</code> | The ID to use for the Collection, which will become the final component of the Collection's resource name. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.dataSource">dataSource</a></code> | <code>string</code> | The identifier for the data source. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.location">location</a></code> | <code>string</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.refreshInterval">refreshInterval</a></code> | <code>string</code> | The refresh interval for data sync. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.actionConfig">actionConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig">DiscoveryEngineDataConnectorActionConfig</a></code> | action_config block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.autoRunDisabled">autoRunDisabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether full syncs are paused for this connector. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.bapConfig">bapConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig">DiscoveryEngineDataConnectorBapConfig</a></code> | bap_config block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.connectorModes">connectorModes</a></code> | <code>string[]</code> | The modes enabled for this connector. The possible value can be: 'DATA_INGESTION', 'ACTIONS', 'FEDERATED' 'EUA', 'FEDERATED_AND_EUA'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.dataSourceVersion">dataSourceVersion</a></code> | <code>number</code> | The version of the data source. For example, '3' for Jira v3. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.destinationConfigs">destinationConfigs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs">DiscoveryEngineDataConnectorDestinationConfigs</a>[]</code> | destination_configs block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.entities">entities</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities">DiscoveryEngineDataConnectorEntities</a>[]</code> | entities block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_data_connector#id DiscoveryEngineDataConnector#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.incrementalRefreshInterval">incrementalRefreshInterval</a></code> | <code>string</code> | The refresh interval specifically for incremental data syncs. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.incrementalSyncDisabled">incrementalSyncDisabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether incremental syncs are paused for this connector. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.jsonParams">jsonParams</a></code> | <code>string</code> | Params needed to access the source in the format of json string. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | The KMS key to be used to protect the DataStores managed by this connector. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.params">params</a></code> | <code>{[ key: string ]: string}</code> | Params needed to access the source in the format of String-to-String (Key, Value) pairs. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_data_connector#project DiscoveryEngineDataConnector#project}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.staticIpEnabled">staticIpEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether customer has enabled static IP addresses for this connector. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.syncMode">syncMode</a></code> | <code>string</code> | The data synchronization mode supported by the data connector. The possible value can be: 'PERIODIC', 'STREAMING'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts">DiscoveryEngineDataConnectorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `collectionDisplayName`<sup>Required</sup> <a name="collectionDisplayName" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.collectionDisplayName"></a>

```typescript
public readonly collectionDisplayName: string;
```

- *Type:* string

The display name of the Collection.

Should be human readable, used to display collections in the Console
Dashboard. UTF-8 encoded string with limit of 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_data_connector#collection_display_name DiscoveryEngineDataConnector#collection_display_name}

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.collectionId"></a>

```typescript
public readonly collectionId: string;
```

- *Type:* string

The ID to use for the Collection, which will become the final component of the Collection's resource name.

A new Collection is created as
part of the DataConnector setup. DataConnector is a singleton
resource under Collection, managing all DataStores of the Collection.
This field must conform to [RFC-1034](https://tools.ietf.org/html/rfc1034)
standard with a length limit of 63 characters. Otherwise, an
INVALID_ARGUMENT error is returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_data_connector#collection_id DiscoveryEngineDataConnector#collection_id}

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.dataSource"></a>

```typescript
public readonly dataSource: string;
```

- *Type:* string

The identifier for the data source.

This is a partial list of supported connectors. Please refer to the
[documentation](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/introduction-to-connectors-and-data-stores)
for the full list of connectors.

Supported first-party connectors include:

*   'bigquery'
*   'gcp_fhir'
*   'google_mail'
*   'google_drive'
*   'google_calendar'
*   'google_chat'

Supported third-party connectors include:
Generally available (GA) connectors:

*   'onedrive'
*   'outlook'
*   'confluence'
*   'jira'
*   'servicenow'
*   'sharepoint'

Preview connectors:

*   'asana'
*   'azure_active_directory'
*   'box'
*   'canva'
*   'confluence_server'
*   'custom_connector'
*   'docusign'
*   'dropbox'
*   'dynamics365'
*   'github'
*   'gitlab'
*   'hubspot'
*   'jira_server'
*   'linear'
*   'native_cloud_identity'
*   'notion'
*   'okta'
*   'pagerduty'
*   'peoplesoft'
*   'salesforce'
*   'shopify'
*   'slack'
*   'snowflake'
*   'teams'
*   'trello'
*   'workday'
*   'zendesk'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_data_connector#data_source DiscoveryEngineDataConnector#data_source}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_data_connector#location DiscoveryEngineDataConnector#location}

---

##### `refreshInterval`<sup>Required</sup> <a name="refreshInterval" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.refreshInterval"></a>

```typescript
public readonly refreshInterval: string;
```

- *Type:* string

The refresh interval for data sync.

If duration is set to 0, the data will
be synced in real time. The streaming feature is not supported yet. The
minimum is 30 minutes and maximum is 7 days. When the refresh interval is
set to the same value as the incremental refresh interval, incremental
sync will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_data_connector#refresh_interval DiscoveryEngineDataConnector#refresh_interval}

---

##### `actionConfig`<sup>Optional</sup> <a name="actionConfig" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.actionConfig"></a>

```typescript
public readonly actionConfig: DiscoveryEngineDataConnectorActionConfig;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig">DiscoveryEngineDataConnectorActionConfig</a>

action_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_data_connector#action_config DiscoveryEngineDataConnector#action_config}

---

##### `autoRunDisabled`<sup>Optional</sup> <a name="autoRunDisabled" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.autoRunDisabled"></a>

```typescript
public readonly autoRunDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether full syncs are paused for this connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_data_connector#auto_run_disabled DiscoveryEngineDataConnector#auto_run_disabled}

---

##### `bapConfig`<sup>Optional</sup> <a name="bapConfig" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.bapConfig"></a>

```typescript
public readonly bapConfig: DiscoveryEngineDataConnectorBapConfig;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig">DiscoveryEngineDataConnectorBapConfig</a>

bap_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_data_connector#bap_config DiscoveryEngineDataConnector#bap_config}

---

##### `connectorModes`<sup>Optional</sup> <a name="connectorModes" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.connectorModes"></a>

```typescript
public readonly connectorModes: string[];
```

- *Type:* string[]

The modes enabled for this connector. The possible value can be: 'DATA_INGESTION', 'ACTIONS', 'FEDERATED' 'EUA', 'FEDERATED_AND_EUA'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_data_connector#connector_modes DiscoveryEngineDataConnector#connector_modes}

---

##### `dataSourceVersion`<sup>Optional</sup> <a name="dataSourceVersion" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.dataSourceVersion"></a>

```typescript
public readonly dataSourceVersion: number;
```

- *Type:* number

The version of the data source. For example, '3' for Jira v3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_data_connector#data_source_version DiscoveryEngineDataConnector#data_source_version}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_data_connector#deletion_policy DiscoveryEngineDataConnector#deletion_policy}

---

##### `destinationConfigs`<sup>Optional</sup> <a name="destinationConfigs" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.destinationConfigs"></a>

```typescript
public readonly destinationConfigs: IResolvable | DiscoveryEngineDataConnectorDestinationConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs">DiscoveryEngineDataConnectorDestinationConfigs</a>[]

destination_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_data_connector#destination_configs DiscoveryEngineDataConnector#destination_configs}

---

##### `entities`<sup>Optional</sup> <a name="entities" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.entities"></a>

```typescript
public readonly entities: IResolvable | DiscoveryEngineDataConnectorEntities[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities">DiscoveryEngineDataConnectorEntities</a>[]

entities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_data_connector#entities DiscoveryEngineDataConnector#entities}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_data_connector#id DiscoveryEngineDataConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `incrementalRefreshInterval`<sup>Optional</sup> <a name="incrementalRefreshInterval" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.incrementalRefreshInterval"></a>

```typescript
public readonly incrementalRefreshInterval: string;
```

- *Type:* string

The refresh interval specifically for incremental data syncs.

If unset,
incremental syncs will use the default from env, set to 3hrs.
The minimum is 30 minutes and maximum is 7 days. Applicable to only 3P
connectors. When the refresh interval is
set to the same value as the incremental refresh interval, incremental
sync will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_data_connector#incremental_refresh_interval DiscoveryEngineDataConnector#incremental_refresh_interval}

---

##### `incrementalSyncDisabled`<sup>Optional</sup> <a name="incrementalSyncDisabled" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.incrementalSyncDisabled"></a>

```typescript
public readonly incrementalSyncDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether incremental syncs are paused for this connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_data_connector#incremental_sync_disabled DiscoveryEngineDataConnector#incremental_sync_disabled}

---

##### `jsonParams`<sup>Optional</sup> <a name="jsonParams" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.jsonParams"></a>

```typescript
public readonly jsonParams: string;
```

- *Type:* string

Params needed to access the source in the format of json string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_data_connector#json_params DiscoveryEngineDataConnector#json_params}

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

The KMS key to be used to protect the DataStores managed by this connector.

Must be set for requests that need to comply with CMEK Org Policy
protections.
If this field is set and processed successfully, the DataStores created by
this connector will be protected by the KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_data_connector#kms_key_name DiscoveryEngineDataConnector#kms_key_name}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.params"></a>

```typescript
public readonly params: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Params needed to access the source in the format of String-to-String (Key, Value) pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_data_connector#params DiscoveryEngineDataConnector#params}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_data_connector#project DiscoveryEngineDataConnector#project}.

---

##### `staticIpEnabled`<sup>Optional</sup> <a name="staticIpEnabled" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.staticIpEnabled"></a>

```typescript
public readonly staticIpEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether customer has enabled static IP addresses for this connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_data_connector#static_ip_enabled DiscoveryEngineDataConnector#static_ip_enabled}

---

##### `syncMode`<sup>Optional</sup> <a name="syncMode" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.syncMode"></a>

```typescript
public readonly syncMode: string;
```

- *Type:* string

The data synchronization mode supported by the data connector. The possible value can be: 'PERIODIC', 'STREAMING'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_data_connector#sync_mode DiscoveryEngineDataConnector#sync_mode}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DiscoveryEngineDataConnectorTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts">DiscoveryEngineDataConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_data_connector#timeouts DiscoveryEngineDataConnector#timeouts}

---

### DiscoveryEngineDataConnectorDestinationConfigs <a name="DiscoveryEngineDataConnectorDestinationConfigs" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs.Initializer"></a>

```typescript
import { discoveryEngineDataConnector } from '@cdktn/provider-google'

const discoveryEngineDataConnectorDestinationConfigs: discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs.property.destinations">destinations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations">DiscoveryEngineDataConnectorDestinationConfigsDestinations</a>[]</code> | destinations block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs.property.key">key</a></code> | <code>string</code> | The key of the destination configuration, for example 'url'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs.property.params">params</a></code> | <code>string</code> | Additional parameters for this destination config in structured json format. |

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs.property.destinations"></a>

```typescript
public readonly destinations: IResolvable | DiscoveryEngineDataConnectorDestinationConfigsDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations">DiscoveryEngineDataConnectorDestinationConfigsDestinations</a>[]

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_data_connector#destinations DiscoveryEngineDataConnector#destinations}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key of the destination configuration, for example 'url'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_data_connector#key DiscoveryEngineDataConnector#key}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs.property.params"></a>

```typescript
public readonly params: string;
```

- *Type:* string

Additional parameters for this destination config in structured json format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_data_connector#params DiscoveryEngineDataConnector#params}

---

### DiscoveryEngineDataConnectorDestinationConfigsDestinations <a name="DiscoveryEngineDataConnectorDestinationConfigsDestinations" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations.Initializer"></a>

```typescript
import { discoveryEngineDataConnector } from '@cdktn/provider-google'

const discoveryEngineDataConnectorDestinationConfigsDestinations: discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations.property.host">host</a></code> | <code>string</code> | The host of the destination, for example 'https://example.atlassian.net'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations.property.port">port</a></code> | <code>number</code> | Target port number accepted by the destination. |

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

The host of the destination, for example 'https://example.atlassian.net'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_data_connector#host DiscoveryEngineDataConnector#host}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Target port number accepted by the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_data_connector#port DiscoveryEngineDataConnector#port}

---

### DiscoveryEngineDataConnectorEntities <a name="DiscoveryEngineDataConnectorEntities" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities.Initializer"></a>

```typescript
import { discoveryEngineDataConnector } from '@cdktn/provider-google'

const discoveryEngineDataConnectorEntities: discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities.property.entityName">entityName</a></code> | <code>string</code> | The name of the entity. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities.property.keyPropertyMappings">keyPropertyMappings</a></code> | <code>{[ key: string ]: string}</code> | Attributes for indexing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities.property.params">params</a></code> | <code>string</code> | The parameters for the entity to facilitate data ingestion. |

---

##### `entityName`<sup>Optional</sup> <a name="entityName" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities.property.entityName"></a>

```typescript
public readonly entityName: string;
```

- *Type:* string

The name of the entity.

Supported values by data source:
* Salesforce: 'Lead', 'Opportunity', 'Contact', 'Account', 'Case', 'Contract', 'Campaign'
* Jira: project, issue, attachment, comment, worklog
* Confluence: 'Content', 'Space'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_data_connector#entity_name DiscoveryEngineDataConnector#entity_name}

---

##### `keyPropertyMappings`<sup>Optional</sup> <a name="keyPropertyMappings" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities.property.keyPropertyMappings"></a>

```typescript
public readonly keyPropertyMappings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Attributes for indexing.

Key: Field name.
Value: The key property to map a field to, such as 'title', and
'description'. Supported key properties:
* 'title': The title for data record. This would be displayed on search
  results.
* 'description': The description for data record. This would be displayed
  on search results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_data_connector#key_property_mappings DiscoveryEngineDataConnector#key_property_mappings}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities.property.params"></a>

```typescript
public readonly params: string;
```

- *Type:* string

The parameters for the entity to facilitate data ingestion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_data_connector#params DiscoveryEngineDataConnector#params}

---

### DiscoveryEngineDataConnectorErrors <a name="DiscoveryEngineDataConnectorErrors" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrors.Initializer"></a>

```typescript
import { discoveryEngineDataConnector } from '@cdktn/provider-google'

const discoveryEngineDataConnectorErrors: discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrors = { ... }
```


### DiscoveryEngineDataConnectorTimeouts <a name="DiscoveryEngineDataConnectorTimeouts" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts.Initializer"></a>

```typescript
import { discoveryEngineDataConnector } from '@cdktn/provider-google'

const discoveryEngineDataConnectorTimeouts: discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_data_connector#create DiscoveryEngineDataConnector#create}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_data_connector#delete DiscoveryEngineDataConnector#delete}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_data_connector#update DiscoveryEngineDataConnector#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_data_connector#create DiscoveryEngineDataConnector#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_data_connector#delete DiscoveryEngineDataConnector#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_data_connector#update DiscoveryEngineDataConnector#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DiscoveryEngineDataConnectorActionConfigOutputReference <a name="DiscoveryEngineDataConnectorActionConfigOutputReference" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.Initializer"></a>

```typescript
import { discoveryEngineDataConnector } from '@cdktn/provider-google'

new discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.resetActionParams">resetActionParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.resetCreateBapConnection">resetCreateBapConnection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActionParams` <a name="resetActionParams" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.resetActionParams"></a>

```typescript
public resetActionParams(): void
```

##### `resetCreateBapConnection` <a name="resetCreateBapConnection" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.resetCreateBapConnection"></a>

```typescript
public resetCreateBapConnection(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.isActionConfigured">isActionConfigured</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.actionParamsInput">actionParamsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.createBapConnectionInput">createBapConnectionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.actionParams">actionParams</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.createBapConnection">createBapConnection</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig">DiscoveryEngineDataConnectorActionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isActionConfigured`<sup>Required</sup> <a name="isActionConfigured" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.isActionConfigured"></a>

```typescript
public readonly isActionConfigured: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `actionParamsInput`<sup>Optional</sup> <a name="actionParamsInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.actionParamsInput"></a>

```typescript
public readonly actionParamsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `createBapConnectionInput`<sup>Optional</sup> <a name="createBapConnectionInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.createBapConnectionInput"></a>

```typescript
public readonly createBapConnectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `actionParams`<sup>Required</sup> <a name="actionParams" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.actionParams"></a>

```typescript
public readonly actionParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `createBapConnection`<sup>Required</sup> <a name="createBapConnection" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.createBapConnection"></a>

```typescript
public readonly createBapConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DiscoveryEngineDataConnectorActionConfig;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig">DiscoveryEngineDataConnectorActionConfig</a>

---


### DiscoveryEngineDataConnectorBapConfigOutputReference <a name="DiscoveryEngineDataConnectorBapConfigOutputReference" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.Initializer"></a>

```typescript
import { discoveryEngineDataConnector } from '@cdktn/provider-google'

new discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.resetEnabledActions">resetEnabledActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.resetSupportedConnectorModes">resetSupportedConnectorModes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabledActions` <a name="resetEnabledActions" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.resetEnabledActions"></a>

```typescript
public resetEnabledActions(): void
```

##### `resetSupportedConnectorModes` <a name="resetSupportedConnectorModes" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.resetSupportedConnectorModes"></a>

```typescript
public resetSupportedConnectorModes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.enabledActionsInput">enabledActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.supportedConnectorModesInput">supportedConnectorModesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.enabledActions">enabledActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.supportedConnectorModes">supportedConnectorModes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig">DiscoveryEngineDataConnectorBapConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledActionsInput`<sup>Optional</sup> <a name="enabledActionsInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.enabledActionsInput"></a>

```typescript
public readonly enabledActionsInput: string[];
```

- *Type:* string[]

---

##### `supportedConnectorModesInput`<sup>Optional</sup> <a name="supportedConnectorModesInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.supportedConnectorModesInput"></a>

```typescript
public readonly supportedConnectorModesInput: string[];
```

- *Type:* string[]

---

##### `enabledActions`<sup>Required</sup> <a name="enabledActions" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.enabledActions"></a>

```typescript
public readonly enabledActions: string[];
```

- *Type:* string[]

---

##### `supportedConnectorModes`<sup>Required</sup> <a name="supportedConnectorModes" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.supportedConnectorModes"></a>

```typescript
public readonly supportedConnectorModes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DiscoveryEngineDataConnectorBapConfig;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig">DiscoveryEngineDataConnectorBapConfig</a>

---


### DiscoveryEngineDataConnectorDestinationConfigsDestinationsList <a name="DiscoveryEngineDataConnectorDestinationConfigsDestinationsList" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer"></a>

```typescript
import { discoveryEngineDataConnector } from '@cdktn/provider-google'

new discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.get"></a>

```typescript
public get(index: number): DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations">DiscoveryEngineDataConnectorDestinationConfigsDestinations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DiscoveryEngineDataConnectorDestinationConfigsDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations">DiscoveryEngineDataConnectorDestinationConfigsDestinations</a>[]

---


### DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference <a name="DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer"></a>

```typescript
import { discoveryEngineDataConnector } from '@cdktn/provider-google'

new discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHost` <a name="resetHost" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations">DiscoveryEngineDataConnectorDestinationConfigsDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DiscoveryEngineDataConnectorDestinationConfigsDestinations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations">DiscoveryEngineDataConnectorDestinationConfigsDestinations</a>

---


### DiscoveryEngineDataConnectorDestinationConfigsList <a name="DiscoveryEngineDataConnectorDestinationConfigsList" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.Initializer"></a>

```typescript
import { discoveryEngineDataConnector } from '@cdktn/provider-google'

new discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.get"></a>

```typescript
public get(index: number): DiscoveryEngineDataConnectorDestinationConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs">DiscoveryEngineDataConnectorDestinationConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DiscoveryEngineDataConnectorDestinationConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs">DiscoveryEngineDataConnectorDestinationConfigs</a>[]

---


### DiscoveryEngineDataConnectorDestinationConfigsOutputReference <a name="DiscoveryEngineDataConnectorDestinationConfigsOutputReference" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer"></a>

```typescript
import { discoveryEngineDataConnector } from '@cdktn/provider-google'

new discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.putDestinations">putDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.resetDestinations">resetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.resetParams">resetParams</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinations` <a name="putDestinations" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.putDestinations"></a>

```typescript
public putDestinations(value: IResolvable | DiscoveryEngineDataConnectorDestinationConfigsDestinations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.putDestinations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations">DiscoveryEngineDataConnectorDestinationConfigsDestinations</a>[]

---

##### `resetDestinations` <a name="resetDestinations" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.resetDestinations"></a>

```typescript
public resetDestinations(): void
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetParams` <a name="resetParams" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.resetParams"></a>

```typescript
public resetParams(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList">DiscoveryEngineDataConnectorDestinationConfigsDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.destinationsInput">destinationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations">DiscoveryEngineDataConnectorDestinationConfigsDestinations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.paramsInput">paramsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.params">params</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs">DiscoveryEngineDataConnectorDestinationConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.destinations"></a>

```typescript
public readonly destinations: DiscoveryEngineDataConnectorDestinationConfigsDestinationsList;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList">DiscoveryEngineDataConnectorDestinationConfigsDestinationsList</a>

---

##### `destinationsInput`<sup>Optional</sup> <a name="destinationsInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.destinationsInput"></a>

```typescript
public readonly destinationsInput: IResolvable | DiscoveryEngineDataConnectorDestinationConfigsDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations">DiscoveryEngineDataConnectorDestinationConfigsDestinations</a>[]

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `paramsInput`<sup>Optional</sup> <a name="paramsInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.paramsInput"></a>

```typescript
public readonly paramsInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.params"></a>

```typescript
public readonly params: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DiscoveryEngineDataConnectorDestinationConfigs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs">DiscoveryEngineDataConnectorDestinationConfigs</a>

---


### DiscoveryEngineDataConnectorEntitiesList <a name="DiscoveryEngineDataConnectorEntitiesList" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.Initializer"></a>

```typescript
import { discoveryEngineDataConnector } from '@cdktn/provider-google'

new discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.get"></a>

```typescript
public get(index: number): DiscoveryEngineDataConnectorEntitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities">DiscoveryEngineDataConnectorEntities</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DiscoveryEngineDataConnectorEntities[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities">DiscoveryEngineDataConnectorEntities</a>[]

---


### DiscoveryEngineDataConnectorEntitiesOutputReference <a name="DiscoveryEngineDataConnectorEntitiesOutputReference" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.Initializer"></a>

```typescript
import { discoveryEngineDataConnector } from '@cdktn/provider-google'

new discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.resetEntityName">resetEntityName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.resetKeyPropertyMappings">resetKeyPropertyMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.resetParams">resetParams</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEntityName` <a name="resetEntityName" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.resetEntityName"></a>

```typescript
public resetEntityName(): void
```

##### `resetKeyPropertyMappings` <a name="resetKeyPropertyMappings" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.resetKeyPropertyMappings"></a>

```typescript
public resetKeyPropertyMappings(): void
```

##### `resetParams` <a name="resetParams" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.resetParams"></a>

```typescript
public resetParams(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.dataStore">dataStore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.entityNameInput">entityNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.keyPropertyMappingsInput">keyPropertyMappingsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.paramsInput">paramsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.entityName">entityName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.keyPropertyMappings">keyPropertyMappings</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.params">params</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities">DiscoveryEngineDataConnectorEntities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataStore`<sup>Required</sup> <a name="dataStore" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.dataStore"></a>

```typescript
public readonly dataStore: string;
```

- *Type:* string

---

##### `entityNameInput`<sup>Optional</sup> <a name="entityNameInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.entityNameInput"></a>

```typescript
public readonly entityNameInput: string;
```

- *Type:* string

---

##### `keyPropertyMappingsInput`<sup>Optional</sup> <a name="keyPropertyMappingsInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.keyPropertyMappingsInput"></a>

```typescript
public readonly keyPropertyMappingsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `paramsInput`<sup>Optional</sup> <a name="paramsInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.paramsInput"></a>

```typescript
public readonly paramsInput: string;
```

- *Type:* string

---

##### `entityName`<sup>Required</sup> <a name="entityName" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.entityName"></a>

```typescript
public readonly entityName: string;
```

- *Type:* string

---

##### `keyPropertyMappings`<sup>Required</sup> <a name="keyPropertyMappings" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.keyPropertyMappings"></a>

```typescript
public readonly keyPropertyMappings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.params"></a>

```typescript
public readonly params: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DiscoveryEngineDataConnectorEntities;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities">DiscoveryEngineDataConnectorEntities</a>

---


### DiscoveryEngineDataConnectorErrorsList <a name="DiscoveryEngineDataConnectorErrorsList" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.Initializer"></a>

```typescript
import { discoveryEngineDataConnector } from '@cdktn/provider-google'

new discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.get"></a>

```typescript
public get(index: number): DiscoveryEngineDataConnectorErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DiscoveryEngineDataConnectorErrorsOutputReference <a name="DiscoveryEngineDataConnectorErrorsOutputReference" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.Initializer"></a>

```typescript
import { discoveryEngineDataConnector } from '@cdktn/provider-google'

new discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrors">DiscoveryEngineDataConnectorErrors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DiscoveryEngineDataConnectorErrors;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrors">DiscoveryEngineDataConnectorErrors</a>

---


### DiscoveryEngineDataConnectorTimeoutsOutputReference <a name="DiscoveryEngineDataConnectorTimeoutsOutputReference" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.Initializer"></a>

```typescript
import { discoveryEngineDataConnector } from '@cdktn/provider-google'

new discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts">DiscoveryEngineDataConnectorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DiscoveryEngineDataConnectorTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts">DiscoveryEngineDataConnectorTimeouts</a>

---



