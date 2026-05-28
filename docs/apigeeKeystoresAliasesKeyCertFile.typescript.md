# `apigeeKeystoresAliasesKeyCertFile` Submodule <a name="`apigeeKeystoresAliasesKeyCertFile` Submodule" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeKeystoresAliasesKeyCertFile <a name="ApigeeKeystoresAliasesKeyCertFile" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/apigee_keystores_aliases_key_cert_file google_apigee_keystores_aliases_key_cert_file}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.Initializer"></a>

```typescript
import { apigeeKeystoresAliasesKeyCertFile } from '@cdktn/provider-google'

new apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile(scope: Construct, id: string, config: ApigeeKeystoresAliasesKeyCertFileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig">ApigeeKeystoresAliasesKeyCertFileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig">ApigeeKeystoresAliasesKeyCertFileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.putTimeouts"></a>

```typescript
public putTimeouts(value: ApigeeKeystoresAliasesKeyCertFileTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeouts">ApigeeKeystoresAliasesKeyCertFileTimeouts</a>

---

##### `resetKey` <a name="resetKey" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApigeeKeystoresAliasesKeyCertFile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.isConstruct"></a>

```typescript
import { apigeeKeystoresAliasesKeyCertFile } from '@cdktn/provider-google'

apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.isTerraformElement"></a>

```typescript
import { apigeeKeystoresAliasesKeyCertFile } from '@cdktn/provider-google'

apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.isTerraformResource"></a>

```typescript
import { apigeeKeystoresAliasesKeyCertFile } from '@cdktn/provider-google'

apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.generateConfigForImport"></a>

```typescript
import { apigeeKeystoresAliasesKeyCertFile } from '@cdktn/provider-google'

apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ApigeeKeystoresAliasesKeyCertFile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApigeeKeystoresAliasesKeyCertFile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApigeeKeystoresAliasesKeyCertFile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/apigee_keystores_aliases_key_cert_file#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApigeeKeystoresAliasesKeyCertFile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.certsInfo">certsInfo</a></code> | <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList">ApigeeKeystoresAliasesKeyCertFileCertsInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference">ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.certInput">certInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.environmentInput">environmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.keystoreInput">keystoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.orgIdInput">orgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeouts">ApigeeKeystoresAliasesKeyCertFileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.cert">cert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.keystore">keystore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.orgId">orgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.password">password</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `certsInfo`<sup>Required</sup> <a name="certsInfo" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.certsInfo"></a>

```typescript
public readonly certsInfo: ApigeeKeystoresAliasesKeyCertFileCertsInfoList;
```

- *Type:* <a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList">ApigeeKeystoresAliasesKeyCertFileCertsInfoList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.timeouts"></a>

```typescript
public readonly timeouts: ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference">ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `certInput`<sup>Optional</sup> <a name="certInput" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.certInput"></a>

```typescript
public readonly certInput: string;
```

- *Type:* string

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.environmentInput"></a>

```typescript
public readonly environmentInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `keystoreInput`<sup>Optional</sup> <a name="keystoreInput" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.keystoreInput"></a>

```typescript
public readonly keystoreInput: string;
```

- *Type:* string

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.orgIdInput"></a>

```typescript
public readonly orgIdInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApigeeKeystoresAliasesKeyCertFileTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeouts">ApigeeKeystoresAliasesKeyCertFileTimeouts</a>

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.cert"></a>

```typescript
public readonly cert: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `keystore`<sup>Required</sup> <a name="keystore" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.keystore"></a>

```typescript
public readonly keystore: string;
```

- *Type:* string

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeKeystoresAliasesKeyCertFileCertsInfo <a name="ApigeeKeystoresAliasesKeyCertFileCertsInfo" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfo.Initializer"></a>

```typescript
import { apigeeKeystoresAliasesKeyCertFile } from '@cdktn/provider-google'

const apigeeKeystoresAliasesKeyCertFileCertsInfo: apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfo = { ... }
```


### ApigeeKeystoresAliasesKeyCertFileConfig <a name="ApigeeKeystoresAliasesKeyCertFileConfig" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.Initializer"></a>

```typescript
import { apigeeKeystoresAliasesKeyCertFile } from '@cdktn/provider-google'

const apigeeKeystoresAliasesKeyCertFileConfig: apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.alias">alias</a></code> | <code>string</code> | Alias Name. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.cert">cert</a></code> | <code>string</code> | Cert content. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.environment">environment</a></code> | <code>string</code> | Environment associated with the alias. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.keystore">keystore</a></code> | <code>string</code> | Keystore Name. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.orgId">orgId</a></code> | <code>string</code> | Organization ID associated with the alias. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.key">key</a></code> | <code>string</code> | Private Key content, omit if uploading to truststore. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.password">password</a></code> | <code>string</code> | Password for the Private Key if it's encrypted. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeouts">ApigeeKeystoresAliasesKeyCertFileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/apigee_keystores_aliases_key_cert_file#alias ApigeeKeystoresAliasesKeyCertFile#alias}

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.cert"></a>

```typescript
public readonly cert: string;
```

- *Type:* string

Cert content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/apigee_keystores_aliases_key_cert_file#cert ApigeeKeystoresAliasesKeyCertFile#cert}

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

Environment associated with the alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/apigee_keystores_aliases_key_cert_file#environment ApigeeKeystoresAliasesKeyCertFile#environment}

---

##### `keystore`<sup>Required</sup> <a name="keystore" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.keystore"></a>

```typescript
public readonly keystore: string;
```

- *Type:* string

Keystore Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/apigee_keystores_aliases_key_cert_file#keystore ApigeeKeystoresAliasesKeyCertFile#keystore}

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

Organization ID associated with the alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/apigee_keystores_aliases_key_cert_file#org_id ApigeeKeystoresAliasesKeyCertFile#org_id}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Private Key content, omit if uploading to truststore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/apigee_keystores_aliases_key_cert_file#key ApigeeKeystoresAliasesKeyCertFile#key}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Password for the Private Key if it's encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/apigee_keystores_aliases_key_cert_file#password ApigeeKeystoresAliasesKeyCertFile#password}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApigeeKeystoresAliasesKeyCertFileTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeouts">ApigeeKeystoresAliasesKeyCertFileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/apigee_keystores_aliases_key_cert_file#timeouts ApigeeKeystoresAliasesKeyCertFile#timeouts}

---

### ApigeeKeystoresAliasesKeyCertFileTimeouts <a name="ApigeeKeystoresAliasesKeyCertFileTimeouts" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeouts.Initializer"></a>

```typescript
import { apigeeKeystoresAliasesKeyCertFile } from '@cdktn/provider-google'

const apigeeKeystoresAliasesKeyCertFileTimeouts: apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeouts.property.read">read</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/apigee_keystores_aliases_key_cert_file#create ApigeeKeystoresAliasesKeyCertFile#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/apigee_keystores_aliases_key_cert_file#delete ApigeeKeystoresAliasesKeyCertFile#delete}

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/apigee_keystores_aliases_key_cert_file#read ApigeeKeystoresAliasesKeyCertFile#read}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/apigee_keystores_aliases_key_cert_file#update ApigeeKeystoresAliasesKeyCertFile#update}

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeKeystoresAliasesKeyCertFileCertsInfoList <a name="ApigeeKeystoresAliasesKeyCertFileCertsInfoList" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList.Initializer"></a>

```typescript
import { apigeeKeystoresAliasesKeyCertFile } from '@cdktn/provider-google'

new apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList.get"></a>

```typescript
public get(index: number): ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference <a name="ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.Initializer"></a>

```typescript
import { apigeeKeystoresAliasesKeyCertFile } from '@cdktn/provider-google'

new apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.basicConstraints">basicConstraints</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.expiryDate">expiryDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.isValid">isValid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.publicKey">publicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.serialNumber">serialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.sigAlgName">sigAlgName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.subject">subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.subjectAlternativeNames">subjectAlternativeNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.validFrom">validFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfo">ApigeeKeystoresAliasesKeyCertFileCertsInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `basicConstraints`<sup>Required</sup> <a name="basicConstraints" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.basicConstraints"></a>

```typescript
public readonly basicConstraints: string;
```

- *Type:* string

---

##### `expiryDate`<sup>Required</sup> <a name="expiryDate" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.expiryDate"></a>

```typescript
public readonly expiryDate: string;
```

- *Type:* string

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `isValid`<sup>Required</sup> <a name="isValid" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.isValid"></a>

```typescript
public readonly isValid: string;
```

- *Type:* string

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.publicKey"></a>

```typescript
public readonly publicKey: string;
```

- *Type:* string

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.serialNumber"></a>

```typescript
public readonly serialNumber: string;
```

- *Type:* string

---

##### `sigAlgName`<sup>Required</sup> <a name="sigAlgName" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.sigAlgName"></a>

```typescript
public readonly sigAlgName: string;
```

- *Type:* string

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

---

##### `subjectAlternativeNames`<sup>Required</sup> <a name="subjectAlternativeNames" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.subjectAlternativeNames"></a>

```typescript
public readonly subjectAlternativeNames: string[];
```

- *Type:* string[]

---

##### `validFrom`<sup>Required</sup> <a name="validFrom" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.validFrom"></a>

```typescript
public readonly validFrom: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApigeeKeystoresAliasesKeyCertFileCertsInfo;
```

- *Type:* <a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfo">ApigeeKeystoresAliasesKeyCertFileCertsInfo</a>

---


### ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference <a name="ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.Initializer"></a>

```typescript
import { apigeeKeystoresAliasesKeyCertFile } from '@cdktn/provider-google'

new apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeouts">ApigeeKeystoresAliasesKeyCertFileTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigeeKeystoresAliasesKeyCertFileTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeouts">ApigeeKeystoresAliasesKeyCertFileTimeouts</a>

---



