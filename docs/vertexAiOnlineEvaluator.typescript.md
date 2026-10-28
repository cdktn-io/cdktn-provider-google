# `vertexAiOnlineEvaluator` Submodule <a name="`vertexAiOnlineEvaluator` Submodule" id="@cdktn/provider-google.vertexAiOnlineEvaluator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiOnlineEvaluator <a name="VertexAiOnlineEvaluator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator google_vertex_ai_online_evaluator}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer"></a>

```typescript
import { vertexAiOnlineEvaluator } from '@cdktn/provider-google'

new vertexAiOnlineEvaluator.VertexAiOnlineEvaluator(scope: Construct, id: string, config: VertexAiOnlineEvaluatorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig">VertexAiOnlineEvaluatorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig">VertexAiOnlineEvaluatorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putCloudObservability">putCloudObservability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putMetricSources">putMetricSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCloudObservability` <a name="putCloudObservability" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putCloudObservability"></a>

```typescript
public putCloudObservability(value: VertexAiOnlineEvaluatorCloudObservability): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putCloudObservability.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability">VertexAiOnlineEvaluatorCloudObservability</a>

---

##### `putConfig` <a name="putConfig" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putConfig"></a>

```typescript
public putConfig(value: VertexAiOnlineEvaluatorConfigA): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA">VertexAiOnlineEvaluatorConfigA</a>

---

##### `putMetricSources` <a name="putMetricSources" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putMetricSources"></a>

```typescript
public putMetricSources(value: IResolvable | VertexAiOnlineEvaluatorMetricSources[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putMetricSources.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources">VertexAiOnlineEvaluatorMetricSources</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putTimeouts"></a>

```typescript
public putTimeouts(value: VertexAiOnlineEvaluatorTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts">VertexAiOnlineEvaluatorTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a VertexAiOnlineEvaluator resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.isConstruct"></a>

```typescript
import { vertexAiOnlineEvaluator } from '@cdktn/provider-google'

vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.isTerraformElement"></a>

```typescript
import { vertexAiOnlineEvaluator } from '@cdktn/provider-google'

vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.isTerraformResource"></a>

```typescript
import { vertexAiOnlineEvaluator } from '@cdktn/provider-google'

vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.generateConfigForImport"></a>

```typescript
import { vertexAiOnlineEvaluator } from '@cdktn/provider-google'

vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a VertexAiOnlineEvaluator resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VertexAiOnlineEvaluator to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VertexAiOnlineEvaluator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the VertexAiOnlineEvaluator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.cloudObservability">cloudObservability</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference">VertexAiOnlineEvaluatorCloudObservabilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.config">config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference">VertexAiOnlineEvaluatorConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.metricSources">metricSources</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList">VertexAiOnlineEvaluatorMetricSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.stateDetails">stateDetails</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList">VertexAiOnlineEvaluatorStateDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference">VertexAiOnlineEvaluatorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.agentResourceInput">agentResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.cloudObservabilityInput">cloudObservabilityInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability">VertexAiOnlineEvaluatorCloudObservability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.configInput">configInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA">VertexAiOnlineEvaluatorConfigA</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.metricSourcesInput">metricSourcesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources">VertexAiOnlineEvaluatorMetricSources</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts">VertexAiOnlineEvaluatorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.agentResource">agentResource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `cloudObservability`<sup>Required</sup> <a name="cloudObservability" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.cloudObservability"></a>

```typescript
public readonly cloudObservability: VertexAiOnlineEvaluatorCloudObservabilityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference">VertexAiOnlineEvaluatorCloudObservabilityOutputReference</a>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.config"></a>

```typescript
public readonly config: VertexAiOnlineEvaluatorConfigAOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference">VertexAiOnlineEvaluatorConfigAOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `metricSources`<sup>Required</sup> <a name="metricSources" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.metricSources"></a>

```typescript
public readonly metricSources: VertexAiOnlineEvaluatorMetricSourcesList;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList">VertexAiOnlineEvaluatorMetricSourcesList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateDetails`<sup>Required</sup> <a name="stateDetails" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.stateDetails"></a>

```typescript
public readonly stateDetails: VertexAiOnlineEvaluatorStateDetailsList;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList">VertexAiOnlineEvaluatorStateDetailsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.timeouts"></a>

```typescript
public readonly timeouts: VertexAiOnlineEvaluatorTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference">VertexAiOnlineEvaluatorTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `agentResourceInput`<sup>Optional</sup> <a name="agentResourceInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.agentResourceInput"></a>

```typescript
public readonly agentResourceInput: string;
```

- *Type:* string

---

##### `cloudObservabilityInput`<sup>Optional</sup> <a name="cloudObservabilityInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.cloudObservabilityInput"></a>

```typescript
public readonly cloudObservabilityInput: VertexAiOnlineEvaluatorCloudObservability;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability">VertexAiOnlineEvaluatorCloudObservability</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.configInput"></a>

```typescript
public readonly configInput: VertexAiOnlineEvaluatorConfigA;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA">VertexAiOnlineEvaluatorConfigA</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metricSourcesInput`<sup>Optional</sup> <a name="metricSourcesInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.metricSourcesInput"></a>

```typescript
public readonly metricSourcesInput: IResolvable | VertexAiOnlineEvaluatorMetricSources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources">VertexAiOnlineEvaluatorMetricSources</a>[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VertexAiOnlineEvaluatorTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts">VertexAiOnlineEvaluatorTimeouts</a>

---

##### `agentResource`<sup>Required</sup> <a name="agentResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.agentResource"></a>

```typescript
public readonly agentResource: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiOnlineEvaluatorCloudObservability <a name="VertexAiOnlineEvaluatorCloudObservability" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability.Initializer"></a>

```typescript
import { vertexAiOnlineEvaluator } from '@cdktn/provider-google'

const vertexAiOnlineEvaluatorCloudObservability: vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability.property.openTelemetry">openTelemetry</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry">VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry</a></code> | open_telemetry block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability.property.logView">logView</a></code> | <code>string</code> | Optional log view that will be used to query logs. If empty, the project's default view ('projects/{{project_id}}') will be used. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability.property.sessionScope">sessionScope</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope">VertexAiOnlineEvaluatorCloudObservabilitySessionScope</a></code> | session_scope block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability.property.traceScope">traceScope</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScope">VertexAiOnlineEvaluatorCloudObservabilityTraceScope</a></code> | trace_scope block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability.property.traceView">traceView</a></code> | <code>string</code> | Optional trace view that will be used to query traces. |

---

##### `openTelemetry`<sup>Required</sup> <a name="openTelemetry" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability.property.openTelemetry"></a>

```typescript
public readonly openTelemetry: VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry">VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry</a>

open_telemetry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#open_telemetry VertexAiOnlineEvaluator#open_telemetry}

---

##### `logView`<sup>Optional</sup> <a name="logView" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability.property.logView"></a>

```typescript
public readonly logView: string;
```

- *Type:* string

Optional log view that will be used to query logs. If empty, the project's default view ('projects/{{project_id}}') will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#log_view VertexAiOnlineEvaluator#log_view}

---

##### `sessionScope`<sup>Optional</sup> <a name="sessionScope" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability.property.sessionScope"></a>

```typescript
public readonly sessionScope: VertexAiOnlineEvaluatorCloudObservabilitySessionScope;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope">VertexAiOnlineEvaluatorCloudObservabilitySessionScope</a>

session_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#session_scope VertexAiOnlineEvaluator#session_scope}

---

##### `traceScope`<sup>Optional</sup> <a name="traceScope" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability.property.traceScope"></a>

```typescript
public readonly traceScope: VertexAiOnlineEvaluatorCloudObservabilityTraceScope;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScope">VertexAiOnlineEvaluatorCloudObservabilityTraceScope</a>

trace_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#trace_scope VertexAiOnlineEvaluator#trace_scope}

---

##### `traceView`<sup>Optional</sup> <a name="traceView" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability.property.traceView"></a>

```typescript
public readonly traceView: string;
```

- *Type:* string

Optional trace view that will be used to query traces.

If empty, the
'_AllSpans' view from the '_Trace' US bucket will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#trace_view VertexAiOnlineEvaluator#trace_view}

---

### VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry <a name="VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry.Initializer"></a>

```typescript
import { vertexAiOnlineEvaluator } from '@cdktn/provider-google'

const vertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry: vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry.property.semconvVersion">semconvVersion</a></code> | <code>string</code> | Defines which version of the OTel Semantic Convention the data follows. Can be "1.39.0" or newer. |

---

##### `semconvVersion`<sup>Required</sup> <a name="semconvVersion" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry.property.semconvVersion"></a>

```typescript
public readonly semconvVersion: string;
```

- *Type:* string

Defines which version of the OTel Semantic Convention the data follows. Can be "1.39.0" or newer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#semconv_version VertexAiOnlineEvaluator#semconv_version}

---

### VertexAiOnlineEvaluatorCloudObservabilitySessionScope <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScope" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope.Initializer"></a>

```typescript
import { vertexAiOnlineEvaluator } from '@cdktn/provider-google'

const vertexAiOnlineEvaluatorCloudObservabilitySessionScope: vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope.property.filter">filter</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope.property.inactivityTrigger">inactivityTrigger</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger</a></code> | inactivity_trigger block. |

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope.property.filter"></a>

```typescript
public readonly filter: IResolvable | VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#filter VertexAiOnlineEvaluator#filter}

---

##### `inactivityTrigger`<sup>Optional</sup> <a name="inactivityTrigger" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope.property.inactivityTrigger"></a>

```typescript
public readonly inactivityTrigger: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger</a>

inactivity_trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#inactivity_trigger VertexAiOnlineEvaluator#inactivity_trigger}

---

### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.Initializer"></a>

```typescript
import { vertexAiOnlineEvaluator } from '@cdktn/provider-google'

const vertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter: vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.duration">duration</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration</a></code> | duration block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.modelCallErrors">modelCallErrors</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors</a></code> | model_call_errors block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.modelCalls">modelCalls</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls</a></code> | model_calls block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.toolCallErrors">toolCallErrors</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors</a></code> | tool_call_errors block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.toolCalls">toolCalls</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls</a></code> | tool_calls block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.totalTokenUsage">totalTokenUsage</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage</a></code> | total_token_usage block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.userTurns">userTurns</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns</a></code> | user_turns block. |

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.duration"></a>

```typescript
public readonly duration: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration</a>

duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#duration VertexAiOnlineEvaluator#duration}

---

##### `modelCallErrors`<sup>Optional</sup> <a name="modelCallErrors" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.modelCallErrors"></a>

```typescript
public readonly modelCallErrors: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors</a>

model_call_errors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#model_call_errors VertexAiOnlineEvaluator#model_call_errors}

---

##### `modelCalls`<sup>Optional</sup> <a name="modelCalls" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.modelCalls"></a>

```typescript
public readonly modelCalls: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls</a>

model_calls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#model_calls VertexAiOnlineEvaluator#model_calls}

---

##### `toolCallErrors`<sup>Optional</sup> <a name="toolCallErrors" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.toolCallErrors"></a>

```typescript
public readonly toolCallErrors: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors</a>

tool_call_errors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#tool_call_errors VertexAiOnlineEvaluator#tool_call_errors}

---

##### `toolCalls`<sup>Optional</sup> <a name="toolCalls" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.toolCalls"></a>

```typescript
public readonly toolCalls: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls</a>

tool_calls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#tool_calls VertexAiOnlineEvaluator#tool_calls}

---

##### `totalTokenUsage`<sup>Optional</sup> <a name="totalTokenUsage" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.totalTokenUsage"></a>

```typescript
public readonly totalTokenUsage: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage</a>

total_token_usage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#total_token_usage VertexAiOnlineEvaluator#total_token_usage}

---

##### `userTurns`<sup>Optional</sup> <a name="userTurns" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.userTurns"></a>

```typescript
public readonly userTurns: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns</a>

user_turns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#user_turns VertexAiOnlineEvaluator#user_turns}

---

### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration.Initializer"></a>

```typescript
import { vertexAiOnlineEvaluator } from '@cdktn/provider-google'

const vertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration: vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration.property.value">value</a></code> | <code>number</code> | The value to compare against. |

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#comparison_operator VertexAiOnlineEvaluator#comparison_operator}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#value VertexAiOnlineEvaluator#value}

---

### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors.Initializer"></a>

```typescript
import { vertexAiOnlineEvaluator } from '@cdktn/provider-google'

const vertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors: vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors.property.value">value</a></code> | <code>number</code> | The value to compare against. |

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#comparison_operator VertexAiOnlineEvaluator#comparison_operator}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#value VertexAiOnlineEvaluator#value}

---

### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls.Initializer"></a>

```typescript
import { vertexAiOnlineEvaluator } from '@cdktn/provider-google'

const vertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls: vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls.property.value">value</a></code> | <code>number</code> | The value to compare against. |

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#comparison_operator VertexAiOnlineEvaluator#comparison_operator}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#value VertexAiOnlineEvaluator#value}

---

### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors.Initializer"></a>

```typescript
import { vertexAiOnlineEvaluator } from '@cdktn/provider-google'

const vertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors: vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors.property.value">value</a></code> | <code>number</code> | The value to compare against. |

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#comparison_operator VertexAiOnlineEvaluator#comparison_operator}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#value VertexAiOnlineEvaluator#value}

---

### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls.Initializer"></a>

```typescript
import { vertexAiOnlineEvaluator } from '@cdktn/provider-google'

const vertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls: vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls.property.value">value</a></code> | <code>number</code> | The value to compare against. |

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#comparison_operator VertexAiOnlineEvaluator#comparison_operator}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#value VertexAiOnlineEvaluator#value}

---

### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage.Initializer"></a>

```typescript
import { vertexAiOnlineEvaluator } from '@cdktn/provider-google'

const vertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage: vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage.property.value">value</a></code> | <code>number</code> | The value to compare against. |

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#comparison_operator VertexAiOnlineEvaluator#comparison_operator}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#value VertexAiOnlineEvaluator#value}

---

### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns.Initializer"></a>

```typescript
import { vertexAiOnlineEvaluator } from '@cdktn/provider-google'

const vertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns: vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns.property.value">value</a></code> | <code>number</code> | The value to compare against. |

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#comparison_operator VertexAiOnlineEvaluator#comparison_operator}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#value VertexAiOnlineEvaluator#value}

---

### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger.Initializer"></a>

```typescript
import { vertexAiOnlineEvaluator } from '@cdktn/provider-google'

const vertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger: vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger.property.threshold">threshold</a></code> | <code>string</code> | The amount of time that must pass with no new traces before a session is considered ready for evaluation. |

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger.property.threshold"></a>

```typescript
public readonly threshold: string;
```

- *Type:* string

The amount of time that must pass with no new traces before a session is considered ready for evaluation.

Must be a positive
duration no greater than 7 days (604800 seconds), e.g. "3600s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#threshold VertexAiOnlineEvaluator#threshold}

---

### VertexAiOnlineEvaluatorCloudObservabilityTraceScope <a name="VertexAiOnlineEvaluatorCloudObservabilityTraceScope" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScope.Initializer"></a>

```typescript
import { vertexAiOnlineEvaluator } from '@cdktn/provider-google'

const vertexAiOnlineEvaluatorCloudObservabilityTraceScope: vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScope = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScope.property.filter">filter</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>[]</code> | filter block. |

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScope.property.filter"></a>

```typescript
public readonly filter: IResolvable | VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#filter VertexAiOnlineEvaluator#filter}

---

### VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter <a name="VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter.Initializer"></a>

```typescript
import { vertexAiOnlineEvaluator } from '@cdktn/provider-google'

const vertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter: vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter.property.duration">duration</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration</a></code> | duration block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter.property.totalTokenUsage">totalTokenUsage</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage</a></code> | total_token_usage block. |

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter.property.duration"></a>

```typescript
public readonly duration: VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration</a>

duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#duration VertexAiOnlineEvaluator#duration}

---

##### `totalTokenUsage`<sup>Optional</sup> <a name="totalTokenUsage" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter.property.totalTokenUsage"></a>

```typescript
public readonly totalTokenUsage: VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage</a>

total_token_usage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#total_token_usage VertexAiOnlineEvaluator#total_token_usage}

---

### VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration <a name="VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration.Initializer"></a>

```typescript
import { vertexAiOnlineEvaluator } from '@cdktn/provider-google'

const vertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration: vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration.property.value">value</a></code> | <code>number</code> | The value to compare against. |

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#comparison_operator VertexAiOnlineEvaluator#comparison_operator}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#value VertexAiOnlineEvaluator#value}

---

### VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage <a name="VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage.Initializer"></a>

```typescript
import { vertexAiOnlineEvaluator } from '@cdktn/provider-google'

const vertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage: vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage.property.value">value</a></code> | <code>number</code> | The value to compare against. |

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#comparison_operator VertexAiOnlineEvaluator#comparison_operator}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#value VertexAiOnlineEvaluator#value}

---

### VertexAiOnlineEvaluatorConfig <a name="VertexAiOnlineEvaluatorConfig" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.Initializer"></a>

```typescript
import { vertexAiOnlineEvaluator } from '@cdktn/provider-google'

const vertexAiOnlineEvaluatorConfig: vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.agentResource">agentResource</a></code> | <code>string</code> | The name of the agent that the OnlineEvaluator evaluates periodically. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.cloudObservability">cloudObservability</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability">VertexAiOnlineEvaluatorCloudObservability</a></code> | cloud_observability block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.config">config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA">VertexAiOnlineEvaluatorConfigA</a></code> | config block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.metricSources">metricSources</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources">VertexAiOnlineEvaluatorMetricSources</a>[]</code> | metric_sources block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.displayName">displayName</a></code> | <code>string</code> | Human-readable name for the OnlineEvaluator. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#id VertexAiOnlineEvaluator#id}. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#project VertexAiOnlineEvaluator#project}. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.region">region</a></code> | <code>string</code> | The region of the OnlineEvaluator (e.g. us-central1). If unset, the provider's region is used. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts">VertexAiOnlineEvaluatorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `agentResource`<sup>Required</sup> <a name="agentResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.agentResource"></a>

```typescript
public readonly agentResource: string;
```

- *Type:* string

The name of the agent that the OnlineEvaluator evaluates periodically.

This value is used to filter the traces with a matching cloud.resource_id
and link the evaluation results with relevant dashboards/UIs. This field
is immutable; once set, it cannot be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#agent_resource VertexAiOnlineEvaluator#agent_resource}

---

##### `cloudObservability`<sup>Required</sup> <a name="cloudObservability" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.cloudObservability"></a>

```typescript
public readonly cloudObservability: VertexAiOnlineEvaluatorCloudObservability;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability">VertexAiOnlineEvaluatorCloudObservability</a>

cloud_observability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#cloud_observability VertexAiOnlineEvaluator#cloud_observability}

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.config"></a>

```typescript
public readonly config: VertexAiOnlineEvaluatorConfigA;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA">VertexAiOnlineEvaluatorConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#config VertexAiOnlineEvaluator#config}

---

##### `metricSources`<sup>Required</sup> <a name="metricSources" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.metricSources"></a>

```typescript
public readonly metricSources: IResolvable | VertexAiOnlineEvaluatorMetricSources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources">VertexAiOnlineEvaluatorMetricSources</a>[]

metric_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#metric_sources VertexAiOnlineEvaluator#metric_sources}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#deletion_policy VertexAiOnlineEvaluator#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Human-readable name for the OnlineEvaluator.

The name doesn't have to be
unique. The name can consist of any UTF-8 characters. The maximum length
is 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#display_name VertexAiOnlineEvaluator#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#id VertexAiOnlineEvaluator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#project VertexAiOnlineEvaluator#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region of the OnlineEvaluator (e.g. us-central1). If unset, the provider's region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#region VertexAiOnlineEvaluator#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VertexAiOnlineEvaluatorTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts">VertexAiOnlineEvaluatorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#timeouts VertexAiOnlineEvaluator#timeouts}

---

### VertexAiOnlineEvaluatorConfigA <a name="VertexAiOnlineEvaluatorConfigA" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA.Initializer"></a>

```typescript
import { vertexAiOnlineEvaluator } from '@cdktn/provider-google'

const vertexAiOnlineEvaluatorConfigA: vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA.property.maxEvaluatedSamplesPerRun">maxEvaluatedSamplesPerRun</a></code> | <code>string</code> | The maximum number of evaluations to perform per run. If set to 0, the number is unbounded. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA.property.randomSampling">randomSampling</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSampling">VertexAiOnlineEvaluatorConfigRandomSampling</a></code> | random_sampling block. |

---

##### `maxEvaluatedSamplesPerRun`<sup>Optional</sup> <a name="maxEvaluatedSamplesPerRun" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA.property.maxEvaluatedSamplesPerRun"></a>

```typescript
public readonly maxEvaluatedSamplesPerRun: string;
```

- *Type:* string

The maximum number of evaluations to perform per run. If set to 0, the number is unbounded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#max_evaluated_samples_per_run VertexAiOnlineEvaluator#max_evaluated_samples_per_run}

---

##### `randomSampling`<sup>Optional</sup> <a name="randomSampling" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA.property.randomSampling"></a>

```typescript
public readonly randomSampling: VertexAiOnlineEvaluatorConfigRandomSampling;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSampling">VertexAiOnlineEvaluatorConfigRandomSampling</a>

random_sampling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#random_sampling VertexAiOnlineEvaluator#random_sampling}

---

### VertexAiOnlineEvaluatorConfigRandomSampling <a name="VertexAiOnlineEvaluatorConfigRandomSampling" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSampling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSampling.Initializer"></a>

```typescript
import { vertexAiOnlineEvaluator } from '@cdktn/provider-google'

const vertexAiOnlineEvaluatorConfigRandomSampling: vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSampling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSampling.property.percentage">percentage</a></code> | <code>number</code> | The percentage of traces to sample for evaluation. Must be an integer between 1 and 100. |

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSampling.property.percentage"></a>

```typescript
public readonly percentage: number;
```

- *Type:* number

The percentage of traces to sample for evaluation. Must be an integer between 1 and 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#percentage VertexAiOnlineEvaluator#percentage}

---

### VertexAiOnlineEvaluatorMetricSources <a name="VertexAiOnlineEvaluatorMetricSources" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources.Initializer"></a>

```typescript
import { vertexAiOnlineEvaluator } from '@cdktn/provider-google'

const vertexAiOnlineEvaluatorMetricSources: vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources.property.metric">metric</a></code> | <code>string</code> | Inline metric config, provided as a JSON-formatted string using camelCase field names to match the API format (see the [Metric API documentation](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/Metric)). The suggested predefined 'metricSpecName' values depend on the evaluation scope configured in 'cloud_observability'; a predefined metric must match the scope or the create request will be rejected:   - 'trace_scope' (single trace): 'final_response_quality_v1',     'tool_use_quality_v1', 'hallucination_v1', 'safety_v1'.   - 'session_scope' (multi-turn session):     'multi_turn_task_success_v1', 'multi_turn_tool_use_quality_v1',     'multi_turn_trajectory_quality_v1'. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources.property.metricResourceName">metricResourceName</a></code> | <code>string</code> | Resource name of a registered metric (a 'google_vertex_ai_evaluation_metric'), e.g. projects/{{project}}/locations/{{region}}/evaluationMetrics/{{id}}. |

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources.property.metric"></a>

```typescript
public readonly metric: string;
```

- *Type:* string

Inline metric config, provided as a JSON-formatted string using camelCase field names to match the API format (see the [Metric API documentation](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/Metric)). The suggested predefined 'metricSpecName' values depend on the evaluation scope configured in 'cloud_observability'; a predefined metric must match the scope or the create request will be rejected:   - 'trace_scope' (single trace): 'final_response_quality_v1',     'tool_use_quality_v1', 'hallucination_v1', 'safety_v1'.   - 'session_scope' (multi-turn session):     'multi_turn_task_success_v1', 'multi_turn_tool_use_quality_v1',     'multi_turn_trajectory_quality_v1'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#metric VertexAiOnlineEvaluator#metric}

---

##### `metricResourceName`<sup>Optional</sup> <a name="metricResourceName" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources.property.metricResourceName"></a>

```typescript
public readonly metricResourceName: string;
```

- *Type:* string

Resource name of a registered metric (a 'google_vertex_ai_evaluation_metric'), e.g. projects/{{project}}/locations/{{region}}/evaluationMetrics/{{id}}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#metric_resource_name VertexAiOnlineEvaluator#metric_resource_name}

---

### VertexAiOnlineEvaluatorStateDetails <a name="VertexAiOnlineEvaluatorStateDetails" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetails.Initializer"></a>

```typescript
import { vertexAiOnlineEvaluator } from '@cdktn/provider-google'

const vertexAiOnlineEvaluatorStateDetails: vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetails = { ... }
```


### VertexAiOnlineEvaluatorTimeouts <a name="VertexAiOnlineEvaluatorTimeouts" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts.Initializer"></a>

```typescript
import { vertexAiOnlineEvaluator } from '@cdktn/provider-google'

const vertexAiOnlineEvaluatorTimeouts: vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#create VertexAiOnlineEvaluator#create}. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#delete VertexAiOnlineEvaluator#delete}. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#update VertexAiOnlineEvaluator#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#create VertexAiOnlineEvaluator#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#delete VertexAiOnlineEvaluator#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_online_evaluator#update VertexAiOnlineEvaluator#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.Initializer"></a>

```typescript
import { vertexAiOnlineEvaluator } from '@cdktn/provider-google'

new vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.semconvVersionInput">semconvVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.semconvVersion">semconvVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry">VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `semconvVersionInput`<sup>Optional</sup> <a name="semconvVersionInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.semconvVersionInput"></a>

```typescript
public readonly semconvVersionInput: string;
```

- *Type:* string

---

##### `semconvVersion`<sup>Required</sup> <a name="semconvVersion" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.semconvVersion"></a>

```typescript
public readonly semconvVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry">VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry</a>

---


### VertexAiOnlineEvaluatorCloudObservabilityOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilityOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.Initializer"></a>

```typescript
import { vertexAiOnlineEvaluator } from '@cdktn/provider-google'

new vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.putOpenTelemetry">putOpenTelemetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.putSessionScope">putSessionScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.putTraceScope">putTraceScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetLogView">resetLogView</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetSessionScope">resetSessionScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetTraceScope">resetTraceScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetTraceView">resetTraceView</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOpenTelemetry` <a name="putOpenTelemetry" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.putOpenTelemetry"></a>

```typescript
public putOpenTelemetry(value: VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.putOpenTelemetry.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry">VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry</a>

---

##### `putSessionScope` <a name="putSessionScope" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.putSessionScope"></a>

```typescript
public putSessionScope(value: VertexAiOnlineEvaluatorCloudObservabilitySessionScope): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.putSessionScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope">VertexAiOnlineEvaluatorCloudObservabilitySessionScope</a>

---

##### `putTraceScope` <a name="putTraceScope" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.putTraceScope"></a>

```typescript
public putTraceScope(value: VertexAiOnlineEvaluatorCloudObservabilityTraceScope): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.putTraceScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScope">VertexAiOnlineEvaluatorCloudObservabilityTraceScope</a>

---

##### `resetLogView` <a name="resetLogView" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetLogView"></a>

```typescript
public resetLogView(): void
```

##### `resetSessionScope` <a name="resetSessionScope" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetSessionScope"></a>

```typescript
public resetSessionScope(): void
```

##### `resetTraceScope` <a name="resetTraceScope" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetTraceScope"></a>

```typescript
public resetTraceScope(): void
```

##### `resetTraceView` <a name="resetTraceView" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetTraceView"></a>

```typescript
public resetTraceView(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.openTelemetry">openTelemetry</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference">VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.sessionScope">sessionScope</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceScope">traceScope</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.logViewInput">logViewInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.openTelemetryInput">openTelemetryInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry">VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.sessionScopeInput">sessionScopeInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope">VertexAiOnlineEvaluatorCloudObservabilitySessionScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceScopeInput">traceScopeInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScope">VertexAiOnlineEvaluatorCloudObservabilityTraceScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceViewInput">traceViewInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.logView">logView</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceView">traceView</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability">VertexAiOnlineEvaluatorCloudObservability</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `openTelemetry`<sup>Required</sup> <a name="openTelemetry" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.openTelemetry"></a>

```typescript
public readonly openTelemetry: VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference">VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference</a>

---

##### `sessionScope`<sup>Required</sup> <a name="sessionScope" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.sessionScope"></a>

```typescript
public readonly sessionScope: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference</a>

---

##### `traceScope`<sup>Required</sup> <a name="traceScope" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceScope"></a>

```typescript
public readonly traceScope: VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference</a>

---

##### `logViewInput`<sup>Optional</sup> <a name="logViewInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.logViewInput"></a>

```typescript
public readonly logViewInput: string;
```

- *Type:* string

---

##### `openTelemetryInput`<sup>Optional</sup> <a name="openTelemetryInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.openTelemetryInput"></a>

```typescript
public readonly openTelemetryInput: VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry">VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry</a>

---

##### `sessionScopeInput`<sup>Optional</sup> <a name="sessionScopeInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.sessionScopeInput"></a>

```typescript
public readonly sessionScopeInput: VertexAiOnlineEvaluatorCloudObservabilitySessionScope;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope">VertexAiOnlineEvaluatorCloudObservabilitySessionScope</a>

---

##### `traceScopeInput`<sup>Optional</sup> <a name="traceScopeInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceScopeInput"></a>

```typescript
public readonly traceScopeInput: VertexAiOnlineEvaluatorCloudObservabilityTraceScope;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScope">VertexAiOnlineEvaluatorCloudObservabilityTraceScope</a>

---

##### `traceViewInput`<sup>Optional</sup> <a name="traceViewInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceViewInput"></a>

```typescript
public readonly traceViewInput: string;
```

- *Type:* string

---

##### `logView`<sup>Required</sup> <a name="logView" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.logView"></a>

```typescript
public readonly logView: string;
```

- *Type:* string

---

##### `traceView`<sup>Required</sup> <a name="traceView" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceView"></a>

```typescript
public readonly traceView: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiOnlineEvaluatorCloudObservability;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability">VertexAiOnlineEvaluatorCloudObservability</a>

---


### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.Initializer"></a>

```typescript
import { vertexAiOnlineEvaluator } from '@cdktn/provider-google'

new vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.comparisonOperatorInput"></a>

```typescript
public readonly comparisonOperatorInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration</a>

---


### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.Initializer"></a>

```typescript
import { vertexAiOnlineEvaluator } from '@cdktn/provider-google'

new vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.get"></a>

```typescript
public get(index: number): VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>[]

---


### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.Initializer"></a>

```typescript
import { vertexAiOnlineEvaluator } from '@cdktn/provider-google'

new vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.comparisonOperatorInput"></a>

```typescript
public readonly comparisonOperatorInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors</a>

---


### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.Initializer"></a>

```typescript
import { vertexAiOnlineEvaluator } from '@cdktn/provider-google'

new vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.comparisonOperatorInput"></a>

```typescript
public readonly comparisonOperatorInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls</a>

---


### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer"></a>

```typescript
import { vertexAiOnlineEvaluator } from '@cdktn/provider-google'

new vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putDuration">putDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putModelCallErrors">putModelCallErrors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putModelCalls">putModelCalls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putToolCallErrors">putToolCallErrors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putToolCalls">putToolCalls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putTotalTokenUsage">putTotalTokenUsage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putUserTurns">putUserTurns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetDuration">resetDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetModelCallErrors">resetModelCallErrors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetModelCalls">resetModelCalls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetToolCallErrors">resetToolCallErrors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetToolCalls">resetToolCalls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetTotalTokenUsage">resetTotalTokenUsage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetUserTurns">resetUserTurns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDuration` <a name="putDuration" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putDuration"></a>

```typescript
public putDuration(value: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putDuration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration</a>

---

##### `putModelCallErrors` <a name="putModelCallErrors" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putModelCallErrors"></a>

```typescript
public putModelCallErrors(value: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putModelCallErrors.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors</a>

---

##### `putModelCalls` <a name="putModelCalls" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putModelCalls"></a>

```typescript
public putModelCalls(value: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putModelCalls.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls</a>

---

##### `putToolCallErrors` <a name="putToolCallErrors" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putToolCallErrors"></a>

```typescript
public putToolCallErrors(value: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putToolCallErrors.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors</a>

---

##### `putToolCalls` <a name="putToolCalls" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putToolCalls"></a>

```typescript
public putToolCalls(value: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putToolCalls.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls</a>

---

##### `putTotalTokenUsage` <a name="putTotalTokenUsage" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putTotalTokenUsage"></a>

```typescript
public putTotalTokenUsage(value: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putTotalTokenUsage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage</a>

---

##### `putUserTurns` <a name="putUserTurns" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putUserTurns"></a>

```typescript
public putUserTurns(value: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putUserTurns.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns</a>

---

##### `resetDuration` <a name="resetDuration" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetDuration"></a>

```typescript
public resetDuration(): void
```

##### `resetModelCallErrors` <a name="resetModelCallErrors" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetModelCallErrors"></a>

```typescript
public resetModelCallErrors(): void
```

##### `resetModelCalls` <a name="resetModelCalls" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetModelCalls"></a>

```typescript
public resetModelCalls(): void
```

##### `resetToolCallErrors` <a name="resetToolCallErrors" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetToolCallErrors"></a>

```typescript
public resetToolCallErrors(): void
```

##### `resetToolCalls` <a name="resetToolCalls" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetToolCalls"></a>

```typescript
public resetToolCalls(): void
```

##### `resetTotalTokenUsage` <a name="resetTotalTokenUsage" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetTotalTokenUsage"></a>

```typescript
public resetTotalTokenUsage(): void
```

##### `resetUserTurns` <a name="resetUserTurns" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetUserTurns"></a>

```typescript
public resetUserTurns(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.duration">duration</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCallErrors">modelCallErrors</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCalls">modelCalls</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCallErrors">toolCallErrors</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCalls">toolCalls</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.totalTokenUsage">totalTokenUsage</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.userTurns">userTurns</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.durationInput">durationInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCallErrorsInput">modelCallErrorsInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCallsInput">modelCallsInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCallErrorsInput">toolCallErrorsInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCallsInput">toolCallsInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.totalTokenUsageInput">totalTokenUsageInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.userTurnsInput">userTurnsInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.duration"></a>

```typescript
public readonly duration: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference</a>

---

##### `modelCallErrors`<sup>Required</sup> <a name="modelCallErrors" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCallErrors"></a>

```typescript
public readonly modelCallErrors: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference</a>

---

##### `modelCalls`<sup>Required</sup> <a name="modelCalls" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCalls"></a>

```typescript
public readonly modelCalls: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference</a>

---

##### `toolCallErrors`<sup>Required</sup> <a name="toolCallErrors" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCallErrors"></a>

```typescript
public readonly toolCallErrors: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference</a>

---

##### `toolCalls`<sup>Required</sup> <a name="toolCalls" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCalls"></a>

```typescript
public readonly toolCalls: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference</a>

---

##### `totalTokenUsage`<sup>Required</sup> <a name="totalTokenUsage" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.totalTokenUsage"></a>

```typescript
public readonly totalTokenUsage: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference</a>

---

##### `userTurns`<sup>Required</sup> <a name="userTurns" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.userTurns"></a>

```typescript
public readonly userTurns: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference</a>

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration</a>

---

##### `modelCallErrorsInput`<sup>Optional</sup> <a name="modelCallErrorsInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCallErrorsInput"></a>

```typescript
public readonly modelCallErrorsInput: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors</a>

---

##### `modelCallsInput`<sup>Optional</sup> <a name="modelCallsInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCallsInput"></a>

```typescript
public readonly modelCallsInput: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls</a>

---

##### `toolCallErrorsInput`<sup>Optional</sup> <a name="toolCallErrorsInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCallErrorsInput"></a>

```typescript
public readonly toolCallErrorsInput: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors</a>

---

##### `toolCallsInput`<sup>Optional</sup> <a name="toolCallsInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCallsInput"></a>

```typescript
public readonly toolCallsInput: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls</a>

---

##### `totalTokenUsageInput`<sup>Optional</sup> <a name="totalTokenUsageInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.totalTokenUsageInput"></a>

```typescript
public readonly totalTokenUsageInput: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage</a>

---

##### `userTurnsInput`<sup>Optional</sup> <a name="userTurnsInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.userTurnsInput"></a>

```typescript
public readonly userTurnsInput: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>

---


### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.Initializer"></a>

```typescript
import { vertexAiOnlineEvaluator } from '@cdktn/provider-google'

new vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.comparisonOperatorInput"></a>

```typescript
public readonly comparisonOperatorInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors</a>

---


### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.Initializer"></a>

```typescript
import { vertexAiOnlineEvaluator } from '@cdktn/provider-google'

new vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.comparisonOperatorInput"></a>

```typescript
public readonly comparisonOperatorInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls</a>

---


### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.Initializer"></a>

```typescript
import { vertexAiOnlineEvaluator } from '@cdktn/provider-google'

new vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.comparisonOperatorInput"></a>

```typescript
public readonly comparisonOperatorInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage</a>

---


### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.Initializer"></a>

```typescript
import { vertexAiOnlineEvaluator } from '@cdktn/provider-google'

new vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.comparisonOperatorInput"></a>

```typescript
public readonly comparisonOperatorInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns</a>

---


### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.Initializer"></a>

```typescript
import { vertexAiOnlineEvaluator } from '@cdktn/provider-google'

new vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.threshold">threshold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.thresholdInput"></a>

```typescript
public readonly thresholdInput: string;
```

- *Type:* string

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.threshold"></a>

```typescript
public readonly threshold: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger</a>

---


### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.Initializer"></a>

```typescript
import { vertexAiOnlineEvaluator } from '@cdktn/provider-google'

new vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.putInactivityTrigger">putInactivityTrigger</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.resetInactivityTrigger">resetInactivityTrigger</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilter` <a name="putFilter" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.putFilter"></a>

```typescript
public putFilter(value: IResolvable | VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.putFilter.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>[]

---

##### `putInactivityTrigger` <a name="putInactivityTrigger" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.putInactivityTrigger"></a>

```typescript
public putInactivityTrigger(value: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.putInactivityTrigger.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetInactivityTrigger` <a name="resetInactivityTrigger" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.resetInactivityTrigger"></a>

```typescript
public resetInactivityTrigger(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.inactivityTrigger">inactivityTrigger</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.filterInput">filterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.inactivityTriggerInput">inactivityTriggerInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope">VertexAiOnlineEvaluatorCloudObservabilitySessionScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.filter"></a>

```typescript
public readonly filter: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList</a>

---

##### `inactivityTrigger`<sup>Required</sup> <a name="inactivityTrigger" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.inactivityTrigger"></a>

```typescript
public readonly inactivityTrigger: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>[]

---

##### `inactivityTriggerInput`<sup>Optional</sup> <a name="inactivityTriggerInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.inactivityTriggerInput"></a>

```typescript
public readonly inactivityTriggerInput: VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiOnlineEvaluatorCloudObservabilitySessionScope;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope">VertexAiOnlineEvaluatorCloudObservabilitySessionScope</a>

---


### VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.Initializer"></a>

```typescript
import { vertexAiOnlineEvaluator } from '@cdktn/provider-google'

new vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.comparisonOperatorInput"></a>

```typescript
public readonly comparisonOperatorInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration</a>

---


### VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList <a name="VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.Initializer"></a>

```typescript
import { vertexAiOnlineEvaluator } from '@cdktn/provider-google'

new vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.get"></a>

```typescript
public get(index: number): VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>[]

---


### VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer"></a>

```typescript
import { vertexAiOnlineEvaluator } from '@cdktn/provider-google'

new vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.putDuration">putDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.putTotalTokenUsage">putTotalTokenUsage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.resetDuration">resetDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.resetTotalTokenUsage">resetTotalTokenUsage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDuration` <a name="putDuration" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.putDuration"></a>

```typescript
public putDuration(value: VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.putDuration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration</a>

---

##### `putTotalTokenUsage` <a name="putTotalTokenUsage" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.putTotalTokenUsage"></a>

```typescript
public putTotalTokenUsage(value: VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.putTotalTokenUsage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage</a>

---

##### `resetDuration` <a name="resetDuration" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.resetDuration"></a>

```typescript
public resetDuration(): void
```

##### `resetTotalTokenUsage` <a name="resetTotalTokenUsage" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.resetTotalTokenUsage"></a>

```typescript
public resetTotalTokenUsage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.duration">duration</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.totalTokenUsage">totalTokenUsage</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.durationInput">durationInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.totalTokenUsageInput">totalTokenUsageInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.duration"></a>

```typescript
public readonly duration: VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference</a>

---

##### `totalTokenUsage`<sup>Required</sup> <a name="totalTokenUsage" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.totalTokenUsage"></a>

```typescript
public readonly totalTokenUsage: VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference</a>

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration</a>

---

##### `totalTokenUsageInput`<sup>Optional</sup> <a name="totalTokenUsageInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.totalTokenUsageInput"></a>

```typescript
public readonly totalTokenUsageInput: VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>

---


### VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.Initializer"></a>

```typescript
import { vertexAiOnlineEvaluator } from '@cdktn/provider-google'

new vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.comparisonOperatorInput"></a>

```typescript
public readonly comparisonOperatorInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage</a>

---


### VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.Initializer"></a>

```typescript
import { vertexAiOnlineEvaluator } from '@cdktn/provider-google'

new vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.resetFilter">resetFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilter` <a name="putFilter" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.putFilter"></a>

```typescript
public putFilter(value: IResolvable | VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.putFilter.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.resetFilter"></a>

```typescript
public resetFilter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.filterInput">filterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScope">VertexAiOnlineEvaluatorCloudObservabilityTraceScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.filter"></a>

```typescript
public readonly filter: VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiOnlineEvaluatorCloudObservabilityTraceScope;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScope">VertexAiOnlineEvaluatorCloudObservabilityTraceScope</a>

---


### VertexAiOnlineEvaluatorConfigAOutputReference <a name="VertexAiOnlineEvaluatorConfigAOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.Initializer"></a>

```typescript
import { vertexAiOnlineEvaluator } from '@cdktn/provider-google'

new vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.putRandomSampling">putRandomSampling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.resetMaxEvaluatedSamplesPerRun">resetMaxEvaluatedSamplesPerRun</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.resetRandomSampling">resetRandomSampling</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRandomSampling` <a name="putRandomSampling" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.putRandomSampling"></a>

```typescript
public putRandomSampling(value: VertexAiOnlineEvaluatorConfigRandomSampling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.putRandomSampling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSampling">VertexAiOnlineEvaluatorConfigRandomSampling</a>

---

##### `resetMaxEvaluatedSamplesPerRun` <a name="resetMaxEvaluatedSamplesPerRun" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.resetMaxEvaluatedSamplesPerRun"></a>

```typescript
public resetMaxEvaluatedSamplesPerRun(): void
```

##### `resetRandomSampling` <a name="resetRandomSampling" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.resetRandomSampling"></a>

```typescript
public resetRandomSampling(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.randomSampling">randomSampling</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference">VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.maxEvaluatedSamplesPerRunInput">maxEvaluatedSamplesPerRunInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.randomSamplingInput">randomSamplingInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSampling">VertexAiOnlineEvaluatorConfigRandomSampling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.maxEvaluatedSamplesPerRun">maxEvaluatedSamplesPerRun</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA">VertexAiOnlineEvaluatorConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `randomSampling`<sup>Required</sup> <a name="randomSampling" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.randomSampling"></a>

```typescript
public readonly randomSampling: VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference">VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference</a>

---

##### `maxEvaluatedSamplesPerRunInput`<sup>Optional</sup> <a name="maxEvaluatedSamplesPerRunInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.maxEvaluatedSamplesPerRunInput"></a>

```typescript
public readonly maxEvaluatedSamplesPerRunInput: string;
```

- *Type:* string

---

##### `randomSamplingInput`<sup>Optional</sup> <a name="randomSamplingInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.randomSamplingInput"></a>

```typescript
public readonly randomSamplingInput: VertexAiOnlineEvaluatorConfigRandomSampling;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSampling">VertexAiOnlineEvaluatorConfigRandomSampling</a>

---

##### `maxEvaluatedSamplesPerRun`<sup>Required</sup> <a name="maxEvaluatedSamplesPerRun" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.maxEvaluatedSamplesPerRun"></a>

```typescript
public readonly maxEvaluatedSamplesPerRun: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiOnlineEvaluatorConfigA;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA">VertexAiOnlineEvaluatorConfigA</a>

---


### VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference <a name="VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.Initializer"></a>

```typescript
import { vertexAiOnlineEvaluator } from '@cdktn/provider-google'

new vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.percentageInput">percentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.percentage">percentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSampling">VertexAiOnlineEvaluatorConfigRandomSampling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `percentageInput`<sup>Optional</sup> <a name="percentageInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.percentageInput"></a>

```typescript
public readonly percentageInput: number;
```

- *Type:* number

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.percentage"></a>

```typescript
public readonly percentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiOnlineEvaluatorConfigRandomSampling;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSampling">VertexAiOnlineEvaluatorConfigRandomSampling</a>

---


### VertexAiOnlineEvaluatorMetricSourcesList <a name="VertexAiOnlineEvaluatorMetricSourcesList" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.Initializer"></a>

```typescript
import { vertexAiOnlineEvaluator } from '@cdktn/provider-google'

new vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.get"></a>

```typescript
public get(index: number): VertexAiOnlineEvaluatorMetricSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources">VertexAiOnlineEvaluatorMetricSources</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VertexAiOnlineEvaluatorMetricSources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources">VertexAiOnlineEvaluatorMetricSources</a>[]

---


### VertexAiOnlineEvaluatorMetricSourcesOutputReference <a name="VertexAiOnlineEvaluatorMetricSourcesOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer"></a>

```typescript
import { vertexAiOnlineEvaluator } from '@cdktn/provider-google'

new vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.resetMetric">resetMetric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.resetMetricResourceName">resetMetricResourceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetric` <a name="resetMetric" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.resetMetric"></a>

```typescript
public resetMetric(): void
```

##### `resetMetricResourceName` <a name="resetMetricResourceName" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.resetMetricResourceName"></a>

```typescript
public resetMetricResourceName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metricInput">metricInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metricResourceNameInput">metricResourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metric">metric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metricResourceName">metricResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources">VertexAiOnlineEvaluatorMetricSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metricInput"></a>

```typescript
public readonly metricInput: string;
```

- *Type:* string

---

##### `metricResourceNameInput`<sup>Optional</sup> <a name="metricResourceNameInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metricResourceNameInput"></a>

```typescript
public readonly metricResourceNameInput: string;
```

- *Type:* string

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metric"></a>

```typescript
public readonly metric: string;
```

- *Type:* string

---

##### `metricResourceName`<sup>Required</sup> <a name="metricResourceName" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metricResourceName"></a>

```typescript
public readonly metricResourceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VertexAiOnlineEvaluatorMetricSources;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources">VertexAiOnlineEvaluatorMetricSources</a>

---


### VertexAiOnlineEvaluatorStateDetailsList <a name="VertexAiOnlineEvaluatorStateDetailsList" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.Initializer"></a>

```typescript
import { vertexAiOnlineEvaluator } from '@cdktn/provider-google'

new vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.get"></a>

```typescript
public get(index: number): VertexAiOnlineEvaluatorStateDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### VertexAiOnlineEvaluatorStateDetailsOutputReference <a name="VertexAiOnlineEvaluatorStateDetailsOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer"></a>

```typescript
import { vertexAiOnlineEvaluator } from '@cdktn/provider-google'

new vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetails">VertexAiOnlineEvaluatorStateDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiOnlineEvaluatorStateDetails;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetails">VertexAiOnlineEvaluatorStateDetails</a>

---


### VertexAiOnlineEvaluatorTimeoutsOutputReference <a name="VertexAiOnlineEvaluatorTimeoutsOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.Initializer"></a>

```typescript
import { vertexAiOnlineEvaluator } from '@cdktn/provider-google'

new vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts">VertexAiOnlineEvaluatorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VertexAiOnlineEvaluatorTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts">VertexAiOnlineEvaluatorTimeouts</a>

---



