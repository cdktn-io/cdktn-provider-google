# `vertexAiRagCorpus` Submodule <a name="`vertexAiRagCorpus` Submodule" id="@cdktn/provider-google.vertexAiRagCorpus"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiRagCorpus <a name="VertexAiRagCorpus" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus google_vertex_ai_rag_corpus}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer"></a>

```typescript
import { vertexAiRagCorpus } from '@cdktn/provider-google'

new vertexAiRagCorpus.VertexAiRagCorpus(scope: Construct, id: string, config: VertexAiRagCorpusConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig">VertexAiRagCorpusConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig">VertexAiRagCorpusConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putEncryptionSpec">putEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putVectorDbConfig">putVectorDbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putVertexAiSearchConfig">putVertexAiSearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetEncryptionSpec">resetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetVectorDbConfig">resetVectorDbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetVertexAiSearchConfig">resetVertexAiSearchConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryptionSpec` <a name="putEncryptionSpec" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putEncryptionSpec"></a>

```typescript
public putEncryptionSpec(value: VertexAiRagCorpusEncryptionSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec">VertexAiRagCorpusEncryptionSpec</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putTimeouts"></a>

```typescript
public putTimeouts(value: VertexAiRagCorpusTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts">VertexAiRagCorpusTimeouts</a>

---

##### `putVectorDbConfig` <a name="putVectorDbConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putVectorDbConfig"></a>

```typescript
public putVectorDbConfig(value: VertexAiRagCorpusVectorDbConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putVectorDbConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig">VertexAiRagCorpusVectorDbConfig</a>

---

##### `putVertexAiSearchConfig` <a name="putVertexAiSearchConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putVertexAiSearchConfig"></a>

```typescript
public putVertexAiSearchConfig(value: VertexAiRagCorpusVertexAiSearchConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putVertexAiSearchConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig">VertexAiRagCorpusVertexAiSearchConfig</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEncryptionSpec` <a name="resetEncryptionSpec" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetEncryptionSpec"></a>

```typescript
public resetEncryptionSpec(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVectorDbConfig` <a name="resetVectorDbConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetVectorDbConfig"></a>

```typescript
public resetVectorDbConfig(): void
```

##### `resetVertexAiSearchConfig` <a name="resetVertexAiSearchConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetVertexAiSearchConfig"></a>

```typescript
public resetVertexAiSearchConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a VertexAiRagCorpus resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.isConstruct"></a>

```typescript
import { vertexAiRagCorpus } from '@cdktn/provider-google'

vertexAiRagCorpus.VertexAiRagCorpus.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.isTerraformElement"></a>

```typescript
import { vertexAiRagCorpus } from '@cdktn/provider-google'

vertexAiRagCorpus.VertexAiRagCorpus.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.isTerraformResource"></a>

```typescript
import { vertexAiRagCorpus } from '@cdktn/provider-google'

vertexAiRagCorpus.VertexAiRagCorpus.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.generateConfigForImport"></a>

```typescript
import { vertexAiRagCorpus } from '@cdktn/provider-google'

vertexAiRagCorpus.VertexAiRagCorpus.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a VertexAiRagCorpus resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VertexAiRagCorpus to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VertexAiRagCorpus that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the VertexAiRagCorpus to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.corpusStatus">corpusStatus</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList">VertexAiRagCorpusCorpusStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference">VertexAiRagCorpusEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference">VertexAiRagCorpusTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.vectorDbConfig">vectorDbConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference">VertexAiRagCorpusVectorDbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.vertexAiSearchConfig">vertexAiSearchConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference">VertexAiRagCorpusVertexAiSearchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.encryptionSpecInput">encryptionSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec">VertexAiRagCorpusEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts">VertexAiRagCorpusTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.vectorDbConfigInput">vectorDbConfigInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig">VertexAiRagCorpusVectorDbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.vertexAiSearchConfigInput">vertexAiSearchConfigInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig">VertexAiRagCorpusVertexAiSearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `corpusStatus`<sup>Required</sup> <a name="corpusStatus" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.corpusStatus"></a>

```typescript
public readonly corpusStatus: VertexAiRagCorpusCorpusStatusList;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList">VertexAiRagCorpusCorpusStatusList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `encryptionSpec`<sup>Required</sup> <a name="encryptionSpec" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.encryptionSpec"></a>

```typescript
public readonly encryptionSpec: VertexAiRagCorpusEncryptionSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference">VertexAiRagCorpusEncryptionSpecOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.timeouts"></a>

```typescript
public readonly timeouts: VertexAiRagCorpusTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference">VertexAiRagCorpusTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `vectorDbConfig`<sup>Required</sup> <a name="vectorDbConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.vectorDbConfig"></a>

```typescript
public readonly vectorDbConfig: VertexAiRagCorpusVectorDbConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference">VertexAiRagCorpusVectorDbConfigOutputReference</a>

---

##### `vertexAiSearchConfig`<sup>Required</sup> <a name="vertexAiSearchConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.vertexAiSearchConfig"></a>

```typescript
public readonly vertexAiSearchConfig: VertexAiRagCorpusVertexAiSearchConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference">VertexAiRagCorpusVertexAiSearchConfigOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `encryptionSpecInput`<sup>Optional</sup> <a name="encryptionSpecInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.encryptionSpecInput"></a>

```typescript
public readonly encryptionSpecInput: VertexAiRagCorpusEncryptionSpec;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec">VertexAiRagCorpusEncryptionSpec</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VertexAiRagCorpusTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts">VertexAiRagCorpusTimeouts</a>

---

##### `vectorDbConfigInput`<sup>Optional</sup> <a name="vectorDbConfigInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.vectorDbConfigInput"></a>

```typescript
public readonly vectorDbConfigInput: VertexAiRagCorpusVectorDbConfig;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig">VertexAiRagCorpusVectorDbConfig</a>

---

##### `vertexAiSearchConfigInput`<sup>Optional</sup> <a name="vertexAiSearchConfigInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.vertexAiSearchConfigInput"></a>

```typescript
public readonly vertexAiSearchConfigInput: VertexAiRagCorpusVertexAiSearchConfig;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig">VertexAiRagCorpusVertexAiSearchConfig</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiRagCorpusConfig <a name="VertexAiRagCorpusConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.Initializer"></a>

```typescript
import { vertexAiRagCorpus } from '@cdktn/provider-google'

const vertexAiRagCorpusConfig: vertexAiRagCorpus.VertexAiRagCorpusConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.displayName">displayName</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.region">region</a></code> | <code>string</code> | The region of the RagCorpus. eg europe-west4. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.description">description</a></code> | <code>string</code> | Optional. The description of the RagCorpus. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec">VertexAiRagCorpusEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#id VertexAiRagCorpus#id}. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#project VertexAiRagCorpus#project}. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts">VertexAiRagCorpusTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.vectorDbConfig">vectorDbConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig">VertexAiRagCorpusVectorDbConfig</a></code> | vector_db_config block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.vertexAiSearchConfig">vertexAiSearchConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig">VertexAiRagCorpusVertexAiSearchConfig</a></code> | vertex_ai_search_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Required.

The display name of the RagCorpus. The name can be up to 128
characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#display_name VertexAiRagCorpus#display_name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region of the RagCorpus. eg europe-west4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#region VertexAiRagCorpus#region}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#deletion_policy VertexAiRagCorpus#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional. The description of the RagCorpus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#description VertexAiRagCorpus#description}

---

##### `encryptionSpec`<sup>Optional</sup> <a name="encryptionSpec" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.encryptionSpec"></a>

```typescript
public readonly encryptionSpec: VertexAiRagCorpusEncryptionSpec;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec">VertexAiRagCorpusEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#encryption_spec VertexAiRagCorpus#encryption_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#id VertexAiRagCorpus#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#project VertexAiRagCorpus#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VertexAiRagCorpusTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts">VertexAiRagCorpusTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#timeouts VertexAiRagCorpus#timeouts}

---

##### `vectorDbConfig`<sup>Optional</sup> <a name="vectorDbConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.vectorDbConfig"></a>

```typescript
public readonly vectorDbConfig: VertexAiRagCorpusVectorDbConfig;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig">VertexAiRagCorpusVectorDbConfig</a>

vector_db_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#vector_db_config VertexAiRagCorpus#vector_db_config}

---

##### `vertexAiSearchConfig`<sup>Optional</sup> <a name="vertexAiSearchConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.vertexAiSearchConfig"></a>

```typescript
public readonly vertexAiSearchConfig: VertexAiRagCorpusVertexAiSearchConfig;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig">VertexAiRagCorpusVertexAiSearchConfig</a>

vertex_ai_search_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#vertex_ai_search_config VertexAiRagCorpus#vertex_ai_search_config}

---

### VertexAiRagCorpusCorpusStatus <a name="VertexAiRagCorpusCorpusStatus" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatus.Initializer"></a>

```typescript
import { vertexAiRagCorpus } from '@cdktn/provider-google'

const vertexAiRagCorpusCorpusStatus: vertexAiRagCorpus.VertexAiRagCorpusCorpusStatus = { ... }
```


### VertexAiRagCorpusEncryptionSpec <a name="VertexAiRagCorpusEncryptionSpec" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec.Initializer"></a>

```typescript
import { vertexAiRagCorpus } from '@cdktn/provider-google'

const vertexAiRagCorpusEncryptionSpec: vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | Required. |

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

Required.

The Cloud KMS resource identifier of the customer managed
encryption key used to protect the resource. Has the form:
projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key.
The key needs to be in the same region as where the resource is
created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#kms_key_name VertexAiRagCorpus#kms_key_name}

---

### VertexAiRagCorpusTimeouts <a name="VertexAiRagCorpusTimeouts" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts.Initializer"></a>

```typescript
import { vertexAiRagCorpus } from '@cdktn/provider-google'

const vertexAiRagCorpusTimeouts: vertexAiRagCorpus.VertexAiRagCorpusTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#create VertexAiRagCorpus#create}. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#delete VertexAiRagCorpus#delete}. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#update VertexAiRagCorpus#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#create VertexAiRagCorpus#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#delete VertexAiRagCorpus#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#update VertexAiRagCorpus#update}.

---

### VertexAiRagCorpusVectorDbConfig <a name="VertexAiRagCorpusVectorDbConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.Initializer"></a>

```typescript
import { vertexAiRagCorpus } from '@cdktn/provider-google'

const vertexAiRagCorpusVectorDbConfig: vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.property.apiAuth">apiAuth</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth">VertexAiRagCorpusVectorDbConfigApiAuth</a></code> | api_auth block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.property.pinecone">pinecone</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone">VertexAiRagCorpusVectorDbConfigPinecone</a></code> | pinecone block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.property.ragEmbeddingModelConfig">ragEmbeddingModelConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a></code> | rag_embedding_model_config block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.property.ragManagedDb">ragManagedDb</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb">VertexAiRagCorpusVectorDbConfigRagManagedDb</a></code> | rag_managed_db block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.property.vertexVectorSearch">vertexVectorSearch</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch">VertexAiRagCorpusVectorDbConfigVertexVectorSearch</a></code> | vertex_vector_search block. |

---

##### `apiAuth`<sup>Optional</sup> <a name="apiAuth" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.property.apiAuth"></a>

```typescript
public readonly apiAuth: VertexAiRagCorpusVectorDbConfigApiAuth;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth">VertexAiRagCorpusVectorDbConfigApiAuth</a>

api_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#api_auth VertexAiRagCorpus#api_auth}

---

##### `pinecone`<sup>Optional</sup> <a name="pinecone" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.property.pinecone"></a>

```typescript
public readonly pinecone: VertexAiRagCorpusVectorDbConfigPinecone;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone">VertexAiRagCorpusVectorDbConfigPinecone</a>

pinecone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#pinecone VertexAiRagCorpus#pinecone}

---

##### `ragEmbeddingModelConfig`<sup>Optional</sup> <a name="ragEmbeddingModelConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.property.ragEmbeddingModelConfig"></a>

```typescript
public readonly ragEmbeddingModelConfig: VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a>

rag_embedding_model_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#rag_embedding_model_config VertexAiRagCorpus#rag_embedding_model_config}

---

##### `ragManagedDb`<sup>Optional</sup> <a name="ragManagedDb" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.property.ragManagedDb"></a>

```typescript
public readonly ragManagedDb: VertexAiRagCorpusVectorDbConfigRagManagedDb;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb">VertexAiRagCorpusVectorDbConfigRagManagedDb</a>

rag_managed_db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#rag_managed_db VertexAiRagCorpus#rag_managed_db}

---

##### `vertexVectorSearch`<sup>Optional</sup> <a name="vertexVectorSearch" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.property.vertexVectorSearch"></a>

```typescript
public readonly vertexVectorSearch: VertexAiRagCorpusVectorDbConfigVertexVectorSearch;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch">VertexAiRagCorpusVectorDbConfigVertexVectorSearch</a>

vertex_vector_search block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#vertex_vector_search VertexAiRagCorpus#vertex_vector_search}

---

### VertexAiRagCorpusVectorDbConfigApiAuth <a name="VertexAiRagCorpusVectorDbConfigApiAuth" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth.Initializer"></a>

```typescript
import { vertexAiRagCorpus } from '@cdktn/provider-google'

const vertexAiRagCorpusVectorDbConfigApiAuth: vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth.property.apiKeyConfig">apiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a></code> | api_key_config block. |

---

##### `apiKeyConfig`<sup>Optional</sup> <a name="apiKeyConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth.property.apiKeyConfig"></a>

```typescript
public readonly apiKeyConfig: VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#api_key_config VertexAiRagCorpus#api_key_config}

---

### VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig <a name="VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig.Initializer"></a>

```typescript
import { vertexAiRagCorpus } from '@cdktn/provider-google'

const vertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig: vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig.property.apiKeySecretVersion">apiKeySecretVersion</a></code> | <code>string</code> | The SecretManager secret version resource name storing API key. e.g. projects/{project}/secrets/{secret}/versions/{version}. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig.property.apiKeyString">apiKeyString</a></code> | <code>string</code> | The API key string. |

---

##### `apiKeySecretVersion`<sup>Optional</sup> <a name="apiKeySecretVersion" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig.property.apiKeySecretVersion"></a>

```typescript
public readonly apiKeySecretVersion: string;
```

- *Type:* string

The SecretManager secret version resource name storing API key. e.g. projects/{project}/secrets/{secret}/versions/{version}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#api_key_secret_version VertexAiRagCorpus#api_key_secret_version}

---

##### `apiKeyString`<sup>Optional</sup> <a name="apiKeyString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig.property.apiKeyString"></a>

```typescript
public readonly apiKeyString: string;
```

- *Type:* string

The API key string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#api_key_string VertexAiRagCorpus#api_key_string}

---

### VertexAiRagCorpusVectorDbConfigPinecone <a name="VertexAiRagCorpusVectorDbConfigPinecone" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone.Initializer"></a>

```typescript
import { vertexAiRagCorpus } from '@cdktn/provider-google'

const vertexAiRagCorpusVectorDbConfigPinecone: vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone.property.indexName">indexName</a></code> | <code>string</code> | Pinecone index name. This value cannot be changed after it's set. |

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone.property.indexName"></a>

```typescript
public readonly indexName: string;
```

- *Type:* string

Pinecone index name. This value cannot be changed after it's set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#index_name VertexAiRagCorpus#index_name}

---

### VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig <a name="VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig.Initializer"></a>

```typescript
import { vertexAiRagCorpus } from '@cdktn/provider-google'

const vertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig: vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig.property.vertexPredictionEndpoint">vertexPredictionEndpoint</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a></code> | vertex_prediction_endpoint block. |

---

##### `vertexPredictionEndpoint`<sup>Optional</sup> <a name="vertexPredictionEndpoint" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig.property.vertexPredictionEndpoint"></a>

```typescript
public readonly vertexPredictionEndpoint: VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a>

vertex_prediction_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#vertex_prediction_endpoint VertexAiRagCorpus#vertex_prediction_endpoint}

---

### VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint <a name="VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint.Initializer"></a>

```typescript
import { vertexAiRagCorpus } from '@cdktn/provider-google'

const vertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint: vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint.property.endpoint">endpoint</a></code> | <code>string</code> | Required. The endpoint resource name. Format: projects/{project}/locations/{location}/publishers/{publisher}/models/{model} or projects/{project}/locations/{location}/endpoints/{endpoint}. |

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

Required. The endpoint resource name. Format: projects/{project}/locations/{location}/publishers/{publisher}/models/{model} or projects/{project}/locations/{location}/endpoints/{endpoint}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#endpoint VertexAiRagCorpus#endpoint}

---

### VertexAiRagCorpusVectorDbConfigRagManagedDb <a name="VertexAiRagCorpusVectorDbConfigRagManagedDb" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb.Initializer"></a>

```typescript
import { vertexAiRagCorpus } from '@cdktn/provider-google'

const vertexAiRagCorpusVectorDbConfigRagManagedDb: vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb.property.ann">ann</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn">VertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a></code> | ann block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb.property.knn">knn</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnn">VertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a></code> | knn block. |

---

##### `ann`<sup>Optional</sup> <a name="ann" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb.property.ann"></a>

```typescript
public readonly ann: VertexAiRagCorpusVectorDbConfigRagManagedDbAnn;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn">VertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a>

ann block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#ann VertexAiRagCorpus#ann}

---

##### `knn`<sup>Optional</sup> <a name="knn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb.property.knn"></a>

```typescript
public readonly knn: VertexAiRagCorpusVectorDbConfigRagManagedDbKnn;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnn">VertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a>

knn block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#knn VertexAiRagCorpus#knn}

---

### VertexAiRagCorpusVectorDbConfigRagManagedDbAnn <a name="VertexAiRagCorpusVectorDbConfigRagManagedDbAnn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn.Initializer"></a>

```typescript
import { vertexAiRagCorpus } from '@cdktn/provider-google'

const vertexAiRagCorpusVectorDbConfigRagManagedDbAnn: vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn.property.leafCount">leafCount</a></code> | <code>number</code> | Number of leaf nodes in the tree-based structure. Default value is 500. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn.property.treeDepth">treeDepth</a></code> | <code>number</code> | The depth of the tree-based structure. Only depth values of 2 and 3 are supported. Default value is 2. |

---

##### `leafCount`<sup>Optional</sup> <a name="leafCount" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn.property.leafCount"></a>

```typescript
public readonly leafCount: number;
```

- *Type:* number

Number of leaf nodes in the tree-based structure. Default value is 500.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#leaf_count VertexAiRagCorpus#leaf_count}

---

##### `treeDepth`<sup>Optional</sup> <a name="treeDepth" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn.property.treeDepth"></a>

```typescript
public readonly treeDepth: number;
```

- *Type:* number

The depth of the tree-based structure. Only depth values of 2 and 3 are supported. Default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#tree_depth VertexAiRagCorpus#tree_depth}

---

### VertexAiRagCorpusVectorDbConfigRagManagedDbKnn <a name="VertexAiRagCorpusVectorDbConfigRagManagedDbKnn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnn.Initializer"></a>

```typescript
import { vertexAiRagCorpus } from '@cdktn/provider-google'

const vertexAiRagCorpusVectorDbConfigRagManagedDbKnn: vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnn = { ... }
```


### VertexAiRagCorpusVectorDbConfigVertexVectorSearch <a name="VertexAiRagCorpusVectorDbConfigVertexVectorSearch" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch.Initializer"></a>

```typescript
import { vertexAiRagCorpus } from '@cdktn/provider-google'

const vertexAiRagCorpusVectorDbConfigVertexVectorSearch: vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch.property.index">index</a></code> | <code>string</code> | The resource name of the Index. Format: projects/{project}/locations/{location}/indexes/{index}. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch.property.indexEndpoint">indexEndpoint</a></code> | <code>string</code> | The resource name of the Index Endpoint. Format: projects/{project}/locations/{location}/indexEndpoints/{index_endpoint}. |

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch.property.index"></a>

```typescript
public readonly index: string;
```

- *Type:* string

The resource name of the Index. Format: projects/{project}/locations/{location}/indexes/{index}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#index VertexAiRagCorpus#index}

---

##### `indexEndpoint`<sup>Required</sup> <a name="indexEndpoint" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch.property.indexEndpoint"></a>

```typescript
public readonly indexEndpoint: string;
```

- *Type:* string

The resource name of the Index Endpoint. Format: projects/{project}/locations/{location}/indexEndpoints/{index_endpoint}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#index_endpoint VertexAiRagCorpus#index_endpoint}

---

### VertexAiRagCorpusVertexAiSearchConfig <a name="VertexAiRagCorpusVertexAiSearchConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig.Initializer"></a>

```typescript
import { vertexAiRagCorpus } from '@cdktn/provider-google'

const vertexAiRagCorpusVertexAiSearchConfig: vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig.property.servingConfig">servingConfig</a></code> | <code>string</code> | Vertex AI Search Serving Config resource full name. For example, projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/servingConfigs/{serving_config} or projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/servingConfigs/{serving_config}. |

---

##### `servingConfig`<sup>Required</sup> <a name="servingConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig.property.servingConfig"></a>

```typescript
public readonly servingConfig: string;
```

- *Type:* string

Vertex AI Search Serving Config resource full name. For example, projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/servingConfigs/{serving_config} or projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/servingConfigs/{serving_config}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#serving_config VertexAiRagCorpus#serving_config}

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiRagCorpusCorpusStatusList <a name="VertexAiRagCorpusCorpusStatusList" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.Initializer"></a>

```typescript
import { vertexAiRagCorpus } from '@cdktn/provider-google'

new vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.get"></a>

```typescript
public get(index: number): VertexAiRagCorpusCorpusStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### VertexAiRagCorpusCorpusStatusOutputReference <a name="VertexAiRagCorpusCorpusStatusOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.Initializer"></a>

```typescript
import { vertexAiRagCorpus } from '@cdktn/provider-google'

new vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.property.errorStatus">errorStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatus">VertexAiRagCorpusCorpusStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `errorStatus`<sup>Required</sup> <a name="errorStatus" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.property.errorStatus"></a>

```typescript
public readonly errorStatus: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiRagCorpusCorpusStatus;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatus">VertexAiRagCorpusCorpusStatus</a>

---


### VertexAiRagCorpusEncryptionSpecOutputReference <a name="VertexAiRagCorpusEncryptionSpecOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.Initializer"></a>

```typescript
import { vertexAiRagCorpus } from '@cdktn/provider-google'

new vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec">VertexAiRagCorpusEncryptionSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiRagCorpusEncryptionSpec;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec">VertexAiRagCorpusEncryptionSpec</a>

---


### VertexAiRagCorpusTimeoutsOutputReference <a name="VertexAiRagCorpusTimeoutsOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.Initializer"></a>

```typescript
import { vertexAiRagCorpus } from '@cdktn/provider-google'

new vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts">VertexAiRagCorpusTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VertexAiRagCorpusTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts">VertexAiRagCorpusTimeouts</a>

---


### VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference <a name="VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.Initializer"></a>

```typescript
import { vertexAiRagCorpus } from '@cdktn/provider-google'

new vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resetApiKeySecretVersion">resetApiKeySecretVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resetApiKeyString">resetApiKeyString</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApiKeySecretVersion` <a name="resetApiKeySecretVersion" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resetApiKeySecretVersion"></a>

```typescript
public resetApiKeySecretVersion(): void
```

##### `resetApiKeyString` <a name="resetApiKeyString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resetApiKeyString"></a>

```typescript
public resetApiKeyString(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeySecretVersionInput">apiKeySecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeyStringInput">apiKeyStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeySecretVersion">apiKeySecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeyString">apiKeyString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKeySecretVersionInput`<sup>Optional</sup> <a name="apiKeySecretVersionInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeySecretVersionInput"></a>

```typescript
public readonly apiKeySecretVersionInput: string;
```

- *Type:* string

---

##### `apiKeyStringInput`<sup>Optional</sup> <a name="apiKeyStringInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeyStringInput"></a>

```typescript
public readonly apiKeyStringInput: string;
```

- *Type:* string

---

##### `apiKeySecretVersion`<sup>Required</sup> <a name="apiKeySecretVersion" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeySecretVersion"></a>

```typescript
public readonly apiKeySecretVersion: string;
```

- *Type:* string

---

##### `apiKeyString`<sup>Required</sup> <a name="apiKeyString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeyString"></a>

```typescript
public readonly apiKeyString: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a>

---


### VertexAiRagCorpusVectorDbConfigApiAuthOutputReference <a name="VertexAiRagCorpusVectorDbConfigApiAuthOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.Initializer"></a>

```typescript
import { vertexAiRagCorpus } from '@cdktn/provider-google'

new vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.putApiKeyConfig">putApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.resetApiKeyConfig">resetApiKeyConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApiKeyConfig` <a name="putApiKeyConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.putApiKeyConfig"></a>

```typescript
public putApiKeyConfig(value: VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.putApiKeyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a>

---

##### `resetApiKeyConfig` <a name="resetApiKeyConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.resetApiKeyConfig"></a>

```typescript
public resetApiKeyConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.apiKeyConfig">apiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference">VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.apiKeyConfigInput">apiKeyConfigInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth">VertexAiRagCorpusVectorDbConfigApiAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKeyConfig`<sup>Required</sup> <a name="apiKeyConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.apiKeyConfig"></a>

```typescript
public readonly apiKeyConfig: VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference">VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference</a>

---

##### `apiKeyConfigInput`<sup>Optional</sup> <a name="apiKeyConfigInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.apiKeyConfigInput"></a>

```typescript
public readonly apiKeyConfigInput: VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiRagCorpusVectorDbConfigApiAuth;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth">VertexAiRagCorpusVectorDbConfigApiAuth</a>

---


### VertexAiRagCorpusVectorDbConfigOutputReference <a name="VertexAiRagCorpusVectorDbConfigOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.Initializer"></a>

```typescript
import { vertexAiRagCorpus } from '@cdktn/provider-google'

new vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putApiAuth">putApiAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putPinecone">putPinecone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putRagEmbeddingModelConfig">putRagEmbeddingModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putRagManagedDb">putRagManagedDb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putVertexVectorSearch">putVertexVectorSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resetApiAuth">resetApiAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resetPinecone">resetPinecone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resetRagEmbeddingModelConfig">resetRagEmbeddingModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resetRagManagedDb">resetRagManagedDb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resetVertexVectorSearch">resetVertexVectorSearch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApiAuth` <a name="putApiAuth" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putApiAuth"></a>

```typescript
public putApiAuth(value: VertexAiRagCorpusVectorDbConfigApiAuth): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putApiAuth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth">VertexAiRagCorpusVectorDbConfigApiAuth</a>

---

##### `putPinecone` <a name="putPinecone" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putPinecone"></a>

```typescript
public putPinecone(value: VertexAiRagCorpusVectorDbConfigPinecone): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putPinecone.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone">VertexAiRagCorpusVectorDbConfigPinecone</a>

---

##### `putRagEmbeddingModelConfig` <a name="putRagEmbeddingModelConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putRagEmbeddingModelConfig"></a>

```typescript
public putRagEmbeddingModelConfig(value: VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putRagEmbeddingModelConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a>

---

##### `putRagManagedDb` <a name="putRagManagedDb" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putRagManagedDb"></a>

```typescript
public putRagManagedDb(value: VertexAiRagCorpusVectorDbConfigRagManagedDb): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putRagManagedDb.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb">VertexAiRagCorpusVectorDbConfigRagManagedDb</a>

---

##### `putVertexVectorSearch` <a name="putVertexVectorSearch" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putVertexVectorSearch"></a>

```typescript
public putVertexVectorSearch(value: VertexAiRagCorpusVectorDbConfigVertexVectorSearch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putVertexVectorSearch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch">VertexAiRagCorpusVectorDbConfigVertexVectorSearch</a>

---

##### `resetApiAuth` <a name="resetApiAuth" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resetApiAuth"></a>

```typescript
public resetApiAuth(): void
```

##### `resetPinecone` <a name="resetPinecone" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resetPinecone"></a>

```typescript
public resetPinecone(): void
```

##### `resetRagEmbeddingModelConfig` <a name="resetRagEmbeddingModelConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resetRagEmbeddingModelConfig"></a>

```typescript
public resetRagEmbeddingModelConfig(): void
```

##### `resetRagManagedDb` <a name="resetRagManagedDb" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resetRagManagedDb"></a>

```typescript
public resetRagManagedDb(): void
```

##### `resetVertexVectorSearch` <a name="resetVertexVectorSearch" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resetVertexVectorSearch"></a>

```typescript
public resetVertexVectorSearch(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.apiAuth">apiAuth</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference">VertexAiRagCorpusVectorDbConfigApiAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.pinecone">pinecone</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference">VertexAiRagCorpusVectorDbConfigPineconeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.ragEmbeddingModelConfig">ragEmbeddingModelConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.ragManagedDb">ragManagedDb</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference">VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.vertexVectorSearch">vertexVectorSearch</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference">VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.apiAuthInput">apiAuthInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth">VertexAiRagCorpusVectorDbConfigApiAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.pineconeInput">pineconeInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone">VertexAiRagCorpusVectorDbConfigPinecone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.ragEmbeddingModelConfigInput">ragEmbeddingModelConfigInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.ragManagedDbInput">ragManagedDbInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb">VertexAiRagCorpusVectorDbConfigRagManagedDb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.vertexVectorSearchInput">vertexVectorSearchInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch">VertexAiRagCorpusVectorDbConfigVertexVectorSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig">VertexAiRagCorpusVectorDbConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiAuth`<sup>Required</sup> <a name="apiAuth" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.apiAuth"></a>

```typescript
public readonly apiAuth: VertexAiRagCorpusVectorDbConfigApiAuthOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference">VertexAiRagCorpusVectorDbConfigApiAuthOutputReference</a>

---

##### `pinecone`<sup>Required</sup> <a name="pinecone" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.pinecone"></a>

```typescript
public readonly pinecone: VertexAiRagCorpusVectorDbConfigPineconeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference">VertexAiRagCorpusVectorDbConfigPineconeOutputReference</a>

---

##### `ragEmbeddingModelConfig`<sup>Required</sup> <a name="ragEmbeddingModelConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.ragEmbeddingModelConfig"></a>

```typescript
public readonly ragEmbeddingModelConfig: VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference</a>

---

##### `ragManagedDb`<sup>Required</sup> <a name="ragManagedDb" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.ragManagedDb"></a>

```typescript
public readonly ragManagedDb: VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference">VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference</a>

---

##### `vertexVectorSearch`<sup>Required</sup> <a name="vertexVectorSearch" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.vertexVectorSearch"></a>

```typescript
public readonly vertexVectorSearch: VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference">VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference</a>

---

##### `apiAuthInput`<sup>Optional</sup> <a name="apiAuthInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.apiAuthInput"></a>

```typescript
public readonly apiAuthInput: VertexAiRagCorpusVectorDbConfigApiAuth;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth">VertexAiRagCorpusVectorDbConfigApiAuth</a>

---

##### `pineconeInput`<sup>Optional</sup> <a name="pineconeInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.pineconeInput"></a>

```typescript
public readonly pineconeInput: VertexAiRagCorpusVectorDbConfigPinecone;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone">VertexAiRagCorpusVectorDbConfigPinecone</a>

---

##### `ragEmbeddingModelConfigInput`<sup>Optional</sup> <a name="ragEmbeddingModelConfigInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.ragEmbeddingModelConfigInput"></a>

```typescript
public readonly ragEmbeddingModelConfigInput: VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a>

---

##### `ragManagedDbInput`<sup>Optional</sup> <a name="ragManagedDbInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.ragManagedDbInput"></a>

```typescript
public readonly ragManagedDbInput: VertexAiRagCorpusVectorDbConfigRagManagedDb;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb">VertexAiRagCorpusVectorDbConfigRagManagedDb</a>

---

##### `vertexVectorSearchInput`<sup>Optional</sup> <a name="vertexVectorSearchInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.vertexVectorSearchInput"></a>

```typescript
public readonly vertexVectorSearchInput: VertexAiRagCorpusVectorDbConfigVertexVectorSearch;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch">VertexAiRagCorpusVectorDbConfigVertexVectorSearch</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiRagCorpusVectorDbConfig;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig">VertexAiRagCorpusVectorDbConfig</a>

---


### VertexAiRagCorpusVectorDbConfigPineconeOutputReference <a name="VertexAiRagCorpusVectorDbConfigPineconeOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.Initializer"></a>

```typescript
import { vertexAiRagCorpus } from '@cdktn/provider-google'

new vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.indexNameInput">indexNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.indexName">indexName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone">VertexAiRagCorpusVectorDbConfigPinecone</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `indexNameInput`<sup>Optional</sup> <a name="indexNameInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.indexNameInput"></a>

```typescript
public readonly indexNameInput: string;
```

- *Type:* string

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.indexName"></a>

```typescript
public readonly indexName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiRagCorpusVectorDbConfigPinecone;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone">VertexAiRagCorpusVectorDbConfigPinecone</a>

---


### VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference <a name="VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.Initializer"></a>

```typescript
import { vertexAiRagCorpus } from '@cdktn/provider-google'

new vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.putVertexPredictionEndpoint">putVertexPredictionEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.resetVertexPredictionEndpoint">resetVertexPredictionEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVertexPredictionEndpoint` <a name="putVertexPredictionEndpoint" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.putVertexPredictionEndpoint"></a>

```typescript
public putVertexPredictionEndpoint(value: VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.putVertexPredictionEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a>

---

##### `resetVertexPredictionEndpoint` <a name="resetVertexPredictionEndpoint" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.resetVertexPredictionEndpoint"></a>

```typescript
public resetVertexPredictionEndpoint(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.vertexPredictionEndpoint">vertexPredictionEndpoint</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.vertexPredictionEndpointInput">vertexPredictionEndpointInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vertexPredictionEndpoint`<sup>Required</sup> <a name="vertexPredictionEndpoint" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.vertexPredictionEndpoint"></a>

```typescript
public readonly vertexPredictionEndpoint: VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference</a>

---

##### `vertexPredictionEndpointInput`<sup>Optional</sup> <a name="vertexPredictionEndpointInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.vertexPredictionEndpointInput"></a>

```typescript
public readonly vertexPredictionEndpointInput: VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a>

---


### VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference <a name="VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.Initializer"></a>

```typescript
import { vertexAiRagCorpus } from '@cdktn/provider-google'

new vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.model">model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.modelVersionId">modelVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.endpointInput">endpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

---

##### `modelVersionId`<sup>Required</sup> <a name="modelVersionId" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.modelVersionId"></a>

```typescript
public readonly modelVersionId: string;
```

- *Type:* string

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.endpointInput"></a>

```typescript
public readonly endpointInput: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a>

---


### VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference <a name="VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.Initializer"></a>

```typescript
import { vertexAiRagCorpus } from '@cdktn/provider-google'

new vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resetLeafCount">resetLeafCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resetTreeDepth">resetTreeDepth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLeafCount` <a name="resetLeafCount" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resetLeafCount"></a>

```typescript
public resetLeafCount(): void
```

##### `resetTreeDepth` <a name="resetTreeDepth" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resetTreeDepth"></a>

```typescript
public resetTreeDepth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.leafCountInput">leafCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.treeDepthInput">treeDepthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.leafCount">leafCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.treeDepth">treeDepth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn">VertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `leafCountInput`<sup>Optional</sup> <a name="leafCountInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.leafCountInput"></a>

```typescript
public readonly leafCountInput: number;
```

- *Type:* number

---

##### `treeDepthInput`<sup>Optional</sup> <a name="treeDepthInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.treeDepthInput"></a>

```typescript
public readonly treeDepthInput: number;
```

- *Type:* number

---

##### `leafCount`<sup>Required</sup> <a name="leafCount" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.leafCount"></a>

```typescript
public readonly leafCount: number;
```

- *Type:* number

---

##### `treeDepth`<sup>Required</sup> <a name="treeDepth" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.treeDepth"></a>

```typescript
public readonly treeDepth: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiRagCorpusVectorDbConfigRagManagedDbAnn;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn">VertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a>

---


### VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference <a name="VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.Initializer"></a>

```typescript
import { vertexAiRagCorpus } from '@cdktn/provider-google'

new vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnn">VertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiRagCorpusVectorDbConfigRagManagedDbKnn;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnn">VertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a>

---


### VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference <a name="VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.Initializer"></a>

```typescript
import { vertexAiRagCorpus } from '@cdktn/provider-google'

new vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.putAnn">putAnn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.putKnn">putKnn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resetAnn">resetAnn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resetKnn">resetKnn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnn` <a name="putAnn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.putAnn"></a>

```typescript
public putAnn(value: VertexAiRagCorpusVectorDbConfigRagManagedDbAnn): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.putAnn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn">VertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a>

---

##### `putKnn` <a name="putKnn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.putKnn"></a>

```typescript
public putKnn(value: VertexAiRagCorpusVectorDbConfigRagManagedDbKnn): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.putKnn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnn">VertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a>

---

##### `resetAnn` <a name="resetAnn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resetAnn"></a>

```typescript
public resetAnn(): void
```

##### `resetKnn` <a name="resetKnn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resetKnn"></a>

```typescript
public resetKnn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.ann">ann</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference">VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.knn">knn</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference">VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.annInput">annInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn">VertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.knnInput">knnInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnn">VertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb">VertexAiRagCorpusVectorDbConfigRagManagedDb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ann`<sup>Required</sup> <a name="ann" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.ann"></a>

```typescript
public readonly ann: VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference">VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference</a>

---

##### `knn`<sup>Required</sup> <a name="knn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.knn"></a>

```typescript
public readonly knn: VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference">VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference</a>

---

##### `annInput`<sup>Optional</sup> <a name="annInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.annInput"></a>

```typescript
public readonly annInput: VertexAiRagCorpusVectorDbConfigRagManagedDbAnn;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn">VertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a>

---

##### `knnInput`<sup>Optional</sup> <a name="knnInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.knnInput"></a>

```typescript
public readonly knnInput: VertexAiRagCorpusVectorDbConfigRagManagedDbKnn;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnn">VertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiRagCorpusVectorDbConfigRagManagedDb;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb">VertexAiRagCorpusVectorDbConfigRagManagedDb</a>

---


### VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference <a name="VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.Initializer"></a>

```typescript
import { vertexAiRagCorpus } from '@cdktn/provider-google'

new vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.indexEndpointInput">indexEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.indexInput">indexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.index">index</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.indexEndpoint">indexEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch">VertexAiRagCorpusVectorDbConfigVertexVectorSearch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `indexEndpointInput`<sup>Optional</sup> <a name="indexEndpointInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.indexEndpointInput"></a>

```typescript
public readonly indexEndpointInput: string;
```

- *Type:* string

---

##### `indexInput`<sup>Optional</sup> <a name="indexInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.indexInput"></a>

```typescript
public readonly indexInput: string;
```

- *Type:* string

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.index"></a>

```typescript
public readonly index: string;
```

- *Type:* string

---

##### `indexEndpoint`<sup>Required</sup> <a name="indexEndpoint" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.indexEndpoint"></a>

```typescript
public readonly indexEndpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiRagCorpusVectorDbConfigVertexVectorSearch;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch">VertexAiRagCorpusVectorDbConfigVertexVectorSearch</a>

---


### VertexAiRagCorpusVertexAiSearchConfigOutputReference <a name="VertexAiRagCorpusVertexAiSearchConfigOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.Initializer"></a>

```typescript
import { vertexAiRagCorpus } from '@cdktn/provider-google'

new vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.property.servingConfigInput">servingConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.property.servingConfig">servingConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig">VertexAiRagCorpusVertexAiSearchConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `servingConfigInput`<sup>Optional</sup> <a name="servingConfigInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.property.servingConfigInput"></a>

```typescript
public readonly servingConfigInput: string;
```

- *Type:* string

---

##### `servingConfig`<sup>Required</sup> <a name="servingConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.property.servingConfig"></a>

```typescript
public readonly servingConfig: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiRagCorpusVertexAiSearchConfig;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig">VertexAiRagCorpusVertexAiSearchConfig</a>

---



