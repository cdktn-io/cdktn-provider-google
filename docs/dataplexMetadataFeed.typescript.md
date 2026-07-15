# `dataplexMetadataFeed` Submodule <a name="`dataplexMetadataFeed` Submodule" id="@cdktn/provider-google.dataplexMetadataFeed"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataplexMetadataFeed <a name="DataplexMetadataFeed" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/dataplex_metadata_feed google_dataplex_metadata_feed}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer"></a>

```typescript
import { dataplexMetadataFeed } from '@cdktn/provider-google'

new dataplexMetadataFeed.DataplexMetadataFeed(scope: Construct, id: string, config: DataplexMetadataFeedConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig">DataplexMetadataFeedConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig">DataplexMetadataFeedConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.putFilters">putFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.putScope">putScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetFilters">resetFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetPubsubTopic">resetPubsubTopic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFilters` <a name="putFilters" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.putFilters"></a>

```typescript
public putFilters(value: DataplexMetadataFeedFilters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.putFilters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters">DataplexMetadataFeedFilters</a>

---

##### `putScope` <a name="putScope" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.putScope"></a>

```typescript
public putScope(value: DataplexMetadataFeedScope): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.putScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope">DataplexMetadataFeedScope</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.putTimeouts"></a>

```typescript
public putTimeouts(value: DataplexMetadataFeedTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts">DataplexMetadataFeedTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetFilters` <a name="resetFilters" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetFilters"></a>

```typescript
public resetFilters(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetPubsubTopic` <a name="resetPubsubTopic" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetPubsubTopic"></a>

```typescript
public resetPubsubTopic(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataplexMetadataFeed resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.isConstruct"></a>

```typescript
import { dataplexMetadataFeed } from '@cdktn/provider-google'

dataplexMetadataFeed.DataplexMetadataFeed.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.isTerraformElement"></a>

```typescript
import { dataplexMetadataFeed } from '@cdktn/provider-google'

dataplexMetadataFeed.DataplexMetadataFeed.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.isTerraformResource"></a>

```typescript
import { dataplexMetadataFeed } from '@cdktn/provider-google'

dataplexMetadataFeed.DataplexMetadataFeed.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.generateConfigForImport"></a>

```typescript
import { dataplexMetadataFeed } from '@cdktn/provider-google'

dataplexMetadataFeed.DataplexMetadataFeed.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataplexMetadataFeed resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataplexMetadataFeed to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataplexMetadataFeed that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/dataplex_metadata_feed#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataplexMetadataFeed to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference">DataplexMetadataFeedFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.scope">scope</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference">DataplexMetadataFeedScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference">DataplexMetadataFeedTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.filtersInput">filtersInput</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters">DataplexMetadataFeedFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.metadataFeedIdInput">metadataFeedIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.pubsubTopicInput">pubsubTopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.scopeInput">scopeInput</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope">DataplexMetadataFeedScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts">DataplexMetadataFeedTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.metadataFeedId">metadataFeedId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.pubsubTopic">pubsubTopic</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.filters"></a>

```typescript
public readonly filters: DataplexMetadataFeedFiltersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference">DataplexMetadataFeedFiltersOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.scope"></a>

```typescript
public readonly scope: DataplexMetadataFeedScopeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference">DataplexMetadataFeedScopeOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.timeouts"></a>

```typescript
public readonly timeouts: DataplexMetadataFeedTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference">DataplexMetadataFeedTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `filtersInput`<sup>Optional</sup> <a name="filtersInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.filtersInput"></a>

```typescript
public readonly filtersInput: DataplexMetadataFeedFilters;
```

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters">DataplexMetadataFeedFilters</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `metadataFeedIdInput`<sup>Optional</sup> <a name="metadataFeedIdInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.metadataFeedIdInput"></a>

```typescript
public readonly metadataFeedIdInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `pubsubTopicInput`<sup>Optional</sup> <a name="pubsubTopicInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.pubsubTopicInput"></a>

```typescript
public readonly pubsubTopicInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.scopeInput"></a>

```typescript
public readonly scopeInput: DataplexMetadataFeedScope;
```

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope">DataplexMetadataFeedScope</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataplexMetadataFeedTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts">DataplexMetadataFeedTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `metadataFeedId`<sup>Required</sup> <a name="metadataFeedId" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.metadataFeedId"></a>

```typescript
public readonly metadataFeedId: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `pubsubTopic`<sup>Required</sup> <a name="pubsubTopic" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.pubsubTopic"></a>

```typescript
public readonly pubsubTopic: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataplexMetadataFeedConfig <a name="DataplexMetadataFeedConfig" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.Initializer"></a>

```typescript
import { dataplexMetadataFeed } from '@cdktn/provider-google'

const dataplexMetadataFeedConfig: dataplexMetadataFeed.DataplexMetadataFeedConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.metadataFeedId">metadataFeedId</a></code> | <code>string</code> | The metadata job ID. If not provided, a unique ID is generated with the prefix metadata-job-. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.scope">scope</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope">DataplexMetadataFeedScope</a></code> | scope block. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters">DataplexMetadataFeedFilters</a></code> | filters block. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/dataplex_metadata_feed#id DataplexMetadataFeed#id}. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | User-defined labels. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/dataplex_metadata_feed#project DataplexMetadataFeed#project}. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.pubsubTopic">pubsubTopic</a></code> | <code>string</code> | The pubsub topic that you want the metadata feed messages to publish to. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts">DataplexMetadataFeedTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/dataplex_metadata_feed#location DataplexMetadataFeed#location}

---

##### `metadataFeedId`<sup>Required</sup> <a name="metadataFeedId" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.metadataFeedId"></a>

```typescript
public readonly metadataFeedId: string;
```

- *Type:* string

The metadata job ID. If not provided, a unique ID is generated with the prefix metadata-job-.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/dataplex_metadata_feed#metadata_feed_id DataplexMetadataFeed#metadata_feed_id}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.scope"></a>

```typescript
public readonly scope: DataplexMetadataFeedScope;
```

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope">DataplexMetadataFeedScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/dataplex_metadata_feed#scope DataplexMetadataFeed#scope}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/dataplex_metadata_feed#deletion_policy DataplexMetadataFeed#deletion_policy}

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.filters"></a>

```typescript
public readonly filters: DataplexMetadataFeedFilters;
```

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters">DataplexMetadataFeedFilters</a>

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/dataplex_metadata_feed#filters DataplexMetadataFeed#filters}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/dataplex_metadata_feed#id DataplexMetadataFeed#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/dataplex_metadata_feed#labels DataplexMetadataFeed#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/dataplex_metadata_feed#project DataplexMetadataFeed#project}.

---

##### `pubsubTopic`<sup>Optional</sup> <a name="pubsubTopic" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.pubsubTopic"></a>

```typescript
public readonly pubsubTopic: string;
```

- *Type:* string

The pubsub topic that you want the metadata feed messages to publish to.

Please grant Dataplex service account the permission to publish messages to the topic. The service account is: service-{PROJECT_NUMBER}@gcp-sa-dataplex.iam.gserviceaccount.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/dataplex_metadata_feed#pubsub_topic DataplexMetadataFeed#pubsub_topic}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataplexMetadataFeedTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts">DataplexMetadataFeedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/dataplex_metadata_feed#timeouts DataplexMetadataFeed#timeouts}

---

### DataplexMetadataFeedFilters <a name="DataplexMetadataFeedFilters" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters.Initializer"></a>

```typescript
import { dataplexMetadataFeed } from '@cdktn/provider-google'

const dataplexMetadataFeedFilters: dataplexMetadataFeed.DataplexMetadataFeedFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters.property.aspectTypes">aspectTypes</a></code> | <code>string[]</code> | The aspect types that you want to listen to. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters.property.changeTypes">changeTypes</a></code> | <code>string[]</code> | The type of change that you want to listen to. If not specified, all changes are published. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters.property.entryTypes">entryTypes</a></code> | <code>string[]</code> | The entry types that you want to listen to, specified as relative resource names in the format projects/{project_id_or_number}/locations/{location}/entryTypes/{entry_type_id}. |

---

##### `aspectTypes`<sup>Optional</sup> <a name="aspectTypes" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters.property.aspectTypes"></a>

```typescript
public readonly aspectTypes: string[];
```

- *Type:* string[]

The aspect types that you want to listen to.

Depending on how the aspect is attached to the entry, in the format: projects/{project_id_or_number}/locations/{location}/aspectTypes/{aspect_type_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/dataplex_metadata_feed#aspect_types DataplexMetadataFeed#aspect_types}

---

##### `changeTypes`<sup>Optional</sup> <a name="changeTypes" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters.property.changeTypes"></a>

```typescript
public readonly changeTypes: string[];
```

- *Type:* string[]

The type of change that you want to listen to. If not specified, all changes are published.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/dataplex_metadata_feed#change_types DataplexMetadataFeed#change_types}

---

##### `entryTypes`<sup>Optional</sup> <a name="entryTypes" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters.property.entryTypes"></a>

```typescript
public readonly entryTypes: string[];
```

- *Type:* string[]

The entry types that you want to listen to, specified as relative resource names in the format projects/{project_id_or_number}/locations/{location}/entryTypes/{entry_type_id}.

Only entries that belong to the specified entry types are published.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/dataplex_metadata_feed#entry_types DataplexMetadataFeed#entry_types}

---

### DataplexMetadataFeedScope <a name="DataplexMetadataFeedScope" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope.Initializer"></a>

```typescript
import { dataplexMetadataFeed } from '@cdktn/provider-google'

const dataplexMetadataFeedScope: dataplexMetadataFeed.DataplexMetadataFeedScope = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope.property.entryGroups">entryGroups</a></code> | <code>string[]</code> | The entry groups whose entries you want to listen to. Must be in the format: projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope.property.organizationLevel">organizationLevel</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the metadata feed is at the organization-level. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope.property.projects">projects</a></code> | <code>string[]</code> | The projects whose entries you want to listen to. |

---

##### `entryGroups`<sup>Optional</sup> <a name="entryGroups" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope.property.entryGroups"></a>

```typescript
public readonly entryGroups: string[];
```

- *Type:* string[]

The entry groups whose entries you want to listen to. Must be in the format: projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/dataplex_metadata_feed#entry_groups DataplexMetadataFeed#entry_groups}

---

##### `organizationLevel`<sup>Optional</sup> <a name="organizationLevel" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope.property.organizationLevel"></a>

```typescript
public readonly organizationLevel: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the metadata feed is at the organization-level.

If true, all changes happened to the entries in the same organization as the feed are published.
If false, you must specify a list of projects or a list of entry groups whose entries you want to listen to.The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/dataplex_metadata_feed#organization_level DataplexMetadataFeed#organization_level}

---

##### `projects`<sup>Optional</sup> <a name="projects" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope.property.projects"></a>

```typescript
public readonly projects: string[];
```

- *Type:* string[]

The projects whose entries you want to listen to.

Must be in the same organization as the feed. Must be in the format: projects/{project_id_or_number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/dataplex_metadata_feed#projects DataplexMetadataFeed#projects}

---

### DataplexMetadataFeedTimeouts <a name="DataplexMetadataFeedTimeouts" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts.Initializer"></a>

```typescript
import { dataplexMetadataFeed } from '@cdktn/provider-google'

const dataplexMetadataFeedTimeouts: dataplexMetadataFeed.DataplexMetadataFeedTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/dataplex_metadata_feed#create DataplexMetadataFeed#create}. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/dataplex_metadata_feed#delete DataplexMetadataFeed#delete}. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/dataplex_metadata_feed#update DataplexMetadataFeed#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/dataplex_metadata_feed#create DataplexMetadataFeed#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/dataplex_metadata_feed#delete DataplexMetadataFeed#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/dataplex_metadata_feed#update DataplexMetadataFeed#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataplexMetadataFeedFiltersOutputReference <a name="DataplexMetadataFeedFiltersOutputReference" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.Initializer"></a>

```typescript
import { dataplexMetadataFeed } from '@cdktn/provider-google'

new dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.resetAspectTypes">resetAspectTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.resetChangeTypes">resetChangeTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.resetEntryTypes">resetEntryTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAspectTypes` <a name="resetAspectTypes" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.resetAspectTypes"></a>

```typescript
public resetAspectTypes(): void
```

##### `resetChangeTypes` <a name="resetChangeTypes" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.resetChangeTypes"></a>

```typescript
public resetChangeTypes(): void
```

##### `resetEntryTypes` <a name="resetEntryTypes" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.resetEntryTypes"></a>

```typescript
public resetEntryTypes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.aspectTypesInput">aspectTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.changeTypesInput">changeTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.entryTypesInput">entryTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.aspectTypes">aspectTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.changeTypes">changeTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.entryTypes">entryTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters">DataplexMetadataFeedFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aspectTypesInput`<sup>Optional</sup> <a name="aspectTypesInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.aspectTypesInput"></a>

```typescript
public readonly aspectTypesInput: string[];
```

- *Type:* string[]

---

##### `changeTypesInput`<sup>Optional</sup> <a name="changeTypesInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.changeTypesInput"></a>

```typescript
public readonly changeTypesInput: string[];
```

- *Type:* string[]

---

##### `entryTypesInput`<sup>Optional</sup> <a name="entryTypesInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.entryTypesInput"></a>

```typescript
public readonly entryTypesInput: string[];
```

- *Type:* string[]

---

##### `aspectTypes`<sup>Required</sup> <a name="aspectTypes" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.aspectTypes"></a>

```typescript
public readonly aspectTypes: string[];
```

- *Type:* string[]

---

##### `changeTypes`<sup>Required</sup> <a name="changeTypes" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.changeTypes"></a>

```typescript
public readonly changeTypes: string[];
```

- *Type:* string[]

---

##### `entryTypes`<sup>Required</sup> <a name="entryTypes" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.entryTypes"></a>

```typescript
public readonly entryTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataplexMetadataFeedFilters;
```

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters">DataplexMetadataFeedFilters</a>

---


### DataplexMetadataFeedScopeOutputReference <a name="DataplexMetadataFeedScopeOutputReference" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.Initializer"></a>

```typescript
import { dataplexMetadataFeed } from '@cdktn/provider-google'

new dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.resetEntryGroups">resetEntryGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.resetOrganizationLevel">resetOrganizationLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.resetProjects">resetProjects</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEntryGroups` <a name="resetEntryGroups" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.resetEntryGroups"></a>

```typescript
public resetEntryGroups(): void
```

##### `resetOrganizationLevel` <a name="resetOrganizationLevel" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.resetOrganizationLevel"></a>

```typescript
public resetOrganizationLevel(): void
```

##### `resetProjects` <a name="resetProjects" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.resetProjects"></a>

```typescript
public resetProjects(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.entryGroupsInput">entryGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.organizationLevelInput">organizationLevelInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.projectsInput">projectsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.entryGroups">entryGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.organizationLevel">organizationLevel</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.projects">projects</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope">DataplexMetadataFeedScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `entryGroupsInput`<sup>Optional</sup> <a name="entryGroupsInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.entryGroupsInput"></a>

```typescript
public readonly entryGroupsInput: string[];
```

- *Type:* string[]

---

##### `organizationLevelInput`<sup>Optional</sup> <a name="organizationLevelInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.organizationLevelInput"></a>

```typescript
public readonly organizationLevelInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `projectsInput`<sup>Optional</sup> <a name="projectsInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.projectsInput"></a>

```typescript
public readonly projectsInput: string[];
```

- *Type:* string[]

---

##### `entryGroups`<sup>Required</sup> <a name="entryGroups" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.entryGroups"></a>

```typescript
public readonly entryGroups: string[];
```

- *Type:* string[]

---

##### `organizationLevel`<sup>Required</sup> <a name="organizationLevel" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.organizationLevel"></a>

```typescript
public readonly organizationLevel: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `projects`<sup>Required</sup> <a name="projects" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.projects"></a>

```typescript
public readonly projects: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataplexMetadataFeedScope;
```

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope">DataplexMetadataFeedScope</a>

---


### DataplexMetadataFeedTimeoutsOutputReference <a name="DataplexMetadataFeedTimeoutsOutputReference" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataplexMetadataFeed } from '@cdktn/provider-google'

new dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts">DataplexMetadataFeedTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataplexMetadataFeedTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts">DataplexMetadataFeedTimeouts</a>

---



