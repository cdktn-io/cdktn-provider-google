# `vertexAiEvaluationItem` Submodule <a name="`vertexAiEvaluationItem` Submodule" id="@cdktn/provider-google.vertexAiEvaluationItem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiEvaluationItem <a name="VertexAiEvaluationItem" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item google_vertex_ai_evaluation_item}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer"></a>

```typescript
import { vertexAiEvaluationItem } from '@cdktn/provider-google'

new vertexAiEvaluationItem.VertexAiEvaluationItem(scope: Construct, id: string, config: VertexAiEvaluationItemConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig">VertexAiEvaluationItemConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig">VertexAiEvaluationItemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.putEvaluationRequest">putEvaluationRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.resetEvaluationRequest">resetEvaluationRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.resetGcsUri">resetGcsUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEvaluationRequest` <a name="putEvaluationRequest" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.putEvaluationRequest"></a>

```typescript
public putEvaluationRequest(value: VertexAiEvaluationItemEvaluationRequest): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.putEvaluationRequest.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequest">VertexAiEvaluationItemEvaluationRequest</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.putTimeouts"></a>

```typescript
public putTimeouts(value: VertexAiEvaluationItemTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeouts">VertexAiEvaluationItemTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetEvaluationRequest` <a name="resetEvaluationRequest" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.resetEvaluationRequest"></a>

```typescript
public resetEvaluationRequest(): void
```

##### `resetGcsUri` <a name="resetGcsUri" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.resetGcsUri"></a>

```typescript
public resetGcsUri(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a VertexAiEvaluationItem resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.isConstruct"></a>

```typescript
import { vertexAiEvaluationItem } from '@cdktn/provider-google'

vertexAiEvaluationItem.VertexAiEvaluationItem.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.isTerraformElement"></a>

```typescript
import { vertexAiEvaluationItem } from '@cdktn/provider-google'

vertexAiEvaluationItem.VertexAiEvaluationItem.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.isTerraformResource"></a>

```typescript
import { vertexAiEvaluationItem } from '@cdktn/provider-google'

vertexAiEvaluationItem.VertexAiEvaluationItem.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.generateConfigForImport"></a>

```typescript
import { vertexAiEvaluationItem } from '@cdktn/provider-google'

vertexAiEvaluationItem.VertexAiEvaluationItem.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a VertexAiEvaluationItem resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VertexAiEvaluationItem to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VertexAiEvaluationItem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the VertexAiEvaluationItem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.error">error</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList">VertexAiEvaluationItemErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.evaluationRequest">evaluationRequest</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference">VertexAiEvaluationItemEvaluationRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.evaluationResponse">evaluationResponse</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList">VertexAiEvaluationItemEvaluationResponseList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference">VertexAiEvaluationItemTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.evaluationItemTypeInput">evaluationItemTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.evaluationRequestInput">evaluationRequestInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequest">VertexAiEvaluationItemEvaluationRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.gcsUriInput">gcsUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.metadataInput">metadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeouts">VertexAiEvaluationItemTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.evaluationItemType">evaluationItemType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.gcsUri">gcsUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.metadata">metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.error"></a>

```typescript
public readonly error: VertexAiEvaluationItemErrorList;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList">VertexAiEvaluationItemErrorList</a>

---

##### `evaluationRequest`<sup>Required</sup> <a name="evaluationRequest" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.evaluationRequest"></a>

```typescript
public readonly evaluationRequest: VertexAiEvaluationItemEvaluationRequestOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference">VertexAiEvaluationItemEvaluationRequestOutputReference</a>

---

##### `evaluationResponse`<sup>Required</sup> <a name="evaluationResponse" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.evaluationResponse"></a>

```typescript
public readonly evaluationResponse: VertexAiEvaluationItemEvaluationResponseList;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList">VertexAiEvaluationItemEvaluationResponseList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.timeouts"></a>

```typescript
public readonly timeouts: VertexAiEvaluationItemTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference">VertexAiEvaluationItemTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `evaluationItemTypeInput`<sup>Optional</sup> <a name="evaluationItemTypeInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.evaluationItemTypeInput"></a>

```typescript
public readonly evaluationItemTypeInput: string;
```

- *Type:* string

---

##### `evaluationRequestInput`<sup>Optional</sup> <a name="evaluationRequestInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.evaluationRequestInput"></a>

```typescript
public readonly evaluationRequestInput: VertexAiEvaluationItemEvaluationRequest;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequest">VertexAiEvaluationItemEvaluationRequest</a>

---

##### `gcsUriInput`<sup>Optional</sup> <a name="gcsUriInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.gcsUriInput"></a>

```typescript
public readonly gcsUriInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.metadataInput"></a>

```typescript
public readonly metadataInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VertexAiEvaluationItemTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeouts">VertexAiEvaluationItemTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `evaluationItemType`<sup>Required</sup> <a name="evaluationItemType" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.evaluationItemType"></a>

```typescript
public readonly evaluationItemType: string;
```

- *Type:* string

---

##### `gcsUri`<sup>Required</sup> <a name="gcsUri" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.gcsUri"></a>

```typescript
public readonly gcsUri: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItem.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiEvaluationItemConfig <a name="VertexAiEvaluationItemConfig" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.Initializer"></a>

```typescript
import { vertexAiEvaluationItem } from '@cdktn/provider-google'

const vertexAiEvaluationItemConfig: vertexAiEvaluationItem.VertexAiEvaluationItemConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.displayName">displayName</a></code> | <code>string</code> | The user-friendly display name for the EvaluationItem. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.evaluationItemType">evaluationItemType</a></code> | <code>string</code> | The type of the EvaluationItem. Possible values: ["REQUEST", "RESULT"]. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.region">region</a></code> | <code>string</code> | The region of the EvaluationItem. eg us-central1. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.evaluationRequest">evaluationRequest</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequest">VertexAiEvaluationItemEvaluationRequest</a></code> | evaluation_request block. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.gcsUri">gcsUri</a></code> | <code>string</code> | The Cloud Storage object where the request or response is stored. Exactly one of 'evaluation_request' or 'gcs_uri' can be set. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#id VertexAiEvaluationItem#id}. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels for the EvaluationItem. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.metadata">metadata</a></code> | <code>string</code> | User-defined metadata for this evaluation item as a JSON string. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#project VertexAiEvaluationItem#project}. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeouts">VertexAiEvaluationItemTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The user-friendly display name for the EvaluationItem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#display_name VertexAiEvaluationItem#display_name}

---

##### `evaluationItemType`<sup>Required</sup> <a name="evaluationItemType" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.evaluationItemType"></a>

```typescript
public readonly evaluationItemType: string;
```

- *Type:* string

The type of the EvaluationItem. Possible values: ["REQUEST", "RESULT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#evaluation_item_type VertexAiEvaluationItem#evaluation_item_type}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region of the EvaluationItem. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#region VertexAiEvaluationItem#region}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#deletion_policy VertexAiEvaluationItem#deletion_policy}

---

##### `evaluationRequest`<sup>Optional</sup> <a name="evaluationRequest" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.evaluationRequest"></a>

```typescript
public readonly evaluationRequest: VertexAiEvaluationItemEvaluationRequest;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequest">VertexAiEvaluationItemEvaluationRequest</a>

evaluation_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#evaluation_request VertexAiEvaluationItem#evaluation_request}

---

##### `gcsUri`<sup>Optional</sup> <a name="gcsUri" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.gcsUri"></a>

```typescript
public readonly gcsUri: string;
```

- *Type:* string

The Cloud Storage object where the request or response is stored. Exactly one of 'evaluation_request' or 'gcs_uri' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#gcs_uri VertexAiEvaluationItem#gcs_uri}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#id VertexAiEvaluationItem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels for the EvaluationItem.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#labels VertexAiEvaluationItem#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

User-defined metadata for this evaluation item as a JSON string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#metadata VertexAiEvaluationItem#metadata}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#project VertexAiEvaluationItem#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VertexAiEvaluationItemTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeouts">VertexAiEvaluationItemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#timeouts VertexAiEvaluationItem#timeouts}

---

### VertexAiEvaluationItemError <a name="VertexAiEvaluationItemError" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemError.Initializer"></a>

```typescript
import { vertexAiEvaluationItem } from '@cdktn/provider-google'

const vertexAiEvaluationItemError: vertexAiEvaluationItem.VertexAiEvaluationItemError = { ... }
```


### VertexAiEvaluationItemEvaluationRequest <a name="VertexAiEvaluationItemEvaluationRequest" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequest"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequest.Initializer"></a>

```typescript
import { vertexAiEvaluationItem } from '@cdktn/provider-google'

const vertexAiEvaluationItemEvaluationRequest: vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequest = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequest.property.candidateResponses">candidateResponses</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses">VertexAiEvaluationItemEvaluationRequestCandidateResponses</a>[]</code> | candidate_responses block. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequest.property.goldenResponse">goldenResponse</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponse">VertexAiEvaluationItemEvaluationRequestGoldenResponse</a></code> | golden_response block. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequest.property.prompt">prompt</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt">VertexAiEvaluationItemEvaluationRequestPrompt</a></code> | prompt block. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequest.property.rubrics">rubrics</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics">VertexAiEvaluationItemEvaluationRequestRubrics</a>[]</code> | rubrics block. |

---

##### `candidateResponses`<sup>Optional</sup> <a name="candidateResponses" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequest.property.candidateResponses"></a>

```typescript
public readonly candidateResponses: IResolvable | VertexAiEvaluationItemEvaluationRequestCandidateResponses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses">VertexAiEvaluationItemEvaluationRequestCandidateResponses</a>[]

candidate_responses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#candidate_responses VertexAiEvaluationItem#candidate_responses}

---

##### `goldenResponse`<sup>Optional</sup> <a name="goldenResponse" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequest.property.goldenResponse"></a>

```typescript
public readonly goldenResponse: VertexAiEvaluationItemEvaluationRequestGoldenResponse;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponse">VertexAiEvaluationItemEvaluationRequestGoldenResponse</a>

golden_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#golden_response VertexAiEvaluationItem#golden_response}

---

##### `prompt`<sup>Optional</sup> <a name="prompt" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequest.property.prompt"></a>

```typescript
public readonly prompt: VertexAiEvaluationItemEvaluationRequestPrompt;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt">VertexAiEvaluationItemEvaluationRequestPrompt</a>

prompt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#prompt VertexAiEvaluationItem#prompt}

---

##### `rubrics`<sup>Optional</sup> <a name="rubrics" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequest.property.rubrics"></a>

```typescript
public readonly rubrics: IResolvable | VertexAiEvaluationItemEvaluationRequestRubrics[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics">VertexAiEvaluationItemEvaluationRequestRubrics</a>[]

rubrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#rubrics VertexAiEvaluationItem#rubrics}

---

### VertexAiEvaluationItemEvaluationRequestCandidateResponses <a name="VertexAiEvaluationItemEvaluationRequestCandidateResponses" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses.Initializer"></a>

```typescript
import { vertexAiEvaluationItem } from '@cdktn/provider-google'

const vertexAiEvaluationItemEvaluationRequestCandidateResponses: vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses.property.candidate">candidate</a></code> | <code>string</code> | The name of the candidate that produced the response. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses.property.agentData">agentData</a></code> | <code>string</code> | Represents the complete execution trace of a multi-turn conversation, which can involve single or multiple agents, as a JSON string. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses.property.text">text</a></code> | <code>string</code> | Text response. At most one of 'text', 'value', or 'agent_data' can be set. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses.property.value">value</a></code> | <code>string</code> | Fields and values that can be used to populate the response template, as a JSON string. |

---

##### `candidate`<sup>Required</sup> <a name="candidate" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses.property.candidate"></a>

```typescript
public readonly candidate: string;
```

- *Type:* string

The name of the candidate that produced the response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#candidate VertexAiEvaluationItem#candidate}

---

##### `agentData`<sup>Optional</sup> <a name="agentData" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses.property.agentData"></a>

```typescript
public readonly agentData: string;
```

- *Type:* string

Represents the complete execution trace of a multi-turn conversation, which can involve single or multiple agents, as a JSON string.

This
field is used to provide the full output of an agent's run, including
all turns and events, for direct evaluation.
At most one of 'text', 'value', or 'agent_data' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#agent_data VertexAiEvaluationItem#agent_data}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

Text response. At most one of 'text', 'value', or 'agent_data' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#text VertexAiEvaluationItem#text}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Fields and values that can be used to populate the response template, as a JSON string.

At most one of 'text', 'value', or 'agent_data' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#value VertexAiEvaluationItem#value}

---

### VertexAiEvaluationItemEvaluationRequestCandidateResponsesError <a name="VertexAiEvaluationItemEvaluationRequestCandidateResponsesError" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesError.Initializer"></a>

```typescript
import { vertexAiEvaluationItem } from '@cdktn/provider-google'

const vertexAiEvaluationItemEvaluationRequestCandidateResponsesError: vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesError = { ... }
```


### VertexAiEvaluationItemEvaluationRequestGoldenResponse <a name="VertexAiEvaluationItemEvaluationRequestGoldenResponse" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponse.Initializer"></a>

```typescript
import { vertexAiEvaluationItem } from '@cdktn/provider-google'

const vertexAiEvaluationItemEvaluationRequestGoldenResponse: vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponse = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponse.property.candidate">candidate</a></code> | <code>string</code> | The name of the candidate that produced the response. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponse.property.agentData">agentData</a></code> | <code>string</code> | Represents the complete execution trace of a multi-turn conversation, which can involve single or multiple agents, as a JSON string. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponse.property.text">text</a></code> | <code>string</code> | Text response. At most one of 'text', 'value', or 'agent_data' can be set. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponse.property.value">value</a></code> | <code>string</code> | Fields and values that can be used to populate the response template, as a JSON string. |

---

##### `candidate`<sup>Required</sup> <a name="candidate" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponse.property.candidate"></a>

```typescript
public readonly candidate: string;
```

- *Type:* string

The name of the candidate that produced the response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#candidate VertexAiEvaluationItem#candidate}

---

##### `agentData`<sup>Optional</sup> <a name="agentData" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponse.property.agentData"></a>

```typescript
public readonly agentData: string;
```

- *Type:* string

Represents the complete execution trace of a multi-turn conversation, which can involve single or multiple agents, as a JSON string.

This
field is used to provide the full output of an agent's run, including
all turns and events, for direct evaluation.
At most one of 'text', 'value', or 'agent_data' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#agent_data VertexAiEvaluationItem#agent_data}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponse.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

Text response. At most one of 'text', 'value', or 'agent_data' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#text VertexAiEvaluationItem#text}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponse.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Fields and values that can be used to populate the response template, as a JSON string.

At most one of 'text', 'value', or 'agent_data' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#value VertexAiEvaluationItem#value}

---

### VertexAiEvaluationItemEvaluationRequestGoldenResponseError <a name="VertexAiEvaluationItemEvaluationRequestGoldenResponseError" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseError.Initializer"></a>

```typescript
import { vertexAiEvaluationItem } from '@cdktn/provider-google'

const vertexAiEvaluationItemEvaluationRequestGoldenResponseError: vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseError = { ... }
```


### VertexAiEvaluationItemEvaluationRequestPrompt <a name="VertexAiEvaluationItemEvaluationRequestPrompt" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt.Initializer"></a>

```typescript
import { vertexAiEvaluationItem } from '@cdktn/provider-google'

const vertexAiEvaluationItemEvaluationRequestPrompt: vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt.property.agentData">agentData</a></code> | <code>string</code> | Represents the complete execution trace of a multi-turn conversation, which can involve single or multiple agents, as a JSON string. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt.property.promptTemplateData">promptTemplateData</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData">VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData</a></code> | prompt_template_data block. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt.property.text">text</a></code> | <code>string</code> | Text prompt. At most one of 'text', 'value', 'prompt_template_data', 'agent_data', or 'user_scenario' can be set. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt.property.userScenario">userScenario</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenario">VertexAiEvaluationItemEvaluationRequestPromptUserScenario</a></code> | user_scenario block. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt.property.value">value</a></code> | <code>string</code> | Fields and values that can be used to populate the prompt template, as a JSON string. |

---

##### `agentData`<sup>Optional</sup> <a name="agentData" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt.property.agentData"></a>

```typescript
public readonly agentData: string;
```

- *Type:* string

Represents the complete execution trace of a multi-turn conversation, which can involve single or multiple agents, as a JSON string.

This
serves as the input context for agent scraping.
At most one of 'text', 'value', 'prompt_template_data', 'agent_data', or 'user_scenario' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#agent_data VertexAiEvaluationItem#agent_data}

---

##### `promptTemplateData`<sup>Optional</sup> <a name="promptTemplateData" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt.property.promptTemplateData"></a>

```typescript
public readonly promptTemplateData: VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData">VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData</a>

prompt_template_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#prompt_template_data VertexAiEvaluationItem#prompt_template_data}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

Text prompt. At most one of 'text', 'value', 'prompt_template_data', 'agent_data', or 'user_scenario' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#text VertexAiEvaluationItem#text}

---

##### `userScenario`<sup>Optional</sup> <a name="userScenario" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt.property.userScenario"></a>

```typescript
public readonly userScenario: VertexAiEvaluationItemEvaluationRequestPromptUserScenario;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenario">VertexAiEvaluationItemEvaluationRequestPromptUserScenario</a>

user_scenario block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#user_scenario VertexAiEvaluationItem#user_scenario}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Fields and values that can be used to populate the prompt template, as a JSON string.

At most one of 'text', 'value', 'prompt_template_data', 'agent_data', or 'user_scenario' can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#value VertexAiEvaluationItem#value}

---

### VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData <a name="VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData.Initializer"></a>

```typescript
import { vertexAiEvaluationItem } from '@cdktn/provider-google'

const vertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData: vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData.property.values">values</a></code> | <code>string</code> | The values for fields in the prompt template, as a JSON string mapping field names to Content objects. |

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData.property.values"></a>

```typescript
public readonly values: string;
```

- *Type:* string

The values for fields in the prompt template, as a JSON string mapping field names to Content objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#values VertexAiEvaluationItem#values}

---

### VertexAiEvaluationItemEvaluationRequestPromptUserScenario <a name="VertexAiEvaluationItemEvaluationRequestPromptUserScenario" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenario"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenario.Initializer"></a>

```typescript
import { vertexAiEvaluationItem } from '@cdktn/provider-google'

const vertexAiEvaluationItemEvaluationRequestPromptUserScenario: vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenario = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenario.property.conversationPlan">conversationPlan</a></code> | <code>string</code> | The plan for the conversation, used to drive the multi-turn agent run and generate the simulated agent evaluation dataset. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenario.property.startingPrompt">startingPrompt</a></code> | <code>string</code> | The prompt that starts the conversation between the simulated user and the agent under test. |

---

##### `conversationPlan`<sup>Required</sup> <a name="conversationPlan" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenario.property.conversationPlan"></a>

```typescript
public readonly conversationPlan: string;
```

- *Type:* string

The plan for the conversation, used to drive the multi-turn agent run and generate the simulated agent evaluation dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#conversation_plan VertexAiEvaluationItem#conversation_plan}

---

##### `startingPrompt`<sup>Required</sup> <a name="startingPrompt" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenario.property.startingPrompt"></a>

```typescript
public readonly startingPrompt: string;
```

- *Type:* string

The prompt that starts the conversation between the simulated user and the agent under test.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#starting_prompt VertexAiEvaluationItem#starting_prompt}

---

### VertexAiEvaluationItemEvaluationRequestRubrics <a name="VertexAiEvaluationItemEvaluationRequestRubrics" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics.Initializer"></a>

```typescript
import { vertexAiEvaluationItem } from '@cdktn/provider-google'

const vertexAiEvaluationItemEvaluationRequestRubrics: vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#name VertexAiEvaluationItem#name}. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics.property.displayName">displayName</a></code> | <code>string</code> | Human-readable name for the group. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics.property.groupId">groupId</a></code> | <code>string</code> | Unique identifier for the group. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics.property.rubrics">rubrics</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics">VertexAiEvaluationItemEvaluationRequestRubricsRubrics</a>[]</code> | rubrics block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#name VertexAiEvaluationItem#name}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Human-readable name for the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#display_name VertexAiEvaluationItem#display_name}

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

Unique identifier for the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#group_id VertexAiEvaluationItem#group_id}

---

##### `rubrics`<sup>Optional</sup> <a name="rubrics" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics.property.rubrics"></a>

```typescript
public readonly rubrics: IResolvable | VertexAiEvaluationItemEvaluationRequestRubricsRubrics[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics">VertexAiEvaluationItemEvaluationRequestRubricsRubrics</a>[]

rubrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#rubrics VertexAiEvaluationItem#rubrics}

---

### VertexAiEvaluationItemEvaluationRequestRubricsRubrics <a name="VertexAiEvaluationItemEvaluationRequestRubricsRubrics" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics.Initializer"></a>

```typescript
import { vertexAiEvaluationItem } from '@cdktn/provider-google'

const vertexAiEvaluationItemEvaluationRequestRubricsRubrics: vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics.property.content">content</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent">VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent</a></code> | content block. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics.property.importance">importance</a></code> | <code>string</code> | The relative importance of this rubric. Possible values: ["HIGH", "MEDIUM", "LOW"]. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics.property.rubricId">rubricId</a></code> | <code>string</code> | Unique identifier for the rubric. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics.property.type">type</a></code> | <code>string</code> | A type designator for the rubric, e.g. 'SUMMARIZATION_QUALITY'. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics.property.content"></a>

```typescript
public readonly content: VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent">VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent</a>

content block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#content VertexAiEvaluationItem#content}

---

##### `importance`<sup>Optional</sup> <a name="importance" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics.property.importance"></a>

```typescript
public readonly importance: string;
```

- *Type:* string

The relative importance of this rubric. Possible values: ["HIGH", "MEDIUM", "LOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#importance VertexAiEvaluationItem#importance}

---

##### `rubricId`<sup>Optional</sup> <a name="rubricId" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics.property.rubricId"></a>

```typescript
public readonly rubricId: string;
```

- *Type:* string

Unique identifier for the rubric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#rubric_id VertexAiEvaluationItem#rubric_id}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

A type designator for the rubric, e.g. 'SUMMARIZATION_QUALITY'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#type VertexAiEvaluationItem#type}

---

### VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent <a name="VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent.Initializer"></a>

```typescript
import { vertexAiEvaluationItem } from '@cdktn/provider-google'

const vertexAiEvaluationItemEvaluationRequestRubricsRubricsContent: vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent.property.property">property</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty">VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty</a></code> | property block. |

---

##### `property`<sup>Optional</sup> <a name="property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent.property.property"></a>

```typescript
public readonly property: VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty">VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty</a>

property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#property VertexAiEvaluationItem#property}

---

### VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty <a name="VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty.Initializer"></a>

```typescript
import { vertexAiEvaluationItem } from '@cdktn/provider-google'

const vertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty: vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty.property.description">description</a></code> | <code>string</code> | Description of the property being evaluated. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the property being evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#description VertexAiEvaluationItem#description}

---

### VertexAiEvaluationItemEvaluationResponse <a name="VertexAiEvaluationItemEvaluationResponse" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponse.Initializer"></a>

```typescript
import { vertexAiEvaluationItem } from '@cdktn/provider-google'

const vertexAiEvaluationItemEvaluationResponse: vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponse = { ... }
```


### VertexAiEvaluationItemEvaluationResponseCandidateResults <a name="VertexAiEvaluationItemEvaluationResponseCandidateResults" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResults"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResults.Initializer"></a>

```typescript
import { vertexAiEvaluationItem } from '@cdktn/provider-google'

const vertexAiEvaluationItemEvaluationResponseCandidateResults: vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResults = { ... }
```


### VertexAiEvaluationItemEvaluationResponseCandidateResultsError <a name="VertexAiEvaluationItemEvaluationResponseCandidateResultsError" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsError.Initializer"></a>

```typescript
import { vertexAiEvaluationItem } from '@cdktn/provider-google'

const vertexAiEvaluationItemEvaluationResponseCandidateResultsError: vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsError = { ... }
```


### VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts <a name="VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts.Initializer"></a>

```typescript
import { vertexAiEvaluationItem } from '@cdktn/provider-google'

const vertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts: vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts = { ... }
```


### VertexAiEvaluationItemTimeouts <a name="VertexAiEvaluationItemTimeouts" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeouts.Initializer"></a>

```typescript
import { vertexAiEvaluationItem } from '@cdktn/provider-google'

const vertexAiEvaluationItemTimeouts: vertexAiEvaluationItem.VertexAiEvaluationItemTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#create VertexAiEvaluationItem#create}. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#delete VertexAiEvaluationItem#delete}. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#update VertexAiEvaluationItem#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#create VertexAiEvaluationItem#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#delete VertexAiEvaluationItem#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#update VertexAiEvaluationItem#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiEvaluationItemErrorList <a name="VertexAiEvaluationItemErrorList" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.Initializer"></a>

```typescript
import { vertexAiEvaluationItem } from '@cdktn/provider-google'

new vertexAiEvaluationItem.VertexAiEvaluationItemErrorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.get"></a>

```typescript
public get(index: number): VertexAiEvaluationItemErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### VertexAiEvaluationItemErrorOutputReference <a name="VertexAiEvaluationItemErrorOutputReference" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.Initializer"></a>

```typescript
import { vertexAiEvaluationItem } from '@cdktn/provider-google'

new vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemError">VertexAiEvaluationItemError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemErrorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiEvaluationItemError;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemError">VertexAiEvaluationItemError</a>

---


### VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList <a name="VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.Initializer"></a>

```typescript
import { vertexAiEvaluationItem } from '@cdktn/provider-google'

new vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.get"></a>

```typescript
public get(index: number): VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference <a name="VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.Initializer"></a>

```typescript
import { vertexAiEvaluationItem } from '@cdktn/provider-google'

new vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesError">VertexAiEvaluationItemEvaluationRequestCandidateResponsesError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiEvaluationItemEvaluationRequestCandidateResponsesError;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesError">VertexAiEvaluationItemEvaluationRequestCandidateResponsesError</a>

---


### VertexAiEvaluationItemEvaluationRequestCandidateResponsesList <a name="VertexAiEvaluationItemEvaluationRequestCandidateResponsesList" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.Initializer"></a>

```typescript
import { vertexAiEvaluationItem } from '@cdktn/provider-google'

new vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.get"></a>

```typescript
public get(index: number): VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses">VertexAiEvaluationItemEvaluationRequestCandidateResponses</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VertexAiEvaluationItemEvaluationRequestCandidateResponses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses">VertexAiEvaluationItemEvaluationRequestCandidateResponses</a>[]

---


### VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference <a name="VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.Initializer"></a>

```typescript
import { vertexAiEvaluationItem } from '@cdktn/provider-google'

new vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.resetAgentData">resetAgentData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.resetText">resetText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAgentData` <a name="resetAgentData" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.resetAgentData"></a>

```typescript
public resetAgentData(): void
```

##### `resetText` <a name="resetText" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.resetText"></a>

```typescript
public resetText(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList">VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.agentDataInput">agentDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.candidateInput">candidateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.textInput">textInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.agentData">agentData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.candidate">candidate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses">VertexAiEvaluationItemEvaluationRequestCandidateResponses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.error"></a>

```typescript
public readonly error: VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList">VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList</a>

---

##### `agentDataInput`<sup>Optional</sup> <a name="agentDataInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.agentDataInput"></a>

```typescript
public readonly agentDataInput: string;
```

- *Type:* string

---

##### `candidateInput`<sup>Optional</sup> <a name="candidateInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.candidateInput"></a>

```typescript
public readonly candidateInput: string;
```

- *Type:* string

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.textInput"></a>

```typescript
public readonly textInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `agentData`<sup>Required</sup> <a name="agentData" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.agentData"></a>

```typescript
public readonly agentData: string;
```

- *Type:* string

---

##### `candidate`<sup>Required</sup> <a name="candidate" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.candidate"></a>

```typescript
public readonly candidate: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VertexAiEvaluationItemEvaluationRequestCandidateResponses;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses">VertexAiEvaluationItemEvaluationRequestCandidateResponses</a>

---


### VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList <a name="VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.Initializer"></a>

```typescript
import { vertexAiEvaluationItem } from '@cdktn/provider-google'

new vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.get"></a>

```typescript
public get(index: number): VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference <a name="VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.Initializer"></a>

```typescript
import { vertexAiEvaluationItem } from '@cdktn/provider-google'

new vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseError">VertexAiEvaluationItemEvaluationRequestGoldenResponseError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiEvaluationItemEvaluationRequestGoldenResponseError;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseError">VertexAiEvaluationItemEvaluationRequestGoldenResponseError</a>

---


### VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference <a name="VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.Initializer"></a>

```typescript
import { vertexAiEvaluationItem } from '@cdktn/provider-google'

new vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.resetAgentData">resetAgentData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.resetText">resetText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAgentData` <a name="resetAgentData" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.resetAgentData"></a>

```typescript
public resetAgentData(): void
```

##### `resetText` <a name="resetText" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.resetText"></a>

```typescript
public resetText(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList">VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.agentDataInput">agentDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.candidateInput">candidateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.textInput">textInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.agentData">agentData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.candidate">candidate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponse">VertexAiEvaluationItemEvaluationRequestGoldenResponse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.error"></a>

```typescript
public readonly error: VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList">VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList</a>

---

##### `agentDataInput`<sup>Optional</sup> <a name="agentDataInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.agentDataInput"></a>

```typescript
public readonly agentDataInput: string;
```

- *Type:* string

---

##### `candidateInput`<sup>Optional</sup> <a name="candidateInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.candidateInput"></a>

```typescript
public readonly candidateInput: string;
```

- *Type:* string

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.textInput"></a>

```typescript
public readonly textInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `agentData`<sup>Required</sup> <a name="agentData" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.agentData"></a>

```typescript
public readonly agentData: string;
```

- *Type:* string

---

##### `candidate`<sup>Required</sup> <a name="candidate" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.candidate"></a>

```typescript
public readonly candidate: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiEvaluationItemEvaluationRequestGoldenResponse;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponse">VertexAiEvaluationItemEvaluationRequestGoldenResponse</a>

---


### VertexAiEvaluationItemEvaluationRequestOutputReference <a name="VertexAiEvaluationItemEvaluationRequestOutputReference" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.Initializer"></a>

```typescript
import { vertexAiEvaluationItem } from '@cdktn/provider-google'

new vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.putCandidateResponses">putCandidateResponses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.putGoldenResponse">putGoldenResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.putPrompt">putPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.putRubrics">putRubrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.resetCandidateResponses">resetCandidateResponses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.resetGoldenResponse">resetGoldenResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.resetPrompt">resetPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.resetRubrics">resetRubrics</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCandidateResponses` <a name="putCandidateResponses" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.putCandidateResponses"></a>

```typescript
public putCandidateResponses(value: IResolvable | VertexAiEvaluationItemEvaluationRequestCandidateResponses[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.putCandidateResponses.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses">VertexAiEvaluationItemEvaluationRequestCandidateResponses</a>[]

---

##### `putGoldenResponse` <a name="putGoldenResponse" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.putGoldenResponse"></a>

```typescript
public putGoldenResponse(value: VertexAiEvaluationItemEvaluationRequestGoldenResponse): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.putGoldenResponse.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponse">VertexAiEvaluationItemEvaluationRequestGoldenResponse</a>

---

##### `putPrompt` <a name="putPrompt" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.putPrompt"></a>

```typescript
public putPrompt(value: VertexAiEvaluationItemEvaluationRequestPrompt): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.putPrompt.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt">VertexAiEvaluationItemEvaluationRequestPrompt</a>

---

##### `putRubrics` <a name="putRubrics" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.putRubrics"></a>

```typescript
public putRubrics(value: IResolvable | VertexAiEvaluationItemEvaluationRequestRubrics[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.putRubrics.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics">VertexAiEvaluationItemEvaluationRequestRubrics</a>[]

---

##### `resetCandidateResponses` <a name="resetCandidateResponses" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.resetCandidateResponses"></a>

```typescript
public resetCandidateResponses(): void
```

##### `resetGoldenResponse` <a name="resetGoldenResponse" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.resetGoldenResponse"></a>

```typescript
public resetGoldenResponse(): void
```

##### `resetPrompt` <a name="resetPrompt" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.resetPrompt"></a>

```typescript
public resetPrompt(): void
```

##### `resetRubrics` <a name="resetRubrics" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.resetRubrics"></a>

```typescript
public resetRubrics(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.candidateResponses">candidateResponses</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList">VertexAiEvaluationItemEvaluationRequestCandidateResponsesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.goldenResponse">goldenResponse</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference">VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.prompt">prompt</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference">VertexAiEvaluationItemEvaluationRequestPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.rubrics">rubrics</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList">VertexAiEvaluationItemEvaluationRequestRubricsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.candidateResponsesInput">candidateResponsesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses">VertexAiEvaluationItemEvaluationRequestCandidateResponses</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.goldenResponseInput">goldenResponseInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponse">VertexAiEvaluationItemEvaluationRequestGoldenResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.promptInput">promptInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt">VertexAiEvaluationItemEvaluationRequestPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.rubricsInput">rubricsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics">VertexAiEvaluationItemEvaluationRequestRubrics</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequest">VertexAiEvaluationItemEvaluationRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `candidateResponses`<sup>Required</sup> <a name="candidateResponses" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.candidateResponses"></a>

```typescript
public readonly candidateResponses: VertexAiEvaluationItemEvaluationRequestCandidateResponsesList;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponsesList">VertexAiEvaluationItemEvaluationRequestCandidateResponsesList</a>

---

##### `goldenResponse`<sup>Required</sup> <a name="goldenResponse" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.goldenResponse"></a>

```typescript
public readonly goldenResponse: VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference">VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference</a>

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.prompt"></a>

```typescript
public readonly prompt: VertexAiEvaluationItemEvaluationRequestPromptOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference">VertexAiEvaluationItemEvaluationRequestPromptOutputReference</a>

---

##### `rubrics`<sup>Required</sup> <a name="rubrics" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.rubrics"></a>

```typescript
public readonly rubrics: VertexAiEvaluationItemEvaluationRequestRubricsList;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList">VertexAiEvaluationItemEvaluationRequestRubricsList</a>

---

##### `candidateResponsesInput`<sup>Optional</sup> <a name="candidateResponsesInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.candidateResponsesInput"></a>

```typescript
public readonly candidateResponsesInput: IResolvable | VertexAiEvaluationItemEvaluationRequestCandidateResponses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestCandidateResponses">VertexAiEvaluationItemEvaluationRequestCandidateResponses</a>[]

---

##### `goldenResponseInput`<sup>Optional</sup> <a name="goldenResponseInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.goldenResponseInput"></a>

```typescript
public readonly goldenResponseInput: VertexAiEvaluationItemEvaluationRequestGoldenResponse;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestGoldenResponse">VertexAiEvaluationItemEvaluationRequestGoldenResponse</a>

---

##### `promptInput`<sup>Optional</sup> <a name="promptInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.promptInput"></a>

```typescript
public readonly promptInput: VertexAiEvaluationItemEvaluationRequestPrompt;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt">VertexAiEvaluationItemEvaluationRequestPrompt</a>

---

##### `rubricsInput`<sup>Optional</sup> <a name="rubricsInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.rubricsInput"></a>

```typescript
public readonly rubricsInput: IResolvable | VertexAiEvaluationItemEvaluationRequestRubrics[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics">VertexAiEvaluationItemEvaluationRequestRubrics</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiEvaluationItemEvaluationRequest;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequest">VertexAiEvaluationItemEvaluationRequest</a>

---


### VertexAiEvaluationItemEvaluationRequestPromptOutputReference <a name="VertexAiEvaluationItemEvaluationRequestPromptOutputReference" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.Initializer"></a>

```typescript
import { vertexAiEvaluationItem } from '@cdktn/provider-google'

new vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.putPromptTemplateData">putPromptTemplateData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.putUserScenario">putUserScenario</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.resetAgentData">resetAgentData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.resetPromptTemplateData">resetPromptTemplateData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.resetText">resetText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.resetUserScenario">resetUserScenario</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPromptTemplateData` <a name="putPromptTemplateData" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.putPromptTemplateData"></a>

```typescript
public putPromptTemplateData(value: VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.putPromptTemplateData.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData">VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData</a>

---

##### `putUserScenario` <a name="putUserScenario" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.putUserScenario"></a>

```typescript
public putUserScenario(value: VertexAiEvaluationItemEvaluationRequestPromptUserScenario): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.putUserScenario.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenario">VertexAiEvaluationItemEvaluationRequestPromptUserScenario</a>

---

##### `resetAgentData` <a name="resetAgentData" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.resetAgentData"></a>

```typescript
public resetAgentData(): void
```

##### `resetPromptTemplateData` <a name="resetPromptTemplateData" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.resetPromptTemplateData"></a>

```typescript
public resetPromptTemplateData(): void
```

##### `resetText` <a name="resetText" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.resetText"></a>

```typescript
public resetText(): void
```

##### `resetUserScenario` <a name="resetUserScenario" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.resetUserScenario"></a>

```typescript
public resetUserScenario(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.promptTemplateData">promptTemplateData</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference">VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.userScenario">userScenario</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference">VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.agentDataInput">agentDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.promptTemplateDataInput">promptTemplateDataInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData">VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.textInput">textInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.userScenarioInput">userScenarioInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenario">VertexAiEvaluationItemEvaluationRequestPromptUserScenario</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.agentData">agentData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt">VertexAiEvaluationItemEvaluationRequestPrompt</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `promptTemplateData`<sup>Required</sup> <a name="promptTemplateData" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.promptTemplateData"></a>

```typescript
public readonly promptTemplateData: VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference">VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference</a>

---

##### `userScenario`<sup>Required</sup> <a name="userScenario" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.userScenario"></a>

```typescript
public readonly userScenario: VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference">VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference</a>

---

##### `agentDataInput`<sup>Optional</sup> <a name="agentDataInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.agentDataInput"></a>

```typescript
public readonly agentDataInput: string;
```

- *Type:* string

---

##### `promptTemplateDataInput`<sup>Optional</sup> <a name="promptTemplateDataInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.promptTemplateDataInput"></a>

```typescript
public readonly promptTemplateDataInput: VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData">VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData</a>

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.textInput"></a>

```typescript
public readonly textInput: string;
```

- *Type:* string

---

##### `userScenarioInput`<sup>Optional</sup> <a name="userScenarioInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.userScenarioInput"></a>

```typescript
public readonly userScenarioInput: VertexAiEvaluationItemEvaluationRequestPromptUserScenario;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenario">VertexAiEvaluationItemEvaluationRequestPromptUserScenario</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `agentData`<sup>Required</sup> <a name="agentData" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.agentData"></a>

```typescript
public readonly agentData: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiEvaluationItemEvaluationRequestPrompt;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPrompt">VertexAiEvaluationItemEvaluationRequestPrompt</a>

---


### VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference <a name="VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.Initializer"></a>

```typescript
import { vertexAiEvaluationItem } from '@cdktn/provider-google'

new vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValues` <a name="resetValues" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.property.valuesInput">valuesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.property.values">values</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData">VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.property.values"></a>

```typescript
public readonly values: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData">VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData</a>

---


### VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference <a name="VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.Initializer"></a>

```typescript
import { vertexAiEvaluationItem } from '@cdktn/provider-google'

new vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.conversationPlanInput">conversationPlanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.startingPromptInput">startingPromptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.conversationPlan">conversationPlan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.startingPrompt">startingPrompt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenario">VertexAiEvaluationItemEvaluationRequestPromptUserScenario</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conversationPlanInput`<sup>Optional</sup> <a name="conversationPlanInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.conversationPlanInput"></a>

```typescript
public readonly conversationPlanInput: string;
```

- *Type:* string

---

##### `startingPromptInput`<sup>Optional</sup> <a name="startingPromptInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.startingPromptInput"></a>

```typescript
public readonly startingPromptInput: string;
```

- *Type:* string

---

##### `conversationPlan`<sup>Required</sup> <a name="conversationPlan" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.conversationPlan"></a>

```typescript
public readonly conversationPlan: string;
```

- *Type:* string

---

##### `startingPrompt`<sup>Required</sup> <a name="startingPrompt" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.startingPrompt"></a>

```typescript
public readonly startingPrompt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiEvaluationItemEvaluationRequestPromptUserScenario;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestPromptUserScenario">VertexAiEvaluationItemEvaluationRequestPromptUserScenario</a>

---


### VertexAiEvaluationItemEvaluationRequestRubricsList <a name="VertexAiEvaluationItemEvaluationRequestRubricsList" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.Initializer"></a>

```typescript
import { vertexAiEvaluationItem } from '@cdktn/provider-google'

new vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.get"></a>

```typescript
public get(index: number): VertexAiEvaluationItemEvaluationRequestRubricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics">VertexAiEvaluationItemEvaluationRequestRubrics</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VertexAiEvaluationItemEvaluationRequestRubrics[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics">VertexAiEvaluationItemEvaluationRequestRubrics</a>[]

---


### VertexAiEvaluationItemEvaluationRequestRubricsOutputReference <a name="VertexAiEvaluationItemEvaluationRequestRubricsOutputReference" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.Initializer"></a>

```typescript
import { vertexAiEvaluationItem } from '@cdktn/provider-google'

new vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.putRubrics">putRubrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.resetGroupId">resetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.resetRubrics">resetRubrics</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRubrics` <a name="putRubrics" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.putRubrics"></a>

```typescript
public putRubrics(value: IResolvable | VertexAiEvaluationItemEvaluationRequestRubricsRubrics[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.putRubrics.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics">VertexAiEvaluationItemEvaluationRequestRubricsRubrics</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetGroupId` <a name="resetGroupId" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.resetGroupId"></a>

```typescript
public resetGroupId(): void
```

##### `resetRubrics` <a name="resetRubrics" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.resetRubrics"></a>

```typescript
public resetRubrics(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.rubrics">rubrics</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList">VertexAiEvaluationItemEvaluationRequestRubricsRubricsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.groupIdInput">groupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.rubricsInput">rubricsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics">VertexAiEvaluationItemEvaluationRequestRubricsRubrics</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics">VertexAiEvaluationItemEvaluationRequestRubrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rubrics`<sup>Required</sup> <a name="rubrics" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.rubrics"></a>

```typescript
public readonly rubrics: VertexAiEvaluationItemEvaluationRequestRubricsRubricsList;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList">VertexAiEvaluationItemEvaluationRequestRubricsRubricsList</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `rubricsInput`<sup>Optional</sup> <a name="rubricsInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.rubricsInput"></a>

```typescript
public readonly rubricsInput: IResolvable | VertexAiEvaluationItemEvaluationRequestRubricsRubrics[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics">VertexAiEvaluationItemEvaluationRequestRubricsRubrics</a>[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VertexAiEvaluationItemEvaluationRequestRubrics;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubrics">VertexAiEvaluationItemEvaluationRequestRubrics</a>

---


### VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference <a name="VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.Initializer"></a>

```typescript
import { vertexAiEvaluationItem } from '@cdktn/provider-google'

new vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.putProperty">putProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.resetProperty">resetProperty</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProperty` <a name="putProperty" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.putProperty"></a>

```typescript
public putProperty(value: VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.putProperty.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty">VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty</a>

---

##### `resetProperty` <a name="resetProperty" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.resetProperty"></a>

```typescript
public resetProperty(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.property.property">property</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference">VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.property.propertyInput">propertyInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty">VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent">VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.property.property"></a>

```typescript
public readonly property: VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference">VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference</a>

---

##### `propertyInput`<sup>Optional</sup> <a name="propertyInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.property.propertyInput"></a>

```typescript
public readonly propertyInput: VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty">VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent">VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent</a>

---


### VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference <a name="VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.Initializer"></a>

```typescript
import { vertexAiEvaluationItem } from '@cdktn/provider-google'

new vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty">VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty">VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty</a>

---


### VertexAiEvaluationItemEvaluationRequestRubricsRubricsList <a name="VertexAiEvaluationItemEvaluationRequestRubricsRubricsList" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.Initializer"></a>

```typescript
import { vertexAiEvaluationItem } from '@cdktn/provider-google'

new vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.get"></a>

```typescript
public get(index: number): VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics">VertexAiEvaluationItemEvaluationRequestRubricsRubrics</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VertexAiEvaluationItemEvaluationRequestRubricsRubrics[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics">VertexAiEvaluationItemEvaluationRequestRubricsRubrics</a>[]

---


### VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference <a name="VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.Initializer"></a>

```typescript
import { vertexAiEvaluationItem } from '@cdktn/provider-google'

new vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.putContent">putContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.resetImportance">resetImportance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.resetRubricId">resetRubricId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContent` <a name="putContent" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.putContent"></a>

```typescript
public putContent(value: VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.putContent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent">VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent</a>

---

##### `resetImportance` <a name="resetImportance" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.resetImportance"></a>

```typescript
public resetImportance(): void
```

##### `resetRubricId` <a name="resetRubricId" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.resetRubricId"></a>

```typescript
public resetRubricId(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.content">content</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference">VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.contentInput">contentInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent">VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.importanceInput">importanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.rubricIdInput">rubricIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.importance">importance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.rubricId">rubricId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics">VertexAiEvaluationItemEvaluationRequestRubricsRubrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.content"></a>

```typescript
public readonly content: VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference">VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference</a>

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent">VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent</a>

---

##### `importanceInput`<sup>Optional</sup> <a name="importanceInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.importanceInput"></a>

```typescript
public readonly importanceInput: string;
```

- *Type:* string

---

##### `rubricIdInput`<sup>Optional</sup> <a name="rubricIdInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.rubricIdInput"></a>

```typescript
public readonly rubricIdInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `importance`<sup>Required</sup> <a name="importance" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.importance"></a>

```typescript
public readonly importance: string;
```

- *Type:* string

---

##### `rubricId`<sup>Required</sup> <a name="rubricId" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.rubricId"></a>

```typescript
public readonly rubricId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VertexAiEvaluationItemEvaluationRequestRubricsRubrics;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationRequestRubricsRubrics">VertexAiEvaluationItemEvaluationRequestRubricsRubrics</a>

---


### VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList <a name="VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.Initializer"></a>

```typescript
import { vertexAiEvaluationItem } from '@cdktn/provider-google'

new vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.get"></a>

```typescript
public get(index: number): VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference <a name="VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.Initializer"></a>

```typescript
import { vertexAiEvaluationItem } from '@cdktn/provider-google'

new vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsError">VertexAiEvaluationItemEvaluationResponseCandidateResultsError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiEvaluationItemEvaluationResponseCandidateResultsError;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsError">VertexAiEvaluationItemEvaluationResponseCandidateResultsError</a>

---


### VertexAiEvaluationItemEvaluationResponseCandidateResultsList <a name="VertexAiEvaluationItemEvaluationResponseCandidateResultsList" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.Initializer"></a>

```typescript
import { vertexAiEvaluationItem } from '@cdktn/provider-google'

new vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.get"></a>

```typescript
public get(index: number): VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference <a name="VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.Initializer"></a>

```typescript
import { vertexAiEvaluationItem } from '@cdktn/provider-google'

new vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.additionalResults">additionalResults</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.candidate">candidate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList">VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.explanation">explanation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.metric">metric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.rubricVerdicts">rubricVerdicts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList">VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.score">score</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResults">VertexAiEvaluationItemEvaluationResponseCandidateResults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalResults`<sup>Required</sup> <a name="additionalResults" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.additionalResults"></a>

```typescript
public readonly additionalResults: string;
```

- *Type:* string

---

##### `candidate`<sup>Required</sup> <a name="candidate" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.candidate"></a>

```typescript
public readonly candidate: string;
```

- *Type:* string

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.error"></a>

```typescript
public readonly error: VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList">VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList</a>

---

##### `explanation`<sup>Required</sup> <a name="explanation" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.explanation"></a>

```typescript
public readonly explanation: string;
```

- *Type:* string

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.metric"></a>

```typescript
public readonly metric: string;
```

- *Type:* string

---

##### `rubricVerdicts`<sup>Required</sup> <a name="rubricVerdicts" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.rubricVerdicts"></a>

```typescript
public readonly rubricVerdicts: VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList">VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList</a>

---

##### `score`<sup>Required</sup> <a name="score" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.score"></a>

```typescript
public readonly score: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiEvaluationItemEvaluationResponseCandidateResults;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResults">VertexAiEvaluationItemEvaluationResponseCandidateResults</a>

---


### VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList <a name="VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.Initializer"></a>

```typescript
import { vertexAiEvaluationItem } from '@cdktn/provider-google'

new vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.get"></a>

```typescript
public get(index: number): VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference <a name="VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.Initializer"></a>

```typescript
import { vertexAiEvaluationItem } from '@cdktn/provider-google'

new vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.evaluatedRubric">evaluatedRubric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.reasoning">reasoning</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.verdict">verdict</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts">VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `evaluatedRubric`<sup>Required</sup> <a name="evaluatedRubric" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.evaluatedRubric"></a>

```typescript
public readonly evaluatedRubric: string;
```

- *Type:* string

---

##### `reasoning`<sup>Required</sup> <a name="reasoning" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.reasoning"></a>

```typescript
public readonly reasoning: string;
```

- *Type:* string

---

##### `verdict`<sup>Required</sup> <a name="verdict" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.verdict"></a>

```typescript
public readonly verdict: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts">VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts</a>

---


### VertexAiEvaluationItemEvaluationResponseList <a name="VertexAiEvaluationItemEvaluationResponseList" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.Initializer"></a>

```typescript
import { vertexAiEvaluationItem } from '@cdktn/provider-google'

new vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.get"></a>

```typescript
public get(index: number): VertexAiEvaluationItemEvaluationResponseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### VertexAiEvaluationItemEvaluationResponseOutputReference <a name="VertexAiEvaluationItemEvaluationResponseOutputReference" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.Initializer"></a>

```typescript
import { vertexAiEvaluationItem } from '@cdktn/provider-google'

new vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.property.candidateResults">candidateResults</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList">VertexAiEvaluationItemEvaluationResponseCandidateResultsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.property.evaluationRequest">evaluationRequest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.property.evaluationRun">evaluationRun</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.property.metadata">metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.property.metric">metric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.property.request">request</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponse">VertexAiEvaluationItemEvaluationResponse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `candidateResults`<sup>Required</sup> <a name="candidateResults" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.property.candidateResults"></a>

```typescript
public readonly candidateResults: VertexAiEvaluationItemEvaluationResponseCandidateResultsList;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseCandidateResultsList">VertexAiEvaluationItemEvaluationResponseCandidateResultsList</a>

---

##### `evaluationRequest`<sup>Required</sup> <a name="evaluationRequest" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.property.evaluationRequest"></a>

```typescript
public readonly evaluationRequest: string;
```

- *Type:* string

---

##### `evaluationRun`<sup>Required</sup> <a name="evaluationRun" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.property.evaluationRun"></a>

```typescript
public readonly evaluationRun: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.property.metric"></a>

```typescript
public readonly metric: string;
```

- *Type:* string

---

##### `request`<sup>Required</sup> <a name="request" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.property.request"></a>

```typescript
public readonly request: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiEvaluationItemEvaluationResponse;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemEvaluationResponse">VertexAiEvaluationItemEvaluationResponse</a>

---


### VertexAiEvaluationItemTimeoutsOutputReference <a name="VertexAiEvaluationItemTimeoutsOutputReference" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.Initializer"></a>

```typescript
import { vertexAiEvaluationItem } from '@cdktn/provider-google'

new vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeouts">VertexAiEvaluationItemTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VertexAiEvaluationItemTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiEvaluationItem.VertexAiEvaluationItemTimeouts">VertexAiEvaluationItemTimeouts</a>

---



