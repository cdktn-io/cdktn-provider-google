# `pubsubTopic` Submodule <a name="`pubsubTopic` Submodule" id="@cdktn/provider-google.pubsubTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PubsubTopic <a name="PubsubTopic" id="@cdktn/provider-google.pubsubTopic.PubsubTopic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic google_pubsub_topic}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktn/provider-google'

new pubsubTopic.PubsubTopic(scope: Construct, id: string, config: PubsubTopicConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicConfig">PubsubTopicConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicConfig">PubsubTopicConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.putIngestionDataSourceSettings">putIngestionDataSourceSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.putMessageStoragePolicy">putMessageStoragePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.putMessageTransforms">putMessageTransforms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.putSchemaSettings">putSchemaSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.resetIngestionDataSourceSettings">resetIngestionDataSourceSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.resetMessageRetentionDuration">resetMessageRetentionDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.resetMessageStoragePolicy">resetMessageStoragePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.resetMessageTransforms">resetMessageTransforms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.resetSchemaSettings">resetSchemaSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIngestionDataSourceSettings` <a name="putIngestionDataSourceSettings" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.putIngestionDataSourceSettings"></a>

```typescript
public putIngestionDataSourceSettings(value: PubsubTopicIngestionDataSourceSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.putIngestionDataSourceSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings">PubsubTopicIngestionDataSourceSettings</a>

---

##### `putMessageStoragePolicy` <a name="putMessageStoragePolicy" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.putMessageStoragePolicy"></a>

```typescript
public putMessageStoragePolicy(value: PubsubTopicMessageStoragePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.putMessageStoragePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy">PubsubTopicMessageStoragePolicy</a>

---

##### `putMessageTransforms` <a name="putMessageTransforms" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.putMessageTransforms"></a>

```typescript
public putMessageTransforms(value: IResolvable | PubsubTopicMessageTransforms[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.putMessageTransforms.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransforms">PubsubTopicMessageTransforms</a>[]

---

##### `putSchemaSettings` <a name="putSchemaSettings" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.putSchemaSettings"></a>

```typescript
public putSchemaSettings(value: PubsubTopicSchemaSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.putSchemaSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettings">PubsubTopicSchemaSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.putTimeouts"></a>

```typescript
public putTimeouts(value: PubsubTopicTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeouts">PubsubTopicTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIngestionDataSourceSettings` <a name="resetIngestionDataSourceSettings" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.resetIngestionDataSourceSettings"></a>

```typescript
public resetIngestionDataSourceSettings(): void
```

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.resetKmsKeyName"></a>

```typescript
public resetKmsKeyName(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMessageRetentionDuration` <a name="resetMessageRetentionDuration" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.resetMessageRetentionDuration"></a>

```typescript
public resetMessageRetentionDuration(): void
```

##### `resetMessageStoragePolicy` <a name="resetMessageStoragePolicy" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.resetMessageStoragePolicy"></a>

```typescript
public resetMessageStoragePolicy(): void
```

##### `resetMessageTransforms` <a name="resetMessageTransforms" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.resetMessageTransforms"></a>

```typescript
public resetMessageTransforms(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSchemaSettings` <a name="resetSchemaSettings" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.resetSchemaSettings"></a>

```typescript
public resetSchemaSettings(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PubsubTopic resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.isConstruct"></a>

```typescript
import { pubsubTopic } from '@cdktn/provider-google'

pubsubTopic.PubsubTopic.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.isTerraformElement"></a>

```typescript
import { pubsubTopic } from '@cdktn/provider-google'

pubsubTopic.PubsubTopic.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.isTerraformResource"></a>

```typescript
import { pubsubTopic } from '@cdktn/provider-google'

pubsubTopic.PubsubTopic.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.generateConfigForImport"></a>

```typescript
import { pubsubTopic } from '@cdktn/provider-google'

pubsubTopic.PubsubTopic.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a PubsubTopic resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PubsubTopic to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PubsubTopic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PubsubTopic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.ingestionDataSourceSettings">ingestionDataSourceSettings</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference">PubsubTopicIngestionDataSourceSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.messageStoragePolicy">messageStoragePolicy</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference">PubsubTopicMessageStoragePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.messageTransforms">messageTransforms</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList">PubsubTopicMessageTransformsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.schemaSettings">schemaSettings</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference">PubsubTopicSchemaSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference">PubsubTopicTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.ingestionDataSourceSettingsInput">ingestionDataSourceSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings">PubsubTopicIngestionDataSourceSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.messageRetentionDurationInput">messageRetentionDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.messageStoragePolicyInput">messageStoragePolicyInput</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy">PubsubTopicMessageStoragePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.messageTransformsInput">messageTransformsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransforms">PubsubTopicMessageTransforms</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.schemaSettingsInput">schemaSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettings">PubsubTopicSchemaSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeouts">PubsubTopicTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.messageRetentionDuration">messageRetentionDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `ingestionDataSourceSettings`<sup>Required</sup> <a name="ingestionDataSourceSettings" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.ingestionDataSourceSettings"></a>

```typescript
public readonly ingestionDataSourceSettings: PubsubTopicIngestionDataSourceSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference">PubsubTopicIngestionDataSourceSettingsOutputReference</a>

---

##### `messageStoragePolicy`<sup>Required</sup> <a name="messageStoragePolicy" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.messageStoragePolicy"></a>

```typescript
public readonly messageStoragePolicy: PubsubTopicMessageStoragePolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference">PubsubTopicMessageStoragePolicyOutputReference</a>

---

##### `messageTransforms`<sup>Required</sup> <a name="messageTransforms" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.messageTransforms"></a>

```typescript
public readonly messageTransforms: PubsubTopicMessageTransformsList;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList">PubsubTopicMessageTransformsList</a>

---

##### `schemaSettings`<sup>Required</sup> <a name="schemaSettings" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.schemaSettings"></a>

```typescript
public readonly schemaSettings: PubsubTopicSchemaSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference">PubsubTopicSchemaSettingsOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.timeouts"></a>

```typescript
public readonly timeouts: PubsubTopicTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference">PubsubTopicTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ingestionDataSourceSettingsInput`<sup>Optional</sup> <a name="ingestionDataSourceSettingsInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.ingestionDataSourceSettingsInput"></a>

```typescript
public readonly ingestionDataSourceSettingsInput: PubsubTopicIngestionDataSourceSettings;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings">PubsubTopicIngestionDataSourceSettings</a>

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `messageRetentionDurationInput`<sup>Optional</sup> <a name="messageRetentionDurationInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.messageRetentionDurationInput"></a>

```typescript
public readonly messageRetentionDurationInput: string;
```

- *Type:* string

---

##### `messageStoragePolicyInput`<sup>Optional</sup> <a name="messageStoragePolicyInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.messageStoragePolicyInput"></a>

```typescript
public readonly messageStoragePolicyInput: PubsubTopicMessageStoragePolicy;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy">PubsubTopicMessageStoragePolicy</a>

---

##### `messageTransformsInput`<sup>Optional</sup> <a name="messageTransformsInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.messageTransformsInput"></a>

```typescript
public readonly messageTransformsInput: IResolvable | PubsubTopicMessageTransforms[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransforms">PubsubTopicMessageTransforms</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `schemaSettingsInput`<sup>Optional</sup> <a name="schemaSettingsInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.schemaSettingsInput"></a>

```typescript
public readonly schemaSettingsInput: PubsubTopicSchemaSettings;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettings">PubsubTopicSchemaSettings</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | PubsubTopicTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeouts">PubsubTopicTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `messageRetentionDuration`<sup>Required</sup> <a name="messageRetentionDuration" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.messageRetentionDuration"></a>

```typescript
public readonly messageRetentionDuration: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopic.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.pubsubTopic.PubsubTopic.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PubsubTopicConfig <a name="PubsubTopicConfig" id="@cdktn/provider-google.pubsubTopic.PubsubTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktn/provider-google'

const pubsubTopicConfig: pubsubTopic.PubsubTopicConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.name">name</a></code> | <code>string</code> | Name of the topic. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#id PubsubTopic#id}. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.ingestionDataSourceSettings">ingestionDataSourceSettings</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings">PubsubTopicIngestionDataSourceSettings</a></code> | ingestion_data_source_settings block. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | The resource name of the Cloud KMS CryptoKey to be used to protect access to messages published on this topic. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | A set of key/value label pairs to assign to this Topic. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.messageRetentionDuration">messageRetentionDuration</a></code> | <code>string</code> | Indicates the minimum duration to retain a message after it is published to the topic. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.messageStoragePolicy">messageStoragePolicy</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy">PubsubTopicMessageStoragePolicy</a></code> | message_storage_policy block. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.messageTransforms">messageTransforms</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransforms">PubsubTopicMessageTransforms</a>[]</code> | message_transforms block. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#project PubsubTopic#project}. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.schemaSettings">schemaSettings</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettings">PubsubTopicSchemaSettings</a></code> | schema_settings block. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Input only. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeouts">PubsubTopicTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#name PubsubTopic#name}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#deletion_policy PubsubTopic#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#id PubsubTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingestionDataSourceSettings`<sup>Optional</sup> <a name="ingestionDataSourceSettings" id="@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.ingestionDataSourceSettings"></a>

```typescript
public readonly ingestionDataSourceSettings: PubsubTopicIngestionDataSourceSettings;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings">PubsubTopicIngestionDataSourceSettings</a>

ingestion_data_source_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#ingestion_data_source_settings PubsubTopic#ingestion_data_source_settings}

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

The resource name of the Cloud KMS CryptoKey to be used to protect access to messages published on this topic.

Your project's PubSub service account
('service-{{PROJECT_NUMBER}}@gcp-sa-pubsub.iam.gserviceaccount.com') must have
'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this feature.
The expected format is 'projects/* /locations/* /keyRings/* /cryptoKeys/*'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#kms_key_name PubsubTopic#kms_key_name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A set of key/value label pairs to assign to this Topic.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#labels PubsubTopic#labels}

---

##### `messageRetentionDuration`<sup>Optional</sup> <a name="messageRetentionDuration" id="@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.messageRetentionDuration"></a>

```typescript
public readonly messageRetentionDuration: string;
```

- *Type:* string

Indicates the minimum duration to retain a message after it is published to the topic.

If this field is set, messages published to the topic in
the last messageRetentionDuration are always available to subscribers.
For instance, it allows any attached subscription to seek to a timestamp
that is up to messageRetentionDuration in the past. If this field is not
set, message retention is controlled by settings on individual subscriptions.
The rotation period has the format of a decimal number, followed by the
letter 's' (seconds). Cannot be more than 31 days or less than 10 minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#message_retention_duration PubsubTopic#message_retention_duration}

---

##### `messageStoragePolicy`<sup>Optional</sup> <a name="messageStoragePolicy" id="@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.messageStoragePolicy"></a>

```typescript
public readonly messageStoragePolicy: PubsubTopicMessageStoragePolicy;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy">PubsubTopicMessageStoragePolicy</a>

message_storage_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#message_storage_policy PubsubTopic#message_storage_policy}

---

##### `messageTransforms`<sup>Optional</sup> <a name="messageTransforms" id="@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.messageTransforms"></a>

```typescript
public readonly messageTransforms: IResolvable | PubsubTopicMessageTransforms[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransforms">PubsubTopicMessageTransforms</a>[]

message_transforms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#message_transforms PubsubTopic#message_transforms}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#project PubsubTopic#project}.

---

##### `schemaSettings`<sup>Optional</sup> <a name="schemaSettings" id="@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.schemaSettings"></a>

```typescript
public readonly schemaSettings: PubsubTopicSchemaSettings;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettings">PubsubTopicSchemaSettings</a>

schema_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#schema_settings PubsubTopic#schema_settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Input only.

Resource manager tags to be bound to the topic. Tag keys and
values have the same definition as resource manager tags. Keys must be in
the format tagKeys/{tag_key_id}, and values are in the format
tagValues/456. The field is ignored when empty. The field is immutable and
causes resource replacement when mutated. This field is only set at create
time and modifying this field after creation will trigger recreation. To
apply tags to an existing resource, see the 'google_tags_tag_value'
resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#tags PubsubTopic#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.pubsubTopic.PubsubTopicConfig.property.timeouts"></a>

```typescript
public readonly timeouts: PubsubTopicTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeouts">PubsubTopicTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#timeouts PubsubTopic#timeouts}

---

### PubsubTopicIngestionDataSourceSettings <a name="PubsubTopicIngestionDataSourceSettings" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktn/provider-google'

const pubsubTopicIngestionDataSourceSettings: pubsubTopic.PubsubTopicIngestionDataSourceSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings.property.awsKinesis">awsKinesis</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis">PubsubTopicIngestionDataSourceSettingsAwsKinesis</a></code> | aws_kinesis block. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings.property.awsMsk">awsMsk</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk">PubsubTopicIngestionDataSourceSettingsAwsMsk</a></code> | aws_msk block. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings.property.azureEventHubs">azureEventHubs</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs">PubsubTopicIngestionDataSourceSettingsAzureEventHubs</a></code> | azure_event_hubs block. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings.property.cloudStorage">cloudStorage</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage">PubsubTopicIngestionDataSourceSettingsCloudStorage</a></code> | cloud_storage block. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings.property.confluentCloud">confluentCloud</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud">PubsubTopicIngestionDataSourceSettingsConfluentCloud</a></code> | confluent_cloud block. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings.property.platformLogsSettings">platformLogsSettings</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings">PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings</a></code> | platform_logs_settings block. |

---

##### `awsKinesis`<sup>Optional</sup> <a name="awsKinesis" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings.property.awsKinesis"></a>

```typescript
public readonly awsKinesis: PubsubTopicIngestionDataSourceSettingsAwsKinesis;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis">PubsubTopicIngestionDataSourceSettingsAwsKinesis</a>

aws_kinesis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#aws_kinesis PubsubTopic#aws_kinesis}

---

##### `awsMsk`<sup>Optional</sup> <a name="awsMsk" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings.property.awsMsk"></a>

```typescript
public readonly awsMsk: PubsubTopicIngestionDataSourceSettingsAwsMsk;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk">PubsubTopicIngestionDataSourceSettingsAwsMsk</a>

aws_msk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#aws_msk PubsubTopic#aws_msk}

---

##### `azureEventHubs`<sup>Optional</sup> <a name="azureEventHubs" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings.property.azureEventHubs"></a>

```typescript
public readonly azureEventHubs: PubsubTopicIngestionDataSourceSettingsAzureEventHubs;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs">PubsubTopicIngestionDataSourceSettingsAzureEventHubs</a>

azure_event_hubs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#azure_event_hubs PubsubTopic#azure_event_hubs}

---

##### `cloudStorage`<sup>Optional</sup> <a name="cloudStorage" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings.property.cloudStorage"></a>

```typescript
public readonly cloudStorage: PubsubTopicIngestionDataSourceSettingsCloudStorage;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage">PubsubTopicIngestionDataSourceSettingsCloudStorage</a>

cloud_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#cloud_storage PubsubTopic#cloud_storage}

---

##### `confluentCloud`<sup>Optional</sup> <a name="confluentCloud" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings.property.confluentCloud"></a>

```typescript
public readonly confluentCloud: PubsubTopicIngestionDataSourceSettingsConfluentCloud;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud">PubsubTopicIngestionDataSourceSettingsConfluentCloud</a>

confluent_cloud block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#confluent_cloud PubsubTopic#confluent_cloud}

---

##### `platformLogsSettings`<sup>Optional</sup> <a name="platformLogsSettings" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings.property.platformLogsSettings"></a>

```typescript
public readonly platformLogsSettings: PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings">PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings</a>

platform_logs_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#platform_logs_settings PubsubTopic#platform_logs_settings}

---

### PubsubTopicIngestionDataSourceSettingsAwsKinesis <a name="PubsubTopicIngestionDataSourceSettingsAwsKinesis" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktn/provider-google'

const pubsubTopicIngestionDataSourceSettingsAwsKinesis: pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis.property.awsRoleArn">awsRoleArn</a></code> | <code>string</code> | AWS role ARN to be used for Federated Identity authentication with Kinesis. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis.property.consumerArn">consumerArn</a></code> | <code>string</code> | The Kinesis consumer ARN to used for ingestion in Enhanced Fan-Out mode. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis.property.gcpServiceAccount">gcpServiceAccount</a></code> | <code>string</code> | The GCP service account to be used for Federated Identity authentication with Kinesis (via a 'AssumeRoleWithWebIdentity' call for the provided role). |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis.property.streamArn">streamArn</a></code> | <code>string</code> | The Kinesis stream ARN to ingest data from. |

---

##### `awsRoleArn`<sup>Required</sup> <a name="awsRoleArn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis.property.awsRoleArn"></a>

```typescript
public readonly awsRoleArn: string;
```

- *Type:* string

AWS role ARN to be used for Federated Identity authentication with Kinesis.

Check the Pub/Sub docs for how to set up this role and the
required permissions that need to be attached to it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#aws_role_arn PubsubTopic#aws_role_arn}

---

##### `consumerArn`<sup>Required</sup> <a name="consumerArn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis.property.consumerArn"></a>

```typescript
public readonly consumerArn: string;
```

- *Type:* string

The Kinesis consumer ARN to used for ingestion in Enhanced Fan-Out mode.

The consumer must be already
created and ready to be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#consumer_arn PubsubTopic#consumer_arn}

---

##### `gcpServiceAccount`<sup>Required</sup> <a name="gcpServiceAccount" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis.property.gcpServiceAccount"></a>

```typescript
public readonly gcpServiceAccount: string;
```

- *Type:* string

The GCP service account to be used for Federated Identity authentication with Kinesis (via a 'AssumeRoleWithWebIdentity' call for the provided role).

The 'awsRoleArn' must be set up with 'accounts.google.com:sub'
equals to this service account number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#gcp_service_account PubsubTopic#gcp_service_account}

---

##### `streamArn`<sup>Required</sup> <a name="streamArn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis.property.streamArn"></a>

```typescript
public readonly streamArn: string;
```

- *Type:* string

The Kinesis stream ARN to ingest data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#stream_arn PubsubTopic#stream_arn}

---

### PubsubTopicIngestionDataSourceSettingsAwsMsk <a name="PubsubTopicIngestionDataSourceSettingsAwsMsk" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktn/provider-google'

const pubsubTopicIngestionDataSourceSettingsAwsMsk: pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk.property.awsRoleArn">awsRoleArn</a></code> | <code>string</code> | AWS role ARN to be used for Federated Identity authentication with MSK. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk.property.clusterArn">clusterArn</a></code> | <code>string</code> | ARN that uniquely identifies the MSK cluster. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk.property.gcpServiceAccount">gcpServiceAccount</a></code> | <code>string</code> | The GCP service account to be used for Federated Identity authentication with MSK (via a 'AssumeRoleWithWebIdentity' call for the provided role). |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk.property.topic">topic</a></code> | <code>string</code> | The name of the MSK topic that Pub/Sub will import from. |

---

##### `awsRoleArn`<sup>Required</sup> <a name="awsRoleArn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk.property.awsRoleArn"></a>

```typescript
public readonly awsRoleArn: string;
```

- *Type:* string

AWS role ARN to be used for Federated Identity authentication with MSK.

Check the Pub/Sub docs for how to set up this role and the
required permissions that need to be attached to it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#aws_role_arn PubsubTopic#aws_role_arn}

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk.property.clusterArn"></a>

```typescript
public readonly clusterArn: string;
```

- *Type:* string

ARN that uniquely identifies the MSK cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#cluster_arn PubsubTopic#cluster_arn}

---

##### `gcpServiceAccount`<sup>Required</sup> <a name="gcpServiceAccount" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk.property.gcpServiceAccount"></a>

```typescript
public readonly gcpServiceAccount: string;
```

- *Type:* string

The GCP service account to be used for Federated Identity authentication with MSK (via a 'AssumeRoleWithWebIdentity' call for the provided role).

The 'awsRoleArn' must be set up with 'accounts.google.com:sub'
equals to this service account number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#gcp_service_account PubsubTopic#gcp_service_account}

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

The name of the MSK topic that Pub/Sub will import from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#topic PubsubTopic#topic}

---

### PubsubTopicIngestionDataSourceSettingsAzureEventHubs <a name="PubsubTopicIngestionDataSourceSettingsAzureEventHubs" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktn/provider-google'

const pubsubTopicIngestionDataSourceSettingsAzureEventHubs: pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.clientId">clientId</a></code> | <code>string</code> | The Azure event hub client ID to use for ingestion. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.eventHub">eventHub</a></code> | <code>string</code> | The Azure event hub to ingest data from. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.gcpServiceAccount">gcpServiceAccount</a></code> | <code>string</code> | The GCP service account to be used for Federated Identity authentication with Azure (via a 'AssumeRoleWithWebIdentity' call for the provided role). |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.namespace">namespace</a></code> | <code>string</code> | The Azure event hub namespace to ingest data from. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.resourceGroup">resourceGroup</a></code> | <code>string</code> | The name of the resource group within an Azure subscription. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | The Azure event hub subscription ID to use for ingestion. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.tenantId">tenantId</a></code> | <code>string</code> | The Azure event hub tenant ID to use for ingestion. |

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The Azure event hub client ID to use for ingestion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#client_id PubsubTopic#client_id}

---

##### `eventHub`<sup>Optional</sup> <a name="eventHub" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.eventHub"></a>

```typescript
public readonly eventHub: string;
```

- *Type:* string

The Azure event hub to ingest data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#event_hub PubsubTopic#event_hub}

---

##### `gcpServiceAccount`<sup>Optional</sup> <a name="gcpServiceAccount" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.gcpServiceAccount"></a>

```typescript
public readonly gcpServiceAccount: string;
```

- *Type:* string

The GCP service account to be used for Federated Identity authentication with Azure (via a 'AssumeRoleWithWebIdentity' call for the provided role).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#gcp_service_account PubsubTopic#gcp_service_account}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The Azure event hub namespace to ingest data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#namespace PubsubTopic#namespace}

---

##### `resourceGroup`<sup>Optional</sup> <a name="resourceGroup" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.resourceGroup"></a>

```typescript
public readonly resourceGroup: string;
```

- *Type:* string

The name of the resource group within an Azure subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#resource_group PubsubTopic#resource_group}

---

##### `subscriptionId`<sup>Optional</sup> <a name="subscriptionId" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

The Azure event hub subscription ID to use for ingestion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#subscription_id PubsubTopic#subscription_id}

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

The Azure event hub tenant ID to use for ingestion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#tenant_id PubsubTopic#tenant_id}

---

### PubsubTopicIngestionDataSourceSettingsCloudStorage <a name="PubsubTopicIngestionDataSourceSettingsCloudStorage" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktn/provider-google'

const pubsubTopicIngestionDataSourceSettingsCloudStorage: pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage.property.bucket">bucket</a></code> | <code>string</code> | Cloud Storage bucket. The bucket name must be without any prefix like "gs://". See the bucket naming requirements: https://cloud.google.com/storage/docs/buckets#naming. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage.property.avroFormat">avroFormat</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat</a></code> | avro_format block. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage.property.matchGlob">matchGlob</a></code> | <code>string</code> | Glob pattern used to match objects that will be ingested. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage.property.minimumObjectCreateTime">minimumObjectCreateTime</a></code> | <code>string</code> | The timestamp set in RFC3339 text format. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage.property.pubsubAvroFormat">pubsubAvroFormat</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat</a></code> | pubsub_avro_format block. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage.property.textFormat">textFormat</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat</a></code> | text_format block. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Cloud Storage bucket. The bucket name must be without any prefix like "gs://". See the bucket naming requirements: https://cloud.google.com/storage/docs/buckets#naming.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#bucket PubsubTopic#bucket}

---

##### `avroFormat`<sup>Optional</sup> <a name="avroFormat" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage.property.avroFormat"></a>

```typescript
public readonly avroFormat: PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat</a>

avro_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#avro_format PubsubTopic#avro_format}

---

##### `matchGlob`<sup>Optional</sup> <a name="matchGlob" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage.property.matchGlob"></a>

```typescript
public readonly matchGlob: string;
```

- *Type:* string

Glob pattern used to match objects that will be ingested.

If unset, all
objects will be ingested. See the supported patterns:
https://cloud.google.com/storage/docs/json_api/v1/objects/list#list-objects-and-prefixes-using-glob

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#match_glob PubsubTopic#match_glob}

---

##### `minimumObjectCreateTime`<sup>Optional</sup> <a name="minimumObjectCreateTime" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage.property.minimumObjectCreateTime"></a>

```typescript
public readonly minimumObjectCreateTime: string;
```

- *Type:* string

The timestamp set in RFC3339 text format.

If set, only objects with a
larger or equal timestamp will be ingested. Unset by default, meaning
all objects will be ingested.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#minimum_object_create_time PubsubTopic#minimum_object_create_time}

---

##### `pubsubAvroFormat`<sup>Optional</sup> <a name="pubsubAvroFormat" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage.property.pubsubAvroFormat"></a>

```typescript
public readonly pubsubAvroFormat: PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat</a>

pubsub_avro_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#pubsub_avro_format PubsubTopic#pubsub_avro_format}

---

##### `textFormat`<sup>Optional</sup> <a name="textFormat" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage.property.textFormat"></a>

```typescript
public readonly textFormat: PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat</a>

text_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#text_format PubsubTopic#text_format}

---

### PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat <a name="PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktn/provider-google'

const pubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat: pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat = { ... }
```


### PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat <a name="PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktn/provider-google'

const pubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat: pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat = { ... }
```


### PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat <a name="PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktn/provider-google'

const pubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat: pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat.property.delimiter">delimiter</a></code> | <code>string</code> | The delimiter to use when using the 'text' format. |

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat.property.delimiter"></a>

```typescript
public readonly delimiter: string;
```

- *Type:* string

The delimiter to use when using the 'text' format.

Each line of text as
specified by the delimiter will be set to the 'data' field of a Pub/Sub
message. When unset, '\n' is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#delimiter PubsubTopic#delimiter}

---

### PubsubTopicIngestionDataSourceSettingsConfluentCloud <a name="PubsubTopicIngestionDataSourceSettingsConfluentCloud" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktn/provider-google'

const pubsubTopicIngestionDataSourceSettingsConfluentCloud: pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud.property.bootstrapServer">bootstrapServer</a></code> | <code>string</code> | The Confluent Cloud bootstrap server. The format is url:port. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud.property.gcpServiceAccount">gcpServiceAccount</a></code> | <code>string</code> | The GCP service account to be used for Federated Identity authentication with Confluent Cloud. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud.property.identityPoolId">identityPoolId</a></code> | <code>string</code> | Identity pool ID to be used for Federated Identity authentication with Confluent Cloud. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud.property.topic">topic</a></code> | <code>string</code> | Name of the Confluent Cloud topic that Pub/Sub will import from. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud.property.clusterId">clusterId</a></code> | <code>string</code> | The Confluent Cloud cluster ID. |

---

##### `bootstrapServer`<sup>Required</sup> <a name="bootstrapServer" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud.property.bootstrapServer"></a>

```typescript
public readonly bootstrapServer: string;
```

- *Type:* string

The Confluent Cloud bootstrap server. The format is url:port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#bootstrap_server PubsubTopic#bootstrap_server}

---

##### `gcpServiceAccount`<sup>Required</sup> <a name="gcpServiceAccount" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud.property.gcpServiceAccount"></a>

```typescript
public readonly gcpServiceAccount: string;
```

- *Type:* string

The GCP service account to be used for Federated Identity authentication with Confluent Cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#gcp_service_account PubsubTopic#gcp_service_account}

---

##### `identityPoolId`<sup>Required</sup> <a name="identityPoolId" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud.property.identityPoolId"></a>

```typescript
public readonly identityPoolId: string;
```

- *Type:* string

Identity pool ID to be used for Federated Identity authentication with Confluent Cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#identity_pool_id PubsubTopic#identity_pool_id}

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

Name of the Confluent Cloud topic that Pub/Sub will import from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#topic PubsubTopic#topic}

---

##### `clusterId`<sup>Optional</sup> <a name="clusterId" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

The Confluent Cloud cluster ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#cluster_id PubsubTopic#cluster_id}

---

### PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings <a name="PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktn/provider-google'

const pubsubTopicIngestionDataSourceSettingsPlatformLogsSettings: pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings.property.severity">severity</a></code> | <code>string</code> | The minimum severity level of Platform Logs that will be written. |

---

##### `severity`<sup>Optional</sup> <a name="severity" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

The minimum severity level of Platform Logs that will be written.

If unspecified,
no Platform Logs will be written. Default value: "SEVERITY_UNSPECIFIED" Possible values: ["SEVERITY_UNSPECIFIED", "DISABLED", "DEBUG", "INFO", "WARNING", "ERROR"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#severity PubsubTopic#severity}

---

### PubsubTopicMessageStoragePolicy <a name="PubsubTopicMessageStoragePolicy" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktn/provider-google'

const pubsubTopicMessageStoragePolicy: pubsubTopic.PubsubTopicMessageStoragePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy.property.allowedPersistenceRegions">allowedPersistenceRegions</a></code> | <code>string[]</code> | A list of IDs of GCP regions where messages that are published to the topic may be persisted in storage. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy.property.enforceInTransit">enforceInTransit</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, 'allowedPersistenceRegions' is also used to enforce in-transit guarantees for messages. |

---

##### `allowedPersistenceRegions`<sup>Required</sup> <a name="allowedPersistenceRegions" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy.property.allowedPersistenceRegions"></a>

```typescript
public readonly allowedPersistenceRegions: string[];
```

- *Type:* string[]

A list of IDs of GCP regions where messages that are published to the topic may be persisted in storage.

Messages published by
publishers running in non-allowed GCP regions (or running outside
of GCP altogether) will be routed for storage in one of the
allowed regions. An empty list means that no regions are allowed,
and is not a valid configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#allowed_persistence_regions PubsubTopic#allowed_persistence_regions}

---

##### `enforceInTransit`<sup>Optional</sup> <a name="enforceInTransit" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy.property.enforceInTransit"></a>

```typescript
public readonly enforceInTransit: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, 'allowedPersistenceRegions' is also used to enforce in-transit guarantees for messages.

That is, Pub/Sub will fail topics.publish
operations on this topic and subscribe operations on any subscription
attached to this topic in any region that is not in 'allowedPersistenceRegions'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#enforce_in_transit PubsubTopic#enforce_in_transit}

---

### PubsubTopicMessageTransforms <a name="PubsubTopicMessageTransforms" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransforms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransforms.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktn/provider-google'

const pubsubTopicMessageTransforms: pubsubTopic.PubsubTopicMessageTransforms = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransforms.property.aiInference">aiInference</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInference">PubsubTopicMessageTransformsAiInference</a></code> | ai_inference block. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransforms.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Controls whether or not to use this transform. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransforms.property.javascriptUdf">javascriptUdf</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdf">PubsubTopicMessageTransformsJavascriptUdf</a></code> | javascript_udf block. |

---

##### `aiInference`<sup>Optional</sup> <a name="aiInference" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransforms.property.aiInference"></a>

```typescript
public readonly aiInference: PubsubTopicMessageTransformsAiInference;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInference">PubsubTopicMessageTransformsAiInference</a>

ai_inference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#ai_inference PubsubTopic#ai_inference}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransforms.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Controls whether or not to use this transform.

If not set or 'false',
the transform will be applied to messages. Default: 'true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#disabled PubsubTopic#disabled}

---

##### `javascriptUdf`<sup>Optional</sup> <a name="javascriptUdf" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransforms.property.javascriptUdf"></a>

```typescript
public readonly javascriptUdf: PubsubTopicMessageTransformsJavascriptUdf;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdf">PubsubTopicMessageTransformsJavascriptUdf</a>

javascript_udf block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#javascript_udf PubsubTopic#javascript_udf}

---

### PubsubTopicMessageTransformsAiInference <a name="PubsubTopicMessageTransformsAiInference" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInference.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktn/provider-google'

const pubsubTopicMessageTransformsAiInference: pubsubTopic.PubsubTopicMessageTransformsAiInference = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInference.property.endpoint">endpoint</a></code> | <code>string</code> | The endpoint to a Vertex AI model of the form 'projects/{project}/locations/{location}/endpoints/{endpoint}' or 'projects/{project}/locations/{location}/publishers/{publisher}/models/{model}'. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | The service account to use to make prediction requests against endpoints. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInference.property.unstructuredInference">unstructuredInference</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInference">PubsubTopicMessageTransformsAiInferenceUnstructuredInference</a></code> | unstructured_inference block. |

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

The endpoint to a Vertex AI model of the form 'projects/{project}/locations/{location}/endpoints/{endpoint}' or 'projects/{project}/locations/{location}/publishers/{publisher}/models/{model}'.

Vertex AI API requests will be sent to this endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#endpoint PubsubTopic#endpoint}

---

##### `serviceAccountEmail`<sup>Optional</sup> <a name="serviceAccountEmail" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInference.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

The service account to use to make prediction requests against endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#service_account_email PubsubTopic#service_account_email}

---

##### `unstructuredInference`<sup>Optional</sup> <a name="unstructuredInference" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInference.property.unstructuredInference"></a>

```typescript
public readonly unstructuredInference: PubsubTopicMessageTransformsAiInferenceUnstructuredInference;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInference">PubsubTopicMessageTransformsAiInferenceUnstructuredInference</a>

unstructured_inference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#unstructured_inference PubsubTopic#unstructured_inference}

---

### PubsubTopicMessageTransformsAiInferenceUnstructuredInference <a name="PubsubTopicMessageTransformsAiInferenceUnstructuredInference" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInference.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktn/provider-google'

const pubsubTopicMessageTransformsAiInferenceUnstructuredInference: pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInference = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInference.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | A parameters object to be included in each inference request. |

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInference.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A parameters object to be included in each inference request.

The parameters object is combined with the data field of the Pub/Sub
message to form the inference request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#parameters PubsubTopic#parameters}

---

### PubsubTopicMessageTransformsJavascriptUdf <a name="PubsubTopicMessageTransformsJavascriptUdf" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdf"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdf.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktn/provider-google'

const pubsubTopicMessageTransformsJavascriptUdf: pubsubTopic.PubsubTopicMessageTransformsJavascriptUdf = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdf.property.code">code</a></code> | <code>string</code> | JavaScript code that contains a function 'function_name' with the following signature: ```   /**   * Transforms a Pub/Sub message. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdf.property.functionName">functionName</a></code> | <code>string</code> | Name of the JavaScript function that should be applied to Pub/Sub messages. |

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdf.property.code"></a>

```typescript
public readonly code: string;
```

- *Type:* string

JavaScript code that contains a function 'function_name' with the following signature: ```   /**   * Transforms a Pub/Sub message.

*
  *

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdf.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

Name of the JavaScript function that should be applied to Pub/Sub messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#function_name PubsubTopic#function_name}

---

### PubsubTopicSchemaSettings <a name="PubsubTopicSchemaSettings" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettings.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktn/provider-google'

const pubsubTopicSchemaSettings: pubsubTopic.PubsubTopicSchemaSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettings.property.schema">schema</a></code> | <code>string</code> | The name of the schema that messages published should be validated against. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettings.property.encoding">encoding</a></code> | <code>string</code> | The encoding of messages validated against schema. Default value: "ENCODING_UNSPECIFIED" Possible values: ["ENCODING_UNSPECIFIED", "JSON", "BINARY"]. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettings.property.firstRevisionId">firstRevisionId</a></code> | <code>string</code> | The minimum (inclusive) revision allowed for validating messages. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettings.property.lastRevisionId">lastRevisionId</a></code> | <code>string</code> | The maximum (inclusive) revision allowed for validating messages. |

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettings.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

The name of the schema that messages published should be validated against.

Format is projects/{project}/schemas/{schema}.
The value of this field will be _deleted-schema_
if the schema has been deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#schema PubsubTopic#schema}

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettings.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

The encoding of messages validated against schema. Default value: "ENCODING_UNSPECIFIED" Possible values: ["ENCODING_UNSPECIFIED", "JSON", "BINARY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#encoding PubsubTopic#encoding}

---

##### `firstRevisionId`<sup>Optional</sup> <a name="firstRevisionId" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettings.property.firstRevisionId"></a>

```typescript
public readonly firstRevisionId: string;
```

- *Type:* string

The minimum (inclusive) revision allowed for validating messages.

If empty or not present, allow any revision to be validated against last_revision or any revision created before.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#first_revision_id PubsubTopic#first_revision_id}

---

##### `lastRevisionId`<sup>Optional</sup> <a name="lastRevisionId" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettings.property.lastRevisionId"></a>

```typescript
public readonly lastRevisionId: string;
```

- *Type:* string

The maximum (inclusive) revision allowed for validating messages.

If empty or not present, allow any revision to be validated against first_revision or any revision created after.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#last_revision_id PubsubTopic#last_revision_id}

---

### PubsubTopicTimeouts <a name="PubsubTopicTimeouts" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeouts.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktn/provider-google'

const pubsubTopicTimeouts: pubsubTopic.PubsubTopicTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#create PubsubTopic#create}. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#delete PubsubTopic#delete}. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#update PubsubTopic#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#create PubsubTopic#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#delete PubsubTopic#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/pubsub_topic#update PubsubTopic#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference <a name="PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktn/provider-google'

new pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.awsRoleArnInput">awsRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.consumerArnInput">consumerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.gcpServiceAccountInput">gcpServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.streamArnInput">streamArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.awsRoleArn">awsRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.consumerArn">consumerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.gcpServiceAccount">gcpServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.streamArn">streamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis">PubsubTopicIngestionDataSourceSettingsAwsKinesis</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsRoleArnInput`<sup>Optional</sup> <a name="awsRoleArnInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.awsRoleArnInput"></a>

```typescript
public readonly awsRoleArnInput: string;
```

- *Type:* string

---

##### `consumerArnInput`<sup>Optional</sup> <a name="consumerArnInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.consumerArnInput"></a>

```typescript
public readonly consumerArnInput: string;
```

- *Type:* string

---

##### `gcpServiceAccountInput`<sup>Optional</sup> <a name="gcpServiceAccountInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.gcpServiceAccountInput"></a>

```typescript
public readonly gcpServiceAccountInput: string;
```

- *Type:* string

---

##### `streamArnInput`<sup>Optional</sup> <a name="streamArnInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.streamArnInput"></a>

```typescript
public readonly streamArnInput: string;
```

- *Type:* string

---

##### `awsRoleArn`<sup>Required</sup> <a name="awsRoleArn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.awsRoleArn"></a>

```typescript
public readonly awsRoleArn: string;
```

- *Type:* string

---

##### `consumerArn`<sup>Required</sup> <a name="consumerArn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.consumerArn"></a>

```typescript
public readonly consumerArn: string;
```

- *Type:* string

---

##### `gcpServiceAccount`<sup>Required</sup> <a name="gcpServiceAccount" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.gcpServiceAccount"></a>

```typescript
public readonly gcpServiceAccount: string;
```

- *Type:* string

---

##### `streamArn`<sup>Required</sup> <a name="streamArn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.streamArn"></a>

```typescript
public readonly streamArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PubsubTopicIngestionDataSourceSettingsAwsKinesis;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis">PubsubTopicIngestionDataSourceSettingsAwsKinesis</a>

---


### PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference <a name="PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktn/provider-google'

new pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.awsRoleArnInput">awsRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.clusterArnInput">clusterArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.gcpServiceAccountInput">gcpServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.topicInput">topicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.awsRoleArn">awsRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.clusterArn">clusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.gcpServiceAccount">gcpServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.topic">topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk">PubsubTopicIngestionDataSourceSettingsAwsMsk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsRoleArnInput`<sup>Optional</sup> <a name="awsRoleArnInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.awsRoleArnInput"></a>

```typescript
public readonly awsRoleArnInput: string;
```

- *Type:* string

---

##### `clusterArnInput`<sup>Optional</sup> <a name="clusterArnInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.clusterArnInput"></a>

```typescript
public readonly clusterArnInput: string;
```

- *Type:* string

---

##### `gcpServiceAccountInput`<sup>Optional</sup> <a name="gcpServiceAccountInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.gcpServiceAccountInput"></a>

```typescript
public readonly gcpServiceAccountInput: string;
```

- *Type:* string

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.topicInput"></a>

```typescript
public readonly topicInput: string;
```

- *Type:* string

---

##### `awsRoleArn`<sup>Required</sup> <a name="awsRoleArn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.awsRoleArn"></a>

```typescript
public readonly awsRoleArn: string;
```

- *Type:* string

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.clusterArn"></a>

```typescript
public readonly clusterArn: string;
```

- *Type:* string

---

##### `gcpServiceAccount`<sup>Required</sup> <a name="gcpServiceAccount" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.gcpServiceAccount"></a>

```typescript
public readonly gcpServiceAccount: string;
```

- *Type:* string

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PubsubTopicIngestionDataSourceSettingsAwsMsk;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk">PubsubTopicIngestionDataSourceSettingsAwsMsk</a>

---


### PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference <a name="PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktn/provider-google'

new pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetEventHub">resetEventHub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetGcpServiceAccount">resetGcpServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetResourceGroup">resetResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetSubscriptionId">resetSubscriptionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetTenantId">resetTenantId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientId` <a name="resetClientId" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetEventHub` <a name="resetEventHub" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetEventHub"></a>

```typescript
public resetEventHub(): void
```

##### `resetGcpServiceAccount` <a name="resetGcpServiceAccount" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetGcpServiceAccount"></a>

```typescript
public resetGcpServiceAccount(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetResourceGroup` <a name="resetResourceGroup" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetResourceGroup"></a>

```typescript
public resetResourceGroup(): void
```

##### `resetSubscriptionId` <a name="resetSubscriptionId" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetSubscriptionId"></a>

```typescript
public resetSubscriptionId(): void
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetTenantId"></a>

```typescript
public resetTenantId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.eventHubInput">eventHubInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.gcpServiceAccountInput">gcpServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.resourceGroupInput">resourceGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.eventHub">eventHub</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.gcpServiceAccount">gcpServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.resourceGroup">resourceGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs">PubsubTopicIngestionDataSourceSettingsAzureEventHubs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `eventHubInput`<sup>Optional</sup> <a name="eventHubInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.eventHubInput"></a>

```typescript
public readonly eventHubInput: string;
```

- *Type:* string

---

##### `gcpServiceAccountInput`<sup>Optional</sup> <a name="gcpServiceAccountInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.gcpServiceAccountInput"></a>

```typescript
public readonly gcpServiceAccountInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `resourceGroupInput`<sup>Optional</sup> <a name="resourceGroupInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.resourceGroupInput"></a>

```typescript
public readonly resourceGroupInput: string;
```

- *Type:* string

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.subscriptionIdInput"></a>

```typescript
public readonly subscriptionIdInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `eventHub`<sup>Required</sup> <a name="eventHub" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.eventHub"></a>

```typescript
public readonly eventHub: string;
```

- *Type:* string

---

##### `gcpServiceAccount`<sup>Required</sup> <a name="gcpServiceAccount" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.gcpServiceAccount"></a>

```typescript
public readonly gcpServiceAccount: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `resourceGroup`<sup>Required</sup> <a name="resourceGroup" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.resourceGroup"></a>

```typescript
public readonly resourceGroup: string;
```

- *Type:* string

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PubsubTopicIngestionDataSourceSettingsAzureEventHubs;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs">PubsubTopicIngestionDataSourceSettingsAzureEventHubs</a>

---


### PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference <a name="PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktn/provider-google'

new pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat</a>

---


### PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference <a name="PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktn/provider-google'

new pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.putAvroFormat">putAvroFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.putPubsubAvroFormat">putPubsubAvroFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.putTextFormat">putTextFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resetAvroFormat">resetAvroFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resetMatchGlob">resetMatchGlob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resetMinimumObjectCreateTime">resetMinimumObjectCreateTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resetPubsubAvroFormat">resetPubsubAvroFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resetTextFormat">resetTextFormat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAvroFormat` <a name="putAvroFormat" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.putAvroFormat"></a>

```typescript
public putAvroFormat(value: PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.putAvroFormat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat</a>

---

##### `putPubsubAvroFormat` <a name="putPubsubAvroFormat" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.putPubsubAvroFormat"></a>

```typescript
public putPubsubAvroFormat(value: PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.putPubsubAvroFormat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat</a>

---

##### `putTextFormat` <a name="putTextFormat" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.putTextFormat"></a>

```typescript
public putTextFormat(value: PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.putTextFormat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat</a>

---

##### `resetAvroFormat` <a name="resetAvroFormat" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resetAvroFormat"></a>

```typescript
public resetAvroFormat(): void
```

##### `resetMatchGlob` <a name="resetMatchGlob" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resetMatchGlob"></a>

```typescript
public resetMatchGlob(): void
```

##### `resetMinimumObjectCreateTime` <a name="resetMinimumObjectCreateTime" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resetMinimumObjectCreateTime"></a>

```typescript
public resetMinimumObjectCreateTime(): void
```

##### `resetPubsubAvroFormat` <a name="resetPubsubAvroFormat" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resetPubsubAvroFormat"></a>

```typescript
public resetPubsubAvroFormat(): void
```

##### `resetTextFormat` <a name="resetTextFormat" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resetTextFormat"></a>

```typescript
public resetTextFormat(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.avroFormat">avroFormat</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference">PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.pubsubAvroFormat">pubsubAvroFormat</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference">PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.textFormat">textFormat</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference">PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.avroFormatInput">avroFormatInput</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.matchGlobInput">matchGlobInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.minimumObjectCreateTimeInput">minimumObjectCreateTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.pubsubAvroFormatInput">pubsubAvroFormatInput</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.textFormatInput">textFormatInput</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.matchGlob">matchGlob</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.minimumObjectCreateTime">minimumObjectCreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage">PubsubTopicIngestionDataSourceSettingsCloudStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `avroFormat`<sup>Required</sup> <a name="avroFormat" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.avroFormat"></a>

```typescript
public readonly avroFormat: PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference">PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference</a>

---

##### `pubsubAvroFormat`<sup>Required</sup> <a name="pubsubAvroFormat" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.pubsubAvroFormat"></a>

```typescript
public readonly pubsubAvroFormat: PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference">PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference</a>

---

##### `textFormat`<sup>Required</sup> <a name="textFormat" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.textFormat"></a>

```typescript
public readonly textFormat: PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference">PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference</a>

---

##### `avroFormatInput`<sup>Optional</sup> <a name="avroFormatInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.avroFormatInput"></a>

```typescript
public readonly avroFormatInput: PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat</a>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `matchGlobInput`<sup>Optional</sup> <a name="matchGlobInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.matchGlobInput"></a>

```typescript
public readonly matchGlobInput: string;
```

- *Type:* string

---

##### `minimumObjectCreateTimeInput`<sup>Optional</sup> <a name="minimumObjectCreateTimeInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.minimumObjectCreateTimeInput"></a>

```typescript
public readonly minimumObjectCreateTimeInput: string;
```

- *Type:* string

---

##### `pubsubAvroFormatInput`<sup>Optional</sup> <a name="pubsubAvroFormatInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.pubsubAvroFormatInput"></a>

```typescript
public readonly pubsubAvroFormatInput: PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat</a>

---

##### `textFormatInput`<sup>Optional</sup> <a name="textFormatInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.textFormatInput"></a>

```typescript
public readonly textFormatInput: PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat</a>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `matchGlob`<sup>Required</sup> <a name="matchGlob" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.matchGlob"></a>

```typescript
public readonly matchGlob: string;
```

- *Type:* string

---

##### `minimumObjectCreateTime`<sup>Required</sup> <a name="minimumObjectCreateTime" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.minimumObjectCreateTime"></a>

```typescript
public readonly minimumObjectCreateTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PubsubTopicIngestionDataSourceSettingsCloudStorage;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage">PubsubTopicIngestionDataSourceSettingsCloudStorage</a>

---


### PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference <a name="PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktn/provider-google'

new pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat</a>

---


### PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference <a name="PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktn/provider-google'

new pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.resetDelimiter">resetDelimiter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDelimiter` <a name="resetDelimiter" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.resetDelimiter"></a>

```typescript
public resetDelimiter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.delimiterInput">delimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.delimiter">delimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `delimiterInput`<sup>Optional</sup> <a name="delimiterInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.delimiterInput"></a>

```typescript
public readonly delimiterInput: string;
```

- *Type:* string

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.delimiter"></a>

```typescript
public readonly delimiter: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat</a>

---


### PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference <a name="PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktn/provider-google'

new pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.resetClusterId">resetClusterId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClusterId` <a name="resetClusterId" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.resetClusterId"></a>

```typescript
public resetClusterId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.bootstrapServerInput">bootstrapServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.gcpServiceAccountInput">gcpServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.identityPoolIdInput">identityPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.topicInput">topicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.bootstrapServer">bootstrapServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.gcpServiceAccount">gcpServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.identityPoolId">identityPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.topic">topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud">PubsubTopicIngestionDataSourceSettingsConfluentCloud</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bootstrapServerInput`<sup>Optional</sup> <a name="bootstrapServerInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.bootstrapServerInput"></a>

```typescript
public readonly bootstrapServerInput: string;
```

- *Type:* string

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `gcpServiceAccountInput`<sup>Optional</sup> <a name="gcpServiceAccountInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.gcpServiceAccountInput"></a>

```typescript
public readonly gcpServiceAccountInput: string;
```

- *Type:* string

---

##### `identityPoolIdInput`<sup>Optional</sup> <a name="identityPoolIdInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.identityPoolIdInput"></a>

```typescript
public readonly identityPoolIdInput: string;
```

- *Type:* string

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.topicInput"></a>

```typescript
public readonly topicInput: string;
```

- *Type:* string

---

##### `bootstrapServer`<sup>Required</sup> <a name="bootstrapServer" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.bootstrapServer"></a>

```typescript
public readonly bootstrapServer: string;
```

- *Type:* string

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `gcpServiceAccount`<sup>Required</sup> <a name="gcpServiceAccount" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.gcpServiceAccount"></a>

```typescript
public readonly gcpServiceAccount: string;
```

- *Type:* string

---

##### `identityPoolId`<sup>Required</sup> <a name="identityPoolId" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.identityPoolId"></a>

```typescript
public readonly identityPoolId: string;
```

- *Type:* string

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PubsubTopicIngestionDataSourceSettingsConfluentCloud;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud">PubsubTopicIngestionDataSourceSettingsConfluentCloud</a>

---


### PubsubTopicIngestionDataSourceSettingsOutputReference <a name="PubsubTopicIngestionDataSourceSettingsOutputReference" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktn/provider-google'

new pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putAwsKinesis">putAwsKinesis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putAwsMsk">putAwsMsk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putAzureEventHubs">putAzureEventHubs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putCloudStorage">putCloudStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putConfluentCloud">putConfluentCloud</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putPlatformLogsSettings">putPlatformLogsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resetAwsKinesis">resetAwsKinesis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resetAwsMsk">resetAwsMsk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resetAzureEventHubs">resetAzureEventHubs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resetCloudStorage">resetCloudStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resetConfluentCloud">resetConfluentCloud</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resetPlatformLogsSettings">resetPlatformLogsSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAwsKinesis` <a name="putAwsKinesis" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putAwsKinesis"></a>

```typescript
public putAwsKinesis(value: PubsubTopicIngestionDataSourceSettingsAwsKinesis): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putAwsKinesis.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis">PubsubTopicIngestionDataSourceSettingsAwsKinesis</a>

---

##### `putAwsMsk` <a name="putAwsMsk" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putAwsMsk"></a>

```typescript
public putAwsMsk(value: PubsubTopicIngestionDataSourceSettingsAwsMsk): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putAwsMsk.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk">PubsubTopicIngestionDataSourceSettingsAwsMsk</a>

---

##### `putAzureEventHubs` <a name="putAzureEventHubs" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putAzureEventHubs"></a>

```typescript
public putAzureEventHubs(value: PubsubTopicIngestionDataSourceSettingsAzureEventHubs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putAzureEventHubs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs">PubsubTopicIngestionDataSourceSettingsAzureEventHubs</a>

---

##### `putCloudStorage` <a name="putCloudStorage" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putCloudStorage"></a>

```typescript
public putCloudStorage(value: PubsubTopicIngestionDataSourceSettingsCloudStorage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putCloudStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage">PubsubTopicIngestionDataSourceSettingsCloudStorage</a>

---

##### `putConfluentCloud` <a name="putConfluentCloud" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putConfluentCloud"></a>

```typescript
public putConfluentCloud(value: PubsubTopicIngestionDataSourceSettingsConfluentCloud): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putConfluentCloud.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud">PubsubTopicIngestionDataSourceSettingsConfluentCloud</a>

---

##### `putPlatformLogsSettings` <a name="putPlatformLogsSettings" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putPlatformLogsSettings"></a>

```typescript
public putPlatformLogsSettings(value: PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putPlatformLogsSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings">PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings</a>

---

##### `resetAwsKinesis` <a name="resetAwsKinesis" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resetAwsKinesis"></a>

```typescript
public resetAwsKinesis(): void
```

##### `resetAwsMsk` <a name="resetAwsMsk" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resetAwsMsk"></a>

```typescript
public resetAwsMsk(): void
```

##### `resetAzureEventHubs` <a name="resetAzureEventHubs" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resetAzureEventHubs"></a>

```typescript
public resetAzureEventHubs(): void
```

##### `resetCloudStorage` <a name="resetCloudStorage" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resetCloudStorage"></a>

```typescript
public resetCloudStorage(): void
```

##### `resetConfluentCloud` <a name="resetConfluentCloud" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resetConfluentCloud"></a>

```typescript
public resetConfluentCloud(): void
```

##### `resetPlatformLogsSettings` <a name="resetPlatformLogsSettings" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resetPlatformLogsSettings"></a>

```typescript
public resetPlatformLogsSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.awsKinesis">awsKinesis</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference">PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.awsMsk">awsMsk</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference">PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.azureEventHubs">azureEventHubs</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference">PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.cloudStorage">cloudStorage</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference">PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.confluentCloud">confluentCloud</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference">PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.platformLogsSettings">platformLogsSettings</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference">PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.awsKinesisInput">awsKinesisInput</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis">PubsubTopicIngestionDataSourceSettingsAwsKinesis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.awsMskInput">awsMskInput</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk">PubsubTopicIngestionDataSourceSettingsAwsMsk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.azureEventHubsInput">azureEventHubsInput</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs">PubsubTopicIngestionDataSourceSettingsAzureEventHubs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.cloudStorageInput">cloudStorageInput</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage">PubsubTopicIngestionDataSourceSettingsCloudStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.confluentCloudInput">confluentCloudInput</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud">PubsubTopicIngestionDataSourceSettingsConfluentCloud</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.platformLogsSettingsInput">platformLogsSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings">PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings">PubsubTopicIngestionDataSourceSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsKinesis`<sup>Required</sup> <a name="awsKinesis" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.awsKinesis"></a>

```typescript
public readonly awsKinesis: PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference">PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference</a>

---

##### `awsMsk`<sup>Required</sup> <a name="awsMsk" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.awsMsk"></a>

```typescript
public readonly awsMsk: PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference">PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference</a>

---

##### `azureEventHubs`<sup>Required</sup> <a name="azureEventHubs" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.azureEventHubs"></a>

```typescript
public readonly azureEventHubs: PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference">PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference</a>

---

##### `cloudStorage`<sup>Required</sup> <a name="cloudStorage" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.cloudStorage"></a>

```typescript
public readonly cloudStorage: PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference">PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference</a>

---

##### `confluentCloud`<sup>Required</sup> <a name="confluentCloud" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.confluentCloud"></a>

```typescript
public readonly confluentCloud: PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference">PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference</a>

---

##### `platformLogsSettings`<sup>Required</sup> <a name="platformLogsSettings" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.platformLogsSettings"></a>

```typescript
public readonly platformLogsSettings: PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference">PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference</a>

---

##### `awsKinesisInput`<sup>Optional</sup> <a name="awsKinesisInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.awsKinesisInput"></a>

```typescript
public readonly awsKinesisInput: PubsubTopicIngestionDataSourceSettingsAwsKinesis;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis">PubsubTopicIngestionDataSourceSettingsAwsKinesis</a>

---

##### `awsMskInput`<sup>Optional</sup> <a name="awsMskInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.awsMskInput"></a>

```typescript
public readonly awsMskInput: PubsubTopicIngestionDataSourceSettingsAwsMsk;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk">PubsubTopicIngestionDataSourceSettingsAwsMsk</a>

---

##### `azureEventHubsInput`<sup>Optional</sup> <a name="azureEventHubsInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.azureEventHubsInput"></a>

```typescript
public readonly azureEventHubsInput: PubsubTopicIngestionDataSourceSettingsAzureEventHubs;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs">PubsubTopicIngestionDataSourceSettingsAzureEventHubs</a>

---

##### `cloudStorageInput`<sup>Optional</sup> <a name="cloudStorageInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.cloudStorageInput"></a>

```typescript
public readonly cloudStorageInput: PubsubTopicIngestionDataSourceSettingsCloudStorage;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage">PubsubTopicIngestionDataSourceSettingsCloudStorage</a>

---

##### `confluentCloudInput`<sup>Optional</sup> <a name="confluentCloudInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.confluentCloudInput"></a>

```typescript
public readonly confluentCloudInput: PubsubTopicIngestionDataSourceSettingsConfluentCloud;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud">PubsubTopicIngestionDataSourceSettingsConfluentCloud</a>

---

##### `platformLogsSettingsInput`<sup>Optional</sup> <a name="platformLogsSettingsInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.platformLogsSettingsInput"></a>

```typescript
public readonly platformLogsSettingsInput: PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings">PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PubsubTopicIngestionDataSourceSettings;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings">PubsubTopicIngestionDataSourceSettings</a>

---


### PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference <a name="PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktn/provider-google'

new pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.resetSeverity">resetSeverity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSeverity` <a name="resetSeverity" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.resetSeverity"></a>

```typescript
public resetSeverity(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.severityInput">severityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.severity">severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings">PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.severityInput"></a>

```typescript
public readonly severityInput: string;
```

- *Type:* string

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings">PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings</a>

---


### PubsubTopicMessageStoragePolicyOutputReference <a name="PubsubTopicMessageStoragePolicyOutputReference" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktn/provider-google'

new pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.resetEnforceInTransit">resetEnforceInTransit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnforceInTransit` <a name="resetEnforceInTransit" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.resetEnforceInTransit"></a>

```typescript
public resetEnforceInTransit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.allowedPersistenceRegionsInput">allowedPersistenceRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.enforceInTransitInput">enforceInTransitInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.allowedPersistenceRegions">allowedPersistenceRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.enforceInTransit">enforceInTransit</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy">PubsubTopicMessageStoragePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedPersistenceRegionsInput`<sup>Optional</sup> <a name="allowedPersistenceRegionsInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.allowedPersistenceRegionsInput"></a>

```typescript
public readonly allowedPersistenceRegionsInput: string[];
```

- *Type:* string[]

---

##### `enforceInTransitInput`<sup>Optional</sup> <a name="enforceInTransitInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.enforceInTransitInput"></a>

```typescript
public readonly enforceInTransitInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `allowedPersistenceRegions`<sup>Required</sup> <a name="allowedPersistenceRegions" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.allowedPersistenceRegions"></a>

```typescript
public readonly allowedPersistenceRegions: string[];
```

- *Type:* string[]

---

##### `enforceInTransit`<sup>Required</sup> <a name="enforceInTransit" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.enforceInTransit"></a>

```typescript
public readonly enforceInTransit: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PubsubTopicMessageStoragePolicy;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy">PubsubTopicMessageStoragePolicy</a>

---


### PubsubTopicMessageTransformsAiInferenceOutputReference <a name="PubsubTopicMessageTransformsAiInferenceOutputReference" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktn/provider-google'

new pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.putUnstructuredInference">putUnstructuredInference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.resetServiceAccountEmail">resetServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.resetUnstructuredInference">resetUnstructuredInference</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putUnstructuredInference` <a name="putUnstructuredInference" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.putUnstructuredInference"></a>

```typescript
public putUnstructuredInference(value: PubsubTopicMessageTransformsAiInferenceUnstructuredInference): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.putUnstructuredInference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInference">PubsubTopicMessageTransformsAiInferenceUnstructuredInference</a>

---

##### `resetServiceAccountEmail` <a name="resetServiceAccountEmail" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.resetServiceAccountEmail"></a>

```typescript
public resetServiceAccountEmail(): void
```

##### `resetUnstructuredInference` <a name="resetUnstructuredInference" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.resetUnstructuredInference"></a>

```typescript
public resetUnstructuredInference(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.property.unstructuredInference">unstructuredInference</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference">PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.property.endpointInput">endpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.property.unstructuredInferenceInput">unstructuredInferenceInput</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInference">PubsubTopicMessageTransformsAiInferenceUnstructuredInference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInference">PubsubTopicMessageTransformsAiInference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `unstructuredInference`<sup>Required</sup> <a name="unstructuredInference" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.property.unstructuredInference"></a>

```typescript
public readonly unstructuredInference: PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference">PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference</a>

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.property.endpointInput"></a>

```typescript
public readonly endpointInput: string;
```

- *Type:* string

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.property.serviceAccountEmailInput"></a>

```typescript
public readonly serviceAccountEmailInput: string;
```

- *Type:* string

---

##### `unstructuredInferenceInput`<sup>Optional</sup> <a name="unstructuredInferenceInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.property.unstructuredInferenceInput"></a>

```typescript
public readonly unstructuredInferenceInput: PubsubTopicMessageTransformsAiInferenceUnstructuredInference;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInference">PubsubTopicMessageTransformsAiInferenceUnstructuredInference</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PubsubTopicMessageTransformsAiInference;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInference">PubsubTopicMessageTransformsAiInference</a>

---


### PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference <a name="PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktn/provider-google'

new pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInference">PubsubTopicMessageTransformsAiInferenceUnstructuredInference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInferenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PubsubTopicMessageTransformsAiInferenceUnstructuredInference;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceUnstructuredInference">PubsubTopicMessageTransformsAiInferenceUnstructuredInference</a>

---


### PubsubTopicMessageTransformsJavascriptUdfOutputReference <a name="PubsubTopicMessageTransformsJavascriptUdfOutputReference" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktn/provider-google'

new pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.property.codeInput">codeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.property.functionNameInput">functionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.property.code">code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.property.functionName">functionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdf">PubsubTopicMessageTransformsJavascriptUdf</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `codeInput`<sup>Optional</sup> <a name="codeInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.property.codeInput"></a>

```typescript
public readonly codeInput: string;
```

- *Type:* string

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.property.functionNameInput"></a>

```typescript
public readonly functionNameInput: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.property.code"></a>

```typescript
public readonly code: string;
```

- *Type:* string

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PubsubTopicMessageTransformsJavascriptUdf;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdf">PubsubTopicMessageTransformsJavascriptUdf</a>

---


### PubsubTopicMessageTransformsList <a name="PubsubTopicMessageTransformsList" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktn/provider-google'

new pubsubTopic.PubsubTopicMessageTransformsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.get"></a>

```typescript
public get(index: number): PubsubTopicMessageTransformsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransforms">PubsubTopicMessageTransforms</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PubsubTopicMessageTransforms[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransforms">PubsubTopicMessageTransforms</a>[]

---


### PubsubTopicMessageTransformsOutputReference <a name="PubsubTopicMessageTransformsOutputReference" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktn/provider-google'

new pubsubTopic.PubsubTopicMessageTransformsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.putAiInference">putAiInference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.putJavascriptUdf">putJavascriptUdf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.resetAiInference">resetAiInference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.resetJavascriptUdf">resetJavascriptUdf</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAiInference` <a name="putAiInference" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.putAiInference"></a>

```typescript
public putAiInference(value: PubsubTopicMessageTransformsAiInference): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.putAiInference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInference">PubsubTopicMessageTransformsAiInference</a>

---

##### `putJavascriptUdf` <a name="putJavascriptUdf" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.putJavascriptUdf"></a>

```typescript
public putJavascriptUdf(value: PubsubTopicMessageTransformsJavascriptUdf): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.putJavascriptUdf.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdf">PubsubTopicMessageTransformsJavascriptUdf</a>

---

##### `resetAiInference` <a name="resetAiInference" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.resetAiInference"></a>

```typescript
public resetAiInference(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetJavascriptUdf` <a name="resetJavascriptUdf" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.resetJavascriptUdf"></a>

```typescript
public resetJavascriptUdf(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.property.aiInference">aiInference</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference">PubsubTopicMessageTransformsAiInferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.property.javascriptUdf">javascriptUdf</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference">PubsubTopicMessageTransformsJavascriptUdfOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.property.aiInferenceInput">aiInferenceInput</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInference">PubsubTopicMessageTransformsAiInference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.property.javascriptUdfInput">javascriptUdfInput</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdf">PubsubTopicMessageTransformsJavascriptUdf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransforms">PubsubTopicMessageTransforms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aiInference`<sup>Required</sup> <a name="aiInference" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.property.aiInference"></a>

```typescript
public readonly aiInference: PubsubTopicMessageTransformsAiInferenceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInferenceOutputReference">PubsubTopicMessageTransformsAiInferenceOutputReference</a>

---

##### `javascriptUdf`<sup>Required</sup> <a name="javascriptUdf" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.property.javascriptUdf"></a>

```typescript
public readonly javascriptUdf: PubsubTopicMessageTransformsJavascriptUdfOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference">PubsubTopicMessageTransformsJavascriptUdfOutputReference</a>

---

##### `aiInferenceInput`<sup>Optional</sup> <a name="aiInferenceInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.property.aiInferenceInput"></a>

```typescript
public readonly aiInferenceInput: PubsubTopicMessageTransformsAiInference;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsAiInference">PubsubTopicMessageTransformsAiInference</a>

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `javascriptUdfInput`<sup>Optional</sup> <a name="javascriptUdfInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.property.javascriptUdfInput"></a>

```typescript
public readonly javascriptUdfInput: PubsubTopicMessageTransformsJavascriptUdf;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdf">PubsubTopicMessageTransformsJavascriptUdf</a>

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PubsubTopicMessageTransforms;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicMessageTransforms">PubsubTopicMessageTransforms</a>

---


### PubsubTopicSchemaSettingsOutputReference <a name="PubsubTopicSchemaSettingsOutputReference" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktn/provider-google'

new pubsubTopic.PubsubTopicSchemaSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.resetEncoding">resetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.resetFirstRevisionId">resetFirstRevisionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.resetLastRevisionId">resetLastRevisionId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncoding` <a name="resetEncoding" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.resetEncoding"></a>

```typescript
public resetEncoding(): void
```

##### `resetFirstRevisionId` <a name="resetFirstRevisionId" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.resetFirstRevisionId"></a>

```typescript
public resetFirstRevisionId(): void
```

##### `resetLastRevisionId` <a name="resetLastRevisionId" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.resetLastRevisionId"></a>

```typescript
public resetLastRevisionId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.encodingInput">encodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.firstRevisionIdInput">firstRevisionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.lastRevisionIdInput">lastRevisionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.encoding">encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.firstRevisionId">firstRevisionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.lastRevisionId">lastRevisionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettings">PubsubTopicSchemaSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encodingInput`<sup>Optional</sup> <a name="encodingInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.encodingInput"></a>

```typescript
public readonly encodingInput: string;
```

- *Type:* string

---

##### `firstRevisionIdInput`<sup>Optional</sup> <a name="firstRevisionIdInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.firstRevisionIdInput"></a>

```typescript
public readonly firstRevisionIdInput: string;
```

- *Type:* string

---

##### `lastRevisionIdInput`<sup>Optional</sup> <a name="lastRevisionIdInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.lastRevisionIdInput"></a>

```typescript
public readonly lastRevisionIdInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

---

##### `firstRevisionId`<sup>Required</sup> <a name="firstRevisionId" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.firstRevisionId"></a>

```typescript
public readonly firstRevisionId: string;
```

- *Type:* string

---

##### `lastRevisionId`<sup>Required</sup> <a name="lastRevisionId" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.lastRevisionId"></a>

```typescript
public readonly lastRevisionId: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PubsubTopicSchemaSettings;
```

- *Type:* <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicSchemaSettings">PubsubTopicSchemaSettings</a>

---


### PubsubTopicTimeoutsOutputReference <a name="PubsubTopicTimeoutsOutputReference" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.Initializer"></a>

```typescript
import { pubsubTopic } from '@cdktn/provider-google'

new pubsubTopic.PubsubTopicTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeouts">PubsubTopicTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PubsubTopicTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.pubsubTopic.PubsubTopicTimeouts">PubsubTopicTimeouts</a>

---



