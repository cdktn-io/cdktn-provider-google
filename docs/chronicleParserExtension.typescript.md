# `chronicleParserExtension` Submodule <a name="`chronicleParserExtension` Submodule" id="@cdktn/provider-google.chronicleParserExtension"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChronicleParserExtension <a name="ChronicleParserExtension" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension google_chronicle_parser_extension}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer"></a>

```typescript
import { chronicleParserExtension } from '@cdktn/provider-google'

new chronicleParserExtension.ChronicleParserExtension(scope: Construct, id: string, config: ChronicleParserExtensionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig">ChronicleParserExtensionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig">ChronicleParserExtensionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.putDynamicParsing">putDynamicParsing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.putFieldExtractors">putFieldExtractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetCbnSnippet">resetCbnSnippet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetDynamicParsing">resetDynamicParsing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetFieldExtractors">resetFieldExtractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetLog">resetLog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetValidationSkipped">resetValidationSkipped</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDynamicParsing` <a name="putDynamicParsing" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.putDynamicParsing"></a>

```typescript
public putDynamicParsing(value: ChronicleParserExtensionDynamicParsing): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.putDynamicParsing.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing">ChronicleParserExtensionDynamicParsing</a>

---

##### `putFieldExtractors` <a name="putFieldExtractors" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.putFieldExtractors"></a>

```typescript
public putFieldExtractors(value: ChronicleParserExtensionFieldExtractors): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.putFieldExtractors.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors">ChronicleParserExtensionFieldExtractors</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.putTimeouts"></a>

```typescript
public putTimeouts(value: ChronicleParserExtensionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts">ChronicleParserExtensionTimeouts</a>

---

##### `resetCbnSnippet` <a name="resetCbnSnippet" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetCbnSnippet"></a>

```typescript
public resetCbnSnippet(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDynamicParsing` <a name="resetDynamicParsing" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetDynamicParsing"></a>

```typescript
public resetDynamicParsing(): void
```

##### `resetFieldExtractors` <a name="resetFieldExtractors" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetFieldExtractors"></a>

```typescript
public resetFieldExtractors(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLog` <a name="resetLog" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetLog"></a>

```typescript
public resetLog(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetValidationSkipped` <a name="resetValidationSkipped" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetValidationSkipped"></a>

```typescript
public resetValidationSkipped(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ChronicleParserExtension resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.isConstruct"></a>

```typescript
import { chronicleParserExtension } from '@cdktn/provider-google'

chronicleParserExtension.ChronicleParserExtension.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.isTerraformElement"></a>

```typescript
import { chronicleParserExtension } from '@cdktn/provider-google'

chronicleParserExtension.ChronicleParserExtension.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.isTerraformResource"></a>

```typescript
import { chronicleParserExtension } from '@cdktn/provider-google'

chronicleParserExtension.ChronicleParserExtension.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.generateConfigForImport"></a>

```typescript
import { chronicleParserExtension } from '@cdktn/provider-google'

chronicleParserExtension.ChronicleParserExtension.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ChronicleParserExtension resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ChronicleParserExtension to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ChronicleParserExtension that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ChronicleParserExtension to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.dynamicParsing">dynamicParsing</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference">ChronicleParserExtensionDynamicParsingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.extensionValidationReport">extensionValidationReport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.fieldExtractors">fieldExtractors</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference">ChronicleParserExtensionFieldExtractorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.lastLiveTime">lastLiveTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.parserextension">parserextension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.stateLastChangedTime">stateLastChangedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference">ChronicleParserExtensionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.validationReport">validationReport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.cbnSnippetInput">cbnSnippetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.dynamicParsingInput">dynamicParsingInput</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing">ChronicleParserExtensionDynamicParsing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.fieldExtractorsInput">fieldExtractorsInput</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors">ChronicleParserExtensionFieldExtractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.instanceInput">instanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.logInput">logInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.logTypeInput">logTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts">ChronicleParserExtensionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.validationSkippedInput">validationSkippedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.cbnSnippet">cbnSnippet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.instance">instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.log">log</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.logType">logType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.validationSkipped">validationSkipped</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `dynamicParsing`<sup>Required</sup> <a name="dynamicParsing" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.dynamicParsing"></a>

```typescript
public readonly dynamicParsing: ChronicleParserExtensionDynamicParsingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference">ChronicleParserExtensionDynamicParsingOutputReference</a>

---

##### `extensionValidationReport`<sup>Required</sup> <a name="extensionValidationReport" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.extensionValidationReport"></a>

```typescript
public readonly extensionValidationReport: string;
```

- *Type:* string

---

##### `fieldExtractors`<sup>Required</sup> <a name="fieldExtractors" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.fieldExtractors"></a>

```typescript
public readonly fieldExtractors: ChronicleParserExtensionFieldExtractorsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference">ChronicleParserExtensionFieldExtractorsOutputReference</a>

---

##### `lastLiveTime`<sup>Required</sup> <a name="lastLiveTime" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.lastLiveTime"></a>

```typescript
public readonly lastLiveTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parserextension`<sup>Required</sup> <a name="parserextension" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.parserextension"></a>

```typescript
public readonly parserextension: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateLastChangedTime`<sup>Required</sup> <a name="stateLastChangedTime" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.stateLastChangedTime"></a>

```typescript
public readonly stateLastChangedTime: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.timeouts"></a>

```typescript
public readonly timeouts: ChronicleParserExtensionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference">ChronicleParserExtensionTimeoutsOutputReference</a>

---

##### `validationReport`<sup>Required</sup> <a name="validationReport" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.validationReport"></a>

```typescript
public readonly validationReport: string;
```

- *Type:* string

---

##### `cbnSnippetInput`<sup>Optional</sup> <a name="cbnSnippetInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.cbnSnippetInput"></a>

```typescript
public readonly cbnSnippetInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `dynamicParsingInput`<sup>Optional</sup> <a name="dynamicParsingInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.dynamicParsingInput"></a>

```typescript
public readonly dynamicParsingInput: ChronicleParserExtensionDynamicParsing;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing">ChronicleParserExtensionDynamicParsing</a>

---

##### `fieldExtractorsInput`<sup>Optional</sup> <a name="fieldExtractorsInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.fieldExtractorsInput"></a>

```typescript
public readonly fieldExtractorsInput: ChronicleParserExtensionFieldExtractors;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors">ChronicleParserExtensionFieldExtractors</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.instanceInput"></a>

```typescript
public readonly instanceInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `logInput`<sup>Optional</sup> <a name="logInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.logInput"></a>

```typescript
public readonly logInput: string;
```

- *Type:* string

---

##### `logTypeInput`<sup>Optional</sup> <a name="logTypeInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.logTypeInput"></a>

```typescript
public readonly logTypeInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ChronicleParserExtensionTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts">ChronicleParserExtensionTimeouts</a>

---

##### `validationSkippedInput`<sup>Optional</sup> <a name="validationSkippedInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.validationSkippedInput"></a>

```typescript
public readonly validationSkippedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `cbnSnippet`<sup>Required</sup> <a name="cbnSnippet" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.cbnSnippet"></a>

```typescript
public readonly cbnSnippet: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `log`<sup>Required</sup> <a name="log" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.log"></a>

```typescript
public readonly log: string;
```

- *Type:* string

---

##### `logType`<sup>Required</sup> <a name="logType" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.logType"></a>

```typescript
public readonly logType: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `validationSkipped`<sup>Required</sup> <a name="validationSkipped" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.validationSkipped"></a>

```typescript
public readonly validationSkipped: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChronicleParserExtensionConfig <a name="ChronicleParserExtensionConfig" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.Initializer"></a>

```typescript
import { chronicleParserExtension } from '@cdktn/provider-google'

const chronicleParserExtensionConfig: chronicleParserExtension.ChronicleParserExtensionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.instance">instance</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.logType">logType</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.cbnSnippet">cbnSnippet</a></code> | <code>string</code> | Parser config could be a cbn snippet. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.dynamicParsing">dynamicParsing</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing">ChronicleParserExtensionDynamicParsing</a></code> | dynamic_parsing block. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.fieldExtractors">fieldExtractors</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors">ChronicleParserExtensionFieldExtractors</a></code> | field_extractors block. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#id ChronicleParserExtension#id}. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.log">log</a></code> | <code>string</code> | Raw log used to assist the user in creation of augmentation. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#project ChronicleParserExtension#project}. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts">ChronicleParserExtensionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.validationSkipped">validationSkipped</a></code> | <code>boolean \| cdktn.IResolvable</code> | Flag to bypass parser extension validation. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#instance ChronicleParserExtension#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#location ChronicleParserExtension#location}

---

##### `logType`<sup>Required</sup> <a name="logType" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.logType"></a>

```typescript
public readonly logType: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#log_type ChronicleParserExtension#log_type}

---

##### `cbnSnippet`<sup>Optional</sup> <a name="cbnSnippet" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.cbnSnippet"></a>

```typescript
public readonly cbnSnippet: string;
```

- *Type:* string

Parser config could be a cbn snippet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#cbn_snippet ChronicleParserExtension#cbn_snippet}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#deletion_policy ChronicleParserExtension#deletion_policy}

---

##### `dynamicParsing`<sup>Optional</sup> <a name="dynamicParsing" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.dynamicParsing"></a>

```typescript
public readonly dynamicParsing: ChronicleParserExtensionDynamicParsing;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing">ChronicleParserExtensionDynamicParsing</a>

dynamic_parsing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#dynamic_parsing ChronicleParserExtension#dynamic_parsing}

---

##### `fieldExtractors`<sup>Optional</sup> <a name="fieldExtractors" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.fieldExtractors"></a>

```typescript
public readonly fieldExtractors: ChronicleParserExtensionFieldExtractors;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors">ChronicleParserExtensionFieldExtractors</a>

field_extractors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#field_extractors ChronicleParserExtension#field_extractors}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#id ChronicleParserExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log`<sup>Optional</sup> <a name="log" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.log"></a>

```typescript
public readonly log: string;
```

- *Type:* string

Raw log used to assist the user in creation of augmentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#log ChronicleParserExtension#log}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#project ChronicleParserExtension#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ChronicleParserExtensionTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts">ChronicleParserExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#timeouts ChronicleParserExtension#timeouts}

---

##### `validationSkipped`<sup>Optional</sup> <a name="validationSkipped" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.validationSkipped"></a>

```typescript
public readonly validationSkipped: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Flag to bypass parser extension validation.

If enabled, the parser extension won't be rejected during the validation
phase and validation will be skipped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#validation_skipped ChronicleParserExtension#validation_skipped}

---

### ChronicleParserExtensionDynamicParsing <a name="ChronicleParserExtensionDynamicParsing" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing.Initializer"></a>

```typescript
import { chronicleParserExtension } from '@cdktn/provider-google'

const chronicleParserExtensionDynamicParsing: chronicleParserExtension.ChronicleParserExtensionDynamicParsing = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing.property.optedFields">optedFields</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields">ChronicleParserExtensionDynamicParsingOptedFields</a>[]</code> | opted_fields block. |

---

##### `optedFields`<sup>Optional</sup> <a name="optedFields" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing.property.optedFields"></a>

```typescript
public readonly optedFields: IResolvable | ChronicleParserExtensionDynamicParsingOptedFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields">ChronicleParserExtensionDynamicParsingOptedFields</a>[]

opted_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#opted_fields ChronicleParserExtension#opted_fields}

---

### ChronicleParserExtensionDynamicParsingOptedFields <a name="ChronicleParserExtensionDynamicParsingOptedFields" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields.Initializer"></a>

```typescript
import { chronicleParserExtension } from '@cdktn/provider-google'

const chronicleParserExtensionDynamicParsingOptedFields: chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields.property.path">path</a></code> | <code>string</code> | Path of the log field. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields.property.sampleValue">sampleValue</a></code> | <code>string</code> | Sample value of the log field. |

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path of the log field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#path ChronicleParserExtension#path}

---

##### `sampleValue`<sup>Optional</sup> <a name="sampleValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields.property.sampleValue"></a>

```typescript
public readonly sampleValue: string;
```

- *Type:* string

Sample value of the log field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#sample_value ChronicleParserExtension#sample_value}

---

### ChronicleParserExtensionFieldExtractors <a name="ChronicleParserExtensionFieldExtractors" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors.Initializer"></a>

```typescript
import { chronicleParserExtension } from '@cdktn/provider-google'

const chronicleParserExtensionFieldExtractors: chronicleParserExtension.ChronicleParserExtensionFieldExtractors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors.property.appendRepeatedFields">appendRepeatedFields</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to append repeated fields or not. When false, repeated fields will be replaced. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors.property.extractors">extractors</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors">ChronicleParserExtensionFieldExtractorsExtractors</a>[]</code> | extractors block. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors.property.logFormat">logFormat</a></code> | <code>string</code> | Possible values: JSON CSV XML. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors.property.preprocessConfig">preprocessConfig</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig">ChronicleParserExtensionFieldExtractorsPreprocessConfig</a></code> | preprocess_config block. |

---

##### `appendRepeatedFields`<sup>Optional</sup> <a name="appendRepeatedFields" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors.property.appendRepeatedFields"></a>

```typescript
public readonly appendRepeatedFields: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to append repeated fields or not. When false, repeated fields will be replaced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#append_repeated_fields ChronicleParserExtension#append_repeated_fields}

---

##### `extractors`<sup>Optional</sup> <a name="extractors" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors.property.extractors"></a>

```typescript
public readonly extractors: IResolvable | ChronicleParserExtensionFieldExtractorsExtractors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors">ChronicleParserExtensionFieldExtractorsExtractors</a>[]

extractors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#extractors ChronicleParserExtension#extractors}

---

##### `logFormat`<sup>Optional</sup> <a name="logFormat" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors.property.logFormat"></a>

```typescript
public readonly logFormat: string;
```

- *Type:* string

Possible values: JSON CSV XML.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#log_format ChronicleParserExtension#log_format}

---

##### `preprocessConfig`<sup>Optional</sup> <a name="preprocessConfig" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors.property.preprocessConfig"></a>

```typescript
public readonly preprocessConfig: ChronicleParserExtensionFieldExtractorsPreprocessConfig;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig">ChronicleParserExtensionFieldExtractorsPreprocessConfig</a>

preprocess_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#preprocess_config ChronicleParserExtension#preprocess_config}

---

### ChronicleParserExtensionFieldExtractorsExtractors <a name="ChronicleParserExtensionFieldExtractorsExtractors" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.Initializer"></a>

```typescript
import { chronicleParserExtension } from '@cdktn/provider-google'

const chronicleParserExtensionFieldExtractorsExtractors: chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.destinationPath">destinationPath</a></code> | <code>string</code> | Path in generated event which is to be populated. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.fieldPath">fieldPath</a></code> | <code>string</code> | Field path could be a json path, xml path or csv column name depending on log format. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.preconditionOp">preconditionOp</a></code> | <code>string</code> | Operator used for precondition. Possible values: EQUALS NOT_EQUALS. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.preconditionPath">preconditionPath</a></code> | <code>string</code> | Precondition path could be a json path, xml path or csv column name depending on log format. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.preconditionValue">preconditionValue</a></code> | <code>string</code> | Precondition value. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.value">value</a></code> | <code>string</code> | Value to be mapped to the destination path directly. |

---

##### `destinationPath`<sup>Optional</sup> <a name="destinationPath" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.destinationPath"></a>

```typescript
public readonly destinationPath: string;
```

- *Type:* string

Path in generated event which is to be populated.

This is required if the
FieldExtractor is used to specify the parser extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#destination_path ChronicleParserExtension#destination_path}

---

##### `fieldPath`<sup>Optional</sup> <a name="fieldPath" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.fieldPath"></a>

```typescript
public readonly fieldPath: string;
```

- *Type:* string

Field path could be a json path, xml path or csv column name depending on log format.

It refers to a section or substring in raw log.
This is required if the FieldExtractor is used to specify the parser
extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#field_path ChronicleParserExtension#field_path}

---

##### `preconditionOp`<sup>Optional</sup> <a name="preconditionOp" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.preconditionOp"></a>

```typescript
public readonly preconditionOp: string;
```

- *Type:* string

Operator used for precondition. Possible values: EQUALS NOT_EQUALS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#precondition_op ChronicleParserExtension#precondition_op}

---

##### `preconditionPath`<sup>Optional</sup> <a name="preconditionPath" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.preconditionPath"></a>

```typescript
public readonly preconditionPath: string;
```

- *Type:* string

Precondition path could be a json path, xml path or csv column name depending on log format.

It refers to a section or substring in raw log.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#precondition_path ChronicleParserExtension#precondition_path}

---

##### `preconditionValue`<sup>Optional</sup> <a name="preconditionValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.preconditionValue"></a>

```typescript
public readonly preconditionValue: string;
```

- *Type:* string

Precondition value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#precondition_value ChronicleParserExtension#precondition_value}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Value to be mapped to the destination path directly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#value ChronicleParserExtension#value}

---

### ChronicleParserExtensionFieldExtractorsPreprocessConfig <a name="ChronicleParserExtensionFieldExtractorsPreprocessConfig" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig.Initializer"></a>

```typescript
import { chronicleParserExtension } from '@cdktn/provider-google'

const chronicleParserExtensionFieldExtractorsPreprocessConfig: chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig.property.grokRegex">grokRegex</a></code> | <code>string</code> | GROK Regex to extract the structured part of the log. syntax documentation: www.elastic.co/guide/en/logstash/current/plugins-filters-grok.html. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig.property.target">target</a></code> | <code>string</code> | Target field name for the structured part of the log. This should match a SEMANTIC identifier from the grok expression. |

---

##### `grokRegex`<sup>Optional</sup> <a name="grokRegex" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig.property.grokRegex"></a>

```typescript
public readonly grokRegex: string;
```

- *Type:* string

GROK Regex to extract the structured part of the log. syntax documentation: www.elastic.co/guide/en/logstash/current/plugins-filters-grok.html.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#grok_regex ChronicleParserExtension#grok_regex}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Target field name for the structured part of the log. This should match a SEMANTIC identifier from the grok expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#target ChronicleParserExtension#target}

---

### ChronicleParserExtensionTimeouts <a name="ChronicleParserExtensionTimeouts" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts.Initializer"></a>

```typescript
import { chronicleParserExtension } from '@cdktn/provider-google'

const chronicleParserExtensionTimeouts: chronicleParserExtension.ChronicleParserExtensionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#create ChronicleParserExtension#create}. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#delete ChronicleParserExtension#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#create ChronicleParserExtension#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_parser_extension#delete ChronicleParserExtension#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChronicleParserExtensionDynamicParsingOptedFieldsList <a name="ChronicleParserExtensionDynamicParsingOptedFieldsList" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.Initializer"></a>

```typescript
import { chronicleParserExtension } from '@cdktn/provider-google'

new chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.get"></a>

```typescript
public get(index: number): ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields">ChronicleParserExtensionDynamicParsingOptedFields</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChronicleParserExtensionDynamicParsingOptedFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields">ChronicleParserExtensionDynamicParsingOptedFields</a>[]

---


### ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference <a name="ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.Initializer"></a>

```typescript
import { chronicleParserExtension } from '@cdktn/provider-google'

new chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.resetSampleValue">resetSampleValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetSampleValue` <a name="resetSampleValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.resetSampleValue"></a>

```typescript
public resetSampleValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.sampleValueInput">sampleValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.sampleValue">sampleValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields">ChronicleParserExtensionDynamicParsingOptedFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `sampleValueInput`<sup>Optional</sup> <a name="sampleValueInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.sampleValueInput"></a>

```typescript
public readonly sampleValueInput: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `sampleValue`<sup>Required</sup> <a name="sampleValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.sampleValue"></a>

```typescript
public readonly sampleValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChronicleParserExtensionDynamicParsingOptedFields;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields">ChronicleParserExtensionDynamicParsingOptedFields</a>

---


### ChronicleParserExtensionDynamicParsingOutputReference <a name="ChronicleParserExtensionDynamicParsingOutputReference" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.Initializer"></a>

```typescript
import { chronicleParserExtension } from '@cdktn/provider-google'

new chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.putOptedFields">putOptedFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.resetOptedFields">resetOptedFields</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOptedFields` <a name="putOptedFields" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.putOptedFields"></a>

```typescript
public putOptedFields(value: IResolvable | ChronicleParserExtensionDynamicParsingOptedFields[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.putOptedFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields">ChronicleParserExtensionDynamicParsingOptedFields</a>[]

---

##### `resetOptedFields` <a name="resetOptedFields" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.resetOptedFields"></a>

```typescript
public resetOptedFields(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.property.optedFields">optedFields</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList">ChronicleParserExtensionDynamicParsingOptedFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.property.optedFieldsInput">optedFieldsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields">ChronicleParserExtensionDynamicParsingOptedFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing">ChronicleParserExtensionDynamicParsing</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `optedFields`<sup>Required</sup> <a name="optedFields" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.property.optedFields"></a>

```typescript
public readonly optedFields: ChronicleParserExtensionDynamicParsingOptedFieldsList;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList">ChronicleParserExtensionDynamicParsingOptedFieldsList</a>

---

##### `optedFieldsInput`<sup>Optional</sup> <a name="optedFieldsInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.property.optedFieldsInput"></a>

```typescript
public readonly optedFieldsInput: IResolvable | ChronicleParserExtensionDynamicParsingOptedFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields">ChronicleParserExtensionDynamicParsingOptedFields</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ChronicleParserExtensionDynamicParsing;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing">ChronicleParserExtensionDynamicParsing</a>

---


### ChronicleParserExtensionFieldExtractorsExtractorsList <a name="ChronicleParserExtensionFieldExtractorsExtractorsList" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.Initializer"></a>

```typescript
import { chronicleParserExtension } from '@cdktn/provider-google'

new chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.get"></a>

```typescript
public get(index: number): ChronicleParserExtensionFieldExtractorsExtractorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors">ChronicleParserExtensionFieldExtractorsExtractors</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChronicleParserExtensionFieldExtractorsExtractors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors">ChronicleParserExtensionFieldExtractorsExtractors</a>[]

---


### ChronicleParserExtensionFieldExtractorsExtractorsOutputReference <a name="ChronicleParserExtensionFieldExtractorsExtractorsOutputReference" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.Initializer"></a>

```typescript
import { chronicleParserExtension } from '@cdktn/provider-google'

new chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetDestinationPath">resetDestinationPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetFieldPath">resetFieldPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetPreconditionOp">resetPreconditionOp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetPreconditionPath">resetPreconditionPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetPreconditionValue">resetPreconditionValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationPath` <a name="resetDestinationPath" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetDestinationPath"></a>

```typescript
public resetDestinationPath(): void
```

##### `resetFieldPath` <a name="resetFieldPath" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetFieldPath"></a>

```typescript
public resetFieldPath(): void
```

##### `resetPreconditionOp` <a name="resetPreconditionOp" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetPreconditionOp"></a>

```typescript
public resetPreconditionOp(): void
```

##### `resetPreconditionPath` <a name="resetPreconditionPath" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetPreconditionPath"></a>

```typescript
public resetPreconditionPath(): void
```

##### `resetPreconditionValue` <a name="resetPreconditionValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetPreconditionValue"></a>

```typescript
public resetPreconditionValue(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.destinationPathInput">destinationPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.fieldPathInput">fieldPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionOpInput">preconditionOpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionPathInput">preconditionPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionValueInput">preconditionValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.destinationPath">destinationPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.fieldPath">fieldPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionOp">preconditionOp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionPath">preconditionPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionValue">preconditionValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors">ChronicleParserExtensionFieldExtractorsExtractors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationPathInput`<sup>Optional</sup> <a name="destinationPathInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.destinationPathInput"></a>

```typescript
public readonly destinationPathInput: string;
```

- *Type:* string

---

##### `fieldPathInput`<sup>Optional</sup> <a name="fieldPathInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.fieldPathInput"></a>

```typescript
public readonly fieldPathInput: string;
```

- *Type:* string

---

##### `preconditionOpInput`<sup>Optional</sup> <a name="preconditionOpInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionOpInput"></a>

```typescript
public readonly preconditionOpInput: string;
```

- *Type:* string

---

##### `preconditionPathInput`<sup>Optional</sup> <a name="preconditionPathInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionPathInput"></a>

```typescript
public readonly preconditionPathInput: string;
```

- *Type:* string

---

##### `preconditionValueInput`<sup>Optional</sup> <a name="preconditionValueInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionValueInput"></a>

```typescript
public readonly preconditionValueInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `destinationPath`<sup>Required</sup> <a name="destinationPath" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.destinationPath"></a>

```typescript
public readonly destinationPath: string;
```

- *Type:* string

---

##### `fieldPath`<sup>Required</sup> <a name="fieldPath" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.fieldPath"></a>

```typescript
public readonly fieldPath: string;
```

- *Type:* string

---

##### `preconditionOp`<sup>Required</sup> <a name="preconditionOp" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionOp"></a>

```typescript
public readonly preconditionOp: string;
```

- *Type:* string

---

##### `preconditionPath`<sup>Required</sup> <a name="preconditionPath" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionPath"></a>

```typescript
public readonly preconditionPath: string;
```

- *Type:* string

---

##### `preconditionValue`<sup>Required</sup> <a name="preconditionValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionValue"></a>

```typescript
public readonly preconditionValue: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChronicleParserExtensionFieldExtractorsExtractors;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors">ChronicleParserExtensionFieldExtractorsExtractors</a>

---


### ChronicleParserExtensionFieldExtractorsOutputReference <a name="ChronicleParserExtensionFieldExtractorsOutputReference" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.Initializer"></a>

```typescript
import { chronicleParserExtension } from '@cdktn/provider-google'

new chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.putExtractors">putExtractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.putPreprocessConfig">putPreprocessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resetAppendRepeatedFields">resetAppendRepeatedFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resetExtractors">resetExtractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resetLogFormat">resetLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resetPreprocessConfig">resetPreprocessConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExtractors` <a name="putExtractors" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.putExtractors"></a>

```typescript
public putExtractors(value: IResolvable | ChronicleParserExtensionFieldExtractorsExtractors[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.putExtractors.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors">ChronicleParserExtensionFieldExtractorsExtractors</a>[]

---

##### `putPreprocessConfig` <a name="putPreprocessConfig" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.putPreprocessConfig"></a>

```typescript
public putPreprocessConfig(value: ChronicleParserExtensionFieldExtractorsPreprocessConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.putPreprocessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig">ChronicleParserExtensionFieldExtractorsPreprocessConfig</a>

---

##### `resetAppendRepeatedFields` <a name="resetAppendRepeatedFields" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resetAppendRepeatedFields"></a>

```typescript
public resetAppendRepeatedFields(): void
```

##### `resetExtractors` <a name="resetExtractors" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resetExtractors"></a>

```typescript
public resetExtractors(): void
```

##### `resetLogFormat` <a name="resetLogFormat" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resetLogFormat"></a>

```typescript
public resetLogFormat(): void
```

##### `resetPreprocessConfig` <a name="resetPreprocessConfig" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resetPreprocessConfig"></a>

```typescript
public resetPreprocessConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.extractors">extractors</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList">ChronicleParserExtensionFieldExtractorsExtractorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.preprocessConfig">preprocessConfig</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference">ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.transformedCbnSnippet">transformedCbnSnippet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.appendRepeatedFieldsInput">appendRepeatedFieldsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.extractorsInput">extractorsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors">ChronicleParserExtensionFieldExtractorsExtractors</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.logFormatInput">logFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.preprocessConfigInput">preprocessConfigInput</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig">ChronicleParserExtensionFieldExtractorsPreprocessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.appendRepeatedFields">appendRepeatedFields</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.logFormat">logFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors">ChronicleParserExtensionFieldExtractors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `extractors`<sup>Required</sup> <a name="extractors" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.extractors"></a>

```typescript
public readonly extractors: ChronicleParserExtensionFieldExtractorsExtractorsList;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList">ChronicleParserExtensionFieldExtractorsExtractorsList</a>

---

##### `preprocessConfig`<sup>Required</sup> <a name="preprocessConfig" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.preprocessConfig"></a>

```typescript
public readonly preprocessConfig: ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference">ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference</a>

---

##### `transformedCbnSnippet`<sup>Required</sup> <a name="transformedCbnSnippet" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.transformedCbnSnippet"></a>

```typescript
public readonly transformedCbnSnippet: string;
```

- *Type:* string

---

##### `appendRepeatedFieldsInput`<sup>Optional</sup> <a name="appendRepeatedFieldsInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.appendRepeatedFieldsInput"></a>

```typescript
public readonly appendRepeatedFieldsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `extractorsInput`<sup>Optional</sup> <a name="extractorsInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.extractorsInput"></a>

```typescript
public readonly extractorsInput: IResolvable | ChronicleParserExtensionFieldExtractorsExtractors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors">ChronicleParserExtensionFieldExtractorsExtractors</a>[]

---

##### `logFormatInput`<sup>Optional</sup> <a name="logFormatInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.logFormatInput"></a>

```typescript
public readonly logFormatInput: string;
```

- *Type:* string

---

##### `preprocessConfigInput`<sup>Optional</sup> <a name="preprocessConfigInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.preprocessConfigInput"></a>

```typescript
public readonly preprocessConfigInput: ChronicleParserExtensionFieldExtractorsPreprocessConfig;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig">ChronicleParserExtensionFieldExtractorsPreprocessConfig</a>

---

##### `appendRepeatedFields`<sup>Required</sup> <a name="appendRepeatedFields" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.appendRepeatedFields"></a>

```typescript
public readonly appendRepeatedFields: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `logFormat`<sup>Required</sup> <a name="logFormat" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.logFormat"></a>

```typescript
public readonly logFormat: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ChronicleParserExtensionFieldExtractors;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors">ChronicleParserExtensionFieldExtractors</a>

---


### ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference <a name="ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.Initializer"></a>

```typescript
import { chronicleParserExtension } from '@cdktn/provider-google'

new chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.resetGrokRegex">resetGrokRegex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGrokRegex` <a name="resetGrokRegex" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.resetGrokRegex"></a>

```typescript
public resetGrokRegex(): void
```

##### `resetTarget` <a name="resetTarget" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.resetTarget"></a>

```typescript
public resetTarget(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.grokRegexInput">grokRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.grokRegex">grokRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig">ChronicleParserExtensionFieldExtractorsPreprocessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `grokRegexInput`<sup>Optional</sup> <a name="grokRegexInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.grokRegexInput"></a>

```typescript
public readonly grokRegexInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `grokRegex`<sup>Required</sup> <a name="grokRegex" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.grokRegex"></a>

```typescript
public readonly grokRegex: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ChronicleParserExtensionFieldExtractorsPreprocessConfig;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig">ChronicleParserExtensionFieldExtractorsPreprocessConfig</a>

---


### ChronicleParserExtensionTimeoutsOutputReference <a name="ChronicleParserExtensionTimeoutsOutputReference" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.Initializer"></a>

```typescript
import { chronicleParserExtension } from '@cdktn/provider-google'

new chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts">ChronicleParserExtensionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChronicleParserExtensionTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts">ChronicleParserExtensionTimeouts</a>

---



