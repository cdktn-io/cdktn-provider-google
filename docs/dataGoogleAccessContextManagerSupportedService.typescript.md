# `dataGoogleAccessContextManagerSupportedService` Submodule <a name="`dataGoogleAccessContextManagerSupportedService` Submodule" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleAccessContextManagerSupportedService <a name="DataGoogleAccessContextManagerSupportedService" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/access_context_manager_supported_service google_access_context_manager_supported_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer"></a>

```typescript
import { dataGoogleAccessContextManagerSupportedService } from '@cdktn/provider-google'

new dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService(scope: Construct, id: string, config: DataGoogleAccessContextManagerSupportedServiceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig">DataGoogleAccessContextManagerSupportedServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig">DataGoogleAccessContextManagerSupportedServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleAccessContextManagerSupportedService resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.isConstruct"></a>

```typescript
import { dataGoogleAccessContextManagerSupportedService } from '@cdktn/provider-google'

dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.isTerraformElement"></a>

```typescript
import { dataGoogleAccessContextManagerSupportedService } from '@cdktn/provider-google'

dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.isTerraformDataSource"></a>

```typescript
import { dataGoogleAccessContextManagerSupportedService } from '@cdktn/provider-google'

dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.generateConfigForImport"></a>

```typescript
import { dataGoogleAccessContextManagerSupportedService } from '@cdktn/provider-google'

dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleAccessContextManagerSupportedService resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleAccessContextManagerSupportedService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleAccessContextManagerSupportedService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/access_context_manager_supported_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleAccessContextManagerSupportedService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.availableOnRestrictedVip">availableOnRestrictedVip</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.knownLimitations">knownLimitations</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.serviceSupportStage">serviceSupportStage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.supportedMethods">supportedMethods</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList">DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.supportStage">supportStage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.serviceNameInput">serviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `availableOnRestrictedVip`<sup>Required</sup> <a name="availableOnRestrictedVip" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.availableOnRestrictedVip"></a>

```typescript
public readonly availableOnRestrictedVip: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `knownLimitations`<sup>Required</sup> <a name="knownLimitations" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.knownLimitations"></a>

```typescript
public readonly knownLimitations: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `serviceSupportStage`<sup>Required</sup> <a name="serviceSupportStage" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.serviceSupportStage"></a>

```typescript
public readonly serviceSupportStage: string;
```

- *Type:* string

---

##### `supportedMethods`<sup>Required</sup> <a name="supportedMethods" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.supportedMethods"></a>

```typescript
public readonly supportedMethods: DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList">DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList</a>

---

##### `supportStage`<sup>Required</sup> <a name="supportStage" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.supportStage"></a>

```typescript
public readonly supportStage: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedService.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleAccessContextManagerSupportedServiceConfig <a name="DataGoogleAccessContextManagerSupportedServiceConfig" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.Initializer"></a>

```typescript
import { dataGoogleAccessContextManagerSupportedService } from '@cdktn/provider-google'

const dataGoogleAccessContextManagerSupportedServiceConfig: dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.serviceName">serviceName</a></code> | <code>string</code> | The name of the service to get information about. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/access_context_manager_supported_service#id DataGoogleAccessContextManagerSupportedService#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

The name of the service to get information about.

The names must be in the same format as used in defining a service perimeter, for example, `storage.googleapis.com`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/access_context_manager_supported_service#service_name DataGoogleAccessContextManagerSupportedService#service_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/access_context_manager_supported_service#id DataGoogleAccessContextManagerSupportedService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleAccessContextManagerSupportedServiceSupportedMethods <a name="DataGoogleAccessContextManagerSupportedServiceSupportedMethods" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethods"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethods.Initializer"></a>

```typescript
import { dataGoogleAccessContextManagerSupportedService } from '@cdktn/provider-google'

const dataGoogleAccessContextManagerSupportedServiceSupportedMethods: dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethods = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList <a name="DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.Initializer"></a>

```typescript
import { dataGoogleAccessContextManagerSupportedService } from '@cdktn/provider-google'

new dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.get"></a>

```typescript
public get(index: number): DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference <a name="DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.Initializer"></a>

```typescript
import { dataGoogleAccessContextManagerSupportedService } from '@cdktn/provider-google'

new dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethods">DataGoogleAccessContextManagerSupportedServiceSupportedMethods</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethodsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleAccessContextManagerSupportedServiceSupportedMethods;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAccessContextManagerSupportedService.DataGoogleAccessContextManagerSupportedServiceSupportedMethods">DataGoogleAccessContextManagerSupportedServiceSupportedMethods</a>

---



