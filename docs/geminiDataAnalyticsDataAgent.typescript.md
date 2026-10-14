# `geminiDataAnalyticsDataAgent` Submodule <a name="`geminiDataAnalyticsDataAgent` Submodule" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GeminiDataAnalyticsDataAgent <a name="GeminiDataAnalyticsDataAgent" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent google_gemini_data_analytics_data_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

new geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent(scope: Construct, id: string, config: GeminiDataAnalyticsDataAgentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig">GeminiDataAnalyticsDataAgentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig">GeminiDataAnalyticsDataAgentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.putDataAnalyticsAgent">putDataAnalyticsAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetDataAnalyticsAgent">resetDataAnalyticsAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetKmsKey">resetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataAnalyticsAgent` <a name="putDataAnalyticsAgent" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.putDataAnalyticsAgent"></a>

```typescript
public putDataAnalyticsAgent(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgent): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.putDataAnalyticsAgent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent">GeminiDataAnalyticsDataAgentDataAnalyticsAgent</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.putTimeouts"></a>

```typescript
public putTimeouts(value: GeminiDataAnalyticsDataAgentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts">GeminiDataAnalyticsDataAgentTimeouts</a>

---

##### `resetDataAnalyticsAgent` <a name="resetDataAnalyticsAgent" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetDataAnalyticsAgent"></a>

```typescript
public resetDataAnalyticsAgent(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetKmsKey"></a>

```typescript
public resetKmsKey(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GeminiDataAnalyticsDataAgent resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.isConstruct"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.isTerraformElement"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.isTerraformResource"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.generateConfigForImport"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GeminiDataAnalyticsDataAgent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GeminiDataAnalyticsDataAgent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GeminiDataAnalyticsDataAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GeminiDataAnalyticsDataAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.dataAnalyticsAgent">dataAnalyticsAgent</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.deleteTime">deleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.purgeTime">purgeTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference">GeminiDataAnalyticsDataAgentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.dataAgentIdInput">dataAgentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.dataAnalyticsAgentInput">dataAnalyticsAgentInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent">GeminiDataAnalyticsDataAgentDataAnalyticsAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts">GeminiDataAnalyticsDataAgentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.dataAgentId">dataAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `dataAnalyticsAgent`<sup>Required</sup> <a name="dataAnalyticsAgent" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.dataAnalyticsAgent"></a>

```typescript
public readonly dataAnalyticsAgent: GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference</a>

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.deleteTime"></a>

```typescript
public readonly deleteTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `purgeTime`<sup>Required</sup> <a name="purgeTime" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.purgeTime"></a>

```typescript
public readonly purgeTime: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.timeouts"></a>

```typescript
public readonly timeouts: GeminiDataAnalyticsDataAgentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference">GeminiDataAnalyticsDataAgentTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `dataAgentIdInput`<sup>Optional</sup> <a name="dataAgentIdInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.dataAgentIdInput"></a>

```typescript
public readonly dataAgentIdInput: string;
```

- *Type:* string

---

##### `dataAnalyticsAgentInput`<sup>Optional</sup> <a name="dataAnalyticsAgentInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.dataAnalyticsAgentInput"></a>

```typescript
public readonly dataAnalyticsAgentInput: GeminiDataAnalyticsDataAgentDataAnalyticsAgent;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent">GeminiDataAnalyticsDataAgentDataAnalyticsAgent</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GeminiDataAnalyticsDataAgentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts">GeminiDataAnalyticsDataAgentTimeouts</a>

---

##### `dataAgentId`<sup>Required</sup> <a name="dataAgentId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.dataAgentId"></a>

```typescript
public readonly dataAgentId: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GeminiDataAnalyticsDataAgentConfig <a name="GeminiDataAnalyticsDataAgentConfig" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

const geminiDataAnalyticsDataAgentConfig: geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.dataAgentId">dataAgentId</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.location">location</a></code> | <code>string</code> | The location of the DataAgent. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.dataAnalyticsAgent">dataAnalyticsAgent</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent">GeminiDataAnalyticsDataAgentDataAnalyticsAgent</a></code> | data_analytics_agent block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.description">description</a></code> | <code>string</code> | Optional. Description of the agent. Must be between 1 and 1024 characters. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.displayName">displayName</a></code> | <code>string</code> | Optional. User friendly display name. Must be between 1 and 256 characters. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#id GeminiDataAnalyticsDataAgent#id}. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.kmsKey">kmsKey</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Optional. Labels to help users filter related agents. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#project GeminiDataAnalyticsDataAgent#project}. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts">GeminiDataAnalyticsDataAgentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dataAgentId`<sup>Required</sup> <a name="dataAgentId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.dataAgentId"></a>

```typescript
public readonly dataAgentId: string;
```

- *Type:* string

Required.

The ID to use for the DataAgent, which becomes the final component
of the resource name. The ID must start with a lowercase letter and may
contain lowercase letters, digits, underscores, and hyphens, up to 63
characters in total.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#data_agent_id GeminiDataAnalyticsDataAgent#data_agent_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the DataAgent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#location GeminiDataAnalyticsDataAgent#location}

---

##### `dataAnalyticsAgent`<sup>Optional</sup> <a name="dataAnalyticsAgent" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.dataAnalyticsAgent"></a>

```typescript
public readonly dataAnalyticsAgent: GeminiDataAnalyticsDataAgentDataAnalyticsAgent;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent">GeminiDataAnalyticsDataAgentDataAnalyticsAgent</a>

data_analytics_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#data_analytics_agent GeminiDataAnalyticsDataAgent#data_analytics_agent}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#deletion_policy GeminiDataAnalyticsDataAgent#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional. Description of the agent. Must be between 1 and 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#description GeminiDataAnalyticsDataAgent#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Optional. User friendly display name. Must be between 1 and 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#display_name GeminiDataAnalyticsDataAgent#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#id GeminiDataAnalyticsDataAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

Optional.

Customer managed encryption key (CMEK) to use for encrypting the
DataAgent resources. Cloud KMS CryptoKeys must reside in the same location
as the DataAgent. The expected format is
projects/* /locations/* /keyRings/* /cryptoKeys/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#kms_key GeminiDataAnalyticsDataAgent#kms_key}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional. Labels to help users filter related agents.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#labels GeminiDataAnalyticsDataAgent#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#project GeminiDataAnalyticsDataAgent#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GeminiDataAnalyticsDataAgentTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts">GeminiDataAnalyticsDataAgentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#timeouts GeminiDataAnalyticsDataAgent#timeouts}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgent <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgent" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

const geminiDataAnalyticsDataAgentDataAnalyticsAgent: geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent.property.publishedContext">publishedContext</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext</a></code> | published_context block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent.property.stagingContext">stagingContext</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext</a></code> | staging_context block. |

---

##### `publishedContext`<sup>Optional</sup> <a name="publishedContext" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent.property.publishedContext"></a>

```typescript
public readonly publishedContext: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext</a>

published_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#published_context GeminiDataAnalyticsDataAgent#published_context}

---

##### `stagingContext`<sup>Optional</sup> <a name="stagingContext" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent.property.stagingContext"></a>

```typescript
public readonly stagingContext: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext</a>

staging_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#staging_context GeminiDataAnalyticsDataAgent#staging_context}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContext <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContext" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContext.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

const geminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContext: geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContext = { ... }
```


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferences <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferences.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

const geminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferences: geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferences = { ... }
```


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBq <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBq" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBq"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBq.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

const geminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBq: geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBq = { ... }
```


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferences <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferences.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

const geminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferences: geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferences = { ... }
```


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

const geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext: geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext.property.datasourceReferences">datasourceReferences</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences</a></code> | datasource_references block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext.property.exampleQueries">exampleQueries</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries</a>[]</code> | example_queries block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext.property.glossaryTerms">glossaryTerms</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms</a>[]</code> | glossary_terms block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext.property.options">options</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions</a></code> | options block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext.property.schemaRelationships">schemaRelationships</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships</a>[]</code> | schema_relationships block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext.property.systemInstruction">systemInstruction</a></code> | <code>string</code> | Optional. The basic entry point for data owners creating domain knowledge for the agent. |

---

##### `datasourceReferences`<sup>Required</sup> <a name="datasourceReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext.property.datasourceReferences"></a>

```typescript
public readonly datasourceReferences: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences</a>

datasource_references block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#datasource_references GeminiDataAnalyticsDataAgent#datasource_references}

---

##### `exampleQueries`<sup>Optional</sup> <a name="exampleQueries" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext.property.exampleQueries"></a>

```typescript
public readonly exampleQueries: IResolvable | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries</a>[]

example_queries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#example_queries GeminiDataAnalyticsDataAgent#example_queries}

---

##### `glossaryTerms`<sup>Optional</sup> <a name="glossaryTerms" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext.property.glossaryTerms"></a>

```typescript
public readonly glossaryTerms: IResolvable | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms</a>[]

glossary_terms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#glossary_terms GeminiDataAnalyticsDataAgent#glossary_terms}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext.property.options"></a>

```typescript
public readonly options: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#options GeminiDataAnalyticsDataAgent#options}

---

##### `schemaRelationships`<sup>Optional</sup> <a name="schemaRelationships" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext.property.schemaRelationships"></a>

```typescript
public readonly schemaRelationships: IResolvable | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships</a>[]

schema_relationships block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#schema_relationships GeminiDataAnalyticsDataAgent#schema_relationships}

---

##### `systemInstruction`<sup>Optional</sup> <a name="systemInstruction" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext.property.systemInstruction"></a>

```typescript
public readonly systemInstruction: string;
```

- *Type:* string

Optional. The basic entry point for data owners creating domain knowledge for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#system_instruction GeminiDataAnalyticsDataAgent#system_instruction}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

const geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences: geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences.property.bq">bq</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq</a></code> | bq block. |

---

##### `bq`<sup>Required</sup> <a name="bq" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences.property.bq"></a>

```typescript
public readonly bq: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq</a>

bq block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#bq GeminiDataAnalyticsDataAgent#bq}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

const geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq: geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq.property.tableReferences">tableReferences</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences</a>[]</code> | table_references block. |

---

##### `tableReferences`<sup>Optional</sup> <a name="tableReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq.property.tableReferences"></a>

```typescript
public readonly tableReferences: IResolvable | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences</a>[]

table_references block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#table_references GeminiDataAnalyticsDataAgent#table_references}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

const geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences: geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences.property.datasetId">datasetId</a></code> | <code>string</code> | Required. The dataset that the table belongs to. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences.property.projectId">projectId</a></code> | <code>string</code> | Required. The project that the table belongs to. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences.property.tableId">tableId</a></code> | <code>string</code> | Required. The table ID. |

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

Required. The dataset that the table belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#dataset_id GeminiDataAnalyticsDataAgent#dataset_id}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Required. The project that the table belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#project_id GeminiDataAnalyticsDataAgent#project_id}

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

Required. The table ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#table_id GeminiDataAnalyticsDataAgent#table_id}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

const geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries: geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries.property.naturalLanguageQuestion">naturalLanguageQuestion</a></code> | <code>string</code> | Optional. A natural language question that a user might ask. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries.property.sqlQuery">sqlQuery</a></code> | <code>string</code> | Optional. The SQL query that should be generated to answer the natural language question. |

---

##### `naturalLanguageQuestion`<sup>Optional</sup> <a name="naturalLanguageQuestion" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries.property.naturalLanguageQuestion"></a>

```typescript
public readonly naturalLanguageQuestion: string;
```

- *Type:* string

Optional. A natural language question that a user might ask.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#natural_language_question GeminiDataAnalyticsDataAgent#natural_language_question}

---

##### `sqlQuery`<sup>Optional</sup> <a name="sqlQuery" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries.property.sqlQuery"></a>

```typescript
public readonly sqlQuery: string;
```

- *Type:* string

Optional. The SQL query that should be generated to answer the natural language question.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#sql_query GeminiDataAnalyticsDataAgent#sql_query}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

const geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms: geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms.property.description">description</a></code> | <code>string</code> | Required. The description or meaning of the term. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms.property.displayName">displayName</a></code> | <code>string</code> | Required. User friendly display name of the glossary term. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms.property.labels">labels</a></code> | <code>string[]</code> | Optional. A list of general purpose labels associated with this term. |

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Required. The description or meaning of the term.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#description GeminiDataAnalyticsDataAgent#description}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Required. User friendly display name of the glossary term.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#display_name GeminiDataAnalyticsDataAgent#display_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

Optional. A list of general purpose labels associated with this term.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#labels GeminiDataAnalyticsDataAgent#labels}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

const geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions: geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions.property.analysis">analysis</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis</a></code> | analysis block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions.property.datasource">datasource</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource</a></code> | datasource block. |

---

##### `analysis`<sup>Optional</sup> <a name="analysis" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions.property.analysis"></a>

```typescript
public readonly analysis: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis</a>

analysis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#analysis GeminiDataAnalyticsDataAgent#analysis}

---

##### `datasource`<sup>Optional</sup> <a name="datasource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions.property.datasource"></a>

```typescript
public readonly datasource: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource</a>

datasource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#datasource GeminiDataAnalyticsDataAgent#datasource}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

const geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis: geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis.property.python">python</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython</a></code> | python block. |

---

##### `python`<sup>Optional</sup> <a name="python" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis.property.python"></a>

```typescript
public readonly python: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython</a>

python block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#python GeminiDataAnalyticsDataAgent#python}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

const geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython: geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Optional. Whether to enable Python analysis. Defaults to false. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Optional. Whether to enable Python analysis. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#enabled GeminiDataAnalyticsDataAgent#enabled}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

const geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource: geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource.property.bigQueryMaxBilledBytes">bigQueryMaxBilledBytes</a></code> | <code>number</code> | Optional. Limits the bytes billed for each BigQuery query job. |

---

##### `bigQueryMaxBilledBytes`<sup>Optional</sup> <a name="bigQueryMaxBilledBytes" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource.property.bigQueryMaxBilledBytes"></a>

```typescript
public readonly bigQueryMaxBilledBytes: number;
```

- *Type:* number

Optional. Limits the bytes billed for each BigQuery query job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#big_query_max_billed_bytes GeminiDataAnalyticsDataAgent#big_query_max_billed_bytes}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

const geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships: geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships.property.leftSchemaPaths">leftSchemaPaths</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths</a></code> | left_schema_paths block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships.property.rightSchemaPaths">rightSchemaPaths</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths</a></code> | right_schema_paths block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships.property.confidenceScore">confidenceScore</a></code> | <code>number</code> | Optional. A confidence score for the suggested relationship. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships.property.sources">sources</a></code> | <code>string[]</code> | Optional. Sources which generated the schema relation edge. Possible values: BIGQUERY_JOB_HISTORY, LLM_SUGGESTED, BIGQUERY_TABLE_CONSTRAINTS. |

---

##### `leftSchemaPaths`<sup>Required</sup> <a name="leftSchemaPaths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships.property.leftSchemaPaths"></a>

```typescript
public readonly leftSchemaPaths: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths</a>

left_schema_paths block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#left_schema_paths GeminiDataAnalyticsDataAgent#left_schema_paths}

---

##### `rightSchemaPaths`<sup>Required</sup> <a name="rightSchemaPaths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships.property.rightSchemaPaths"></a>

```typescript
public readonly rightSchemaPaths: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths</a>

right_schema_paths block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#right_schema_paths GeminiDataAnalyticsDataAgent#right_schema_paths}

---

##### `confidenceScore`<sup>Optional</sup> <a name="confidenceScore" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships.property.confidenceScore"></a>

```typescript
public readonly confidenceScore: number;
```

- *Type:* number

Optional. A confidence score for the suggested relationship.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#confidence_score GeminiDataAnalyticsDataAgent#confidence_score}

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships.property.sources"></a>

```typescript
public readonly sources: string[];
```

- *Type:* string[]

Optional. Sources which generated the schema relation edge. Possible values: BIGQUERY_JOB_HISTORY, LLM_SUGGESTED, BIGQUERY_TABLE_CONSTRAINTS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#sources GeminiDataAnalyticsDataAgent#sources}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

const geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths: geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths.property.paths">paths</a></code> | <code>string[]</code> | Required. The ordered list of paths within the table schema. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths.property.tableFqn">tableFqn</a></code> | <code>string</code> | Required. The service-qualified full resource name of the table. |

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths.property.paths"></a>

```typescript
public readonly paths: string[];
```

- *Type:* string[]

Required. The ordered list of paths within the table schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#paths GeminiDataAnalyticsDataAgent#paths}

---

##### `tableFqn`<sup>Required</sup> <a name="tableFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths.property.tableFqn"></a>

```typescript
public readonly tableFqn: string;
```

- *Type:* string

Required. The service-qualified full resource name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#table_fqn GeminiDataAnalyticsDataAgent#table_fqn}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

const geminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths: geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths.property.paths">paths</a></code> | <code>string[]</code> | Required. The ordered list of paths within the table schema. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths.property.tableFqn">tableFqn</a></code> | <code>string</code> | Required. The service-qualified full resource name of the table. |

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths.property.paths"></a>

```typescript
public readonly paths: string[];
```

- *Type:* string[]

Required. The ordered list of paths within the table schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#paths GeminiDataAnalyticsDataAgent#paths}

---

##### `tableFqn`<sup>Required</sup> <a name="tableFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths.property.tableFqn"></a>

```typescript
public readonly tableFqn: string;
```

- *Type:* string

Required. The service-qualified full resource name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#table_fqn GeminiDataAnalyticsDataAgent#table_fqn}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

const geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext: geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext.property.datasourceReferences">datasourceReferences</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences</a></code> | datasource_references block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext.property.exampleQueries">exampleQueries</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries</a>[]</code> | example_queries block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext.property.glossaryTerms">glossaryTerms</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms</a>[]</code> | glossary_terms block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext.property.options">options</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions</a></code> | options block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext.property.schemaRelationships">schemaRelationships</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships</a>[]</code> | schema_relationships block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext.property.systemInstruction">systemInstruction</a></code> | <code>string</code> | Optional. The basic entry point for data owners creating domain knowledge for the agent. |

---

##### `datasourceReferences`<sup>Required</sup> <a name="datasourceReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext.property.datasourceReferences"></a>

```typescript
public readonly datasourceReferences: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences</a>

datasource_references block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#datasource_references GeminiDataAnalyticsDataAgent#datasource_references}

---

##### `exampleQueries`<sup>Optional</sup> <a name="exampleQueries" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext.property.exampleQueries"></a>

```typescript
public readonly exampleQueries: IResolvable | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries</a>[]

example_queries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#example_queries GeminiDataAnalyticsDataAgent#example_queries}

---

##### `glossaryTerms`<sup>Optional</sup> <a name="glossaryTerms" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext.property.glossaryTerms"></a>

```typescript
public readonly glossaryTerms: IResolvable | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms</a>[]

glossary_terms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#glossary_terms GeminiDataAnalyticsDataAgent#glossary_terms}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext.property.options"></a>

```typescript
public readonly options: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#options GeminiDataAnalyticsDataAgent#options}

---

##### `schemaRelationships`<sup>Optional</sup> <a name="schemaRelationships" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext.property.schemaRelationships"></a>

```typescript
public readonly schemaRelationships: IResolvable | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships</a>[]

schema_relationships block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#schema_relationships GeminiDataAnalyticsDataAgent#schema_relationships}

---

##### `systemInstruction`<sup>Optional</sup> <a name="systemInstruction" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext.property.systemInstruction"></a>

```typescript
public readonly systemInstruction: string;
```

- *Type:* string

Optional. The basic entry point for data owners creating domain knowledge for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#system_instruction GeminiDataAnalyticsDataAgent#system_instruction}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

const geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences: geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences.property.bq">bq</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq</a></code> | bq block. |

---

##### `bq`<sup>Required</sup> <a name="bq" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences.property.bq"></a>

```typescript
public readonly bq: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq</a>

bq block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#bq GeminiDataAnalyticsDataAgent#bq}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

const geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq: geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq.property.tableReferences">tableReferences</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences</a>[]</code> | table_references block. |

---

##### `tableReferences`<sup>Optional</sup> <a name="tableReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq.property.tableReferences"></a>

```typescript
public readonly tableReferences: IResolvable | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences</a>[]

table_references block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#table_references GeminiDataAnalyticsDataAgent#table_references}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

const geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences: geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences.property.datasetId">datasetId</a></code> | <code>string</code> | Required. The dataset that the table belongs to. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences.property.projectId">projectId</a></code> | <code>string</code> | Required. The project that the table belongs to. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences.property.tableId">tableId</a></code> | <code>string</code> | Required. The table ID. |

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

Required. The dataset that the table belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#dataset_id GeminiDataAnalyticsDataAgent#dataset_id}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Required. The project that the table belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#project_id GeminiDataAnalyticsDataAgent#project_id}

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

Required. The table ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#table_id GeminiDataAnalyticsDataAgent#table_id}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

const geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries: geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries.property.naturalLanguageQuestion">naturalLanguageQuestion</a></code> | <code>string</code> | Optional. A natural language question that a user might ask. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries.property.sqlQuery">sqlQuery</a></code> | <code>string</code> | Optional. The SQL query that should be generated to answer the natural language question. |

---

##### `naturalLanguageQuestion`<sup>Optional</sup> <a name="naturalLanguageQuestion" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries.property.naturalLanguageQuestion"></a>

```typescript
public readonly naturalLanguageQuestion: string;
```

- *Type:* string

Optional. A natural language question that a user might ask.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#natural_language_question GeminiDataAnalyticsDataAgent#natural_language_question}

---

##### `sqlQuery`<sup>Optional</sup> <a name="sqlQuery" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries.property.sqlQuery"></a>

```typescript
public readonly sqlQuery: string;
```

- *Type:* string

Optional. The SQL query that should be generated to answer the natural language question.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#sql_query GeminiDataAnalyticsDataAgent#sql_query}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

const geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms: geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms.property.description">description</a></code> | <code>string</code> | Required. The description or meaning of the term. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms.property.displayName">displayName</a></code> | <code>string</code> | Required. User friendly display name of the glossary term. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms.property.labels">labels</a></code> | <code>string[]</code> | Optional. A list of general purpose labels associated with this term. |

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Required. The description or meaning of the term.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#description GeminiDataAnalyticsDataAgent#description}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Required. User friendly display name of the glossary term.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#display_name GeminiDataAnalyticsDataAgent#display_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

Optional. A list of general purpose labels associated with this term.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#labels GeminiDataAnalyticsDataAgent#labels}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

const geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions: geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions.property.analysis">analysis</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis</a></code> | analysis block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions.property.datasource">datasource</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource</a></code> | datasource block. |

---

##### `analysis`<sup>Optional</sup> <a name="analysis" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions.property.analysis"></a>

```typescript
public readonly analysis: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis</a>

analysis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#analysis GeminiDataAnalyticsDataAgent#analysis}

---

##### `datasource`<sup>Optional</sup> <a name="datasource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions.property.datasource"></a>

```typescript
public readonly datasource: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource</a>

datasource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#datasource GeminiDataAnalyticsDataAgent#datasource}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

const geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis: geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis.property.python">python</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython</a></code> | python block. |

---

##### `python`<sup>Optional</sup> <a name="python" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis.property.python"></a>

```typescript
public readonly python: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython</a>

python block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#python GeminiDataAnalyticsDataAgent#python}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

const geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython: geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Optional. Whether to enable Python analysis. Defaults to false. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Optional. Whether to enable Python analysis. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#enabled GeminiDataAnalyticsDataAgent#enabled}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

const geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource: geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource.property.bigQueryMaxBilledBytes">bigQueryMaxBilledBytes</a></code> | <code>number</code> | Optional. Limits the bytes billed for each BigQuery query job. |

---

##### `bigQueryMaxBilledBytes`<sup>Optional</sup> <a name="bigQueryMaxBilledBytes" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource.property.bigQueryMaxBilledBytes"></a>

```typescript
public readonly bigQueryMaxBilledBytes: number;
```

- *Type:* number

Optional. Limits the bytes billed for each BigQuery query job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#big_query_max_billed_bytes GeminiDataAnalyticsDataAgent#big_query_max_billed_bytes}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

const geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships: geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships.property.leftSchemaPaths">leftSchemaPaths</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths</a></code> | left_schema_paths block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships.property.rightSchemaPaths">rightSchemaPaths</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths</a></code> | right_schema_paths block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships.property.confidenceScore">confidenceScore</a></code> | <code>number</code> | Optional. A confidence score for the suggested relationship. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships.property.sources">sources</a></code> | <code>string[]</code> | Optional. Sources which generated the schema relation edge. Possible values: BIGQUERY_JOB_HISTORY, LLM_SUGGESTED, BIGQUERY_TABLE_CONSTRAINTS. |

---

##### `leftSchemaPaths`<sup>Required</sup> <a name="leftSchemaPaths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships.property.leftSchemaPaths"></a>

```typescript
public readonly leftSchemaPaths: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths</a>

left_schema_paths block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#left_schema_paths GeminiDataAnalyticsDataAgent#left_schema_paths}

---

##### `rightSchemaPaths`<sup>Required</sup> <a name="rightSchemaPaths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships.property.rightSchemaPaths"></a>

```typescript
public readonly rightSchemaPaths: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths</a>

right_schema_paths block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#right_schema_paths GeminiDataAnalyticsDataAgent#right_schema_paths}

---

##### `confidenceScore`<sup>Optional</sup> <a name="confidenceScore" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships.property.confidenceScore"></a>

```typescript
public readonly confidenceScore: number;
```

- *Type:* number

Optional. A confidence score for the suggested relationship.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#confidence_score GeminiDataAnalyticsDataAgent#confidence_score}

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships.property.sources"></a>

```typescript
public readonly sources: string[];
```

- *Type:* string[]

Optional. Sources which generated the schema relation edge. Possible values: BIGQUERY_JOB_HISTORY, LLM_SUGGESTED, BIGQUERY_TABLE_CONSTRAINTS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#sources GeminiDataAnalyticsDataAgent#sources}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

const geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths: geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths.property.paths">paths</a></code> | <code>string[]</code> | Required. The ordered list of paths within the table schema. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths.property.tableFqn">tableFqn</a></code> | <code>string</code> | Required. The service-qualified full resource name of the table. |

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths.property.paths"></a>

```typescript
public readonly paths: string[];
```

- *Type:* string[]

Required. The ordered list of paths within the table schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#paths GeminiDataAnalyticsDataAgent#paths}

---

##### `tableFqn`<sup>Required</sup> <a name="tableFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths.property.tableFqn"></a>

```typescript
public readonly tableFqn: string;
```

- *Type:* string

Required. The service-qualified full resource name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#table_fqn GeminiDataAnalyticsDataAgent#table_fqn}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

const geminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths: geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths.property.paths">paths</a></code> | <code>string[]</code> | Required. The ordered list of paths within the table schema. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths.property.tableFqn">tableFqn</a></code> | <code>string</code> | Required. The service-qualified full resource name of the table. |

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths.property.paths"></a>

```typescript
public readonly paths: string[];
```

- *Type:* string[]

Required. The ordered list of paths within the table schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#paths GeminiDataAnalyticsDataAgent#paths}

---

##### `tableFqn`<sup>Required</sup> <a name="tableFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths.property.tableFqn"></a>

```typescript
public readonly tableFqn: string;
```

- *Type:* string

Required. The service-qualified full resource name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#table_fqn GeminiDataAnalyticsDataAgent#table_fqn}

---

### GeminiDataAnalyticsDataAgentTimeouts <a name="GeminiDataAnalyticsDataAgentTimeouts" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

const geminiDataAnalyticsDataAgentTimeouts: geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#create GeminiDataAnalyticsDataAgent#create}. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#delete GeminiDataAnalyticsDataAgent#delete}. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#update GeminiDataAnalyticsDataAgent#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#create GeminiDataAnalyticsDataAgent#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#delete GeminiDataAnalyticsDataAgent#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#update GeminiDataAnalyticsDataAgent#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

new geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.get"></a>

```typescript
public get(index: number): GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

new geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.property.tableReferences">tableReferences</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBq</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tableReferences`<sup>Required</sup> <a name="tableReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.property.tableReferences"></a>

```typescript
public readonly tableReferences: GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBq;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBq</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

new geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.get"></a>

```typescript
public get(index: number): GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

new geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.datasetId">datasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.tableId">tableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferences;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferences</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

new geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.get"></a>

```typescript
public get(index: number): GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

new geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.property.bq">bq</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bq`<sup>Required</sup> <a name="bq" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.property.bq"></a>

```typescript
public readonly bq: GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferences;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferences</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

new geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.get"></a>

```typescript
public get(index: number): GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

new geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.property.datasourceReferences">datasourceReferences</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.property.systemInstruction">systemInstruction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContext</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datasourceReferences`<sup>Required</sup> <a name="datasourceReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.property.datasourceReferences"></a>

```typescript
public readonly datasourceReferences: GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList</a>

---

##### `systemInstruction`<sup>Required</sup> <a name="systemInstruction" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.property.systemInstruction"></a>

```typescript
public readonly systemInstruction: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContext;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContext</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

new geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.putPublishedContext">putPublishedContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.putStagingContext">putStagingContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.resetPublishedContext">resetPublishedContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.resetStagingContext">resetStagingContext</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPublishedContext` <a name="putPublishedContext" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.putPublishedContext"></a>

```typescript
public putPublishedContext(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.putPublishedContext.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext</a>

---

##### `putStagingContext` <a name="putStagingContext" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.putStagingContext"></a>

```typescript
public putStagingContext(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.putStagingContext.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext</a>

---

##### `resetPublishedContext` <a name="resetPublishedContext" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.resetPublishedContext"></a>

```typescript
public resetPublishedContext(): void
```

##### `resetStagingContext` <a name="resetStagingContext" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.resetStagingContext"></a>

```typescript
public resetStagingContext(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.lastPublishedContext">lastPublishedContext</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.publishedContext">publishedContext</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.stagingContext">stagingContext</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.publishedContextInput">publishedContextInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.stagingContextInput">stagingContextInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent">GeminiDataAnalyticsDataAgentDataAnalyticsAgent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lastPublishedContext`<sup>Required</sup> <a name="lastPublishedContext" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.lastPublishedContext"></a>

```typescript
public readonly lastPublishedContext: GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList</a>

---

##### `publishedContext`<sup>Required</sup> <a name="publishedContext" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.publishedContext"></a>

```typescript
public readonly publishedContext: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference</a>

---

##### `stagingContext`<sup>Required</sup> <a name="stagingContext" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.stagingContext"></a>

```typescript
public readonly stagingContext: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference</a>

---

##### `publishedContextInput`<sup>Optional</sup> <a name="publishedContextInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.publishedContextInput"></a>

```typescript
public readonly publishedContextInput: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext</a>

---

##### `stagingContextInput`<sup>Optional</sup> <a name="stagingContextInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.stagingContextInput"></a>

```typescript
public readonly stagingContextInput: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GeminiDataAnalyticsDataAgentDataAnalyticsAgent;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent">GeminiDataAnalyticsDataAgentDataAnalyticsAgent</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

new geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.putTableReferences">putTableReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.resetTableReferences">resetTableReferences</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTableReferences` <a name="putTableReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.putTableReferences"></a>

```typescript
public putTableReferences(value: IResolvable | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.putTableReferences.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences</a>[]

---

##### `resetTableReferences` <a name="resetTableReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.resetTableReferences"></a>

```typescript
public resetTableReferences(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.property.tableReferences">tableReferences</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.property.tableReferencesInput">tableReferencesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tableReferences`<sup>Required</sup> <a name="tableReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.property.tableReferences"></a>

```typescript
public readonly tableReferences: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList</a>

---

##### `tableReferencesInput`<sup>Optional</sup> <a name="tableReferencesInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.property.tableReferencesInput"></a>

```typescript
public readonly tableReferencesInput: IResolvable | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

new geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.get"></a>

```typescript
public get(index: number): GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences</a>[]

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

new geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.datasetIdInput">datasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.tableIdInput">tableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.datasetId">datasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.tableId">tableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.datasetIdInput"></a>

```typescript
public readonly datasetIdInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `tableIdInput`<sup>Optional</sup> <a name="tableIdInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.tableIdInput"></a>

```typescript
public readonly tableIdInput: string;
```

- *Type:* string

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

new geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.putBq">putBq</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBq` <a name="putBq" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.putBq"></a>

```typescript
public putBq(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.putBq.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.property.bq">bq</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.property.bqInput">bqInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bq`<sup>Required</sup> <a name="bq" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.property.bq"></a>

```typescript
public readonly bq: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference</a>

---

##### `bqInput`<sup>Optional</sup> <a name="bqInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.property.bqInput"></a>

```typescript
public readonly bqInput: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

new geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.get"></a>

```typescript
public get(index: number): GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries</a>[]

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

new geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.resetNaturalLanguageQuestion">resetNaturalLanguageQuestion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.resetSqlQuery">resetSqlQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNaturalLanguageQuestion` <a name="resetNaturalLanguageQuestion" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.resetNaturalLanguageQuestion"></a>

```typescript
public resetNaturalLanguageQuestion(): void
```

##### `resetSqlQuery` <a name="resetSqlQuery" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.resetSqlQuery"></a>

```typescript
public resetSqlQuery(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.naturalLanguageQuestionInput">naturalLanguageQuestionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.sqlQueryInput">sqlQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.naturalLanguageQuestion">naturalLanguageQuestion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.sqlQuery">sqlQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `naturalLanguageQuestionInput`<sup>Optional</sup> <a name="naturalLanguageQuestionInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.naturalLanguageQuestionInput"></a>

```typescript
public readonly naturalLanguageQuestionInput: string;
```

- *Type:* string

---

##### `sqlQueryInput`<sup>Optional</sup> <a name="sqlQueryInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.sqlQueryInput"></a>

```typescript
public readonly sqlQueryInput: string;
```

- *Type:* string

---

##### `naturalLanguageQuestion`<sup>Required</sup> <a name="naturalLanguageQuestion" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.naturalLanguageQuestion"></a>

```typescript
public readonly naturalLanguageQuestion: string;
```

- *Type:* string

---

##### `sqlQuery`<sup>Required</sup> <a name="sqlQuery" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.sqlQuery"></a>

```typescript
public readonly sqlQuery: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

new geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.get"></a>

```typescript
public get(index: number): GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms</a>[]

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

new geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.resetLabels">resetLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.labelsInput">labelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.labels">labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

new geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.putPython">putPython</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.resetPython">resetPython</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPython` <a name="putPython" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.putPython"></a>

```typescript
public putPython(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.putPython.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython</a>

---

##### `resetPython` <a name="resetPython" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.resetPython"></a>

```typescript
public resetPython(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.property.python">python</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.property.pythonInput">pythonInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `python`<sup>Required</sup> <a name="python" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.property.python"></a>

```typescript
public readonly python: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference</a>

---

##### `pythonInput`<sup>Optional</sup> <a name="pythonInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.property.pythonInput"></a>

```typescript
public readonly pythonInput: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

new geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

new geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.resetBigQueryMaxBilledBytes">resetBigQueryMaxBilledBytes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBigQueryMaxBilledBytes` <a name="resetBigQueryMaxBilledBytes" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.resetBigQueryMaxBilledBytes"></a>

```typescript
public resetBigQueryMaxBilledBytes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.property.bigQueryMaxBilledBytesInput">bigQueryMaxBilledBytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.property.bigQueryMaxBilledBytes">bigQueryMaxBilledBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bigQueryMaxBilledBytesInput`<sup>Optional</sup> <a name="bigQueryMaxBilledBytesInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.property.bigQueryMaxBilledBytesInput"></a>

```typescript
public readonly bigQueryMaxBilledBytesInput: number;
```

- *Type:* number

---

##### `bigQueryMaxBilledBytes`<sup>Required</sup> <a name="bigQueryMaxBilledBytes" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.property.bigQueryMaxBilledBytes"></a>

```typescript
public readonly bigQueryMaxBilledBytes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

new geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.putAnalysis">putAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.putDatasource">putDatasource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.resetAnalysis">resetAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.resetDatasource">resetDatasource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnalysis` <a name="putAnalysis" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.putAnalysis"></a>

```typescript
public putAnalysis(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.putAnalysis.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis</a>

---

##### `putDatasource` <a name="putDatasource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.putDatasource"></a>

```typescript
public putDatasource(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.putDatasource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource</a>

---

##### `resetAnalysis` <a name="resetAnalysis" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.resetAnalysis"></a>

```typescript
public resetAnalysis(): void
```

##### `resetDatasource` <a name="resetDatasource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.resetDatasource"></a>

```typescript
public resetDatasource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.analysis">analysis</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.datasource">datasource</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.analysisInput">analysisInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.datasourceInput">datasourceInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `analysis`<sup>Required</sup> <a name="analysis" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.analysis"></a>

```typescript
public readonly analysis: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference</a>

---

##### `datasource`<sup>Required</sup> <a name="datasource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.datasource"></a>

```typescript
public readonly datasource: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference</a>

---

##### `analysisInput`<sup>Optional</sup> <a name="analysisInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.analysisInput"></a>

```typescript
public readonly analysisInput: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis</a>

---

##### `datasourceInput`<sup>Optional</sup> <a name="datasourceInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.datasourceInput"></a>

```typescript
public readonly datasourceInput: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

new geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putDatasourceReferences">putDatasourceReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putExampleQueries">putExampleQueries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putGlossaryTerms">putGlossaryTerms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putOptions">putOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putSchemaRelationships">putSchemaRelationships</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.resetExampleQueries">resetExampleQueries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.resetGlossaryTerms">resetGlossaryTerms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.resetSchemaRelationships">resetSchemaRelationships</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.resetSystemInstruction">resetSystemInstruction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDatasourceReferences` <a name="putDatasourceReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putDatasourceReferences"></a>

```typescript
public putDatasourceReferences(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putDatasourceReferences.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences</a>

---

##### `putExampleQueries` <a name="putExampleQueries" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putExampleQueries"></a>

```typescript
public putExampleQueries(value: IResolvable | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putExampleQueries.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries</a>[]

---

##### `putGlossaryTerms` <a name="putGlossaryTerms" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putGlossaryTerms"></a>

```typescript
public putGlossaryTerms(value: IResolvable | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putGlossaryTerms.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms</a>[]

---

##### `putOptions` <a name="putOptions" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putOptions"></a>

```typescript
public putOptions(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions</a>

---

##### `putSchemaRelationships` <a name="putSchemaRelationships" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putSchemaRelationships"></a>

```typescript
public putSchemaRelationships(value: IResolvable | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putSchemaRelationships.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships</a>[]

---

##### `resetExampleQueries` <a name="resetExampleQueries" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.resetExampleQueries"></a>

```typescript
public resetExampleQueries(): void
```

##### `resetGlossaryTerms` <a name="resetGlossaryTerms" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.resetGlossaryTerms"></a>

```typescript
public resetGlossaryTerms(): void
```

##### `resetOptions` <a name="resetOptions" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.resetOptions"></a>

```typescript
public resetOptions(): void
```

##### `resetSchemaRelationships` <a name="resetSchemaRelationships" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.resetSchemaRelationships"></a>

```typescript
public resetSchemaRelationships(): void
```

##### `resetSystemInstruction` <a name="resetSystemInstruction" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.resetSystemInstruction"></a>

```typescript
public resetSystemInstruction(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.datasourceReferences">datasourceReferences</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.exampleQueries">exampleQueries</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.glossaryTerms">glossaryTerms</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.options">options</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.schemaRelationships">schemaRelationships</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.datasourceReferencesInput">datasourceReferencesInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.exampleQueriesInput">exampleQueriesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.glossaryTermsInput">glossaryTermsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.optionsInput">optionsInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.schemaRelationshipsInput">schemaRelationshipsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.systemInstructionInput">systemInstructionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.systemInstruction">systemInstruction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datasourceReferences`<sup>Required</sup> <a name="datasourceReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.datasourceReferences"></a>

```typescript
public readonly datasourceReferences: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference</a>

---

##### `exampleQueries`<sup>Required</sup> <a name="exampleQueries" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.exampleQueries"></a>

```typescript
public readonly exampleQueries: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList</a>

---

##### `glossaryTerms`<sup>Required</sup> <a name="glossaryTerms" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.glossaryTerms"></a>

```typescript
public readonly glossaryTerms: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList</a>

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.options"></a>

```typescript
public readonly options: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference</a>

---

##### `schemaRelationships`<sup>Required</sup> <a name="schemaRelationships" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.schemaRelationships"></a>

```typescript
public readonly schemaRelationships: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList</a>

---

##### `datasourceReferencesInput`<sup>Optional</sup> <a name="datasourceReferencesInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.datasourceReferencesInput"></a>

```typescript
public readonly datasourceReferencesInput: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences</a>

---

##### `exampleQueriesInput`<sup>Optional</sup> <a name="exampleQueriesInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.exampleQueriesInput"></a>

```typescript
public readonly exampleQueriesInput: IResolvable | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries</a>[]

---

##### `glossaryTermsInput`<sup>Optional</sup> <a name="glossaryTermsInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.glossaryTermsInput"></a>

```typescript
public readonly glossaryTermsInput: IResolvable | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms</a>[]

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.optionsInput"></a>

```typescript
public readonly optionsInput: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions</a>

---

##### `schemaRelationshipsInput`<sup>Optional</sup> <a name="schemaRelationshipsInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.schemaRelationshipsInput"></a>

```typescript
public readonly schemaRelationshipsInput: IResolvable | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships</a>[]

---

##### `systemInstructionInput`<sup>Optional</sup> <a name="systemInstructionInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.systemInstructionInput"></a>

```typescript
public readonly systemInstructionInput: string;
```

- *Type:* string

---

##### `systemInstruction`<sup>Required</sup> <a name="systemInstruction" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.systemInstruction"></a>

```typescript
public readonly systemInstruction: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

new geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.pathsInput">pathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.tableFqnInput">tableFqnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.paths">paths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.tableFqn">tableFqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pathsInput`<sup>Optional</sup> <a name="pathsInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.pathsInput"></a>

```typescript
public readonly pathsInput: string[];
```

- *Type:* string[]

---

##### `tableFqnInput`<sup>Optional</sup> <a name="tableFqnInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.tableFqnInput"></a>

```typescript
public readonly tableFqnInput: string;
```

- *Type:* string

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.paths"></a>

```typescript
public readonly paths: string[];
```

- *Type:* string[]

---

##### `tableFqn`<sup>Required</sup> <a name="tableFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.tableFqn"></a>

```typescript
public readonly tableFqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

new geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.get"></a>

```typescript
public get(index: number): GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships</a>[]

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

new geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.putLeftSchemaPaths">putLeftSchemaPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.putRightSchemaPaths">putRightSchemaPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.resetConfidenceScore">resetConfidenceScore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.resetSources">resetSources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLeftSchemaPaths` <a name="putLeftSchemaPaths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.putLeftSchemaPaths"></a>

```typescript
public putLeftSchemaPaths(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.putLeftSchemaPaths.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths</a>

---

##### `putRightSchemaPaths` <a name="putRightSchemaPaths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.putRightSchemaPaths"></a>

```typescript
public putRightSchemaPaths(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.putRightSchemaPaths.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths</a>

---

##### `resetConfidenceScore` <a name="resetConfidenceScore" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.resetConfidenceScore"></a>

```typescript
public resetConfidenceScore(): void
```

##### `resetSources` <a name="resetSources" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.resetSources"></a>

```typescript
public resetSources(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.leftSchemaPaths">leftSchemaPaths</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.rightSchemaPaths">rightSchemaPaths</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.confidenceScoreInput">confidenceScoreInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.leftSchemaPathsInput">leftSchemaPathsInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.rightSchemaPathsInput">rightSchemaPathsInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.sourcesInput">sourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.confidenceScore">confidenceScore</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.sources">sources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `leftSchemaPaths`<sup>Required</sup> <a name="leftSchemaPaths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.leftSchemaPaths"></a>

```typescript
public readonly leftSchemaPaths: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference</a>

---

##### `rightSchemaPaths`<sup>Required</sup> <a name="rightSchemaPaths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.rightSchemaPaths"></a>

```typescript
public readonly rightSchemaPaths: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference</a>

---

##### `confidenceScoreInput`<sup>Optional</sup> <a name="confidenceScoreInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.confidenceScoreInput"></a>

```typescript
public readonly confidenceScoreInput: number;
```

- *Type:* number

---

##### `leftSchemaPathsInput`<sup>Optional</sup> <a name="leftSchemaPathsInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.leftSchemaPathsInput"></a>

```typescript
public readonly leftSchemaPathsInput: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths</a>

---

##### `rightSchemaPathsInput`<sup>Optional</sup> <a name="rightSchemaPathsInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.rightSchemaPathsInput"></a>

```typescript
public readonly rightSchemaPathsInput: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths</a>

---

##### `sourcesInput`<sup>Optional</sup> <a name="sourcesInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.sourcesInput"></a>

```typescript
public readonly sourcesInput: string[];
```

- *Type:* string[]

---

##### `confidenceScore`<sup>Required</sup> <a name="confidenceScore" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.confidenceScore"></a>

```typescript
public readonly confidenceScore: number;
```

- *Type:* number

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.sources"></a>

```typescript
public readonly sources: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

new geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.pathsInput">pathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.tableFqnInput">tableFqnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.paths">paths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.tableFqn">tableFqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pathsInput`<sup>Optional</sup> <a name="pathsInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.pathsInput"></a>

```typescript
public readonly pathsInput: string[];
```

- *Type:* string[]

---

##### `tableFqnInput`<sup>Optional</sup> <a name="tableFqnInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.tableFqnInput"></a>

```typescript
public readonly tableFqnInput: string;
```

- *Type:* string

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.paths"></a>

```typescript
public readonly paths: string[];
```

- *Type:* string[]

---

##### `tableFqn`<sup>Required</sup> <a name="tableFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.tableFqn"></a>

```typescript
public readonly tableFqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

new geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.putTableReferences">putTableReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.resetTableReferences">resetTableReferences</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTableReferences` <a name="putTableReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.putTableReferences"></a>

```typescript
public putTableReferences(value: IResolvable | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.putTableReferences.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences</a>[]

---

##### `resetTableReferences` <a name="resetTableReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.resetTableReferences"></a>

```typescript
public resetTableReferences(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.property.tableReferences">tableReferences</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.property.tableReferencesInput">tableReferencesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tableReferences`<sup>Required</sup> <a name="tableReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.property.tableReferences"></a>

```typescript
public readonly tableReferences: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList</a>

---

##### `tableReferencesInput`<sup>Optional</sup> <a name="tableReferencesInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.property.tableReferencesInput"></a>

```typescript
public readonly tableReferencesInput: IResolvable | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

new geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.get"></a>

```typescript
public get(index: number): GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences</a>[]

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

new geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.datasetIdInput">datasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.tableIdInput">tableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.datasetId">datasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.tableId">tableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.datasetIdInput"></a>

```typescript
public readonly datasetIdInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `tableIdInput`<sup>Optional</sup> <a name="tableIdInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.tableIdInput"></a>

```typescript
public readonly tableIdInput: string;
```

- *Type:* string

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

new geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.putBq">putBq</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBq` <a name="putBq" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.putBq"></a>

```typescript
public putBq(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.putBq.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.property.bq">bq</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.property.bqInput">bqInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bq`<sup>Required</sup> <a name="bq" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.property.bq"></a>

```typescript
public readonly bq: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference</a>

---

##### `bqInput`<sup>Optional</sup> <a name="bqInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.property.bqInput"></a>

```typescript
public readonly bqInput: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

new geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.get"></a>

```typescript
public get(index: number): GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries</a>[]

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

new geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.resetNaturalLanguageQuestion">resetNaturalLanguageQuestion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.resetSqlQuery">resetSqlQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNaturalLanguageQuestion` <a name="resetNaturalLanguageQuestion" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.resetNaturalLanguageQuestion"></a>

```typescript
public resetNaturalLanguageQuestion(): void
```

##### `resetSqlQuery` <a name="resetSqlQuery" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.resetSqlQuery"></a>

```typescript
public resetSqlQuery(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.naturalLanguageQuestionInput">naturalLanguageQuestionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.sqlQueryInput">sqlQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.naturalLanguageQuestion">naturalLanguageQuestion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.sqlQuery">sqlQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `naturalLanguageQuestionInput`<sup>Optional</sup> <a name="naturalLanguageQuestionInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.naturalLanguageQuestionInput"></a>

```typescript
public readonly naturalLanguageQuestionInput: string;
```

- *Type:* string

---

##### `sqlQueryInput`<sup>Optional</sup> <a name="sqlQueryInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.sqlQueryInput"></a>

```typescript
public readonly sqlQueryInput: string;
```

- *Type:* string

---

##### `naturalLanguageQuestion`<sup>Required</sup> <a name="naturalLanguageQuestion" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.naturalLanguageQuestion"></a>

```typescript
public readonly naturalLanguageQuestion: string;
```

- *Type:* string

---

##### `sqlQuery`<sup>Required</sup> <a name="sqlQuery" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.sqlQuery"></a>

```typescript
public readonly sqlQuery: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

new geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.get"></a>

```typescript
public get(index: number): GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms</a>[]

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

new geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.resetLabels">resetLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.labelsInput">labelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.labels">labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

new geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.putPython">putPython</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.resetPython">resetPython</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPython` <a name="putPython" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.putPython"></a>

```typescript
public putPython(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.putPython.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython</a>

---

##### `resetPython` <a name="resetPython" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.resetPython"></a>

```typescript
public resetPython(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.property.python">python</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.property.pythonInput">pythonInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `python`<sup>Required</sup> <a name="python" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.property.python"></a>

```typescript
public readonly python: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference</a>

---

##### `pythonInput`<sup>Optional</sup> <a name="pythonInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.property.pythonInput"></a>

```typescript
public readonly pythonInput: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

new geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

new geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.resetBigQueryMaxBilledBytes">resetBigQueryMaxBilledBytes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBigQueryMaxBilledBytes` <a name="resetBigQueryMaxBilledBytes" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.resetBigQueryMaxBilledBytes"></a>

```typescript
public resetBigQueryMaxBilledBytes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.property.bigQueryMaxBilledBytesInput">bigQueryMaxBilledBytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.property.bigQueryMaxBilledBytes">bigQueryMaxBilledBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bigQueryMaxBilledBytesInput`<sup>Optional</sup> <a name="bigQueryMaxBilledBytesInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.property.bigQueryMaxBilledBytesInput"></a>

```typescript
public readonly bigQueryMaxBilledBytesInput: number;
```

- *Type:* number

---

##### `bigQueryMaxBilledBytes`<sup>Required</sup> <a name="bigQueryMaxBilledBytes" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.property.bigQueryMaxBilledBytes"></a>

```typescript
public readonly bigQueryMaxBilledBytes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

new geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.putAnalysis">putAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.putDatasource">putDatasource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.resetAnalysis">resetAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.resetDatasource">resetDatasource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnalysis` <a name="putAnalysis" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.putAnalysis"></a>

```typescript
public putAnalysis(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.putAnalysis.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis</a>

---

##### `putDatasource` <a name="putDatasource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.putDatasource"></a>

```typescript
public putDatasource(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.putDatasource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource</a>

---

##### `resetAnalysis` <a name="resetAnalysis" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.resetAnalysis"></a>

```typescript
public resetAnalysis(): void
```

##### `resetDatasource` <a name="resetDatasource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.resetDatasource"></a>

```typescript
public resetDatasource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.analysis">analysis</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.datasource">datasource</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.analysisInput">analysisInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.datasourceInput">datasourceInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `analysis`<sup>Required</sup> <a name="analysis" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.analysis"></a>

```typescript
public readonly analysis: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference</a>

---

##### `datasource`<sup>Required</sup> <a name="datasource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.datasource"></a>

```typescript
public readonly datasource: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference</a>

---

##### `analysisInput`<sup>Optional</sup> <a name="analysisInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.analysisInput"></a>

```typescript
public readonly analysisInput: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis</a>

---

##### `datasourceInput`<sup>Optional</sup> <a name="datasourceInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.datasourceInput"></a>

```typescript
public readonly datasourceInput: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

new geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putDatasourceReferences">putDatasourceReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putExampleQueries">putExampleQueries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putGlossaryTerms">putGlossaryTerms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putOptions">putOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putSchemaRelationships">putSchemaRelationships</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.resetExampleQueries">resetExampleQueries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.resetGlossaryTerms">resetGlossaryTerms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.resetSchemaRelationships">resetSchemaRelationships</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.resetSystemInstruction">resetSystemInstruction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDatasourceReferences` <a name="putDatasourceReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putDatasourceReferences"></a>

```typescript
public putDatasourceReferences(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putDatasourceReferences.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences</a>

---

##### `putExampleQueries` <a name="putExampleQueries" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putExampleQueries"></a>

```typescript
public putExampleQueries(value: IResolvable | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putExampleQueries.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries</a>[]

---

##### `putGlossaryTerms` <a name="putGlossaryTerms" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putGlossaryTerms"></a>

```typescript
public putGlossaryTerms(value: IResolvable | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putGlossaryTerms.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms</a>[]

---

##### `putOptions` <a name="putOptions" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putOptions"></a>

```typescript
public putOptions(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions</a>

---

##### `putSchemaRelationships` <a name="putSchemaRelationships" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putSchemaRelationships"></a>

```typescript
public putSchemaRelationships(value: IResolvable | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putSchemaRelationships.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships</a>[]

---

##### `resetExampleQueries` <a name="resetExampleQueries" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.resetExampleQueries"></a>

```typescript
public resetExampleQueries(): void
```

##### `resetGlossaryTerms` <a name="resetGlossaryTerms" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.resetGlossaryTerms"></a>

```typescript
public resetGlossaryTerms(): void
```

##### `resetOptions` <a name="resetOptions" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.resetOptions"></a>

```typescript
public resetOptions(): void
```

##### `resetSchemaRelationships` <a name="resetSchemaRelationships" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.resetSchemaRelationships"></a>

```typescript
public resetSchemaRelationships(): void
```

##### `resetSystemInstruction` <a name="resetSystemInstruction" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.resetSystemInstruction"></a>

```typescript
public resetSystemInstruction(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.datasourceReferences">datasourceReferences</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.exampleQueries">exampleQueries</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.glossaryTerms">glossaryTerms</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.options">options</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.schemaRelationships">schemaRelationships</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.datasourceReferencesInput">datasourceReferencesInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.exampleQueriesInput">exampleQueriesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.glossaryTermsInput">glossaryTermsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.optionsInput">optionsInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.schemaRelationshipsInput">schemaRelationshipsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.systemInstructionInput">systemInstructionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.systemInstruction">systemInstruction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datasourceReferences`<sup>Required</sup> <a name="datasourceReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.datasourceReferences"></a>

```typescript
public readonly datasourceReferences: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference</a>

---

##### `exampleQueries`<sup>Required</sup> <a name="exampleQueries" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.exampleQueries"></a>

```typescript
public readonly exampleQueries: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList</a>

---

##### `glossaryTerms`<sup>Required</sup> <a name="glossaryTerms" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.glossaryTerms"></a>

```typescript
public readonly glossaryTerms: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList</a>

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.options"></a>

```typescript
public readonly options: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference</a>

---

##### `schemaRelationships`<sup>Required</sup> <a name="schemaRelationships" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.schemaRelationships"></a>

```typescript
public readonly schemaRelationships: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList</a>

---

##### `datasourceReferencesInput`<sup>Optional</sup> <a name="datasourceReferencesInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.datasourceReferencesInput"></a>

```typescript
public readonly datasourceReferencesInput: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences</a>

---

##### `exampleQueriesInput`<sup>Optional</sup> <a name="exampleQueriesInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.exampleQueriesInput"></a>

```typescript
public readonly exampleQueriesInput: IResolvable | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries</a>[]

---

##### `glossaryTermsInput`<sup>Optional</sup> <a name="glossaryTermsInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.glossaryTermsInput"></a>

```typescript
public readonly glossaryTermsInput: IResolvable | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms</a>[]

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.optionsInput"></a>

```typescript
public readonly optionsInput: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions</a>

---

##### `schemaRelationshipsInput`<sup>Optional</sup> <a name="schemaRelationshipsInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.schemaRelationshipsInput"></a>

```typescript
public readonly schemaRelationshipsInput: IResolvable | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships</a>[]

---

##### `systemInstructionInput`<sup>Optional</sup> <a name="systemInstructionInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.systemInstructionInput"></a>

```typescript
public readonly systemInstructionInput: string;
```

- *Type:* string

---

##### `systemInstruction`<sup>Required</sup> <a name="systemInstruction" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.systemInstruction"></a>

```typescript
public readonly systemInstruction: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

new geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.pathsInput">pathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.tableFqnInput">tableFqnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.paths">paths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.tableFqn">tableFqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pathsInput`<sup>Optional</sup> <a name="pathsInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.pathsInput"></a>

```typescript
public readonly pathsInput: string[];
```

- *Type:* string[]

---

##### `tableFqnInput`<sup>Optional</sup> <a name="tableFqnInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.tableFqnInput"></a>

```typescript
public readonly tableFqnInput: string;
```

- *Type:* string

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.paths"></a>

```typescript
public readonly paths: string[];
```

- *Type:* string[]

---

##### `tableFqn`<sup>Required</sup> <a name="tableFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.tableFqn"></a>

```typescript
public readonly tableFqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

new geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.get"></a>

```typescript
public get(index: number): GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships</a>[]

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

new geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.putLeftSchemaPaths">putLeftSchemaPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.putRightSchemaPaths">putRightSchemaPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.resetConfidenceScore">resetConfidenceScore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.resetSources">resetSources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLeftSchemaPaths` <a name="putLeftSchemaPaths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.putLeftSchemaPaths"></a>

```typescript
public putLeftSchemaPaths(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.putLeftSchemaPaths.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths</a>

---

##### `putRightSchemaPaths` <a name="putRightSchemaPaths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.putRightSchemaPaths"></a>

```typescript
public putRightSchemaPaths(value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.putRightSchemaPaths.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths</a>

---

##### `resetConfidenceScore` <a name="resetConfidenceScore" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.resetConfidenceScore"></a>

```typescript
public resetConfidenceScore(): void
```

##### `resetSources` <a name="resetSources" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.resetSources"></a>

```typescript
public resetSources(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.leftSchemaPaths">leftSchemaPaths</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.rightSchemaPaths">rightSchemaPaths</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.confidenceScoreInput">confidenceScoreInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.leftSchemaPathsInput">leftSchemaPathsInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.rightSchemaPathsInput">rightSchemaPathsInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.sourcesInput">sourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.confidenceScore">confidenceScore</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.sources">sources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `leftSchemaPaths`<sup>Required</sup> <a name="leftSchemaPaths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.leftSchemaPaths"></a>

```typescript
public readonly leftSchemaPaths: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference</a>

---

##### `rightSchemaPaths`<sup>Required</sup> <a name="rightSchemaPaths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.rightSchemaPaths"></a>

```typescript
public readonly rightSchemaPaths: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference</a>

---

##### `confidenceScoreInput`<sup>Optional</sup> <a name="confidenceScoreInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.confidenceScoreInput"></a>

```typescript
public readonly confidenceScoreInput: number;
```

- *Type:* number

---

##### `leftSchemaPathsInput`<sup>Optional</sup> <a name="leftSchemaPathsInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.leftSchemaPathsInput"></a>

```typescript
public readonly leftSchemaPathsInput: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths</a>

---

##### `rightSchemaPathsInput`<sup>Optional</sup> <a name="rightSchemaPathsInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.rightSchemaPathsInput"></a>

```typescript
public readonly rightSchemaPathsInput: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths</a>

---

##### `sourcesInput`<sup>Optional</sup> <a name="sourcesInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.sourcesInput"></a>

```typescript
public readonly sourcesInput: string[];
```

- *Type:* string[]

---

##### `confidenceScore`<sup>Required</sup> <a name="confidenceScore" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.confidenceScore"></a>

```typescript
public readonly confidenceScore: number;
```

- *Type:* number

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.sources"></a>

```typescript
public readonly sources: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

new geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.pathsInput">pathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.tableFqnInput">tableFqnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.paths">paths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.tableFqn">tableFqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pathsInput`<sup>Optional</sup> <a name="pathsInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.pathsInput"></a>

```typescript
public readonly pathsInput: string[];
```

- *Type:* string[]

---

##### `tableFqnInput`<sup>Optional</sup> <a name="tableFqnInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.tableFqnInput"></a>

```typescript
public readonly tableFqnInput: string;
```

- *Type:* string

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.paths"></a>

```typescript
public readonly paths: string[];
```

- *Type:* string[]

---

##### `tableFqn`<sup>Required</sup> <a name="tableFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.tableFqn"></a>

```typescript
public readonly tableFqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths;
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths</a>

---


### GeminiDataAnalyticsDataAgentTimeoutsOutputReference <a name="GeminiDataAnalyticsDataAgentTimeoutsOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.Initializer"></a>

```typescript
import { geminiDataAnalyticsDataAgent } from '@cdktn/provider-google'

new geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts">GeminiDataAnalyticsDataAgentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GeminiDataAnalyticsDataAgentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts">GeminiDataAnalyticsDataAgentTimeouts</a>

---



