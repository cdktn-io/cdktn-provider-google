# `vertexAiSemanticGovernancePolicy` Submodule <a name="`vertexAiSemanticGovernancePolicy` Submodule" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiSemanticGovernancePolicy <a name="VertexAiSemanticGovernancePolicy" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy google_vertex_ai_semantic_governance_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer"></a>

```typescript
import { vertexAiSemanticGovernancePolicy } from '@cdktn/provider-google'

new vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy(scope: Construct, id: string, config: VertexAiSemanticGovernancePolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig">VertexAiSemanticGovernancePolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig">VertexAiSemanticGovernancePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.putAgentResponseCustomization">putAgentResponseCustomization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.putMcpTools">putMcpTools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetAgentResponseCustomization">resetAgentResponseCustomization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetMcpTools">resetMcpTools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAgentResponseCustomization` <a name="putAgentResponseCustomization" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.putAgentResponseCustomization"></a>

```typescript
public putAgentResponseCustomization(value: VertexAiSemanticGovernancePolicyAgentResponseCustomization): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.putAgentResponseCustomization.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomization">VertexAiSemanticGovernancePolicyAgentResponseCustomization</a>

---

##### `putMcpTools` <a name="putMcpTools" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.putMcpTools"></a>

```typescript
public putMcpTools(value: VertexAiSemanticGovernancePolicyMcpTools): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.putMcpTools.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools">VertexAiSemanticGovernancePolicyMcpTools</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: VertexAiSemanticGovernancePolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts">VertexAiSemanticGovernancePolicyTimeouts</a>

---

##### `resetAgentResponseCustomization` <a name="resetAgentResponseCustomization" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetAgentResponseCustomization"></a>

```typescript
public resetAgentResponseCustomization(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMcpTools` <a name="resetMcpTools" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetMcpTools"></a>

```typescript
public resetMcpTools(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a VertexAiSemanticGovernancePolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.isConstruct"></a>

```typescript
import { vertexAiSemanticGovernancePolicy } from '@cdktn/provider-google'

vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.isTerraformElement"></a>

```typescript
import { vertexAiSemanticGovernancePolicy } from '@cdktn/provider-google'

vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.isTerraformResource"></a>

```typescript
import { vertexAiSemanticGovernancePolicy } from '@cdktn/provider-google'

vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.generateConfigForImport"></a>

```typescript
import { vertexAiSemanticGovernancePolicy } from '@cdktn/provider-google'

vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a VertexAiSemanticGovernancePolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VertexAiSemanticGovernancePolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VertexAiSemanticGovernancePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the VertexAiSemanticGovernancePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.agentIdentity">agentIdentity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.agentResponseCustomization">agentResponseCustomization</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference">VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.mcpTools">mcpTools</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference">VertexAiSemanticGovernancePolicyMcpToolsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference">VertexAiSemanticGovernancePolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.agentInput">agentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.agentResponseCustomizationInput">agentResponseCustomizationInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomization">VertexAiSemanticGovernancePolicyAgentResponseCustomization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.mcpToolsInput">mcpToolsInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools">VertexAiSemanticGovernancePolicyMcpTools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.naturalLanguageConstraintInput">naturalLanguageConstraintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.semanticGovernancePolicyIdInput">semanticGovernancePolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts">VertexAiSemanticGovernancePolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.agent">agent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.naturalLanguageConstraint">naturalLanguageConstraint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.semanticGovernancePolicyId">semanticGovernancePolicyId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `agentIdentity`<sup>Required</sup> <a name="agentIdentity" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.agentIdentity"></a>

```typescript
public readonly agentIdentity: string;
```

- *Type:* string

---

##### `agentResponseCustomization`<sup>Required</sup> <a name="agentResponseCustomization" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.agentResponseCustomization"></a>

```typescript
public readonly agentResponseCustomization: VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference">VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `mcpTools`<sup>Required</sup> <a name="mcpTools" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.mcpTools"></a>

```typescript
public readonly mcpTools: VertexAiSemanticGovernancePolicyMcpToolsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference">VertexAiSemanticGovernancePolicyMcpToolsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.timeouts"></a>

```typescript
public readonly timeouts: VertexAiSemanticGovernancePolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference">VertexAiSemanticGovernancePolicyTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `agentInput`<sup>Optional</sup> <a name="agentInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.agentInput"></a>

```typescript
public readonly agentInput: string;
```

- *Type:* string

---

##### `agentResponseCustomizationInput`<sup>Optional</sup> <a name="agentResponseCustomizationInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.agentResponseCustomizationInput"></a>

```typescript
public readonly agentResponseCustomizationInput: VertexAiSemanticGovernancePolicyAgentResponseCustomization;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomization">VertexAiSemanticGovernancePolicyAgentResponseCustomization</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mcpToolsInput`<sup>Optional</sup> <a name="mcpToolsInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.mcpToolsInput"></a>

```typescript
public readonly mcpToolsInput: VertexAiSemanticGovernancePolicyMcpTools;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools">VertexAiSemanticGovernancePolicyMcpTools</a>

---

##### `naturalLanguageConstraintInput`<sup>Optional</sup> <a name="naturalLanguageConstraintInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.naturalLanguageConstraintInput"></a>

```typescript
public readonly naturalLanguageConstraintInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `semanticGovernancePolicyIdInput`<sup>Optional</sup> <a name="semanticGovernancePolicyIdInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.semanticGovernancePolicyIdInput"></a>

```typescript
public readonly semanticGovernancePolicyIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VertexAiSemanticGovernancePolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts">VertexAiSemanticGovernancePolicyTimeouts</a>

---

##### `agent`<sup>Required</sup> <a name="agent" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.agent"></a>

```typescript
public readonly agent: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `naturalLanguageConstraint`<sup>Required</sup> <a name="naturalLanguageConstraint" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.naturalLanguageConstraint"></a>

```typescript
public readonly naturalLanguageConstraint: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `semanticGovernancePolicyId`<sup>Required</sup> <a name="semanticGovernancePolicyId" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.semanticGovernancePolicyId"></a>

```typescript
public readonly semanticGovernancePolicyId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiSemanticGovernancePolicyAgentResponseCustomization <a name="VertexAiSemanticGovernancePolicyAgentResponseCustomization" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomization.Initializer"></a>

```typescript
import { vertexAiSemanticGovernancePolicy } from '@cdktn/provider-google'

const vertexAiSemanticGovernancePolicyAgentResponseCustomization: vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomization = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomization.property.denialMessage">denialMessage</a></code> | <code>string</code> | Custom message shown to the end user when the policy check results in a denial. |

---

##### `denialMessage`<sup>Optional</sup> <a name="denialMessage" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomization.property.denialMessage"></a>

```typescript
public readonly denialMessage: string;
```

- *Type:* string

Custom message shown to the end user when the policy check results in a denial.

Use this
to explain the rationale to the user. Max 1000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#denial_message VertexAiSemanticGovernancePolicy#denial_message}

---

### VertexAiSemanticGovernancePolicyConfig <a name="VertexAiSemanticGovernancePolicyConfig" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.Initializer"></a>

```typescript
import { vertexAiSemanticGovernancePolicy } from '@cdktn/provider-google'

const vertexAiSemanticGovernancePolicyConfig: vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.agent">agent</a></code> | <code>string</code> | The name of the agent in Agent Registry that is affected by this policy. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.naturalLanguageConstraint">naturalLanguageConstraint</a></code> | <code>string</code> | The natural language constraint of the SemanticGovernancePolicy. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.semanticGovernancePolicyId">semanticGovernancePolicyId</a></code> | <code>string</code> | The ID of the SemanticGovernancePolicy, which will become the final component of the resource name. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.agentResponseCustomization">agentResponseCustomization</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomization">VertexAiSemanticGovernancePolicyAgentResponseCustomization</a></code> | agent_response_customization block. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.description">description</a></code> | <code>string</code> | The description of the SemanticGovernancePolicy. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.displayName">displayName</a></code> | <code>string</code> | The user-defined name of the SemanticGovernancePolicy. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#id VertexAiSemanticGovernancePolicy#id}. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.mcpTools">mcpTools</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools">VertexAiSemanticGovernancePolicyMcpTools</a></code> | mcp_tools block. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#project VertexAiSemanticGovernancePolicy#project}. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.region">region</a></code> | <code>string</code> | The region of the SemanticGovernancePolicy, e.g. 'us-central1'. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts">VertexAiSemanticGovernancePolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `agent`<sup>Required</sup> <a name="agent" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.agent"></a>

```typescript
public readonly agent: string;
```

- *Type:* string

The name of the agent in Agent Registry that is affected by this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#agent VertexAiSemanticGovernancePolicy#agent}

---

##### `naturalLanguageConstraint`<sup>Required</sup> <a name="naturalLanguageConstraint" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.naturalLanguageConstraint"></a>

```typescript
public readonly naturalLanguageConstraint: string;
```

- *Type:* string

The natural language constraint of the SemanticGovernancePolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#natural_language_constraint VertexAiSemanticGovernancePolicy#natural_language_constraint}

---

##### `semanticGovernancePolicyId`<sup>Required</sup> <a name="semanticGovernancePolicyId" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.semanticGovernancePolicyId"></a>

```typescript
public readonly semanticGovernancePolicyId: string;
```

- *Type:* string

The ID of the SemanticGovernancePolicy, which will become the final component of the resource name.

This value may be up to 63 characters, and valid characters are [a-z0-9-]. The first character cannot be a number or hyphen. The last character must be a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#semantic_governance_policy_id VertexAiSemanticGovernancePolicy#semantic_governance_policy_id}

---

##### `agentResponseCustomization`<sup>Optional</sup> <a name="agentResponseCustomization" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.agentResponseCustomization"></a>

```typescript
public readonly agentResponseCustomization: VertexAiSemanticGovernancePolicyAgentResponseCustomization;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomization">VertexAiSemanticGovernancePolicyAgentResponseCustomization</a>

agent_response_customization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#agent_response_customization VertexAiSemanticGovernancePolicy#agent_response_customization}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#deletion_policy VertexAiSemanticGovernancePolicy#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the SemanticGovernancePolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#description VertexAiSemanticGovernancePolicy#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The user-defined name of the SemanticGovernancePolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#display_name VertexAiSemanticGovernancePolicy#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#id VertexAiSemanticGovernancePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mcpTools`<sup>Optional</sup> <a name="mcpTools" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.mcpTools"></a>

```typescript
public readonly mcpTools: VertexAiSemanticGovernancePolicyMcpTools;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools">VertexAiSemanticGovernancePolicyMcpTools</a>

mcp_tools block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#mcp_tools VertexAiSemanticGovernancePolicy#mcp_tools}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#project VertexAiSemanticGovernancePolicy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region of the SemanticGovernancePolicy, e.g. 'us-central1'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#region VertexAiSemanticGovernancePolicy#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VertexAiSemanticGovernancePolicyTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts">VertexAiSemanticGovernancePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#timeouts VertexAiSemanticGovernancePolicy#timeouts}

---

### VertexAiSemanticGovernancePolicyMcpTools <a name="VertexAiSemanticGovernancePolicyMcpTools" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools.Initializer"></a>

```typescript
import { vertexAiSemanticGovernancePolicy } from '@cdktn/provider-google'

const vertexAiSemanticGovernancePolicyMcpTools: vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools.property.mcpServer">mcpServer</a></code> | <code>string</code> | The resource name of the McpServer in Agent Registry that is affected by this policy. Format: 'projects/{project}/locations/{location}/mcpServers/{mcpServer}'. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools.property.tools">tools</a></code> | <code>string[]</code> | The resource names of the McpTools used by the Agent that is affected by this policy. |

---

##### `mcpServer`<sup>Required</sup> <a name="mcpServer" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools.property.mcpServer"></a>

```typescript
public readonly mcpServer: string;
```

- *Type:* string

The resource name of the McpServer in Agent Registry that is affected by this policy. Format: 'projects/{project}/locations/{location}/mcpServers/{mcpServer}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#mcp_server VertexAiSemanticGovernancePolicy#mcp_server}

---

##### `tools`<sup>Required</sup> <a name="tools" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools.property.tools"></a>

```typescript
public readonly tools: string[];
```

- *Type:* string[]

The resource names of the McpTools used by the Agent that is affected by this policy.

At least one tool must be listed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#tools VertexAiSemanticGovernancePolicy#tools}

---

### VertexAiSemanticGovernancePolicyTimeouts <a name="VertexAiSemanticGovernancePolicyTimeouts" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts.Initializer"></a>

```typescript
import { vertexAiSemanticGovernancePolicy } from '@cdktn/provider-google'

const vertexAiSemanticGovernancePolicyTimeouts: vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#create VertexAiSemanticGovernancePolicy#create}. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#delete VertexAiSemanticGovernancePolicy#delete}. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#update VertexAiSemanticGovernancePolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#create VertexAiSemanticGovernancePolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#delete VertexAiSemanticGovernancePolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#update VertexAiSemanticGovernancePolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference <a name="VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.Initializer"></a>

```typescript
import { vertexAiSemanticGovernancePolicy } from '@cdktn/provider-google'

new vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.resetDenialMessage">resetDenialMessage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDenialMessage` <a name="resetDenialMessage" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.resetDenialMessage"></a>

```typescript
public resetDenialMessage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.denialMessageInput">denialMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.denialMessage">denialMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomization">VertexAiSemanticGovernancePolicyAgentResponseCustomization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `denialMessageInput`<sup>Optional</sup> <a name="denialMessageInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.denialMessageInput"></a>

```typescript
public readonly denialMessageInput: string;
```

- *Type:* string

---

##### `denialMessage`<sup>Required</sup> <a name="denialMessage" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.denialMessage"></a>

```typescript
public readonly denialMessage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiSemanticGovernancePolicyAgentResponseCustomization;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomization">VertexAiSemanticGovernancePolicyAgentResponseCustomization</a>

---


### VertexAiSemanticGovernancePolicyMcpToolsOutputReference <a name="VertexAiSemanticGovernancePolicyMcpToolsOutputReference" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.Initializer"></a>

```typescript
import { vertexAiSemanticGovernancePolicy } from '@cdktn/provider-google'

new vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.mcpServerInput">mcpServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.toolsInput">toolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.mcpServer">mcpServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.tools">tools</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools">VertexAiSemanticGovernancePolicyMcpTools</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mcpServerInput`<sup>Optional</sup> <a name="mcpServerInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.mcpServerInput"></a>

```typescript
public readonly mcpServerInput: string;
```

- *Type:* string

---

##### `toolsInput`<sup>Optional</sup> <a name="toolsInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.toolsInput"></a>

```typescript
public readonly toolsInput: string[];
```

- *Type:* string[]

---

##### `mcpServer`<sup>Required</sup> <a name="mcpServer" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.mcpServer"></a>

```typescript
public readonly mcpServer: string;
```

- *Type:* string

---

##### `tools`<sup>Required</sup> <a name="tools" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.tools"></a>

```typescript
public readonly tools: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VertexAiSemanticGovernancePolicyMcpTools;
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools">VertexAiSemanticGovernancePolicyMcpTools</a>

---


### VertexAiSemanticGovernancePolicyTimeoutsOutputReference <a name="VertexAiSemanticGovernancePolicyTimeoutsOutputReference" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { vertexAiSemanticGovernancePolicy } from '@cdktn/provider-google'

new vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts">VertexAiSemanticGovernancePolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VertexAiSemanticGovernancePolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts">VertexAiSemanticGovernancePolicyTimeouts</a>

---



