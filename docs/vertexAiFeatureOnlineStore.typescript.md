# `vertexAiFeatureOnlineStore` Submodule <a name="`vertexAiFeatureOnlineStore` Submodule" id="@cdktn/provider-google.vertexAiFeatureOnlineStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiFeatureOnlineStore <a name="VertexAiFeatureOnlineStore" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_feature_online_store google_vertex_ai_feature_online_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.Initializer"></a>

```typescript
import { vertexAiFeatureOnlineStore } from '@cdktn/provider-google'

new vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore(scope: Construct, id: string, config: VertexAiFeatureOnlineStoreConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig">VertexAiFeatureOnlineStoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig">VertexAiFeatureOnlineStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.putBigtable">putBigtable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.putDedicatedServingEndpoint">putDedicatedServingEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.putEncryptionSpec">putEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.putOptimized">putOptimized</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetBigtable">resetBigtable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetDedicatedServingEndpoint">resetDedicatedServingEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetEncryptionSpec">resetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetForceDestroy">resetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetOptimized">resetOptimized</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBigtable` <a name="putBigtable" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.putBigtable"></a>

```typescript
public putBigtable(value: VertexAiFeatureOnlineStoreBigtable): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.putBigtable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtable">VertexAiFeatureOnlineStoreBigtable</a>

---

##### `putDedicatedServingEndpoint` <a name="putDedicatedServingEndpoint" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.putDedicatedServingEndpoint"></a>

```typescript
public putDedicatedServingEndpoint(value: VertexAiFeatureOnlineStoreDedicatedServingEndpoint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.putDedicatedServingEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpoint">VertexAiFeatureOnlineStoreDedicatedServingEndpoint</a>

---

##### `putEncryptionSpec` <a name="putEncryptionSpec" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.putEncryptionSpec"></a>

```typescript
public putEncryptionSpec(value: VertexAiFeatureOnlineStoreEncryptionSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpec">VertexAiFeatureOnlineStoreEncryptionSpec</a>

---

##### `putOptimized` <a name="putOptimized" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.putOptimized"></a>

```typescript
public putOptimized(value: VertexAiFeatureOnlineStoreOptimized): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.putOptimized.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimized">VertexAiFeatureOnlineStoreOptimized</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.putTimeouts"></a>

```typescript
public putTimeouts(value: VertexAiFeatureOnlineStoreTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeouts">VertexAiFeatureOnlineStoreTimeouts</a>

---

##### `resetBigtable` <a name="resetBigtable" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetBigtable"></a>

```typescript
public resetBigtable(): void
```

##### `resetDedicatedServingEndpoint` <a name="resetDedicatedServingEndpoint" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetDedicatedServingEndpoint"></a>

```typescript
public resetDedicatedServingEndpoint(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetEncryptionSpec` <a name="resetEncryptionSpec" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetEncryptionSpec"></a>

```typescript
public resetEncryptionSpec(): void
```

##### `resetForceDestroy` <a name="resetForceDestroy" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetForceDestroy"></a>

```typescript
public resetForceDestroy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetOptimized` <a name="resetOptimized" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetOptimized"></a>

```typescript
public resetOptimized(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a VertexAiFeatureOnlineStore resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.isConstruct"></a>

```typescript
import { vertexAiFeatureOnlineStore } from '@cdktn/provider-google'

vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.isTerraformElement"></a>

```typescript
import { vertexAiFeatureOnlineStore } from '@cdktn/provider-google'

vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.isTerraformResource"></a>

```typescript
import { vertexAiFeatureOnlineStore } from '@cdktn/provider-google'

vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.generateConfigForImport"></a>

```typescript
import { vertexAiFeatureOnlineStore } from '@cdktn/provider-google'

vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a VertexAiFeatureOnlineStore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VertexAiFeatureOnlineStore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VertexAiFeatureOnlineStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_feature_online_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the VertexAiFeatureOnlineStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.bigtable">bigtable</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference">VertexAiFeatureOnlineStoreBigtableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.dedicatedServingEndpoint">dedicatedServingEndpoint</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference">VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference">VertexAiFeatureOnlineStoreEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.optimized">optimized</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference">VertexAiFeatureOnlineStoreOptimizedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference">VertexAiFeatureOnlineStoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.bigtableInput">bigtableInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtable">VertexAiFeatureOnlineStoreBigtable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.dedicatedServingEndpointInput">dedicatedServingEndpointInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpoint">VertexAiFeatureOnlineStoreDedicatedServingEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.encryptionSpecInput">encryptionSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpec">VertexAiFeatureOnlineStoreEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.forceDestroyInput">forceDestroyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.optimizedInput">optimizedInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimized">VertexAiFeatureOnlineStoreOptimized</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeouts">VertexAiFeatureOnlineStoreTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.forceDestroy">forceDestroy</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `bigtable`<sup>Required</sup> <a name="bigtable" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.bigtable"></a>

```typescript
public readonly bigtable: VertexAiFeatureOnlineStoreBigtableOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference">VertexAiFeatureOnlineStoreBigtableOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `dedicatedServingEndpoint`<sup>Required</sup> <a name="dedicatedServingEndpoint" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.dedicatedServingEndpoint"></a>

```typescript
public readonly dedicatedServingEndpoint: VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference">VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `encryptionSpec`<sup>Required</sup> <a name="encryptionSpec" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.encryptionSpec"></a>

```typescript
public readonly encryptionSpec: VertexAiFeatureOnlineStoreEncryptionSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference">VertexAiFeatureOnlineStoreEncryptionSpecOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `optimized`<sup>Required</sup> <a name="optimized" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.optimized"></a>

```typescript
public readonly optimized: VertexAiFeatureOnlineStoreOptimizedOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference">VertexAiFeatureOnlineStoreOptimizedOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.timeouts"></a>

```typescript
public readonly timeouts: VertexAiFeatureOnlineStoreTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference">VertexAiFeatureOnlineStoreTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `bigtableInput`<sup>Optional</sup> <a name="bigtableInput" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.bigtableInput"></a>

```typescript
public readonly bigtableInput: VertexAiFeatureOnlineStoreBigtable;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtable">VertexAiFeatureOnlineStoreBigtable</a>

---

##### `dedicatedServingEndpointInput`<sup>Optional</sup> <a name="dedicatedServingEndpointInput" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.dedicatedServingEndpointInput"></a>

```typescript
public readonly dedicatedServingEndpointInput: VertexAiFeatureOnlineStoreDedicatedServingEndpoint;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpoint">VertexAiFeatureOnlineStoreDedicatedServingEndpoint</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `encryptionSpecInput`<sup>Optional</sup> <a name="encryptionSpecInput" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.encryptionSpecInput"></a>

```typescript
public readonly encryptionSpecInput: VertexAiFeatureOnlineStoreEncryptionSpec;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpec">VertexAiFeatureOnlineStoreEncryptionSpec</a>

---

##### `forceDestroyInput`<sup>Optional</sup> <a name="forceDestroyInput" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.forceDestroyInput"></a>

```typescript
public readonly forceDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `optimizedInput`<sup>Optional</sup> <a name="optimizedInput" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.optimizedInput"></a>

```typescript
public readonly optimizedInput: VertexAiFeatureOnlineStoreOptimized;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimized">VertexAiFeatureOnlineStoreOptimized</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VertexAiFeatureOnlineStoreTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeouts">VertexAiFeatureOnlineStoreTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `forceDestroy`<sup>Required</sup> <a name="forceDestroy" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiFeatureOnlineStoreBigtable <a name="VertexAiFeatureOnlineStoreBigtable" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtable.Initializer"></a>

```typescript
import { vertexAiFeatureOnlineStore } from '@cdktn/provider-google'

const vertexAiFeatureOnlineStoreBigtable: vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtable.property.autoScaling">autoScaling</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScaling">VertexAiFeatureOnlineStoreBigtableAutoScaling</a></code> | auto_scaling block. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtable.property.enableDirectBigtableAccess">enableDirectBigtableAccess</a></code> | <code>boolean \| cdktn.IResolvable</code> | Optional. If true, enable direct access to the Bigtable instance. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtable.property.zone">zone</a></code> | <code>string</code> | The zone where the Bigtable instance will be created. |

---

##### `autoScaling`<sup>Required</sup> <a name="autoScaling" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtable.property.autoScaling"></a>

```typescript
public readonly autoScaling: VertexAiFeatureOnlineStoreBigtableAutoScaling;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScaling">VertexAiFeatureOnlineStoreBigtableAutoScaling</a>

auto_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_feature_online_store#auto_scaling VertexAiFeatureOnlineStore#auto_scaling}

---

##### `enableDirectBigtableAccess`<sup>Optional</sup> <a name="enableDirectBigtableAccess" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtable.property.enableDirectBigtableAccess"></a>

```typescript
public readonly enableDirectBigtableAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Optional. If true, enable direct access to the Bigtable instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_feature_online_store#enable_direct_bigtable_access VertexAiFeatureOnlineStore#enable_direct_bigtable_access}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtable.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

The zone where the Bigtable instance will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_feature_online_store#zone VertexAiFeatureOnlineStore#zone}

---

### VertexAiFeatureOnlineStoreBigtableAutoScaling <a name="VertexAiFeatureOnlineStoreBigtableAutoScaling" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScaling.Initializer"></a>

```typescript
import { vertexAiFeatureOnlineStore } from '@cdktn/provider-google'

const vertexAiFeatureOnlineStoreBigtableAutoScaling: vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScaling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScaling.property.maxNodeCount">maxNodeCount</a></code> | <code>number</code> | The maximum number of nodes to scale up to. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScaling.property.minNodeCount">minNodeCount</a></code> | <code>number</code> | The minimum number of nodes to scale down to. Must be greater than or equal to 1. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScaling.property.cpuUtilizationTarget">cpuUtilizationTarget</a></code> | <code>number</code> | A percentage of the cluster's CPU capacity. |

---

##### `maxNodeCount`<sup>Required</sup> <a name="maxNodeCount" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScaling.property.maxNodeCount"></a>

```typescript
public readonly maxNodeCount: number;
```

- *Type:* number

The maximum number of nodes to scale up to.

Must be greater than or equal to minNodeCount, and less than or equal to 10 times of 'minNodeCount'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_feature_online_store#max_node_count VertexAiFeatureOnlineStore#max_node_count}

---

##### `minNodeCount`<sup>Required</sup> <a name="minNodeCount" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScaling.property.minNodeCount"></a>

```typescript
public readonly minNodeCount: number;
```

- *Type:* number

The minimum number of nodes to scale down to. Must be greater than or equal to 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_feature_online_store#min_node_count VertexAiFeatureOnlineStore#min_node_count}

---

##### `cpuUtilizationTarget`<sup>Optional</sup> <a name="cpuUtilizationTarget" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScaling.property.cpuUtilizationTarget"></a>

```typescript
public readonly cpuUtilizationTarget: number;
```

- *Type:* number

A percentage of the cluster's CPU capacity.

Can be from 10% to 80%. When a cluster's CPU utilization exceeds the target that you have set, Bigtable immediately adds nodes to the cluster. When CPU utilization is substantially lower than the target, Bigtable removes nodes. If not set will default to 50%.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_feature_online_store#cpu_utilization_target VertexAiFeatureOnlineStore#cpu_utilization_target}

---

### VertexAiFeatureOnlineStoreConfig <a name="VertexAiFeatureOnlineStoreConfig" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.Initializer"></a>

```typescript
import { vertexAiFeatureOnlineStore } from '@cdktn/provider-google'

const vertexAiFeatureOnlineStoreConfig: vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.name">name</a></code> | <code>string</code> | The resource name of the Feature Online Store. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.bigtable">bigtable</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtable">VertexAiFeatureOnlineStoreBigtable</a></code> | bigtable block. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.dedicatedServingEndpoint">dedicatedServingEndpoint</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpoint">VertexAiFeatureOnlineStoreDedicatedServingEndpoint</a></code> | dedicated_serving_endpoint block. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpec">VertexAiFeatureOnlineStoreEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.forceDestroy">forceDestroy</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set to true, any FeatureViews and Features for this FeatureOnlineStore will also be deleted. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_feature_online_store#id VertexAiFeatureOnlineStore#id}. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | The labels with user-defined metadata to organize your feature online stores. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.optimized">optimized</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimized">VertexAiFeatureOnlineStoreOptimized</a></code> | optimized block. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_feature_online_store#project VertexAiFeatureOnlineStore#project}. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.region">region</a></code> | <code>string</code> | The region of feature online store. eg us-central1. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeouts">VertexAiFeatureOnlineStoreTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The resource name of the Feature Online Store.

This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_feature_online_store#name VertexAiFeatureOnlineStore#name}

---

##### `bigtable`<sup>Optional</sup> <a name="bigtable" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.bigtable"></a>

```typescript
public readonly bigtable: VertexAiFeatureOnlineStoreBigtable;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtable">VertexAiFeatureOnlineStoreBigtable</a>

bigtable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_feature_online_store#bigtable VertexAiFeatureOnlineStore#bigtable}

---

##### `dedicatedServingEndpoint`<sup>Optional</sup> <a name="dedicatedServingEndpoint" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.dedicatedServingEndpoint"></a>

```typescript
public readonly dedicatedServingEndpoint: VertexAiFeatureOnlineStoreDedicatedServingEndpoint;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpoint">VertexAiFeatureOnlineStoreDedicatedServingEndpoint</a>

dedicated_serving_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_feature_online_store#dedicated_serving_endpoint VertexAiFeatureOnlineStore#dedicated_serving_endpoint}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_feature_online_store#deletion_policy VertexAiFeatureOnlineStore#deletion_policy}

---

##### `encryptionSpec`<sup>Optional</sup> <a name="encryptionSpec" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.encryptionSpec"></a>

```typescript
public readonly encryptionSpec: VertexAiFeatureOnlineStoreEncryptionSpec;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpec">VertexAiFeatureOnlineStoreEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_feature_online_store#encryption_spec VertexAiFeatureOnlineStore#encryption_spec}

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set to true, any FeatureViews and Features for this FeatureOnlineStore will also be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_feature_online_store#force_destroy VertexAiFeatureOnlineStore#force_destroy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_feature_online_store#id VertexAiFeatureOnlineStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The labels with user-defined metadata to organize your feature online stores.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_feature_online_store#labels VertexAiFeatureOnlineStore#labels}

---

##### `optimized`<sup>Optional</sup> <a name="optimized" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.optimized"></a>

```typescript
public readonly optimized: VertexAiFeatureOnlineStoreOptimized;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimized">VertexAiFeatureOnlineStoreOptimized</a>

optimized block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_feature_online_store#optimized VertexAiFeatureOnlineStore#optimized}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_feature_online_store#project VertexAiFeatureOnlineStore#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region of feature online store. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_feature_online_store#region VertexAiFeatureOnlineStore#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VertexAiFeatureOnlineStoreTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeouts">VertexAiFeatureOnlineStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_feature_online_store#timeouts VertexAiFeatureOnlineStore#timeouts}

---

### VertexAiFeatureOnlineStoreDedicatedServingEndpoint <a name="VertexAiFeatureOnlineStoreDedicatedServingEndpoint" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpoint.Initializer"></a>

```typescript
import { vertexAiFeatureOnlineStore } from '@cdktn/provider-google'

const vertexAiFeatureOnlineStoreDedicatedServingEndpoint: vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpoint.property.privateServiceConnectConfig">privateServiceConnectConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig">VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig</a></code> | private_service_connect_config block. |

---

##### `privateServiceConnectConfig`<sup>Optional</sup> <a name="privateServiceConnectConfig" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpoint.property.privateServiceConnectConfig"></a>

```typescript
public readonly privateServiceConnectConfig: VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig">VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig</a>

private_service_connect_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_feature_online_store#private_service_connect_config VertexAiFeatureOnlineStore#private_service_connect_config}

---

### VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig <a name="VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig.Initializer"></a>

```typescript
import { vertexAiFeatureOnlineStore } from '@cdktn/provider-google'

const vertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig: vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig.property.enablePrivateServiceConnect">enablePrivateServiceConnect</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set to true, customers will use private service connection to send request. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig.property.projectAllowlist">projectAllowlist</a></code> | <code>string[]</code> | A list of Projects from which the forwarding rule will target the service attachment. |

---

##### `enablePrivateServiceConnect`<sup>Required</sup> <a name="enablePrivateServiceConnect" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig.property.enablePrivateServiceConnect"></a>

```typescript
public readonly enablePrivateServiceConnect: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set to true, customers will use private service connection to send request.

Otherwise, the connection will set to public endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_feature_online_store#enable_private_service_connect VertexAiFeatureOnlineStore#enable_private_service_connect}

---

##### `projectAllowlist`<sup>Optional</sup> <a name="projectAllowlist" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig.property.projectAllowlist"></a>

```typescript
public readonly projectAllowlist: string[];
```

- *Type:* string[]

A list of Projects from which the forwarding rule will target the service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_feature_online_store#project_allowlist VertexAiFeatureOnlineStore#project_allowlist}

---

### VertexAiFeatureOnlineStoreEncryptionSpec <a name="VertexAiFeatureOnlineStoreEncryptionSpec" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpec.Initializer"></a>

```typescript
import { vertexAiFeatureOnlineStore } from '@cdktn/provider-google'

const vertexAiFeatureOnlineStoreEncryptionSpec: vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpec.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource. |

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpec.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource.

Has the form: projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key. The key needs to be in the same region as where the compute resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_feature_online_store#kms_key_name VertexAiFeatureOnlineStore#kms_key_name}

---

### VertexAiFeatureOnlineStoreOptimized <a name="VertexAiFeatureOnlineStoreOptimized" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimized"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimized.Initializer"></a>

```typescript
import { vertexAiFeatureOnlineStore } from '@cdktn/provider-google'

const vertexAiFeatureOnlineStoreOptimized: vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimized = { ... }
```


### VertexAiFeatureOnlineStoreTimeouts <a name="VertexAiFeatureOnlineStoreTimeouts" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeouts.Initializer"></a>

```typescript
import { vertexAiFeatureOnlineStore } from '@cdktn/provider-google'

const vertexAiFeatureOnlineStoreTimeouts: vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_feature_online_store#create VertexAiFeatureOnlineStore#create}. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_feature_online_store#delete VertexAiFeatureOnlineStore#delete}. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_feature_online_store#update VertexAiFeatureOnlineStore#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_feature_online_store#create VertexAiFeatureOnlineStore#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_feature_online_store#delete VertexAiFeatureOnlineStore#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_feature_online_store#update VertexAiFeatureOnlineStore#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference <a name="VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.Initializer"></a>

```typescript
import { vertexAiFeatureOnlineStore } from '@cdktn/provider-google'

new vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.resetCpuUtilizationTarget">resetCpuUtilizationTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpuUtilizationTarget` <a name="resetCpuUtilizationTarget" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.resetCpuUtilizationTarget"></a>

```typescript
public resetCpuUtilizationTarget(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.cpuUtilizationTargetInput">cpuUtilizationTargetInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.maxNodeCountInput">maxNodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.minNodeCountInput">minNodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.cpuUtilizationTarget">cpuUtilizationTarget</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.maxNodeCount">maxNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.minNodeCount">minNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScaling">VertexAiFeatureOnlineStoreBigtableAutoScaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuUtilizationTargetInput`<sup>Optional</sup> <a name="cpuUtilizationTargetInput" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.cpuUtilizationTargetInput"></a>

```typescript
public readonly cpuUtilizationTargetInput: number;
```

- *Type:* number

---

##### `maxNodeCountInput`<sup>Optional</sup> <a name="maxNodeCountInput" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.maxNodeCountInput"></a>

```typescript
public readonly maxNodeCountInput: number;
```

- *Type:* number

---

##### `minNodeCountInput`<sup>Optional</sup> <a name="minNodeCountInput" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.minNodeCountInput"></a>

```typescript
public readonly minNodeCountInput: number;
```

- *Type:* number

---

##### `cpuUtilizationTarget`<sup>Required</sup> <a name="cpuUtilizationTarget" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.cpuUtilizationTarget"></a>

```typescript
public readonly cpuUtilizationTarget: number;
```

- *Type:* number

---

##### `maxNodeCount`<sup>Required</sup> <a name="maxNodeCount" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.maxNodeCount"></a>

```typescript
public readonly maxNodeCount: number;
```

- *Type:* number

---

##### `minNodeCount`<sup>Required</sup> <a name="minNodeCount" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.minNodeCount"></a>

```typescript
public readonly minNodeCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiFeatureOnlineStoreBigtableAutoScaling;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScaling">VertexAiFeatureOnlineStoreBigtableAutoScaling</a>

---


### VertexAiFeatureOnlineStoreBigtableOutputReference <a name="VertexAiFeatureOnlineStoreBigtableOutputReference" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.Initializer"></a>

```typescript
import { vertexAiFeatureOnlineStore } from '@cdktn/provider-google'

new vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.putAutoScaling">putAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.resetEnableDirectBigtableAccess">resetEnableDirectBigtableAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.resetZone">resetZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoScaling` <a name="putAutoScaling" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.putAutoScaling"></a>

```typescript
public putAutoScaling(value: VertexAiFeatureOnlineStoreBigtableAutoScaling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.putAutoScaling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScaling">VertexAiFeatureOnlineStoreBigtableAutoScaling</a>

---

##### `resetEnableDirectBigtableAccess` <a name="resetEnableDirectBigtableAccess" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.resetEnableDirectBigtableAccess"></a>

```typescript
public resetEnableDirectBigtableAccess(): void
```

##### `resetZone` <a name="resetZone" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.resetZone"></a>

```typescript
public resetZone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.property.autoScaling">autoScaling</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference">VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.property.autoScalingInput">autoScalingInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScaling">VertexAiFeatureOnlineStoreBigtableAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.property.enableDirectBigtableAccessInput">enableDirectBigtableAccessInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.property.enableDirectBigtableAccess">enableDirectBigtableAccess</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.property.zone">zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtable">VertexAiFeatureOnlineStoreBigtable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoScaling`<sup>Required</sup> <a name="autoScaling" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.property.autoScaling"></a>

```typescript
public readonly autoScaling: VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference">VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference</a>

---

##### `autoScalingInput`<sup>Optional</sup> <a name="autoScalingInput" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.property.autoScalingInput"></a>

```typescript
public readonly autoScalingInput: VertexAiFeatureOnlineStoreBigtableAutoScaling;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScaling">VertexAiFeatureOnlineStoreBigtableAutoScaling</a>

---

##### `enableDirectBigtableAccessInput`<sup>Optional</sup> <a name="enableDirectBigtableAccessInput" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.property.enableDirectBigtableAccessInput"></a>

```typescript
public readonly enableDirectBigtableAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `enableDirectBigtableAccess`<sup>Required</sup> <a name="enableDirectBigtableAccess" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.property.enableDirectBigtableAccess"></a>

```typescript
public readonly enableDirectBigtableAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiFeatureOnlineStoreBigtable;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtable">VertexAiFeatureOnlineStoreBigtable</a>

---


### VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference <a name="VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.Initializer"></a>

```typescript
import { vertexAiFeatureOnlineStore } from '@cdktn/provider-google'

new vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.putPrivateServiceConnectConfig">putPrivateServiceConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.resetPrivateServiceConnectConfig">resetPrivateServiceConnectConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrivateServiceConnectConfig` <a name="putPrivateServiceConnectConfig" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.putPrivateServiceConnectConfig"></a>

```typescript
public putPrivateServiceConnectConfig(value: VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.putPrivateServiceConnectConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig">VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig</a>

---

##### `resetPrivateServiceConnectConfig` <a name="resetPrivateServiceConnectConfig" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.resetPrivateServiceConnectConfig"></a>

```typescript
public resetPrivateServiceConnectConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.privateServiceConnectConfig">privateServiceConnectConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference">VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.publicEndpointDomainName">publicEndpointDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.serviceAttachment">serviceAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.privateServiceConnectConfigInput">privateServiceConnectConfigInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig">VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpoint">VertexAiFeatureOnlineStoreDedicatedServingEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `privateServiceConnectConfig`<sup>Required</sup> <a name="privateServiceConnectConfig" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.privateServiceConnectConfig"></a>

```typescript
public readonly privateServiceConnectConfig: VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference">VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference</a>

---

##### `publicEndpointDomainName`<sup>Required</sup> <a name="publicEndpointDomainName" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.publicEndpointDomainName"></a>

```typescript
public readonly publicEndpointDomainName: string;
```

- *Type:* string

---

##### `serviceAttachment`<sup>Required</sup> <a name="serviceAttachment" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.serviceAttachment"></a>

```typescript
public readonly serviceAttachment: string;
```

- *Type:* string

---

##### `privateServiceConnectConfigInput`<sup>Optional</sup> <a name="privateServiceConnectConfigInput" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.privateServiceConnectConfigInput"></a>

```typescript
public readonly privateServiceConnectConfigInput: VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig">VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiFeatureOnlineStoreDedicatedServingEndpoint;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpoint">VertexAiFeatureOnlineStoreDedicatedServingEndpoint</a>

---


### VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference <a name="VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.Initializer"></a>

```typescript
import { vertexAiFeatureOnlineStore } from '@cdktn/provider-google'

new vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.resetProjectAllowlist">resetProjectAllowlist</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProjectAllowlist` <a name="resetProjectAllowlist" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.resetProjectAllowlist"></a>

```typescript
public resetProjectAllowlist(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.enablePrivateServiceConnectInput">enablePrivateServiceConnectInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.projectAllowlistInput">projectAllowlistInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.enablePrivateServiceConnect">enablePrivateServiceConnect</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.projectAllowlist">projectAllowlist</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig">VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enablePrivateServiceConnectInput`<sup>Optional</sup> <a name="enablePrivateServiceConnectInput" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.enablePrivateServiceConnectInput"></a>

```typescript
public readonly enablePrivateServiceConnectInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `projectAllowlistInput`<sup>Optional</sup> <a name="projectAllowlistInput" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.projectAllowlistInput"></a>

```typescript
public readonly projectAllowlistInput: string[];
```

- *Type:* string[]

---

##### `enablePrivateServiceConnect`<sup>Required</sup> <a name="enablePrivateServiceConnect" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.enablePrivateServiceConnect"></a>

```typescript
public readonly enablePrivateServiceConnect: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `projectAllowlist`<sup>Required</sup> <a name="projectAllowlist" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.projectAllowlist"></a>

```typescript
public readonly projectAllowlist: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig">VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig</a>

---


### VertexAiFeatureOnlineStoreEncryptionSpecOutputReference <a name="VertexAiFeatureOnlineStoreEncryptionSpecOutputReference" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.Initializer"></a>

```typescript
import { vertexAiFeatureOnlineStore } from '@cdktn/provider-google'

new vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpec">VertexAiFeatureOnlineStoreEncryptionSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiFeatureOnlineStoreEncryptionSpec;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreEncryptionSpec">VertexAiFeatureOnlineStoreEncryptionSpec</a>

---


### VertexAiFeatureOnlineStoreOptimizedOutputReference <a name="VertexAiFeatureOnlineStoreOptimizedOutputReference" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.Initializer"></a>

```typescript
import { vertexAiFeatureOnlineStore } from '@cdktn/provider-google'

new vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimized">VertexAiFeatureOnlineStoreOptimized</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiFeatureOnlineStoreOptimized;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimized">VertexAiFeatureOnlineStoreOptimized</a>

---


### VertexAiFeatureOnlineStoreTimeoutsOutputReference <a name="VertexAiFeatureOnlineStoreTimeoutsOutputReference" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.Initializer"></a>

```typescript
import { vertexAiFeatureOnlineStore } from '@cdktn/provider-google'

new vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeouts">VertexAiFeatureOnlineStoreTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VertexAiFeatureOnlineStoreTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeouts">VertexAiFeatureOnlineStoreTimeouts</a>

---



