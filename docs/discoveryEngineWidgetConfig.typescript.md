# `discoveryEngineWidgetConfig` Submodule <a name="`discoveryEngineWidgetConfig` Submodule" id="@cdktn/provider-google.discoveryEngineWidgetConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiscoveryEngineWidgetConfig <a name="DiscoveryEngineWidgetConfig" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config google_discovery_engine_widget_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer"></a>

```typescript
import { discoveryEngineWidgetConfig } from '@cdktn/provider-google'

new discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig(scope: Construct, id: string, config: DiscoveryEngineWidgetConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig">DiscoveryEngineWidgetConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig">DiscoveryEngineWidgetConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putAccessSettings">putAccessSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putHomepageSetting">putHomepageSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putUiBranding">putUiBranding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putUiSettings">putUiSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetAccessSettings">resetAccessSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetCollectionId">resetCollectionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetHomepageSetting">resetHomepageSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetUiBranding">resetUiBranding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetUiSettings">resetUiSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetWidgetConfigId">resetWidgetConfigId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccessSettings` <a name="putAccessSettings" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putAccessSettings"></a>

```typescript
public putAccessSettings(value: DiscoveryEngineWidgetConfigAccessSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putAccessSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings">DiscoveryEngineWidgetConfigAccessSettings</a>

---

##### `putHomepageSetting` <a name="putHomepageSetting" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putHomepageSetting"></a>

```typescript
public putHomepageSetting(value: DiscoveryEngineWidgetConfigHomepageSetting): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putHomepageSetting.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSetting">DiscoveryEngineWidgetConfigHomepageSetting</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: DiscoveryEngineWidgetConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeouts">DiscoveryEngineWidgetConfigTimeouts</a>

---

##### `putUiBranding` <a name="putUiBranding" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putUiBranding"></a>

```typescript
public putUiBranding(value: DiscoveryEngineWidgetConfigUiBranding): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putUiBranding.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBranding">DiscoveryEngineWidgetConfigUiBranding</a>

---

##### `putUiSettings` <a name="putUiSettings" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putUiSettings"></a>

```typescript
public putUiSettings(value: DiscoveryEngineWidgetConfigUiSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putUiSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings">DiscoveryEngineWidgetConfigUiSettings</a>

---

##### `resetAccessSettings` <a name="resetAccessSettings" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetAccessSettings"></a>

```typescript
public resetAccessSettings(): void
```

##### `resetCollectionId` <a name="resetCollectionId" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetCollectionId"></a>

```typescript
public resetCollectionId(): void
```

##### `resetHomepageSetting` <a name="resetHomepageSetting" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetHomepageSetting"></a>

```typescript
public resetHomepageSetting(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUiBranding` <a name="resetUiBranding" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetUiBranding"></a>

```typescript
public resetUiBranding(): void
```

##### `resetUiSettings` <a name="resetUiSettings" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetUiSettings"></a>

```typescript
public resetUiSettings(): void
```

##### `resetWidgetConfigId` <a name="resetWidgetConfigId" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetWidgetConfigId"></a>

```typescript
public resetWidgetConfigId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DiscoveryEngineWidgetConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.isConstruct"></a>

```typescript
import { discoveryEngineWidgetConfig } from '@cdktn/provider-google'

discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.isTerraformElement"></a>

```typescript
import { discoveryEngineWidgetConfig } from '@cdktn/provider-google'

discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.isTerraformResource"></a>

```typescript
import { discoveryEngineWidgetConfig } from '@cdktn/provider-google'

discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.generateConfigForImport"></a>

```typescript
import { discoveryEngineWidgetConfig } from '@cdktn/provider-google'

discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DiscoveryEngineWidgetConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DiscoveryEngineWidgetConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DiscoveryEngineWidgetConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DiscoveryEngineWidgetConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.accessSettings">accessSettings</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference">DiscoveryEngineWidgetConfigAccessSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.configId">configId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.homepageSetting">homepageSetting</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference">DiscoveryEngineWidgetConfigHomepageSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference">DiscoveryEngineWidgetConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.uiBranding">uiBranding</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference">DiscoveryEngineWidgetConfigUiBrandingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.uiSettings">uiSettings</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference">DiscoveryEngineWidgetConfigUiSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.accessSettingsInput">accessSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings">DiscoveryEngineWidgetConfigAccessSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.collectionIdInput">collectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.engineIdInput">engineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.homepageSettingInput">homepageSettingInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSetting">DiscoveryEngineWidgetConfigHomepageSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeouts">DiscoveryEngineWidgetConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.uiBrandingInput">uiBrandingInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBranding">DiscoveryEngineWidgetConfigUiBranding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.uiSettingsInput">uiSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings">DiscoveryEngineWidgetConfigUiSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.widgetConfigIdInput">widgetConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.collectionId">collectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.engineId">engineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.widgetConfigId">widgetConfigId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accessSettings`<sup>Required</sup> <a name="accessSettings" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.accessSettings"></a>

```typescript
public readonly accessSettings: DiscoveryEngineWidgetConfigAccessSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference">DiscoveryEngineWidgetConfigAccessSettingsOutputReference</a>

---

##### `configId`<sup>Required</sup> <a name="configId" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.configId"></a>

```typescript
public readonly configId: string;
```

- *Type:* string

---

##### `homepageSetting`<sup>Required</sup> <a name="homepageSetting" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.homepageSetting"></a>

```typescript
public readonly homepageSetting: DiscoveryEngineWidgetConfigHomepageSettingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference">DiscoveryEngineWidgetConfigHomepageSettingOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DiscoveryEngineWidgetConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference">DiscoveryEngineWidgetConfigTimeoutsOutputReference</a>

---

##### `uiBranding`<sup>Required</sup> <a name="uiBranding" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.uiBranding"></a>

```typescript
public readonly uiBranding: DiscoveryEngineWidgetConfigUiBrandingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference">DiscoveryEngineWidgetConfigUiBrandingOutputReference</a>

---

##### `uiSettings`<sup>Required</sup> <a name="uiSettings" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.uiSettings"></a>

```typescript
public readonly uiSettings: DiscoveryEngineWidgetConfigUiSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference">DiscoveryEngineWidgetConfigUiSettingsOutputReference</a>

---

##### `accessSettingsInput`<sup>Optional</sup> <a name="accessSettingsInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.accessSettingsInput"></a>

```typescript
public readonly accessSettingsInput: DiscoveryEngineWidgetConfigAccessSettings;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings">DiscoveryEngineWidgetConfigAccessSettings</a>

---

##### `collectionIdInput`<sup>Optional</sup> <a name="collectionIdInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.collectionIdInput"></a>

```typescript
public readonly collectionIdInput: string;
```

- *Type:* string

---

##### `engineIdInput`<sup>Optional</sup> <a name="engineIdInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.engineIdInput"></a>

```typescript
public readonly engineIdInput: string;
```

- *Type:* string

---

##### `homepageSettingInput`<sup>Optional</sup> <a name="homepageSettingInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.homepageSettingInput"></a>

```typescript
public readonly homepageSettingInput: DiscoveryEngineWidgetConfigHomepageSetting;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSetting">DiscoveryEngineWidgetConfigHomepageSetting</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DiscoveryEngineWidgetConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeouts">DiscoveryEngineWidgetConfigTimeouts</a>

---

##### `uiBrandingInput`<sup>Optional</sup> <a name="uiBrandingInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.uiBrandingInput"></a>

```typescript
public readonly uiBrandingInput: DiscoveryEngineWidgetConfigUiBranding;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBranding">DiscoveryEngineWidgetConfigUiBranding</a>

---

##### `uiSettingsInput`<sup>Optional</sup> <a name="uiSettingsInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.uiSettingsInput"></a>

```typescript
public readonly uiSettingsInput: DiscoveryEngineWidgetConfigUiSettings;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings">DiscoveryEngineWidgetConfigUiSettings</a>

---

##### `widgetConfigIdInput`<sup>Optional</sup> <a name="widgetConfigIdInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.widgetConfigIdInput"></a>

```typescript
public readonly widgetConfigIdInput: string;
```

- *Type:* string

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.collectionId"></a>

```typescript
public readonly collectionId: string;
```

- *Type:* string

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.engineId"></a>

```typescript
public readonly engineId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `widgetConfigId`<sup>Required</sup> <a name="widgetConfigId" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.widgetConfigId"></a>

```typescript
public readonly widgetConfigId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DiscoveryEngineWidgetConfigAccessSettings <a name="DiscoveryEngineWidgetConfigAccessSettings" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings.Initializer"></a>

```typescript
import { discoveryEngineWidgetConfig } from '@cdktn/provider-google'

const discoveryEngineWidgetConfigAccessSettings: discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings.property.allowlistedDomains">allowlistedDomains</a></code> | <code>string[]</code> | List of domains that are allowed to integrate the search widget. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings.property.allowPublicAccess">allowPublicAccess</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether public unauthenticated access is allowed. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings.property.enableWebApp">enableWebApp</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether web app access is enabled. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings.property.languageCode">languageCode</a></code> | <code>string</code> | Language code for user interface. Use language tags defined by [BCP47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). If unset, the default language code is "en-US". |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings.property.workforceIdentityPoolProvider">workforceIdentityPoolProvider</a></code> | <code>string</code> | The workforce identity pool provider used to access the widget. |

---

##### `allowlistedDomains`<sup>Optional</sup> <a name="allowlistedDomains" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings.property.allowlistedDomains"></a>

```typescript
public readonly allowlistedDomains: string[];
```

- *Type:* string[]

List of domains that are allowed to integrate the search widget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#allowlisted_domains DiscoveryEngineWidgetConfig#allowlisted_domains}

---

##### `allowPublicAccess`<sup>Optional</sup> <a name="allowPublicAccess" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings.property.allowPublicAccess"></a>

```typescript
public readonly allowPublicAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether public unauthenticated access is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#allow_public_access DiscoveryEngineWidgetConfig#allow_public_access}

---

##### `enableWebApp`<sup>Optional</sup> <a name="enableWebApp" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings.property.enableWebApp"></a>

```typescript
public readonly enableWebApp: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether web app access is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#enable_web_app DiscoveryEngineWidgetConfig#enable_web_app}

---

##### `languageCode`<sup>Optional</sup> <a name="languageCode" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

Language code for user interface. Use language tags defined by [BCP47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). If unset, the default language code is "en-US".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#language_code DiscoveryEngineWidgetConfig#language_code}

---

##### `workforceIdentityPoolProvider`<sup>Optional</sup> <a name="workforceIdentityPoolProvider" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings.property.workforceIdentityPoolProvider"></a>

```typescript
public readonly workforceIdentityPoolProvider: string;
```

- *Type:* string

The workforce identity pool provider used to access the widget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#workforce_identity_pool_provider DiscoveryEngineWidgetConfig#workforce_identity_pool_provider}

---

### DiscoveryEngineWidgetConfigConfig <a name="DiscoveryEngineWidgetConfigConfig" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.Initializer"></a>

```typescript
import { discoveryEngineWidgetConfig } from '@cdktn/provider-google'

const discoveryEngineWidgetConfigConfig: discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.engineId">engineId</a></code> | <code>string</code> | The engine ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.location">location</a></code> | <code>string</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.accessSettings">accessSettings</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings">DiscoveryEngineWidgetConfigAccessSettings</a></code> | access_settings block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.collectionId">collectionId</a></code> | <code>string</code> | The collection ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.homepageSetting">homepageSetting</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSetting">DiscoveryEngineWidgetConfigHomepageSetting</a></code> | homepage_setting block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#id DiscoveryEngineWidgetConfig#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#project DiscoveryEngineWidgetConfig#project}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeouts">DiscoveryEngineWidgetConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.uiBranding">uiBranding</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBranding">DiscoveryEngineWidgetConfigUiBranding</a></code> | ui_branding block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.uiSettings">uiSettings</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings">DiscoveryEngineWidgetConfigUiSettings</a></code> | ui_settings block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.widgetConfigId">widgetConfigId</a></code> | <code>string</code> | The unique ID to use for the WidgetConfig. Currently only accepts "default_search_widget_config". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.engineId"></a>

```typescript
public readonly engineId: string;
```

- *Type:* string

The engine ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#engine_id DiscoveryEngineWidgetConfig#engine_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#location DiscoveryEngineWidgetConfig#location}

---

##### `accessSettings`<sup>Optional</sup> <a name="accessSettings" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.accessSettings"></a>

```typescript
public readonly accessSettings: DiscoveryEngineWidgetConfigAccessSettings;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings">DiscoveryEngineWidgetConfigAccessSettings</a>

access_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#access_settings DiscoveryEngineWidgetConfig#access_settings}

---

##### `collectionId`<sup>Optional</sup> <a name="collectionId" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.collectionId"></a>

```typescript
public readonly collectionId: string;
```

- *Type:* string

The collection ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#collection_id DiscoveryEngineWidgetConfig#collection_id}

---

##### `homepageSetting`<sup>Optional</sup> <a name="homepageSetting" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.homepageSetting"></a>

```typescript
public readonly homepageSetting: DiscoveryEngineWidgetConfigHomepageSetting;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSetting">DiscoveryEngineWidgetConfigHomepageSetting</a>

homepage_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#homepage_setting DiscoveryEngineWidgetConfig#homepage_setting}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#id DiscoveryEngineWidgetConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#project DiscoveryEngineWidgetConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DiscoveryEngineWidgetConfigTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeouts">DiscoveryEngineWidgetConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#timeouts DiscoveryEngineWidgetConfig#timeouts}

---

##### `uiBranding`<sup>Optional</sup> <a name="uiBranding" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.uiBranding"></a>

```typescript
public readonly uiBranding: DiscoveryEngineWidgetConfigUiBranding;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBranding">DiscoveryEngineWidgetConfigUiBranding</a>

ui_branding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#ui_branding DiscoveryEngineWidgetConfig#ui_branding}

---

##### `uiSettings`<sup>Optional</sup> <a name="uiSettings" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.uiSettings"></a>

```typescript
public readonly uiSettings: DiscoveryEngineWidgetConfigUiSettings;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings">DiscoveryEngineWidgetConfigUiSettings</a>

ui_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#ui_settings DiscoveryEngineWidgetConfig#ui_settings}

---

##### `widgetConfigId`<sup>Optional</sup> <a name="widgetConfigId" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.widgetConfigId"></a>

```typescript
public readonly widgetConfigId: string;
```

- *Type:* string

The unique ID to use for the WidgetConfig. Currently only accepts "default_search_widget_config".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#widget_config_id DiscoveryEngineWidgetConfig#widget_config_id}

---

### DiscoveryEngineWidgetConfigHomepageSetting <a name="DiscoveryEngineWidgetConfigHomepageSetting" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSetting.Initializer"></a>

```typescript
import { discoveryEngineWidgetConfig } from '@cdktn/provider-google'

const discoveryEngineWidgetConfigHomepageSetting: discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSetting = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSetting.property.shortcuts">shortcuts</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcuts">DiscoveryEngineWidgetConfigHomepageSettingShortcuts</a>[]</code> | shortcuts block. |

---

##### `shortcuts`<sup>Optional</sup> <a name="shortcuts" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSetting.property.shortcuts"></a>

```typescript
public readonly shortcuts: IResolvable | DiscoveryEngineWidgetConfigHomepageSettingShortcuts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcuts">DiscoveryEngineWidgetConfigHomepageSettingShortcuts</a>[]

shortcuts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#shortcuts DiscoveryEngineWidgetConfig#shortcuts}

---

### DiscoveryEngineWidgetConfigHomepageSettingShortcuts <a name="DiscoveryEngineWidgetConfigHomepageSettingShortcuts" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcuts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcuts.Initializer"></a>

```typescript
import { discoveryEngineWidgetConfig } from '@cdktn/provider-google'

const discoveryEngineWidgetConfigHomepageSettingShortcuts: discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcuts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcuts.property.destinationUri">destinationUri</a></code> | <code>string</code> | Destination URL of shortcut. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcuts.property.icon">icon</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon">DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon</a></code> | icon block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcuts.property.title">title</a></code> | <code>string</code> | Title of the shortcut. |

---

##### `destinationUri`<sup>Optional</sup> <a name="destinationUri" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcuts.property.destinationUri"></a>

```typescript
public readonly destinationUri: string;
```

- *Type:* string

Destination URL of shortcut.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#destination_uri DiscoveryEngineWidgetConfig#destination_uri}

---

##### `icon`<sup>Optional</sup> <a name="icon" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcuts.property.icon"></a>

```typescript
public readonly icon: DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon">DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon</a>

icon block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#icon DiscoveryEngineWidgetConfig#icon}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcuts.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Title of the shortcut.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#title DiscoveryEngineWidgetConfig#title}

---

### DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon <a name="DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon.Initializer"></a>

```typescript
import { discoveryEngineWidgetConfig } from '@cdktn/provider-google'

const discoveryEngineWidgetConfigHomepageSettingShortcutsIcon: discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon.property.url">url</a></code> | <code>string</code> | Image URL. |

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Image URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#url DiscoveryEngineWidgetConfig#url}

---

### DiscoveryEngineWidgetConfigTimeouts <a name="DiscoveryEngineWidgetConfigTimeouts" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeouts.Initializer"></a>

```typescript
import { discoveryEngineWidgetConfig } from '@cdktn/provider-google'

const discoveryEngineWidgetConfigTimeouts: discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#create DiscoveryEngineWidgetConfig#create}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#delete DiscoveryEngineWidgetConfig#delete}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#update DiscoveryEngineWidgetConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#create DiscoveryEngineWidgetConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#delete DiscoveryEngineWidgetConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#update DiscoveryEngineWidgetConfig#update}.

---

### DiscoveryEngineWidgetConfigUiBranding <a name="DiscoveryEngineWidgetConfigUiBranding" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBranding"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBranding.Initializer"></a>

```typescript
import { discoveryEngineWidgetConfig } from '@cdktn/provider-google'

const discoveryEngineWidgetConfigUiBranding: discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBranding = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBranding.property.logo">logo</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogo">DiscoveryEngineWidgetConfigUiBrandingLogo</a></code> | logo block. |

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBranding.property.logo"></a>

```typescript
public readonly logo: DiscoveryEngineWidgetConfigUiBrandingLogo;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogo">DiscoveryEngineWidgetConfigUiBrandingLogo</a>

logo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#logo DiscoveryEngineWidgetConfig#logo}

---

### DiscoveryEngineWidgetConfigUiBrandingLogo <a name="DiscoveryEngineWidgetConfigUiBrandingLogo" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogo.Initializer"></a>

```typescript
import { discoveryEngineWidgetConfig } from '@cdktn/provider-google'

const discoveryEngineWidgetConfigUiBrandingLogo: discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogo.property.url">url</a></code> | <code>string</code> | Image URL. |

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogo.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Image URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#url DiscoveryEngineWidgetConfig#url}

---

### DiscoveryEngineWidgetConfigUiSettings <a name="DiscoveryEngineWidgetConfigUiSettings" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.Initializer"></a>

```typescript
import { discoveryEngineWidgetConfig } from '@cdktn/provider-google'

const discoveryEngineWidgetConfigUiSettings: discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.dataStoreUiConfigs">dataStoreUiConfigs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs</a>[]</code> | data_store_ui_configs block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.defaultSearchRequestOrderBy">defaultSearchRequestOrderBy</a></code> | <code>string</code> | The default ordering for search results if specified. Used to set SearchRequest#orderBy on applicable requests. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.disableUserEventsCollection">disableUserEventsCollection</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set to true, the widget will not collect user events. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.enableAutocomplete">enableAutocomplete</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether or not to enable autocomplete. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.enableCreateAgentButton">enableCreateAgentButton</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set to true, the widget will enable the create agent button. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.enablePeopleSearch">enablePeopleSearch</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set to true, the widget will enable people search. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.enableQualityFeedback">enableQualityFeedback</a></code> | <code>boolean \| cdktn.IResolvable</code> | Turn on or off collecting the search result quality feedback from end users. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.enableSafeSearch">enableSafeSearch</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to enable safe search. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.enableSearchAsYouType">enableSearchAsYouType</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to enable search-as-you-type behavior for the search widget. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.enableVisualContentSummary">enableVisualContentSummary</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set to true, the widget will enable visual content summary on applicable search requests. Only used by healthcare search. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.generativeAnswerConfig">generativeAnswerConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig">DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig</a></code> | generative_answer_config block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.interactionType">interactionType</a></code> | <code>string</code> | Describes widget (or web app) interaction type Possible values: ["SEARCH_ONLY", "SEARCH_WITH_ANSWER", "SEARCH_WITH_FOLLOW_UPS"]. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.resultDescriptionType">resultDescriptionType</a></code> | <code>string</code> | Controls whether result extract is display and how (snippet or extractive answer). |

---

##### `dataStoreUiConfigs`<sup>Optional</sup> <a name="dataStoreUiConfigs" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.dataStoreUiConfigs"></a>

```typescript
public readonly dataStoreUiConfigs: IResolvable | DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs</a>[]

data_store_ui_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#data_store_ui_configs DiscoveryEngineWidgetConfig#data_store_ui_configs}

---

##### `defaultSearchRequestOrderBy`<sup>Optional</sup> <a name="defaultSearchRequestOrderBy" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.defaultSearchRequestOrderBy"></a>

```typescript
public readonly defaultSearchRequestOrderBy: string;
```

- *Type:* string

The default ordering for search results if specified. Used to set SearchRequest#orderBy on applicable requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#default_search_request_order_by DiscoveryEngineWidgetConfig#default_search_request_order_by}

---

##### `disableUserEventsCollection`<sup>Optional</sup> <a name="disableUserEventsCollection" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.disableUserEventsCollection"></a>

```typescript
public readonly disableUserEventsCollection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set to true, the widget will not collect user events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#disable_user_events_collection DiscoveryEngineWidgetConfig#disable_user_events_collection}

---

##### `enableAutocomplete`<sup>Optional</sup> <a name="enableAutocomplete" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.enableAutocomplete"></a>

```typescript
public readonly enableAutocomplete: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether or not to enable autocomplete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#enable_autocomplete DiscoveryEngineWidgetConfig#enable_autocomplete}

---

##### `enableCreateAgentButton`<sup>Optional</sup> <a name="enableCreateAgentButton" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.enableCreateAgentButton"></a>

```typescript
public readonly enableCreateAgentButton: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set to true, the widget will enable the create agent button.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#enable_create_agent_button DiscoveryEngineWidgetConfig#enable_create_agent_button}

---

##### `enablePeopleSearch`<sup>Optional</sup> <a name="enablePeopleSearch" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.enablePeopleSearch"></a>

```typescript
public readonly enablePeopleSearch: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set to true, the widget will enable people search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#enable_people_search DiscoveryEngineWidgetConfig#enable_people_search}

---

##### `enableQualityFeedback`<sup>Optional</sup> <a name="enableQualityFeedback" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.enableQualityFeedback"></a>

```typescript
public readonly enableQualityFeedback: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Turn on or off collecting the search result quality feedback from end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#enable_quality_feedback DiscoveryEngineWidgetConfig#enable_quality_feedback}

---

##### `enableSafeSearch`<sup>Optional</sup> <a name="enableSafeSearch" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.enableSafeSearch"></a>

```typescript
public readonly enableSafeSearch: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to enable safe search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#enable_safe_search DiscoveryEngineWidgetConfig#enable_safe_search}

---

##### `enableSearchAsYouType`<sup>Optional</sup> <a name="enableSearchAsYouType" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.enableSearchAsYouType"></a>

```typescript
public readonly enableSearchAsYouType: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to enable search-as-you-type behavior for the search widget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#enable_search_as_you_type DiscoveryEngineWidgetConfig#enable_search_as_you_type}

---

##### `enableVisualContentSummary`<sup>Optional</sup> <a name="enableVisualContentSummary" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.enableVisualContentSummary"></a>

```typescript
public readonly enableVisualContentSummary: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set to true, the widget will enable visual content summary on applicable search requests. Only used by healthcare search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#enable_visual_content_summary DiscoveryEngineWidgetConfig#enable_visual_content_summary}

---

##### `generativeAnswerConfig`<sup>Optional</sup> <a name="generativeAnswerConfig" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.generativeAnswerConfig"></a>

```typescript
public readonly generativeAnswerConfig: DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig">DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig</a>

generative_answer_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#generative_answer_config DiscoveryEngineWidgetConfig#generative_answer_config}

---

##### `interactionType`<sup>Optional</sup> <a name="interactionType" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.interactionType"></a>

```typescript
public readonly interactionType: string;
```

- *Type:* string

Describes widget (or web app) interaction type Possible values: ["SEARCH_ONLY", "SEARCH_WITH_ANSWER", "SEARCH_WITH_FOLLOW_UPS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#interaction_type DiscoveryEngineWidgetConfig#interaction_type}

---

##### `resultDescriptionType`<sup>Optional</sup> <a name="resultDescriptionType" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.resultDescriptionType"></a>

```typescript
public readonly resultDescriptionType: string;
```

- *Type:* string

Controls whether result extract is display and how (snippet or extractive answer).

Default to no result if unspecified. Possible values: ["SNIPPET", "EXTRACTIVE_ANSWER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#result_description_type DiscoveryEngineWidgetConfig#result_description_type}

---

### DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs <a name="DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs.Initializer"></a>

```typescript
import { discoveryEngineWidgetConfig } from '@cdktn/provider-google'

const discoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs: discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs.property.facetField">facetField</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField</a>[]</code> | facet_field block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs.property.fieldsUiComponentsMap">fieldsUiComponentsMap</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap</a>[]</code> | fields_ui_components_map block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs.property.name">name</a></code> | <code>string</code> | The name of the data store. |

---

##### `facetField`<sup>Optional</sup> <a name="facetField" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs.property.facetField"></a>

```typescript
public readonly facetField: IResolvable | DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField</a>[]

facet_field block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#facet_field DiscoveryEngineWidgetConfig#facet_field}

---

##### `fieldsUiComponentsMap`<sup>Optional</sup> <a name="fieldsUiComponentsMap" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs.property.fieldsUiComponentsMap"></a>

```typescript
public readonly fieldsUiComponentsMap: IResolvable | DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap</a>[]

fields_ui_components_map block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#fields_ui_components_map DiscoveryEngineWidgetConfig#fields_ui_components_map}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the data store.

It should be data store resource name. Format:
'projects/{project}/locations/{location}/collections/{collectionId}/dataStores/{dataStoreId}'.
For APIs under 'WidgetService', such as [WidgetService.LookUpWidgetConfig][],
the project number and location part is erased in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#name DiscoveryEngineWidgetConfig#name}

---

### DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField <a name="DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField.Initializer"></a>

```typescript
import { discoveryEngineWidgetConfig } from '@cdktn/provider-google'

const discoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField: discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField.property.field">field</a></code> | <code>string</code> | Registered field name. The format is 'field.abc'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField.property.displayName">displayName</a></code> | <code>string</code> | The field name that end users will see. |

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

Registered field name. The format is 'field.abc'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#field DiscoveryEngineWidgetConfig#field}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The field name that end users will see.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#display_name DiscoveryEngineWidgetConfig#display_name}

---

### DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap <a name="DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap.Initializer"></a>

```typescript
import { discoveryEngineWidgetConfig } from '@cdktn/provider-google'

const discoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap: discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap.property.field">field</a></code> | <code>string</code> | Registered field name. The format is 'field.abc'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap.property.uiComponent">uiComponent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#ui_component DiscoveryEngineWidgetConfig#ui_component}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap.property.deviceVisibility">deviceVisibility</a></code> | <code>string[]</code> | Possible values: ["MOBILE", "DESKTOP"]. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap.property.displayTemplate">displayTemplate</a></code> | <code>string</code> | The template to customize how the field is displayed. |

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

Registered field name. The format is 'field.abc'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#field DiscoveryEngineWidgetConfig#field}

---

##### `uiComponent`<sup>Required</sup> <a name="uiComponent" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap.property.uiComponent"></a>

```typescript
public readonly uiComponent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#ui_component DiscoveryEngineWidgetConfig#ui_component}.

---

##### `deviceVisibility`<sup>Optional</sup> <a name="deviceVisibility" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap.property.deviceVisibility"></a>

```typescript
public readonly deviceVisibility: string[];
```

- *Type:* string[]

Possible values: ["MOBILE", "DESKTOP"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#device_visibility DiscoveryEngineWidgetConfig#device_visibility}

---

##### `displayTemplate`<sup>Optional</sup> <a name="displayTemplate" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap.property.displayTemplate"></a>

```typescript
public readonly displayTemplate: string;
```

- *Type:* string

The template to customize how the field is displayed.

An example value would be a string that looks like: "Price: {value}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#display_template DiscoveryEngineWidgetConfig#display_template}

---

### DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig <a name="DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.Initializer"></a>

```typescript
import { discoveryEngineWidgetConfig } from '@cdktn/provider-google'

const discoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig: discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.disableRelatedQuestions">disableRelatedQuestions</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether generated answer contains suggested related questions. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.ignoreAdversarialQuery">ignoreAdversarialQuery</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether to filter out queries that are adversarial. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.ignoreLowRelevantContent">ignoreLowRelevantContent</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether to filter out queries that are not relevant to the content. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.ignoreNonAnswerSeekingQuery">ignoreNonAnswerSeekingQuery</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether to filter out queries that are not answer-seeking. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.imageSource">imageSource</a></code> | <code>string</code> | Source of image returned in the answer. Possible values: ["ALL_AVAILABLE_SOURCES", "CORPUS_IMAGE_ONLY", "FIGURE_GENERATION_ONLY"]. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.languageCode">languageCode</a></code> | <code>string</code> | Language code for Summary. Use language tags defined by [BCP47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Note: This is an experimental feature. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.maxRephraseSteps">maxRephraseSteps</a></code> | <code>number</code> | Max rephrase steps. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.modelPromptPreamble">modelPromptPreamble</a></code> | <code>string</code> | Text at the beginning of the prompt that instructs the model that generates the answer. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.modelVersion">modelVersion</a></code> | <code>string</code> | The model version used to generate the answer. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.resultCount">resultCount</a></code> | <code>number</code> | The number of top results to generate the answer from. Up to 10. |

---

##### `disableRelatedQuestions`<sup>Optional</sup> <a name="disableRelatedQuestions" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.disableRelatedQuestions"></a>

```typescript
public readonly disableRelatedQuestions: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether generated answer contains suggested related questions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#disable_related_questions DiscoveryEngineWidgetConfig#disable_related_questions}

---

##### `ignoreAdversarialQuery`<sup>Optional</sup> <a name="ignoreAdversarialQuery" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.ignoreAdversarialQuery"></a>

```typescript
public readonly ignoreAdversarialQuery: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether to filter out queries that are adversarial.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#ignore_adversarial_query DiscoveryEngineWidgetConfig#ignore_adversarial_query}

---

##### `ignoreLowRelevantContent`<sup>Optional</sup> <a name="ignoreLowRelevantContent" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.ignoreLowRelevantContent"></a>

```typescript
public readonly ignoreLowRelevantContent: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether to filter out queries that are not relevant to the content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#ignore_low_relevant_content DiscoveryEngineWidgetConfig#ignore_low_relevant_content}

---

##### `ignoreNonAnswerSeekingQuery`<sup>Optional</sup> <a name="ignoreNonAnswerSeekingQuery" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.ignoreNonAnswerSeekingQuery"></a>

```typescript
public readonly ignoreNonAnswerSeekingQuery: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether to filter out queries that are not answer-seeking.

The default value is 'false'. No answer is returned if the search query
is classified as a non-answer seeking query.
If this field is set to 'true', we skip generating answers for
non-answer seeking queries and return fallback messages instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#ignore_non_answer_seeking_query DiscoveryEngineWidgetConfig#ignore_non_answer_seeking_query}

---

##### `imageSource`<sup>Optional</sup> <a name="imageSource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.imageSource"></a>

```typescript
public readonly imageSource: string;
```

- *Type:* string

Source of image returned in the answer. Possible values: ["ALL_AVAILABLE_SOURCES", "CORPUS_IMAGE_ONLY", "FIGURE_GENERATION_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#image_source DiscoveryEngineWidgetConfig#image_source}

---

##### `languageCode`<sup>Optional</sup> <a name="languageCode" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

Language code for Summary. Use language tags defined by [BCP47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Note: This is an experimental feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#language_code DiscoveryEngineWidgetConfig#language_code}

---

##### `maxRephraseSteps`<sup>Optional</sup> <a name="maxRephraseSteps" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.maxRephraseSteps"></a>

```typescript
public readonly maxRephraseSteps: number;
```

- *Type:* number

Max rephrase steps.

The max number is 5 steps. If not set or
set to < 1, it will be set to 1 by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#max_rephrase_steps DiscoveryEngineWidgetConfig#max_rephrase_steps}

---

##### `modelPromptPreamble`<sup>Optional</sup> <a name="modelPromptPreamble" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.modelPromptPreamble"></a>

```typescript
public readonly modelPromptPreamble: string;
```

- *Type:* string

Text at the beginning of the prompt that instructs the model that generates the answer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#model_prompt_preamble DiscoveryEngineWidgetConfig#model_prompt_preamble}

---

##### `modelVersion`<sup>Optional</sup> <a name="modelVersion" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.modelVersion"></a>

```typescript
public readonly modelVersion: string;
```

- *Type:* string

The model version used to generate the answer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#model_version DiscoveryEngineWidgetConfig#model_version}

---

##### `resultCount`<sup>Optional</sup> <a name="resultCount" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.resultCount"></a>

```typescript
public readonly resultCount: number;
```

- *Type:* number

The number of top results to generate the answer from. Up to 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_widget_config#result_count DiscoveryEngineWidgetConfig#result_count}

---

## Classes <a name="Classes" id="Classes"></a>

### DiscoveryEngineWidgetConfigAccessSettingsOutputReference <a name="DiscoveryEngineWidgetConfigAccessSettingsOutputReference" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.Initializer"></a>

```typescript
import { discoveryEngineWidgetConfig } from '@cdktn/provider-google'

new discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.resetAllowlistedDomains">resetAllowlistedDomains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.resetAllowPublicAccess">resetAllowPublicAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.resetEnableWebApp">resetEnableWebApp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.resetLanguageCode">resetLanguageCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.resetWorkforceIdentityPoolProvider">resetWorkforceIdentityPoolProvider</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowlistedDomains` <a name="resetAllowlistedDomains" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.resetAllowlistedDomains"></a>

```typescript
public resetAllowlistedDomains(): void
```

##### `resetAllowPublicAccess` <a name="resetAllowPublicAccess" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.resetAllowPublicAccess"></a>

```typescript
public resetAllowPublicAccess(): void
```

##### `resetEnableWebApp` <a name="resetEnableWebApp" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.resetEnableWebApp"></a>

```typescript
public resetEnableWebApp(): void
```

##### `resetLanguageCode` <a name="resetLanguageCode" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.resetLanguageCode"></a>

```typescript
public resetLanguageCode(): void
```

##### `resetWorkforceIdentityPoolProvider` <a name="resetWorkforceIdentityPoolProvider" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.resetWorkforceIdentityPoolProvider"></a>

```typescript
public resetWorkforceIdentityPoolProvider(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.allowlistedDomainsInput">allowlistedDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.allowPublicAccessInput">allowPublicAccessInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.enableWebAppInput">enableWebAppInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.languageCodeInput">languageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.workforceIdentityPoolProviderInput">workforceIdentityPoolProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.allowlistedDomains">allowlistedDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.allowPublicAccess">allowPublicAccess</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.enableWebApp">enableWebApp</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.languageCode">languageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.workforceIdentityPoolProvider">workforceIdentityPoolProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings">DiscoveryEngineWidgetConfigAccessSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowlistedDomainsInput`<sup>Optional</sup> <a name="allowlistedDomainsInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.allowlistedDomainsInput"></a>

```typescript
public readonly allowlistedDomainsInput: string[];
```

- *Type:* string[]

---

##### `allowPublicAccessInput`<sup>Optional</sup> <a name="allowPublicAccessInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.allowPublicAccessInput"></a>

```typescript
public readonly allowPublicAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableWebAppInput`<sup>Optional</sup> <a name="enableWebAppInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.enableWebAppInput"></a>

```typescript
public readonly enableWebAppInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.languageCodeInput"></a>

```typescript
public readonly languageCodeInput: string;
```

- *Type:* string

---

##### `workforceIdentityPoolProviderInput`<sup>Optional</sup> <a name="workforceIdentityPoolProviderInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.workforceIdentityPoolProviderInput"></a>

```typescript
public readonly workforceIdentityPoolProviderInput: string;
```

- *Type:* string

---

##### `allowlistedDomains`<sup>Required</sup> <a name="allowlistedDomains" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.allowlistedDomains"></a>

```typescript
public readonly allowlistedDomains: string[];
```

- *Type:* string[]

---

##### `allowPublicAccess`<sup>Required</sup> <a name="allowPublicAccess" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.allowPublicAccess"></a>

```typescript
public readonly allowPublicAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableWebApp`<sup>Required</sup> <a name="enableWebApp" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.enableWebApp"></a>

```typescript
public readonly enableWebApp: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

---

##### `workforceIdentityPoolProvider`<sup>Required</sup> <a name="workforceIdentityPoolProvider" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.workforceIdentityPoolProvider"></a>

```typescript
public readonly workforceIdentityPoolProvider: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DiscoveryEngineWidgetConfigAccessSettings;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings">DiscoveryEngineWidgetConfigAccessSettings</a>

---


### DiscoveryEngineWidgetConfigHomepageSettingOutputReference <a name="DiscoveryEngineWidgetConfigHomepageSettingOutputReference" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.Initializer"></a>

```typescript
import { discoveryEngineWidgetConfig } from '@cdktn/provider-google'

new discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.putShortcuts">putShortcuts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.resetShortcuts">resetShortcuts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putShortcuts` <a name="putShortcuts" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.putShortcuts"></a>

```typescript
public putShortcuts(value: IResolvable | DiscoveryEngineWidgetConfigHomepageSettingShortcuts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.putShortcuts.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcuts">DiscoveryEngineWidgetConfigHomepageSettingShortcuts</a>[]

---

##### `resetShortcuts` <a name="resetShortcuts" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.resetShortcuts"></a>

```typescript
public resetShortcuts(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.property.shortcuts">shortcuts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList">DiscoveryEngineWidgetConfigHomepageSettingShortcutsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.property.shortcutsInput">shortcutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcuts">DiscoveryEngineWidgetConfigHomepageSettingShortcuts</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSetting">DiscoveryEngineWidgetConfigHomepageSetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `shortcuts`<sup>Required</sup> <a name="shortcuts" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.property.shortcuts"></a>

```typescript
public readonly shortcuts: DiscoveryEngineWidgetConfigHomepageSettingShortcutsList;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList">DiscoveryEngineWidgetConfigHomepageSettingShortcutsList</a>

---

##### `shortcutsInput`<sup>Optional</sup> <a name="shortcutsInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.property.shortcutsInput"></a>

```typescript
public readonly shortcutsInput: IResolvable | DiscoveryEngineWidgetConfigHomepageSettingShortcuts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcuts">DiscoveryEngineWidgetConfigHomepageSettingShortcuts</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DiscoveryEngineWidgetConfigHomepageSetting;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSetting">DiscoveryEngineWidgetConfigHomepageSetting</a>

---


### DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference <a name="DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.Initializer"></a>

```typescript
import { discoveryEngineWidgetConfig } from '@cdktn/provider-google'

new discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUrl` <a name="resetUrl" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.resetUrl"></a>

```typescript
public resetUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon">DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon">DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon</a>

---


### DiscoveryEngineWidgetConfigHomepageSettingShortcutsList <a name="DiscoveryEngineWidgetConfigHomepageSettingShortcutsList" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.Initializer"></a>

```typescript
import { discoveryEngineWidgetConfig } from '@cdktn/provider-google'

new discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.get"></a>

```typescript
public get(index: number): DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcuts">DiscoveryEngineWidgetConfigHomepageSettingShortcuts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DiscoveryEngineWidgetConfigHomepageSettingShortcuts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcuts">DiscoveryEngineWidgetConfigHomepageSettingShortcuts</a>[]

---


### DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference <a name="DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.Initializer"></a>

```typescript
import { discoveryEngineWidgetConfig } from '@cdktn/provider-google'

new discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.putIcon">putIcon</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.resetDestinationUri">resetDestinationUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.resetIcon">resetIcon</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIcon` <a name="putIcon" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.putIcon"></a>

```typescript
public putIcon(value: DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.putIcon.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon">DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon</a>

---

##### `resetDestinationUri` <a name="resetDestinationUri" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.resetDestinationUri"></a>

```typescript
public resetDestinationUri(): void
```

##### `resetIcon` <a name="resetIcon" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.resetIcon"></a>

```typescript
public resetIcon(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.icon">icon</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference">DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.destinationUriInput">destinationUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.iconInput">iconInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon">DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.destinationUri">destinationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcuts">DiscoveryEngineWidgetConfigHomepageSettingShortcuts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `icon`<sup>Required</sup> <a name="icon" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.icon"></a>

```typescript
public readonly icon: DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference">DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference</a>

---

##### `destinationUriInput`<sup>Optional</sup> <a name="destinationUriInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.destinationUriInput"></a>

```typescript
public readonly destinationUriInput: string;
```

- *Type:* string

---

##### `iconInput`<sup>Optional</sup> <a name="iconInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.iconInput"></a>

```typescript
public readonly iconInput: DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon">DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon</a>

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `destinationUri`<sup>Required</sup> <a name="destinationUri" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.destinationUri"></a>

```typescript
public readonly destinationUri: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DiscoveryEngineWidgetConfigHomepageSettingShortcuts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcuts">DiscoveryEngineWidgetConfigHomepageSettingShortcuts</a>

---


### DiscoveryEngineWidgetConfigTimeoutsOutputReference <a name="DiscoveryEngineWidgetConfigTimeoutsOutputReference" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { discoveryEngineWidgetConfig } from '@cdktn/provider-google'

new discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeouts">DiscoveryEngineWidgetConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DiscoveryEngineWidgetConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeouts">DiscoveryEngineWidgetConfigTimeouts</a>

---


### DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference <a name="DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.Initializer"></a>

```typescript
import { discoveryEngineWidgetConfig } from '@cdktn/provider-google'

new discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUrl` <a name="resetUrl" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.resetUrl"></a>

```typescript
public resetUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogo">DiscoveryEngineWidgetConfigUiBrandingLogo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DiscoveryEngineWidgetConfigUiBrandingLogo;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogo">DiscoveryEngineWidgetConfigUiBrandingLogo</a>

---


### DiscoveryEngineWidgetConfigUiBrandingOutputReference <a name="DiscoveryEngineWidgetConfigUiBrandingOutputReference" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.Initializer"></a>

```typescript
import { discoveryEngineWidgetConfig } from '@cdktn/provider-google'

new discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.putLogo">putLogo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.resetLogo">resetLogo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLogo` <a name="putLogo" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.putLogo"></a>

```typescript
public putLogo(value: DiscoveryEngineWidgetConfigUiBrandingLogo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.putLogo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogo">DiscoveryEngineWidgetConfigUiBrandingLogo</a>

---

##### `resetLogo` <a name="resetLogo" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.resetLogo"></a>

```typescript
public resetLogo(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.property.logo">logo</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference">DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.property.logoInput">logoInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogo">DiscoveryEngineWidgetConfigUiBrandingLogo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBranding">DiscoveryEngineWidgetConfigUiBranding</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logo`<sup>Required</sup> <a name="logo" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.property.logo"></a>

```typescript
public readonly logo: DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference">DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference</a>

---

##### `logoInput`<sup>Optional</sup> <a name="logoInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.property.logoInput"></a>

```typescript
public readonly logoInput: DiscoveryEngineWidgetConfigUiBrandingLogo;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogo">DiscoveryEngineWidgetConfigUiBrandingLogo</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DiscoveryEngineWidgetConfigUiBranding;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBranding">DiscoveryEngineWidgetConfigUiBranding</a>

---


### DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList <a name="DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.Initializer"></a>

```typescript
import { discoveryEngineWidgetConfig } from '@cdktn/provider-google'

new discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.get"></a>

```typescript
public get(index: number): DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField</a>[]

---


### DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference <a name="DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.Initializer"></a>

```typescript
import { discoveryEngineWidgetConfig } from '@cdktn/provider-google'

new discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.fieldInput">fieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.field">field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.fieldInput"></a>

```typescript
public readonly fieldInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField</a>

---


### DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList <a name="DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.Initializer"></a>

```typescript
import { discoveryEngineWidgetConfig } from '@cdktn/provider-google'

new discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.get"></a>

```typescript
public get(index: number): DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap</a>[]

---


### DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference <a name="DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.Initializer"></a>

```typescript
import { discoveryEngineWidgetConfig } from '@cdktn/provider-google'

new discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.resetDeviceVisibility">resetDeviceVisibility</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.resetDisplayTemplate">resetDisplayTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeviceVisibility` <a name="resetDeviceVisibility" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.resetDeviceVisibility"></a>

```typescript
public resetDeviceVisibility(): void
```

##### `resetDisplayTemplate` <a name="resetDisplayTemplate" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.resetDisplayTemplate"></a>

```typescript
public resetDisplayTemplate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.deviceVisibilityInput">deviceVisibilityInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.displayTemplateInput">displayTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.fieldInput">fieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.uiComponentInput">uiComponentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.deviceVisibility">deviceVisibility</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.displayTemplate">displayTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.field">field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.uiComponent">uiComponent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deviceVisibilityInput`<sup>Optional</sup> <a name="deviceVisibilityInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.deviceVisibilityInput"></a>

```typescript
public readonly deviceVisibilityInput: string[];
```

- *Type:* string[]

---

##### `displayTemplateInput`<sup>Optional</sup> <a name="displayTemplateInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.displayTemplateInput"></a>

```typescript
public readonly displayTemplateInput: string;
```

- *Type:* string

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.fieldInput"></a>

```typescript
public readonly fieldInput: string;
```

- *Type:* string

---

##### `uiComponentInput`<sup>Optional</sup> <a name="uiComponentInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.uiComponentInput"></a>

```typescript
public readonly uiComponentInput: string;
```

- *Type:* string

---

##### `deviceVisibility`<sup>Required</sup> <a name="deviceVisibility" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.deviceVisibility"></a>

```typescript
public readonly deviceVisibility: string[];
```

- *Type:* string[]

---

##### `displayTemplate`<sup>Required</sup> <a name="displayTemplate" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.displayTemplate"></a>

```typescript
public readonly displayTemplate: string;
```

- *Type:* string

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

---

##### `uiComponent`<sup>Required</sup> <a name="uiComponent" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.uiComponent"></a>

```typescript
public readonly uiComponent: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap</a>

---


### DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList <a name="DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.Initializer"></a>

```typescript
import { discoveryEngineWidgetConfig } from '@cdktn/provider-google'

new discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.get"></a>

```typescript
public get(index: number): DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs</a>[]

---


### DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference <a name="DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.Initializer"></a>

```typescript
import { discoveryEngineWidgetConfig } from '@cdktn/provider-google'

new discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.putFacetField">putFacetField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.putFieldsUiComponentsMap">putFieldsUiComponentsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.resetFacetField">resetFacetField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.resetFieldsUiComponentsMap">resetFieldsUiComponentsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFacetField` <a name="putFacetField" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.putFacetField"></a>

```typescript
public putFacetField(value: IResolvable | DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.putFacetField.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField</a>[]

---

##### `putFieldsUiComponentsMap` <a name="putFieldsUiComponentsMap" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.putFieldsUiComponentsMap"></a>

```typescript
public putFieldsUiComponentsMap(value: IResolvable | DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.putFieldsUiComponentsMap.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap</a>[]

---

##### `resetFacetField` <a name="resetFacetField" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.resetFacetField"></a>

```typescript
public resetFacetField(): void
```

##### `resetFieldsUiComponentsMap` <a name="resetFieldsUiComponentsMap" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.resetFieldsUiComponentsMap"></a>

```typescript
public resetFieldsUiComponentsMap(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.facetField">facetField</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.fieldsUiComponentsMap">fieldsUiComponentsMap</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.facetFieldInput">facetFieldInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.fieldsUiComponentsMapInput">fieldsUiComponentsMapInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `facetField`<sup>Required</sup> <a name="facetField" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.facetField"></a>

```typescript
public readonly facetField: DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList</a>

---

##### `fieldsUiComponentsMap`<sup>Required</sup> <a name="fieldsUiComponentsMap" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.fieldsUiComponentsMap"></a>

```typescript
public readonly fieldsUiComponentsMap: DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList</a>

---

##### `facetFieldInput`<sup>Optional</sup> <a name="facetFieldInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.facetFieldInput"></a>

```typescript
public readonly facetFieldInput: IResolvable | DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField</a>[]

---

##### `fieldsUiComponentsMapInput`<sup>Optional</sup> <a name="fieldsUiComponentsMapInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.fieldsUiComponentsMapInput"></a>

```typescript
public readonly fieldsUiComponentsMapInput: IResolvable | DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs</a>

---


### DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference <a name="DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.Initializer"></a>

```typescript
import { discoveryEngineWidgetConfig } from '@cdktn/provider-google'

new discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetDisableRelatedQuestions">resetDisableRelatedQuestions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetIgnoreAdversarialQuery">resetIgnoreAdversarialQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetIgnoreLowRelevantContent">resetIgnoreLowRelevantContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetIgnoreNonAnswerSeekingQuery">resetIgnoreNonAnswerSeekingQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetImageSource">resetImageSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetLanguageCode">resetLanguageCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetMaxRephraseSteps">resetMaxRephraseSteps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetModelPromptPreamble">resetModelPromptPreamble</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetModelVersion">resetModelVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetResultCount">resetResultCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisableRelatedQuestions` <a name="resetDisableRelatedQuestions" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetDisableRelatedQuestions"></a>

```typescript
public resetDisableRelatedQuestions(): void
```

##### `resetIgnoreAdversarialQuery` <a name="resetIgnoreAdversarialQuery" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetIgnoreAdversarialQuery"></a>

```typescript
public resetIgnoreAdversarialQuery(): void
```

##### `resetIgnoreLowRelevantContent` <a name="resetIgnoreLowRelevantContent" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetIgnoreLowRelevantContent"></a>

```typescript
public resetIgnoreLowRelevantContent(): void
```

##### `resetIgnoreNonAnswerSeekingQuery` <a name="resetIgnoreNonAnswerSeekingQuery" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetIgnoreNonAnswerSeekingQuery"></a>

```typescript
public resetIgnoreNonAnswerSeekingQuery(): void
```

##### `resetImageSource` <a name="resetImageSource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetImageSource"></a>

```typescript
public resetImageSource(): void
```

##### `resetLanguageCode` <a name="resetLanguageCode" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetLanguageCode"></a>

```typescript
public resetLanguageCode(): void
```

##### `resetMaxRephraseSteps` <a name="resetMaxRephraseSteps" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetMaxRephraseSteps"></a>

```typescript
public resetMaxRephraseSteps(): void
```

##### `resetModelPromptPreamble` <a name="resetModelPromptPreamble" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetModelPromptPreamble"></a>

```typescript
public resetModelPromptPreamble(): void
```

##### `resetModelVersion` <a name="resetModelVersion" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetModelVersion"></a>

```typescript
public resetModelVersion(): void
```

##### `resetResultCount` <a name="resetResultCount" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetResultCount"></a>

```typescript
public resetResultCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.disableRelatedQuestionsInput">disableRelatedQuestionsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreAdversarialQueryInput">ignoreAdversarialQueryInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreLowRelevantContentInput">ignoreLowRelevantContentInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreNonAnswerSeekingQueryInput">ignoreNonAnswerSeekingQueryInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.imageSourceInput">imageSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.languageCodeInput">languageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.maxRephraseStepsInput">maxRephraseStepsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.modelPromptPreambleInput">modelPromptPreambleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.modelVersionInput">modelVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.resultCountInput">resultCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.disableRelatedQuestions">disableRelatedQuestions</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreAdversarialQuery">ignoreAdversarialQuery</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreLowRelevantContent">ignoreLowRelevantContent</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreNonAnswerSeekingQuery">ignoreNonAnswerSeekingQuery</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.imageSource">imageSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.languageCode">languageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.maxRephraseSteps">maxRephraseSteps</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.modelPromptPreamble">modelPromptPreamble</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.modelVersion">modelVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.resultCount">resultCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig">DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disableRelatedQuestionsInput`<sup>Optional</sup> <a name="disableRelatedQuestionsInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.disableRelatedQuestionsInput"></a>

```typescript
public readonly disableRelatedQuestionsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ignoreAdversarialQueryInput`<sup>Optional</sup> <a name="ignoreAdversarialQueryInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreAdversarialQueryInput"></a>

```typescript
public readonly ignoreAdversarialQueryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ignoreLowRelevantContentInput`<sup>Optional</sup> <a name="ignoreLowRelevantContentInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreLowRelevantContentInput"></a>

```typescript
public readonly ignoreLowRelevantContentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ignoreNonAnswerSeekingQueryInput`<sup>Optional</sup> <a name="ignoreNonAnswerSeekingQueryInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreNonAnswerSeekingQueryInput"></a>

```typescript
public readonly ignoreNonAnswerSeekingQueryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `imageSourceInput`<sup>Optional</sup> <a name="imageSourceInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.imageSourceInput"></a>

```typescript
public readonly imageSourceInput: string;
```

- *Type:* string

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.languageCodeInput"></a>

```typescript
public readonly languageCodeInput: string;
```

- *Type:* string

---

##### `maxRephraseStepsInput`<sup>Optional</sup> <a name="maxRephraseStepsInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.maxRephraseStepsInput"></a>

```typescript
public readonly maxRephraseStepsInput: number;
```

- *Type:* number

---

##### `modelPromptPreambleInput`<sup>Optional</sup> <a name="modelPromptPreambleInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.modelPromptPreambleInput"></a>

```typescript
public readonly modelPromptPreambleInput: string;
```

- *Type:* string

---

##### `modelVersionInput`<sup>Optional</sup> <a name="modelVersionInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.modelVersionInput"></a>

```typescript
public readonly modelVersionInput: string;
```

- *Type:* string

---

##### `resultCountInput`<sup>Optional</sup> <a name="resultCountInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.resultCountInput"></a>

```typescript
public readonly resultCountInput: number;
```

- *Type:* number

---

##### `disableRelatedQuestions`<sup>Required</sup> <a name="disableRelatedQuestions" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.disableRelatedQuestions"></a>

```typescript
public readonly disableRelatedQuestions: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ignoreAdversarialQuery`<sup>Required</sup> <a name="ignoreAdversarialQuery" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreAdversarialQuery"></a>

```typescript
public readonly ignoreAdversarialQuery: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ignoreLowRelevantContent`<sup>Required</sup> <a name="ignoreLowRelevantContent" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreLowRelevantContent"></a>

```typescript
public readonly ignoreLowRelevantContent: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ignoreNonAnswerSeekingQuery`<sup>Required</sup> <a name="ignoreNonAnswerSeekingQuery" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreNonAnswerSeekingQuery"></a>

```typescript
public readonly ignoreNonAnswerSeekingQuery: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `imageSource`<sup>Required</sup> <a name="imageSource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.imageSource"></a>

```typescript
public readonly imageSource: string;
```

- *Type:* string

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

---

##### `maxRephraseSteps`<sup>Required</sup> <a name="maxRephraseSteps" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.maxRephraseSteps"></a>

```typescript
public readonly maxRephraseSteps: number;
```

- *Type:* number

---

##### `modelPromptPreamble`<sup>Required</sup> <a name="modelPromptPreamble" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.modelPromptPreamble"></a>

```typescript
public readonly modelPromptPreamble: string;
```

- *Type:* string

---

##### `modelVersion`<sup>Required</sup> <a name="modelVersion" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.modelVersion"></a>

```typescript
public readonly modelVersion: string;
```

- *Type:* string

---

##### `resultCount`<sup>Required</sup> <a name="resultCount" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.resultCount"></a>

```typescript
public readonly resultCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig">DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig</a>

---


### DiscoveryEngineWidgetConfigUiSettingsOutputReference <a name="DiscoveryEngineWidgetConfigUiSettingsOutputReference" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.Initializer"></a>

```typescript
import { discoveryEngineWidgetConfig } from '@cdktn/provider-google'

new discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.putDataStoreUiConfigs">putDataStoreUiConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.putGenerativeAnswerConfig">putGenerativeAnswerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetDataStoreUiConfigs">resetDataStoreUiConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetDefaultSearchRequestOrderBy">resetDefaultSearchRequestOrderBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetDisableUserEventsCollection">resetDisableUserEventsCollection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableAutocomplete">resetEnableAutocomplete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableCreateAgentButton">resetEnableCreateAgentButton</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnablePeopleSearch">resetEnablePeopleSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableQualityFeedback">resetEnableQualityFeedback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableSafeSearch">resetEnableSafeSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableSearchAsYouType">resetEnableSearchAsYouType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableVisualContentSummary">resetEnableVisualContentSummary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetGenerativeAnswerConfig">resetGenerativeAnswerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetInteractionType">resetInteractionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetResultDescriptionType">resetResultDescriptionType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataStoreUiConfigs` <a name="putDataStoreUiConfigs" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.putDataStoreUiConfigs"></a>

```typescript
public putDataStoreUiConfigs(value: IResolvable | DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.putDataStoreUiConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs</a>[]

---

##### `putGenerativeAnswerConfig` <a name="putGenerativeAnswerConfig" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.putGenerativeAnswerConfig"></a>

```typescript
public putGenerativeAnswerConfig(value: DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.putGenerativeAnswerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig">DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig</a>

---

##### `resetDataStoreUiConfigs` <a name="resetDataStoreUiConfigs" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetDataStoreUiConfigs"></a>

```typescript
public resetDataStoreUiConfigs(): void
```

##### `resetDefaultSearchRequestOrderBy` <a name="resetDefaultSearchRequestOrderBy" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetDefaultSearchRequestOrderBy"></a>

```typescript
public resetDefaultSearchRequestOrderBy(): void
```

##### `resetDisableUserEventsCollection` <a name="resetDisableUserEventsCollection" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetDisableUserEventsCollection"></a>

```typescript
public resetDisableUserEventsCollection(): void
```

##### `resetEnableAutocomplete` <a name="resetEnableAutocomplete" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableAutocomplete"></a>

```typescript
public resetEnableAutocomplete(): void
```

##### `resetEnableCreateAgentButton` <a name="resetEnableCreateAgentButton" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableCreateAgentButton"></a>

```typescript
public resetEnableCreateAgentButton(): void
```

##### `resetEnablePeopleSearch` <a name="resetEnablePeopleSearch" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnablePeopleSearch"></a>

```typescript
public resetEnablePeopleSearch(): void
```

##### `resetEnableQualityFeedback` <a name="resetEnableQualityFeedback" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableQualityFeedback"></a>

```typescript
public resetEnableQualityFeedback(): void
```

##### `resetEnableSafeSearch` <a name="resetEnableSafeSearch" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableSafeSearch"></a>

```typescript
public resetEnableSafeSearch(): void
```

##### `resetEnableSearchAsYouType` <a name="resetEnableSearchAsYouType" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableSearchAsYouType"></a>

```typescript
public resetEnableSearchAsYouType(): void
```

##### `resetEnableVisualContentSummary` <a name="resetEnableVisualContentSummary" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableVisualContentSummary"></a>

```typescript
public resetEnableVisualContentSummary(): void
```

##### `resetGenerativeAnswerConfig` <a name="resetGenerativeAnswerConfig" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetGenerativeAnswerConfig"></a>

```typescript
public resetGenerativeAnswerConfig(): void
```

##### `resetInteractionType` <a name="resetInteractionType" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetInteractionType"></a>

```typescript
public resetInteractionType(): void
```

##### `resetResultDescriptionType` <a name="resetResultDescriptionType" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetResultDescriptionType"></a>

```typescript
public resetResultDescriptionType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.dataStoreUiConfigs">dataStoreUiConfigs</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.generativeAnswerConfig">generativeAnswerConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference">DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.dataStoreUiConfigsInput">dataStoreUiConfigsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.defaultSearchRequestOrderByInput">defaultSearchRequestOrderByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.disableUserEventsCollectionInput">disableUserEventsCollectionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableAutocompleteInput">enableAutocompleteInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableCreateAgentButtonInput">enableCreateAgentButtonInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enablePeopleSearchInput">enablePeopleSearchInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableQualityFeedbackInput">enableQualityFeedbackInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableSafeSearchInput">enableSafeSearchInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableSearchAsYouTypeInput">enableSearchAsYouTypeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableVisualContentSummaryInput">enableVisualContentSummaryInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.generativeAnswerConfigInput">generativeAnswerConfigInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig">DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.interactionTypeInput">interactionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.resultDescriptionTypeInput">resultDescriptionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.defaultSearchRequestOrderBy">defaultSearchRequestOrderBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.disableUserEventsCollection">disableUserEventsCollection</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableAutocomplete">enableAutocomplete</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableCreateAgentButton">enableCreateAgentButton</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enablePeopleSearch">enablePeopleSearch</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableQualityFeedback">enableQualityFeedback</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableSafeSearch">enableSafeSearch</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableSearchAsYouType">enableSearchAsYouType</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableVisualContentSummary">enableVisualContentSummary</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.interactionType">interactionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.resultDescriptionType">resultDescriptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings">DiscoveryEngineWidgetConfigUiSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataStoreUiConfigs`<sup>Required</sup> <a name="dataStoreUiConfigs" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.dataStoreUiConfigs"></a>

```typescript
public readonly dataStoreUiConfigs: DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList</a>

---

##### `generativeAnswerConfig`<sup>Required</sup> <a name="generativeAnswerConfig" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.generativeAnswerConfig"></a>

```typescript
public readonly generativeAnswerConfig: DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference">DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference</a>

---

##### `dataStoreUiConfigsInput`<sup>Optional</sup> <a name="dataStoreUiConfigsInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.dataStoreUiConfigsInput"></a>

```typescript
public readonly dataStoreUiConfigsInput: IResolvable | DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs</a>[]

---

##### `defaultSearchRequestOrderByInput`<sup>Optional</sup> <a name="defaultSearchRequestOrderByInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.defaultSearchRequestOrderByInput"></a>

```typescript
public readonly defaultSearchRequestOrderByInput: string;
```

- *Type:* string

---

##### `disableUserEventsCollectionInput`<sup>Optional</sup> <a name="disableUserEventsCollectionInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.disableUserEventsCollectionInput"></a>

```typescript
public readonly disableUserEventsCollectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableAutocompleteInput`<sup>Optional</sup> <a name="enableAutocompleteInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableAutocompleteInput"></a>

```typescript
public readonly enableAutocompleteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableCreateAgentButtonInput`<sup>Optional</sup> <a name="enableCreateAgentButtonInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableCreateAgentButtonInput"></a>

```typescript
public readonly enableCreateAgentButtonInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enablePeopleSearchInput`<sup>Optional</sup> <a name="enablePeopleSearchInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enablePeopleSearchInput"></a>

```typescript
public readonly enablePeopleSearchInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableQualityFeedbackInput`<sup>Optional</sup> <a name="enableQualityFeedbackInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableQualityFeedbackInput"></a>

```typescript
public readonly enableQualityFeedbackInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableSafeSearchInput`<sup>Optional</sup> <a name="enableSafeSearchInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableSafeSearchInput"></a>

```typescript
public readonly enableSafeSearchInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableSearchAsYouTypeInput`<sup>Optional</sup> <a name="enableSearchAsYouTypeInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableSearchAsYouTypeInput"></a>

```typescript
public readonly enableSearchAsYouTypeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableVisualContentSummaryInput`<sup>Optional</sup> <a name="enableVisualContentSummaryInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableVisualContentSummaryInput"></a>

```typescript
public readonly enableVisualContentSummaryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `generativeAnswerConfigInput`<sup>Optional</sup> <a name="generativeAnswerConfigInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.generativeAnswerConfigInput"></a>

```typescript
public readonly generativeAnswerConfigInput: DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig">DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig</a>

---

##### `interactionTypeInput`<sup>Optional</sup> <a name="interactionTypeInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.interactionTypeInput"></a>

```typescript
public readonly interactionTypeInput: string;
```

- *Type:* string

---

##### `resultDescriptionTypeInput`<sup>Optional</sup> <a name="resultDescriptionTypeInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.resultDescriptionTypeInput"></a>

```typescript
public readonly resultDescriptionTypeInput: string;
```

- *Type:* string

---

##### `defaultSearchRequestOrderBy`<sup>Required</sup> <a name="defaultSearchRequestOrderBy" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.defaultSearchRequestOrderBy"></a>

```typescript
public readonly defaultSearchRequestOrderBy: string;
```

- *Type:* string

---

##### `disableUserEventsCollection`<sup>Required</sup> <a name="disableUserEventsCollection" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.disableUserEventsCollection"></a>

```typescript
public readonly disableUserEventsCollection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableAutocomplete`<sup>Required</sup> <a name="enableAutocomplete" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableAutocomplete"></a>

```typescript
public readonly enableAutocomplete: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableCreateAgentButton`<sup>Required</sup> <a name="enableCreateAgentButton" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableCreateAgentButton"></a>

```typescript
public readonly enableCreateAgentButton: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enablePeopleSearch`<sup>Required</sup> <a name="enablePeopleSearch" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enablePeopleSearch"></a>

```typescript
public readonly enablePeopleSearch: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableQualityFeedback`<sup>Required</sup> <a name="enableQualityFeedback" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableQualityFeedback"></a>

```typescript
public readonly enableQualityFeedback: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableSafeSearch`<sup>Required</sup> <a name="enableSafeSearch" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableSafeSearch"></a>

```typescript
public readonly enableSafeSearch: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableSearchAsYouType`<sup>Required</sup> <a name="enableSearchAsYouType" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableSearchAsYouType"></a>

```typescript
public readonly enableSearchAsYouType: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableVisualContentSummary`<sup>Required</sup> <a name="enableVisualContentSummary" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableVisualContentSummary"></a>

```typescript
public readonly enableVisualContentSummary: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `interactionType`<sup>Required</sup> <a name="interactionType" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.interactionType"></a>

```typescript
public readonly interactionType: string;
```

- *Type:* string

---

##### `resultDescriptionType`<sup>Required</sup> <a name="resultDescriptionType" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.resultDescriptionType"></a>

```typescript
public readonly resultDescriptionType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DiscoveryEngineWidgetConfigUiSettings;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings">DiscoveryEngineWidgetConfigUiSettings</a>

---



